import type { Metadata } from "next";
import FrenchAboutPage from "@/components/FrenchAboutPage";

export const metadata: Metadata = {
  title: "À propos de Finikz | IA, culture et stratégie",
  description: "Zhang Fengming (Finikz) : conseil en stratégie IA et marketing, traduction et création de contenu interculturel.",
  alternates: {
    canonical: "/fr/about/",
    languages: { "zh-CN": "/about/", en: "/en/about/", fr: "/fr/about/" },
  },
};

export default function FrenchAboutRoute() {
  return <FrenchAboutPage />;
}
