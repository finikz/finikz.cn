import type { Metadata } from "next";
import { AboutPageContent } from "./about/page";

export const metadata: Metadata = {
  title: "Finikz 非你可思｜AI Native 与营销战略顾问",
  description: "张凤鸣 Finikz：帮企业建立 AI Native 的战略顾问、跨文化内容创作者。",
  alternates: {
    canonical: "/",
    languages: { "zh-CN": "/", en: "/en/", fr: "/fr/" },
    types: { "application/rss+xml": "/rss.xml" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "张凤鸣",
  alternateName: "Finikz",
  url: "https://finikz.cn/",
  image: "https://finikz.cn/og.jpg",
  jobTitle: "AI Native 与营销战略顾问",
  description: "帮企业建立 AI Native 的战略顾问、跨文化内容创作者，以中英法三种语言工作。",
  alumniOf: { "@type": "CollegeOrUniversity", name: "中山大学" },
  worksFor: { "@type": "Organization", name: "深圳市非你可思文化科技有限公司", url: "https://finikz.com/" },
  knowsLanguage: ["zh-CN", "en", "fr"],
  sameAs: [
    "https://www.linkedin.com/in/finikz",
    "https://twitter.com/finikz",
    "https://instagram.com/finikz",
    "https://www.weibo.com/finikz",
    "https://www.douban.com/people/phoenixZ/",
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <AboutPageContent path="/" />
    </>
  );
}
