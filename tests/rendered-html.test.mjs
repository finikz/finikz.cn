import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const outputRoot = new URL("../out/", import.meta.url);
const outputPath = fileURLToPath(outputRoot);
const articles = JSON.parse(await readFile(new URL("../content/articles.json", import.meta.url), "utf8"));
const englishArticles = JSON.parse(await readFile(new URL("../content/articles-localized/en/index.json", import.meta.url), "utf8"));
const frenchArticles = JSON.parse(await readFile(new URL("../content/articles-localized/fr/index.json", import.meta.url), "utf8"));
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
  assert.match(html, /<title>Finikz｜AI Native 与营销战略<\/title>/i);
  assert.match(html, /AI, CULTURE &amp; STRATEGY/);
  assert.doesNotMatch(html, /AI, STRATEGY &amp; CULTURE/);
  assert.match(html, /WORKSTREAMS/);
  assert.match(html, /智神AI/);
  assert.match(html, /中山大学首届英文歌大赛冠军/);
  assert.ok(html.includes("我的译作"));
  assert.ok(html.includes("我的写作"));
  assert.ok(html.includes("MY WORKS"));
  assert.ok(html.includes("MY WRITING"));
  assert.equal(html.includes("我的译作 ↗"), false);
  for (const title of ["风土之诗", "麦芽之歌", "自由之水"]) assert.ok(html.includes(title));
  for (const article of articles.slice(0, 3)) {
    assert.ok(html.includes(article.title));
    assert.match(html, new RegExp(`href="/articles/${article.slug}/?"`));
  }
  assert.ok(html.indexOf("我的译作") < html.indexOf("欢迎合作"));
  assert.ok(html.indexOf("我的写作") < html.indexOf("欢迎合作"));
  assert.match(html, /href="\/en\/?"[^>]*>EN</);
  assert.match(html, /hrefLang="en" href="https:\/\/finikz\.cn\/en\/"/i);
  assert.match(html, /<link rel="alternate" type="application\/rss\+xml" href="https:\/\/finikz\.cn\/rss\.xml"\/>/i);
});

test("exports the English fixed pages and language navigation", async () => {
  const routes = ["en/index.html", "en/about/index.html", "en/projects/index.html", "en/works/index.html", "en/works/dionysus-trilogy/index.html"];
  for (const route of routes) await access(new URL(route, outputRoot));

  const html = await page("en/index.html");
  assert.match(html, /<title>Finikz \| AI-Native &amp; Marketing Strategy<\/title>/i);
  assert.match(html, /Workstreams &amp; Experience/i);
  assert.match(html, /AI-Native &amp; GEO/);
  assert.match(html, /MY WRITING/);
  assert.match(html, /class="about-writing-item" href="\/en\/articles\/[0-9a-f]{12}\/"/);
  assert.match(html, /href="\/"[^>]*>中文</);
  assert.match(html, /hrefLang="zh-CN" href="https:\/\/finikz\.cn\/"/i);
  assert.match(html, /href="\/en\/about\/?"[^>]*>About</);
  assert.match(html, /href="https:\/\/finikz\.cn\/en\/rss\.xml"/i);

  const worksHtml = await page("en/works/index.html");
  for (const title of ["Another History of Wine", "Beer in All Its Forms", "Rum: The Long Voyage", "Kandinsky: The Pioneer of Abstract Art", "The Voice of Things", "Women in Abstraction"]) assert.ok(worksHtml.includes(title));

});

test("exports the primary routes and an article page", async () => {
  for (const route of ["about/index.html", "articles/index.html", "projects/index.html", "works/index.html", "works/dionysus-trilogy/index.html"]) {
    await access(new URL(route, outputRoot));
  }

  for (const route of ["index.html", "articles/index.html", "works/index.html"]) {
    const html = await page(route);
    assert.match(html, /href="\/about\/?"[^>]*>关于</);
    assert.match(html, /href="mailto:mail@finikz\.com"[^>]*>联系方式</);
    assert.match(html, /href="\/rss\.xml"[^>]*>RSS 订阅</);
    assert.doesNotMatch(html, /隐私政策|服务条款/);
  }

  const firstArticle = articles[0];
  assert.ok(firstArticle?.slug, "articles.json should contain at least one article");
  const articleHtml = await page(`articles/${firstArticle.slug}/index.html`);
  assert.ok(articleHtml.includes(`<title>${firstArticle.title}｜Finikz 张凤鸣</title>`));
});

test("exports localized RSS feeds for all available articles", async () => {
  const feeds = [
    { path: "rss.xml", prefix: "", language: "zh-CN", articles },
    { path: "en/rss.xml", prefix: "/en", language: "en", articles: englishArticles },
    { path: "fr/rss.xml", prefix: "/fr", language: "fr", articles: frenchArticles },
  ];

  for (const feed of feeds) {
    const rss = await page(feed.path);
    assert.match(rss, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    assert.match(rss, new RegExp(`<language>${feed.language}<\\/language>`));
    assert.equal((rss.match(/<item>/g) || []).length, feed.articles.length);
    assert.ok(rss.includes(`<link>https://finikz.cn${feed.prefix}/articles/${feed.articles[0].slug}/</link>`));
  }
});

test("keeps policy-excluded articles out of the export", async () => {
  const exportedSlugs = new Set(articles.map((article) => article.slug));
  for (const slug of policyExcludedSlugs) {
    assert.equal(exportedSlugs.has(slug), false, `${slug} should remain excluded from articles.json`);
    await assert.rejects(access(new URL(`articles/${slug}/index.html`, outputRoot)));
  }
});

test("exports sitemap.xml with x-default hreflang and llms.txt", async () => {
  const sitemap = await page("sitemap.xml");
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(sitemap, /<loc>https:\/\/finikz\.cn\/<\/loc>/);
  assert.match(sitemap, /hreflang="x-default" href="https:\/\/finikz\.cn\/"/);
  assert.ok(sitemap.includes(`<loc>https://finikz.cn/articles/${articles[0].slug}/</loc>`));

  const llms = await page("llms.txt");
  assert.match(llms, /^# Finikz \(Zhang Fengming \/ 张凤鸣\)/);
  assert.ok(llms.includes("https://finikz.cn/sitemap.xml"));
  assert.ok(llms.includes(`https://finikz.cn/articles/${articles[0].slug}/`));
});

test("does not export raw Obsidian image embeds in any page", async () => {
  const files = await htmlFiles(outputPath);
  for (const file of files) {
    const html = await readFile(file, "utf8");
    assert.doesNotMatch(html, /!\[\[[^\]]+\]\]/, `Unparsed Obsidian embed found in ${path.relative(outputPath, file)}`);
  }
});

test("exports localized JSON-LD across core pages and articles", async () => {
  for (const route of [
    "index.html",
    "en/index.html",
    "fr/index.html",
    "works/index.html",
    "en/works/index.html",
    "fr/works/index.html",
    "works/dionysus-trilogy/index.html",
    "en/works/dionysus-trilogy/index.html",
    "fr/works/dionysus-trilogy/index.html",
    "articles/index.html",
    "en/articles/index.html",
    "fr/articles/index.html",
  ]) {
    const html = await page(route);
    assert.match(html, /<script type="application\/ld\+json">/, `Missing JSON-LD on ${route}`);
  }

  const enArticle = await page("en/articles/36865ed81c6b/index.html");
  assert.ok(enArticle.includes('"name":"Zhang Fengming"'));
  assert.ok(enArticle.includes("https://finikz.cn/articles/images/7c4a476798d351ca.png"));

  const enHome = await page("en/index.html");
  assert.ok(enHome.includes("WeChat Official Account"));
  assert.doesNotMatch(enHome, /Wechat Official Acount/);
  assert.ok(enHome.includes('href="https://finikz.com/en/"'));

  const frHome = await page("fr/index.html");
  assert.ok(frHome.includes("Compte officiel WeChat"));
  assert.ok(frHome.includes('href="https://finikz.com/fr/"'));
});

test("does not leave unparsed CJK bold markdown in article pages", async () => {
  const files = (await htmlFiles(outputPath)).filter((file) => file.includes(`${path.sep}articles${path.sep}`));
  for (const file of files) {
    const html = await readFile(file, "utf8");
    const body = html.match(/<article[\s\S]*?<\/article>/)?.[0] || "";
    assert.doesNotMatch(body, /\*\*[^<]{2,80}\*\*/, `Unparsed bold markdown found in ${path.relative(outputPath, file)}`);
  }
});

test("exports topic filters, cleaned titles, and zero WeChat hotlinks", async () => {
  const zhArchive = await page("articles/index.html");
  for (const label of ["全部", "AI 与商业", "电影与音乐", "法语与语言", "酒与文化"]) {
    assert.ok(zhArchive.includes(label), `Missing topic filter "${label}" on /articles/`);
  }
  assert.doesNotMatch(zhArchive, /\]\(http:\/\//);

  const enArchive = await page("en/articles/index.html");
  for (const label of ["All", "AI &amp; Strategy", "Film &amp; Music", "Language &amp; French", "Wine &amp; Culture"]) {
    assert.ok(enArchive.includes(label), `Missing topic filter "${label}" on /en/articles/`);
  }

  const frArchive = await page("fr/articles/index.html");
  for (const label of ["Tous", "IA &amp; Stratégie", "Cinéma &amp; Musique", "Langue &amp; Français", "Vin &amp; Culture"]) {
    assert.ok(frArchive.includes(label), `Missing topic filter "${label}" on /fr/articles/`);
  }

  const cleanedArticle = await page("articles/544c9f6fabd0/index.html");
  assert.ok(cleanedArticle.includes("<title>鲍勃·迪伦：《像一块滚石》｜Finikz 张凤鸣</title>"));

  const files = await htmlFiles(outputPath);
  for (const file of files) {
    const html = await readFile(file, "utf8");
    assert.doesNotMatch(html, /mmbiz\.qpic\.cn/, `WeChat hotlink image found in ${path.relative(outputPath, file)}`);
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
