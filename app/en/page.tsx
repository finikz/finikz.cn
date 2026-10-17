import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import EnglishAboutPage from "@/components/EnglishAboutPage";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Finikz | AI-Native & Marketing Strategy",
  description: "I work across Chinese, English and French, helping companies become AI-native and combining marketing strategy with translation and cross-cultural content.",
});

export default function EnglishHomePage() {
  return <EnglishAboutPage path="/" />;
}
