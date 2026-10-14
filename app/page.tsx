import type { Metadata } from "next";
import { AboutPageContent } from "./about/page";

export const metadata: Metadata = {
  title: "Finikz｜非你可思",
  description: "张凤鸣 Finikz：企业 AI 与营销战略顾问、跨文化内容创作者。",
  alternates: {
    canonical: "/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function Home() {
  return <AboutPageContent path="/" />;
}
