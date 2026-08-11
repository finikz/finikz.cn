import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);
const articles = JSON.parse(await readFile(new URL("../content/articles.json", import.meta.url), "utf8"));

async function page(path) {
  return readFile(new URL(path, outputRoot), "utf8");
}

test("exports the deployed homepage metadata and content", async () => {
  const html = await page("index.html");
  assert.match(html, /<title>Finikz｜非你可思<\/title>/i);
  assert.match(html, /WORKSTREAMS/);
  assert.match(html, /智神AI/);
  assert.match(html, /<link rel="alternate" type="application\/rss\+xml" href="https:\/\/finikz\.cn\/rss\.xml"\/>/i);
});

test("exports the primary routes and an article page", async () => {
  for (const route of ["about/index.html", "articles/index.html", "projects/index.html", "works/index.html", "works/dionysus-trilogy/index.html"]) {
    await access(new URL(route, outputRoot));
  }
  const firstArticle = articles[0];
  assert.ok(firstArticle?.slug, "articles.json should contain at least one article");
  const articleHtml = await page(`articles/${firstArticle.slug}/index.html`);
  assert.ok(articleHtml.includes(`<title>${firstArticle.title}｜Finikz</title>`));
});

test("exports an RSS feed containing every article", async () => {
  const rss = await page("rss.xml");
  assert.match(rss, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.equal((rss.match(/<item>/g) || []).length, articles.length);
  assert.ok(rss.includes(`<link>https://finikz.cn/articles/${articles[0].slug}/</link>`));
});
