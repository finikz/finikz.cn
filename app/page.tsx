import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PersonJsonLd } from "@/components/StructuredData";
import { AboutPageContent } from "./about/page";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/",
  title: "Finikz｜AI Native 与营销战略",
  description: "张凤鸣 Finikz：帮企业建立 AI Native 的战略顾问、跨文化内容创作者。",
});

export default function Home() {
  return (
    <>
      <PersonJsonLd locale="zh" />
      <AboutPageContent path="/" />
    </>
  );
}
