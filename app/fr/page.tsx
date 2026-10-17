import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import FrenchAboutPage from "@/components/FrenchAboutPage";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/",
  title: "Finikz | Stratégie AI-native et marketing",
  description: "Je travaille en chinois, en anglais et en français, j'aide les entreprises à devenir AI-native, à la croisée de la stratégie marketing, de la traduction et du contenu interculturel.",
});

export default function FrenchHomePage() {
  return <FrenchAboutPage path="/" />;
}
