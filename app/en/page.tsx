import type { Metadata } from "next";
import EnglishAboutPage from "@/components/EnglishAboutPage";

export const metadata: Metadata = {
  title: "Finikz | AI, Culture & Strategy",
  description: "I work across Chinese, English and French as an AI and marketing strategy consultant, translator and cross-cultural content creator.",
  alternates: {
    canonical: "/en/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
  },
};

export default function EnglishHomePage() {
  return <EnglishAboutPage path="/" />;
}
