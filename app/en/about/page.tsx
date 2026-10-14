import type { Metadata } from "next";
import EnglishAboutPage from "@/components/EnglishAboutPage";

export const metadata: Metadata = {
  title: "About Finikz | AI, Culture & Strategy",
  description: "About Zhang Fengming (Finikz): AI and marketing strategy consultant, translator and cross-cultural content creator.",
  alternates: {
    canonical: "/en/about/",
    languages: { "zh-CN": "/about/", en: "/en/about/", fr: "/fr/about/" },
  },
};

export default function EnglishAboutRoute() {
  return <EnglishAboutPage path="/about/" />;
}
