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
  assert.match(html, /<meta property="og:image" content="https:\/\/finikz\.cn\/og\.png"\/>/i);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
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

test("exports the referenced public assets", async () => {
  await access(new URL("og.png", outputRoot));
  await access(new URL("icon.png", outputRoot));
  await access(new URL("works/covers/kandinsky.jpg", outputRoot));
});
