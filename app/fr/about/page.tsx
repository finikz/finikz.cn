import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import FrenchAboutPage from "@/components/FrenchAboutPage";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/",
  title: "À propos de Zhang Fengming | Stratégie AI-native et marketing",
  description: "Zhang Fengming (Finikz) : conseil en stratégie AI-native et marketing, traduction et création de contenu interculturel.",
});

export default function FrenchAboutRoute() {
  return <FrenchAboutPage />;
}
