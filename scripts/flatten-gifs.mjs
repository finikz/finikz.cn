import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const run = promisify(execFile);
const images = path.resolve("public/articles/images");
const content = path.resolve("content/articles.json");
const gifs = (await readdir(images)).filter((file) => file.endsWith(".gif"));
for (const gif of gifs) {
  const source = path.join(images, gif);
  const target = source.replace(/\.gif$/, ".jpg");
  await run("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "70", source, "--out", target]);
  await rm(source);
}
const articles = JSON.parse(await readFile(content, "utf8"));
for (const article of articles) article.body = article.body.replace(/(\/articles\/images\/[^/.]+)\.gif/g, "$1.jpg");
await writeFile(content, `${JSON.stringify(articles, null, 2)}\n`);
console.log(`Flattened ${gifs.length} animated GIFs into compact JPEGs.`);
