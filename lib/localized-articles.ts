import { readFileSync } from "node:fs";
import path from "node:path";
import englishIndex from "@/content/articles-localized/en/index.json";
import frenchIndex from "@/content/articles-localized/fr/index.json";
import { articles, type Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

type LocalizedMetadata = Pick<Article, "slug" | "title" | "collection">;

const sourceBySlug = new Map(articles.map((article) => [article.slug, article]));

function loadLocalizedArticles(locale: "en" | "fr", index: LocalizedMetadata[]): Article[] {
  return index.map((translation) => {
    const source = sourceBySlug.get(translation.slug);
    if (!source) throw new Error(`Missing source article for ${locale}:${translation.slug}`);

    const bodyPath = path.join(process.cwd(), "content", "articles-localized", locale, `${translation.slug}.md`);
    return {
      ...source,
      ...translation,
      body: readFileSync(bodyPath, "utf8").trim(),
    };
  });
}

export const englishArticles = loadLocalizedArticles("en", englishIndex);
export const frenchArticles = loadLocalizedArticles("fr", frenchIndex);

const englishSlugs = new Set(englishArticles.map((article) => article.slug));
const frenchSlugs = new Set(frenchArticles.map((article) => article.slug));

/** Language versions that exist for an article; every article has a Chinese original. */
export function articleLocales(slug: string): Locale[] {
  return ["zh", ...(englishSlugs.has(slug) ? ["en" as const] : []), ...(frenchSlugs.has(slug) ? ["fr" as const] : [])];
}
