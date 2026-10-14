import { readFileSync } from "node:fs";
import path from "node:path";
import englishIndex from "@/content/articles-localized/en/index.json";
import frenchIndex from "@/content/articles-localized/fr/index.json";
import { articles, type Article } from "@/lib/articles";

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
