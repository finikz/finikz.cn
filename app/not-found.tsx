import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "页面未找到｜Finikz",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="legal-page" lang="zh-CN">
      <SiteNav path="/" />
      <article className="legal-content">
        <header><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>这一页不存在</h1><p>链接可能已经失效，或者文章换了地址。This page could not be found.</p></header>
        <p><Link href="/">回到首页 ↗</Link>　<Link href="/articles/">看看全部文章 ↗</Link>　<Link href="/en/">English ↗</Link>　<Link href="/fr/">Français ↗</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
