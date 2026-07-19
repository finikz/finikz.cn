import ArticleIndex from "./ArticleIndex";
import { articles, collections } from "@/lib/articles";

export const metadata = { title: "文章｜Finikz", description: "Finikz 的文章、译作与观察。" };

export default function ArticlesPage() {
  return <main className="archive-page">
    <nav className="nav" aria-label="主导航"><a className="brand" href="/">FINIKZ<small>张凤鸣 / PERSONAL STUDIO</small></a><div className="nav-links"><a href="/">首页</a><a href="/works">译作</a><a href="/projects">项目</a><a href="/articles">文章</a><a href="/about">关于</a></div></nav>
    <header className="archive-hero"><p className="eyebrow"><span /> WRITING ARCHIVE · 120</p><h1>把看见的，<em>留下来。</em></h1><p>文化、技术、语言与工作现场的持续记录。全部文章均从 Finikz Vault 同步。</p></header>
    <section className="archive-content"><ArticleIndex articles={articles.map(({ body, sourceUrl, ...article }) => article)} collections={collections} /></section>
    <footer><p>FINIKZ / 张凤鸣</p><p>持续接收新的信号。</p><a href="mailto:mail@finikz.com">MAIL@FINIKZ.COM ↗</a></footer>
  </main>;
}
