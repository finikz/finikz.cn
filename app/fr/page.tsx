import type { Metadata } from "next";
import FrenchAboutPage from "@/components/FrenchAboutPage";

export const metadata: Metadata = {
  title: "Finikz | IA, culture et stratégie",
  description: "Zhang Fengming (Finikz), consultant en stratégie IA et marketing, traducteur et créateur de contenu interculturel.",
  alternates: {
    canonical: "/fr/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
  },
};

export default function FrenchHomePage() {
  return <FrenchAboutPage path="/" />;
}
