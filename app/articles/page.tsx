import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ArticleIndex from "./ArticleIndex";
import { articles } from "@/lib/articles";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/articles/",
  title: "文章：AI、营销与文化观察｜Finikz 张凤鸣",
  description: "张凤鸣（Finikz）关于 AI Native、营销战略、跨文化与翻译的文章与观察。",
});

export default function ArticlesPage() {
  return <main className="archive-page" lang="zh-CN">
    <SiteNav active="notes" path="/articles/" />
    <header className="archive-hero"><p className="eyebrow"><span /> WRITING ARCHIVE · {articles.length}</p><h1>把看见的，<em>留下来。</em></h1><p>文化、技术、语言与工作现场的持续记录。</p></header>
    <section className="archive-content"><ArticleIndex articles={articles.map(({ slug, title, date }) => ({ slug, title, date }))} locale="zh" /></section>
    <SiteFooter />
  </main>;
}
