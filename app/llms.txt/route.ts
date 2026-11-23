import { articles } from "@/lib/articles";
import { englishArticles, frenchArticles } from "@/lib/localized-articles";
import { siteUrl } from "@/lib/seo";
import { englishWorks } from "@/lib/works";
import { workstreams } from "@/lib/workstreams";

export const dynamic = "force-static";

const RECENT_LIMIT = 15;

export function GET() {
  const englishBySlug = new Map(englishArticles.map((article) => [article.slug, article]));
  const recentArticles = articles.slice(0, RECENT_LIMIT);

  const lines: string[] = [
    "# Finikz (Zhang Fengming / 张凤鸣)",
    "",
    "> Serial entrepreneur, AI strategy advisor, and Chinese-English-French translator based in Guangzhou, China. Co-founder of Pallas AI (智神AI), helping companies rebuild workflows and organizations to become AI-native, and founder of Finikz Culture & Technology (非你可思), advising brands on AI search visibility (GEO) and cross-cultural marketing.",
    "",
    "## Core Pages",
    "",
    `- [Homepage (中文)](${siteUrl}/): Main profile, workstreams, selected translations, and recent writing.`,
    `- [Homepage (English)](${siteUrl}/en/): English overview of AI-native advisory, GEO, brand strategy, and translations.`,
    `- [Homepage (Français)](${siteUrl}/fr/): Présentation en français des activités AI-native, GEO, stratégie de marque et traductions.`,
    `- [Translated Works (中文)](${siteUrl}/works/) | [English](${siteUrl}/en/works/) | [Français](${siteUrl}/fr/works/): Complete bibliography of published book and museum catalogue translations.`,
    `- [The Dionysian Trilogy (酒神三部曲)](${siteUrl}/works/dionysus-trilogy/) | [English](${siteUrl}/en/works/dionysus-trilogy/) | [Français](${siteUrl}/fr/works/dionysus-trilogy/): Dedicated showcase for the wine, beer, and rum history trilogy.`,
    `- [Articles Archive (中文)](${siteUrl}/articles/) | [English](${siteUrl}/en/articles/) | [Français](${siteUrl}/fr/articles/): ${articles.length} essays on AI-native organizations, GEO, marketing, culture, and translation.`,
    `- [Projects](${siteUrl}/projects/) | [English](${siteUrl}/en/projects/) | [Français](${siteUrl}/fr/projects/): Selected projects and collaborations.`,
    `- [Company Website — Finikz Culture & Technology](https://finikz.com/en/): Corporate services for AI-native transformation and GEO.`,
    "",
    "## Workstreams & Services",
    "",
    ...workstreams.en.pillars.flatMap((pillar) => [
      `### ${pillar.title}`,
      `${pillar.services}`,
      ...pillar.points.map((point) => `- ${point}`),
      "",
    ]),
    "## Selected Translations",
    "",
    ...englishWorks.map(
      (work) =>
        `- ${work.englishTitle} (《${work.title}》, ${work.year}) — ${work.englishAuthor}; ${work.englishPublisher} ([Douban](${work.url}))`
    ),
    "",
    `## Recent Writing (Latest ${recentArticles.length} of ${articles.length})`,
    "",
    ...recentArticles.map((article) => {
      const en = englishBySlug.get(article.slug);
      const datePrefix = article.date ? `${article.date} — ` : "";
      const enLink = en ? ` | [EN: ${en.title}](${siteUrl}/en/articles/${article.slug}/)` : "";
      return `- ${datePrefix}[${article.title}](${siteUrl}/articles/${article.slug}/)${enLink}`;
    }),
    "",
    "## Feeds & Machine-Readable Endpoints",
    "",
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    `- [RSS Feed (中文)](${siteUrl}/rss.xml)`,
    `- [RSS Feed (English)](${siteUrl}/en/rss.xml)`,
    `- [RSS Feed (Français)](${siteUrl}/fr/rss.xml)`,
    `- Total indexed articles: ${articles.length} (ZH), ${englishArticles.length} (EN), ${frenchArticles.length} (FR)`,
    "",
    "## Contact",
    "",
    "- Email: mail@finikz.com",
    "- WeChat Official Account: 非你可思 (Finikz)",
    `- Website: ${siteUrl}/`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
