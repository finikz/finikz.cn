import type { Metadata } from "next";
import LocalizedArticlesArchive from "@/components/LocalizedArticlesArchive";
import { languageAlternates } from "@/lib/i18n";
import { englishArticles } from "@/lib/localized-articles";

export const metadata: Metadata = {
  title: "Writing Archive | Finikz",
  description: "Notes on culture, technology, language and work.",
  alternates: { canonical: "/en/articles/", languages: languageAlternates("/articles/") },
};

export default function EnglishArticlesPage() {
  return <LocalizedArticlesArchive articles={englishArticles} locale="en" />;
}
