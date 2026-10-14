import type { Metadata } from "next";
import EnglishAboutPage from "@/components/EnglishAboutPage";

export const metadata: Metadata = {
  title: "Finikz | AI, Culture & Strategy",
  description: "Finikz is an AI and marketing strategy consultant, translator and cross-cultural content creator working across Chinese, English and French.",
  alternates: {
    canonical: "/en/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
  },
};

export default function EnglishHomePage() {
  return <EnglishAboutPage path="/" />;
}
