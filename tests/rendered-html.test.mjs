import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const outputRoot = new URL("../out/", import.meta.url);
const outputPath = fileURLToPath(outputRoot);
const articles = JSON.parse(await readFile(new URL("../content/articles.json", import.meta.url), "utf8"));
const policyExcludedSlugs = ["9ed80a386aac", "69e1a877334b", "6699bca3dc1f", "baa12239a63a", "d056fc10aa97", "1f75f10889c2"];

async function page(path) {
  return readFile(new URL(path, outputRoot), "utf8");
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(full) : entry.name.endsWith(".html") ? [full] : [];
  }));
  return nested.flat();
}

test("exports the deployed homepage metadata and content", async () => {
  const html = await page("index.html");
  assert.match(html, /<title>Finikz｜非你可思<\/title>/i);
  assert.match(html, /WORKSTREAMS/);
  assert.match(html, /智神AI/);
  assert.match(html, /<link rel="alternate" type="application\/rss\+xml" href="https:\/\/finikz\.cn\/rss\.xml"\/>/i);
});

test("exports the primary routes and an article page", async () => {
  for (const route of ["about/index.html", "articles/index.html", "privacy/index.html", "projects/index.html", "terms/index.html", "works/index.html", "works/dionysus-trilogy/index.html"]) {
    await access(new URL(route, outputRoot));
  }
  const privacyHtml = await page("privacy/index.html");
  assert.match(privacyHtml, /Google Analytics 4/);
  assert.match(privacyHtml, /Google AdSense/);

  for (const route of ["index.html", "articles/index.html", "works/index.html"]) {
    const html = await page(route);
    assert.match(html, /href="\/about\/?"[^>]*>关于</);
    assert.match(html, /href="mailto:mail@finikz\.com"[^>]*>联系方式</);
    assert.match(html, /href="\/privacy\/?"[^>]*>隐私政策</);
    assert.match(html, /href="\/terms\/?"[^>]*>服务条款</);
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

test("keeps policy-excluded articles out of the export", async () => {
  const exportedSlugs = new Set(articles.map((article) => article.slug));
  for (const slug of policyExcludedSlugs) {
    assert.equal(exportedSlugs.has(slug), false, `${slug} should remain excluded from articles.json`);
    await assert.rejects(access(new URL(`articles/${slug}/index.html`, outputRoot)));
  }
});

test("does not export broken internal links or resources", async () => {
  const files = await htmlFiles(outputPath);
  const checked = new Set();

  for (const file of files) {
    const html = await readFile(file, "utf8");
    for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
      const pathname = decodeURIComponent(match[1]);
      if (checked.has(pathname)) continue;
      checked.add(pathname);
      const relative = pathname === "/"
        ? "index.html"
        : pathname.endsWith("/")
          ? `${pathname.slice(1)}index.html`
          : path.extname(pathname)
            ? pathname.slice(1)
            : `${pathname.slice(1)}/index.html`;
      await assert.doesNotReject(access(new URL(relative, outputRoot)), `Missing exported target for ${pathname}`);
    }
  }
});
