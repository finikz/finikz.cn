import articleData from "@/content/articles.json";

export type Article = {
  slug: string;
  title: string;
  collection: string;
  date: string;
  sourceUrl: string | null;
  body: string;
};

export const articles = articleData as Article[];
export const collections = [...new Set(articles.map((article) => article.collection))];
