import type { Metadata } from "next";
import FrenchAboutPage from "@/components/FrenchAboutPage";

export const metadata: Metadata = {
  title: "Finikz | IA, culture et stratégie",
  description: "Je travaille en chinois, en anglais et en français, à la croisée de la stratégie IA et marketing, de la traduction et du contenu interculturel.",
  alternates: {
    canonical: "/fr/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
  },
};

export default function FrenchHomePage() {
  return <FrenchAboutPage path="/" />;
}
