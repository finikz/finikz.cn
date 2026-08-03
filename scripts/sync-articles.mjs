import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const source = process.env.FINIKZ_WRITINGS_DIR || "/Users/finikz/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finikz Vault/raw/10 Projects/12 Finikz Writings";
const rawMarker = `${path.sep}raw${path.sep}`;
const rawIndex = source.indexOf(rawMarker);
const vault = rawIndex >= 0 ? source.slice(0, rawIndex) : path.dirname(path.dirname(source));
const output = path.resolve("content/articles.json");
const assetOutput = path.resolve("public/articles/images");
const collections = { "111 非你可思公众号": "非你可思", "112 智神AI战略": "智神AI", "奇遇作品": "奇遇作品", "非法教学": "非法教学" };
const excludedArticleSlugs = new Set(["e4b76d5720b1", "f726d0cd197b", "32be52930e07"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : (entry.isFile() && entry.name.endsWith(".md") ? [full] : []);
  }));
  return files.flat();
}

function frontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const data = {};
  if (match) for (const line of match[1].split("\n")) {
    const pair = line.match(/^([\w-]+):\s*(.*)$/);
    if (pair) data[pair[1]] = pair[2].replace(/^['"]|['"]$/g, "");
  }
  return { data, body: raw.slice(match?.[0].length || 0) };
}

function articleDate(file, body) {
  const published = body.match(/发布时间：\s*(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (published) return `${published[1]}-${published[2].padStart(2, "0")}-${published[3].padStart(2, "0")}`;
  const stem = path.basename(file).match(/(?:^|\D)(20\d{6}|\d{6})/);
  if (!stem) return "2000-01-01";
  const digits = stem[1].length === 8 ? stem[1] : `20${stem[1]}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
}

function titleFrom(file, body) {
  const heading = body.match(/^#\s+(.+)$/m)?.[1];
  return heading || path.basename(file, ".md").replace(/^\d{6,8}[_\s-]*/, "").replace(/\s+\d+$/, "");
}

function normalizedTitle(title) {
  return title.replace(/^【[^】]+】\s*/, "").trim();
}

function cleanBody(body) {
  return body
    .replace(/^公众号名称：.*\n|^作者名称：.*\n|^发布时间：.*\n/gm, "")
    .replace(/\n---\n\n内容效果不满意？[\s\S]*$/m, "")
    .trim();
}

async function imagePath(reference, articleDir) {
  const clean = reference.split("|")[0].split("#")[0].trim();
  const choices = clean.startsWith("raw/") ? [path.join(vault, clean)] : [path.resolve(articleDir, clean), path.join(vault, clean)];
  for (const candidate of choices) try { if ((await stat(candidate)).isFile()) return candidate; } catch {}
  return null;
}

async function replaceEmbeds(body, articleDir) {
  const embeds = [...body.matchAll(/!\[\[([^\]]+)\]\]/g)];
  let result = body;
  for (const embed of embeds) {
    const original = embed[0];
    const sourcePath = await imagePath(embed[1], articleDir);
    if (!sourcePath) { result = result.replace(original, ""); continue; }
    const extension = path.extname(sourcePath).toLowerCase() || ".jpg";
    const filename = `${createHash("sha1").update(sourcePath).digest("hex").slice(0, 16)}${extension}`;
    await cp(sourcePath, path.join(assetOutput, filename));
    result = result.replace(original, `![配图](/articles/images/${filename})`);
  }
  return result;
}

await mkdir(assetOutput, { recursive: true });
let existingArticles = [];
try { existingArticles = JSON.parse(await readFile(output, "utf8")); } catch {}
const existingSlugs = new Set(existingArticles.map((article) => article.slug));
const existingTitles = new Set(existingArticles.map((article) => `${article.collection}\0${normalizedTitle(article.title)}`));
const files = await walk(source);
const newArticles = [];
for (const file of files) {
  const raw = await readFile(file, "utf8");
  const { data, body } = frontmatter(raw);
  const relative = path.relative(source, file);
  const collectionKey = relative.split(path.sep)[0];
  const clean = cleanBody(body);
  if (!clean) continue;
  const slug = createHash("sha1").update(relative).digest("hex").slice(0, 12);
  if (excludedArticleSlugs.has(slug)) continue;
  const title = titleFrom(file, clean);
  const collection = collections[collectionKey] || collectionKey;
  if (existingSlugs.has(slug) || existingTitles.has(`${collection}\0${normalizedTitle(title)}`)) continue;
  newArticles.push({
    slug,
    title,
    collection,
    date: articleDate(file, clean),
    sourceUrl: data.url || null,
    body: await replaceEmbeds(clean, path.dirname(file)),
  });
}
const articles = [...existingArticles, ...newArticles];
articles.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, "zh-CN"));
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(articles, null, 2)}\n`);
console.log(`Synced ${newArticles.length} new articles; ${articles.length} total.`);
