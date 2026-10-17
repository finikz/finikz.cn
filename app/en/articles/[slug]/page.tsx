import type { Metadata } from "next";
import { articleExcerpt, pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import LocalizedArticlePage from "@/components/LocalizedArticlePage";
import { articleLocales, englishArticles } from "@/lib/localized-articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return englishArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = englishArticles.find((item) => item.slug === slug);
  return article ? pageMetadata({
    locale: "en",
    path: `/articles/${article.slug}/`,
    title: `${article.title} | Finikz`,
    description: articleExcerpt(article.body),
    locales: articleLocales(article.slug),
    type: "article",
    publishedTime: article.date || undefined,
  }) : {};
}

export default async function EnglishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = englishArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <LocalizedArticlePage article={article} articles={englishArticles} locale="en" />;
}
