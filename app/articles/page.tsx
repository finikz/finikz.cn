import ArticleIndex from "./ArticleIndex";
import { articles, collections } from "@/lib/articles";
import SiteNav from "@/components/SiteNav";

export const metadata = { title: "文章｜Finikz", description: "Finikz 的文章、译作与观察。" };

export default function ArticlesPage() {
  return <main className="archive-page">
    <SiteNav active="notes" />
    <header className="archive-hero"><p className="eyebrow"><span /> WRITING ARCHIVE · {articles.length}</p><h1>把看见的，<em>留下来。</em></h1><p>文化、技术、语言与工作现场的持续记录。</p></header>
    <section className="archive-content"><ArticleIndex articles={articles.map(({ body, sourceUrl, ...article }) => article)} collections={collections} /></section>
    <footer><p>© FINIKZ</p><p>AI · STRATEGY · CULTURE</p><a href="mailto:mail@finikz.com">MAIL@FINIKZ.COM ↗</a></footer>
  </main>;
}
