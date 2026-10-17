import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import EnglishAboutPage from "@/components/EnglishAboutPage";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "About Zhang Fengming | AI-Native & Marketing Strategy",
  description: "About Zhang Fengming (Finikz): AI-native and marketing strategy consultant, translator and cross-cultural content creator.",
});

export default function EnglishAboutRoute() {
  return <EnglishAboutPage path="/about/" />;
}
