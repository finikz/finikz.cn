import { articles } from "@/lib/articles";

export const dynamic = "force-static";

const siteUrl = "https://finikz.cn";

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

export function GET() {
  const sortedArticles = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, "zh-CN"));
  const items = sortedArticles
    .map((article) => {
      const link = `${siteUrl}/articles/${article.slug}/`;
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rssDate(article.date)}</pubDate>
      <category>${escapeXml(article.collection)}</category>
      <description>${escapeXml(excerpt(article.body))}</description>
    </item>`;
    })
    .join("\n");

  const latestDate = sortedArticles[0]?.date ? rssDate(sortedArticles[0].date) : new Date(0).toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Finikz｜非你可思</title>
    <link>${siteUrl}/articles/</link>
    <description>文化、技术、语言与工作现场的持续记录。</description>
    <language>zh-CN</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
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
