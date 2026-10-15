import type { Metadata } from "next";
import EnglishAboutPage from "@/components/EnglishAboutPage";

export const metadata: Metadata = {
  title: "Finikz | AI, Culture & Strategy",
  description: "I work across Chinese, English and French, combining AI and marketing strategy with translation and cross-cultural content.",
  alternates: {
    canonical: "/en/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
  },
};

export default function EnglishHomePage() {
  return <EnglishAboutPage path="/" />;
}
