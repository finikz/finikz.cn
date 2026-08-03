import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const images = path.resolve("public/articles/images");
const content = path.resolve("content/articles.json");
const files = await readdir(images);
const webpBases = new Set(files.filter((file) => file.endsWith(".webp")).map((file) => path.basename(file, ".webp")));
const articles = JSON.parse(await readFile(content, "utf8"));

for (const article of articles) article.body = article.body.replace(/(\/articles\/images\/[^/.]+)\.(?:jpe?g|png)/g, (match, base) => webpBases.has(path.basename(base)) ? `${base}.webp` : match);
await writeFile(content, `${JSON.stringify(articles, null, 2)}\n`);

for (const file of files) {
  const base = path.basename(file, path.extname(file));
  if (path.extname(file) !== ".webp" && webpBases.has(base)) await rm(path.join(images, file));
}
console.log(`Updated article references to ${webpBases.size} WebP images.`);
