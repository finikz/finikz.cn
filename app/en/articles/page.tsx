import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import LocalizedArticlesArchive from "@/components/LocalizedArticlesArchive";
import { englishArticles } from "@/lib/localized-articles";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/articles/",
  title: "Writing on AI, Marketing & Culture | Finikz",
  description: "Essays by Zhang Fengming (Finikz) on AI-native companies, marketing, culture and translation.",
});

export default function EnglishArticlesPage() {
  return <LocalizedArticlesArchive articles={englishArticles} locale="en" />;
}
