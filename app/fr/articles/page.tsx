import type { Metadata } from "next";
import LocalizedArticlesArchive from "@/components/LocalizedArticlesArchive";
import { languageAlternates } from "@/lib/i18n";
import { frenchArticles } from "@/lib/localized-articles";

export const metadata: Metadata = {
  title: "Archives d’écriture | Finikz",
  description: "Des notes sur la culture, la technologie, les langues et le travail.",
  alternates: { canonical: "/fr/articles/", languages: languageAlternates("/articles/") },
};

export default function FrenchArticlesPage() {
  return <LocalizedArticlesArchive articles={frenchArticles} locale="fr" />;
}
