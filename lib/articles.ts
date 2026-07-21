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

export const articles = (articleData as Article[]).filter((article) => !excludedArticleSlugs.has(article.slug));
export const collections = [...new Set(articles.map((article) => article.collection))];
