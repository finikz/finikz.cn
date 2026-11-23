import articleData from "@/content/articles.json";

export type Article = {
  slug: string;
  title: string;
  collection: string;
  date: string;
  sourceUrl: string | null;
  body: string;
};

const excludedArticleSlugs = new Set(["e4b76d5720b1", "f726d0cd197b", "32be52930e07"]);

function cleanArticleTitle(title: string): string {
  return title.replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, "$1").trim();
}

export const articles = (articleData as Article[])
  .filter((article) => !excludedArticleSlugs.has(article.slug))
  .map((article) => ({ ...article, title: cleanArticleTitle(article.title) }));
