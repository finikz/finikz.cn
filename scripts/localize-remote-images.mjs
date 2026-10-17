// Downloads hotlink-protected remote images (WeChat, Douban, Weibo…) used in articles and
// rewrites the articles to serve local WebP copies. Runs after sync-articles.mjs.
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const outputDir = path.resolve("public/articles/remote");
const publicPrefix = "/articles/remote";
const articlesFile = path.resolve("content/articles.json");
const localizedDir = path.resolve("content/articles-localized");
const maxWidth = 1200;
const concurrency = 8;

const markdownImage = /!\[([^\]]*)\]\((\S+?)(\s+"[^"]*")?\)/g;
const htmlImage = /<img\b[^>]*?\bsrc="([^"]+)"[^>]*>/g;

const decode = (url) => url.replace(/&amp;/g, "&");

// Retired image hosts moved to new domains, which only serve images to their own sites.
function fetchTarget(url) {
  const douban = url.match(/^https?:\/\/img\d\.douban\.com\/lpic\/(s\d+\.\w+)$/);
  if (douban) return { url: `https://img1.doubanio.com/view/subject/l/public/${douban[1]}`, referer: "https://book.douban.com/" };
  const sina = url.match(/^https?:\/\/ws\d\.sinaimg\.cn\/(.+)$/);
  if (sina) return { url: `https://wx4.sinaimg.cn/${sina[1]}`, referer: "https://weibo.com/" };
  return { url, referer: undefined };
}
const isRemote = (url) => /^https?:\/\//i.test(url);
const isPlaceholder = (url) => url.startsWith("data:image/svg+xml");

function urlsIn(text) {
  return [...text.matchAll(markdownImage)].map((match) => match[2]).concat([...text.matchAll(htmlImage)].map((match) => match[1]));
}

function sniff(buffer) {
  if (buffer.subarray(0, 3).toString("ascii") === "GIF") return "gif";
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return "jpg";
  if (buffer.subarray(1, 4).toString("ascii") === "PNG") return "png";
  if (buffer.subarray(8, 12).toString("ascii") === "WEBP") return "webp";
  return null;
}

async function download(url, base) {
  const target = fetchTarget(decode(url));
  const response = await fetch(target.url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
      ...(target.referer ? { Referer: target.referer } : {}),
    },
    redirect: "follow",
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const type = sniff(buffer);
  if (!type) throw new Error("not an image");
  const temp = path.join(os.tmpdir(), `${base}.${type}`);
  await writeFile(temp, buffer);
  try {
    if (type === "gif") {
      // Keep animations: gif2webp preserves frames; malformed GIFs are kept as they are.
      try {
        execFileSync("gif2webp", ["-quiet", "-q", "80", "-mt", temp, "-o", path.join(outputDir, `${base}.webp`)], { stdio: "ignore" });
      } catch {
        await writeFile(path.join(outputDir, `${base}.gif`), buffer);
        return `${publicPrefix}/${base}.gif`;
      }
    } else {
      const width = Number(execFileSync("sips", ["-g", "pixelWidth", temp], { encoding: "utf8" }).match(/pixelWidth: (\d+)/)?.[1] || 0);
      const resize = width > maxWidth ? ["-resize", String(maxWidth), "0"] : [];
      execFileSync("cwebp", ["-quiet", "-q", "80", "-m", "6", ...resize, temp, "-o", path.join(outputDir, `${base}.webp`)]);
    }
  } finally {
    await rm(temp, { force: true });
  }
  return `${publicPrefix}/${base}.webp`;
}

async function run() {
  await mkdir(outputDir, { recursive: true });
  const articles = JSON.parse(await readFile(articlesFile, "utf8"));
  const localizedFiles = [];
  for (const locale of await readdir(localizedDir)) {
    const dir = path.join(localizedDir, locale);
    if (!(await stat(dir)).isDirectory()) continue;
    for (const name of await readdir(dir)) if (name.endsWith(".md")) localizedFiles.push(path.join(dir, name));
  }
  const localizedTexts = await Promise.all(localizedFiles.map((file) => readFile(file, "utf8")));

  const remote = [...new Set([...articles.map((article) => article.body), ...localizedTexts].flatMap(urlsIn).filter(isRemote))];
  const mapping = new Map();
  const failures = [];
  let downloaded = 0;
  let queue = 0;
  async function worker() {
    while (queue < remote.length) {
      const url = remote[queue++];
      const base = createHash("sha1").update(decode(url)).digest("hex").slice(0, 16);
      const existing = [".webp", ".gif"].find((extension) => existsSync(path.join(outputDir, `${base}${extension}`)));
      if (existing) { mapping.set(url, `${publicPrefix}/${base}${existing}`); continue; }
      try {
        mapping.set(url, await download(url, base));
        downloaded += 1;
      } catch (error) {
        failures.push(`${url.slice(0, 90)} (${error.message})`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));

  const rewrite = (text) => text
    .replace(markdownImage, (whole, alt, url, title = "") => isPlaceholder(url) ? "" : mapping.has(url) ? `![${alt}](${mapping.get(url)}${title})` : whole)
    .replace(htmlImage, (whole, url) => isPlaceholder(url) ? "" : mapping.has(url) ? whole.replace(url, mapping.get(url)) : whole);

  for (const article of articles) article.body = rewrite(article.body);
  await writeFile(articlesFile, `${JSON.stringify(articles, null, 2)}\n`);
  await Promise.all(localizedFiles.map((file, index) => {
    const next = rewrite(localizedTexts[index]);
    return next === localizedTexts[index] ? null : writeFile(file, next);
  }));

  console.log(`Remote images: ${remote.length} referenced, ${downloaded} downloaded, ${mapping.size} localized, ${failures.length} failed.`);
  for (const failure of failures) console.log(`  failed: ${failure}`);
}

await run();
