import type { Article } from "@/lib/articles";
import { localeTags, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

const feedCopy: Record<Locale, { title: string; description: string }> = {
  zh: { title: "Finikz｜非你可思", description: "文化、技术、语言与工作现场的持续记录。" },
  en: { title: "Finikz | Zhang Fengming", description: "Notes on culture, technology, language, and the work in between." },
  fr: { title: "Finikz | Zhang Fengming", description: "Notes sur la culture, la technologie, les langues et le travail au quotidien." },
};

function escapeXml(value: string) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function excerpt(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_>#~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 280);
}

function rssDate(date: string) {
  return new Date(`${date}T00:00:00+08:00`).toUTCString();
}

export function createRssResponse(locale: Locale, articles: Article[]) {
  const sortedArticles = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, localeTags[locale]));
  const prefix = locale === "zh" ? "" : `/${locale}`;
  const feedUrl = `${siteUrl}${prefix}/rss.xml`;
  const channelUrl = `${siteUrl}${prefix}/articles/`;
  const items = sortedArticles
    .map((article) => {
      const link = `${channelUrl}${article.slug}/`;
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
${article.date ? `      <pubDate>${rssDate(article.date)}</pubDate>` : ""}
      <category>${escapeXml(article.collection)}</category>
      <description>${escapeXml(excerpt(article.body))}</description>
    </item>`;
    })
    .join("\n");

  const latestDate = sortedArticles[0]?.date ? rssDate(sortedArticles[0].date) : new Date(0).toUTCString();
  const { title, description } = feedCopy[locale];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${channelUrl}</link>
    <description>${escapeXml(description)}</description>
    <language>${localeTags[locale]}</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
