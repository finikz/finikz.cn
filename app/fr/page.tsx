import type { Metadata } from "next";
import FrenchAboutPage from "@/components/FrenchAboutPage";

export const metadata: Metadata = {
  title: "Finikz | IA, culture et stratégie",
  description: "Je travaille en chinois, en anglais et en français comme consultant en stratégie IA et marketing, traducteur et créateur de contenu interculturel.",
  alternates: {
    canonical: "/fr/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
  },
};

export default function FrenchHomePage() {
  return <FrenchAboutPage path="/" />;
}
