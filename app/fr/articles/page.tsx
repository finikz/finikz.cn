import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import LocalizedArticlesArchive from "@/components/LocalizedArticlesArchive";
import { frenchArticles } from "@/lib/localized-articles";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/articles/",
  title: "Écrits sur l’IA, le marketing et la culture | Finikz",
  description: "Les textes de Zhang Fengming (Finikz) sur l’entreprise AI-native, le marketing, la culture et la traduction.",
});

export default function FrenchArticlesPage() {
  return <LocalizedArticlesArchive articles={frenchArticles} locale="fr" />;
}
