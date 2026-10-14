import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedArticlePage from "@/components/LocalizedArticlePage";
import { languageAlternates, localizedPath } from "@/lib/i18n";
import { frenchArticles } from "@/lib/localized-articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return frenchArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = frenchArticles.find((item) => item.slug === slug);
  return article ? {
    title: `${article.title} | Finikz`,
    description: `${article.collection} · ${article.date}`,
    alternates: {
      canonical: localizedPath("fr", `/articles/${article.slug}/`),
      languages: languageAlternates(`/articles/${article.slug}/`),
    },
  } : {};
}

export default async function FrenchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = frenchArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <LocalizedArticlePage article={article} articles={frenchArticles} locale="fr" />;
}
