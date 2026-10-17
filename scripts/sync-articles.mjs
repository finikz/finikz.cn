import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const source = process.env.FINIKZ_WRITINGS_DIR || "/Users/finikz/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finikz Vault/raw/Projects/12 Finikz Writings";
const rawMarker = `${path.sep}raw${path.sep}`;
const rawIndex = source.indexOf(rawMarker);
const vault = rawIndex >= 0 ? source.slice(0, rawIndex) : path.dirname(path.dirname(source));
const output = path.resolve("content/articles.json");
const assetOutput = path.resolve("public/articles/images");
// 奇遇作品 and 非法教学 are archived into the 非你可思 column.
const collections = { "111 非你可思公众号": "非你可思", "112 智神AI战略": "智神AI", "奇遇作品": "非你可思", "非法教学": "非你可思" };
// When the same piece exists in several folders, keep the 非你可思 version.
const preferredFolder = "111 非你可思公众号";
// Files renamed in the vault keep their published URL (and translations) under the original slug.
const slugAliases = { "13fac068b487": "5dfa149b2921", "aaad013ef4fd": "80f9a6fbf456" };
const excludedArticleSlugs = new Set([
  "e4b76d5720b1",
  "f726d0cd197b",
  "32be52930e07",
  "9ed80a386aac",
  "69e1a877334b",
  "6699bca3dc1f",
  "baa12239a63a",
  "d056fc10aa97",
  "1f75f10889c2",
]);

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

// Original publication date: frontmatter `published`, then the WeChat "发布时间" line, then a yymmdd file prefix.
// Returns "" when the vault records no date.
function articleDate(file, data, body) {
  const frontmatterDate = (data.published || "").match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (frontmatterDate) return `${frontmatterDate[1]}-${frontmatterDate[2].padStart(2, "0")}-${frontmatterDate[3].padStart(2, "0")}`;
  const published = body.match(/发布时间：\s*(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (published) return `${published[1]}-${published[2].padStart(2, "0")}-${published[3].padStart(2, "0")}`;
  // WeChat bylines near the top, e.g. "_2016-03-02_", "原创 2015-12-03 张凤鸣".
  const byline = body.split("\n").slice(0, 12).join("\n").match(/^(?:原创\s*)?_?(\d{4})-(\d{2})-(\d{2})_?(?:\s|$)/m);
  if (byline) return `${byline[1]}-${byline[2]}-${byline[3]}`;
  const stem = path.basename(file).match(/(?:^|\D)(20\d{6}|\d{6})/);
  if (!stem) return "";
  const digits = stem[1].length === 8 ? stem[1] : `20${stem[1]}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
}

function titleFrom(file, body) {
  const heading = body.match(/^#\s+(.+)$/m)?.[1];
  const title = heading || path.basename(file, ".md").replace(/^\d{6,8}[_\s-]*/, "").replace(/\s+\d+$/, "");
  return title.replace(/^\d+\s*\/\s*\d+\s+/, "").replace(/-非法教学-基础法语学习-沪江节目单$/, "").trim().normalize("NFC");
}

function cleanBody(body) {
  return body
    .replace(/^公众号名称：.*\n|^作者名称：.*\n|^发布时间：.*\n/gm, "")
    .replace(/\n---\n\n内容效果不满意？[\s\S]*$/m, "")
    .trim();
}

// Obsidian resolves bare attachment names (e.g. ![[abc_MD5.png]]) anywhere in the vault, so we index the vault by file name.
let attachmentIndex;
async function attachmentsByName() {
  if (attachmentIndex) return attachmentIndex;
  attachmentIndex = new Map();
  async function index(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await index(full);
      else if (!attachmentIndex.has(entry.name.normalize("NFC"))) attachmentIndex.set(entry.name.normalize("NFC"), full);
    }
  }
  await index(vault);
  return attachmentIndex;
}

// iCloud may keep vault files as cloud-only placeholders; reading them directly can hang, so ask iCloud to download first.
const SF_DATALESS = 0x40000000;
const isDataless = (file) => Number(execFileSync("stat", ["-f", "%f", file], { encoding: "utf8" }).trim()) & SF_DATALESS;
async function ensureDownloaded(file) {
  if (!isDataless(file)) return true;
  try { execFileSync("brctl", ["download", file]); } catch { return false; }
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (!isDataless(file)) return true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return false;
}

async function imagePath(reference, articleDir) {
  const clean = reference.split("|")[0].split("#")[0].trim();
  const choices = clean.startsWith("raw/") ? [path.join(vault, clean)] : [path.resolve(articleDir, clean), path.join(vault, clean)];
  if (!clean.includes("/")) {
    const indexed = (await attachmentsByName()).get(clean.normalize("NFC"));
    if (indexed) choices.push(indexed);
  }
  for (const candidate of choices) try { if ((await stat(candidate)).isFile() && await ensureDownloaded(candidate)) return candidate; } catch {}
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
    const filename = `${createHash("sha1").update(path.relative(vault, sourcePath)).digest("hex").slice(0, 16)}${extension}`;
    await cp(sourcePath, path.join(assetOutput, filename));
    result = result.replace(original, `![配图](/articles/images/${filename})`);
  }
  return result;
}

async function removeMissingRootImages(body) {
  const images = [...body.matchAll(/!\[[^\]]*\]\((\/[^)\s]+)(?:\s+"[^"]*")?\)/g)];
  let result = body;
  for (const image of images) {
    const publicPath = path.resolve("public", decodeURIComponent(image[1].slice(1)));
    try {
      if ((await stat(publicPath)).isFile()) continue;
    } catch {}
    result = result.replace(image[0], "");
  }
  return result;
}

await rm(assetOutput, { recursive: true, force: true });
await mkdir(assetOutput, { recursive: true });
const files = await walk(source);
const articles = [];
for (const file of files) {
  const raw = await readFile(file, "utf8");
  const { data, body } = frontmatter(raw);
  const relative = path.relative(source, file);
  const collectionKey = relative.split(path.sep)[0];
  const clean = cleanBody(body);
  if (!clean) continue;
  const hashedSlug = createHash("sha1").update(relative).digest("hex").slice(0, 12);
  const slug = slugAliases[hashedSlug] || hashedSlug;
  if (excludedArticleSlugs.has(slug)) continue;
  const bodyWithEmbeds = await replaceEmbeds(clean, path.dirname(file));
  articles.push({
    slug,
    title: titleFrom(file, clean),
    collection: collections[collectionKey] || collectionKey,
    date: articleDate(file, data, body),
    folder: collectionKey,
    sourceUrl: data.url || null,
    body: await removeMissingRootImages(bodyWithEmbeds),
  });
}
const byTitle = new Map();
for (const article of articles) {
  const current = byTitle.get(article.title);
  const better = !current
    || (article.folder === preferredFolder && current.folder !== preferredFolder)
    || (article.folder === current.folder && article.body.length > current.body.length);
  if (better) byTitle.set(article.title, article);
}
const dropped = articles.filter((article) => byTitle.get(article.title) !== article);
if (dropped.length) console.log(`Dropped ${dropped.length} duplicate(s): ${dropped.map((article) => `${article.folder}/${article.title}`).join("; ")}`);
const uniqueArticles = [...byTitle.values()].map(({ folder, ...article }) => article);
// Undated pieces sort last.
uniqueArticles.sort((a, b) => (b.date || "0").localeCompare(a.date || "0") || a.title.localeCompare(b.title, "zh-CN"));
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(uniqueArticles, null, 2)}\n`);
console.log(`Synced ${uniqueArticles.length} articles and their referenced images.`);
