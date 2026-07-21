import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from "@/lib/articles";
import SiteNav from "@/components/SiteNav";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? { title: `${article.title}｜Finikz`, description: `${article.collection} · ${article.date}` } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const chronologicalArticles = [...articles].sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title, "zh-CN"));
  const articleIndex = chronologicalArticles.findIndex((item) => item.slug === article.slug);
  const previousArticle = chronologicalArticles[articleIndex - 1];
  const nextArticle = chronologicalArticles[articleIndex + 1];
  return <main className="article-page">
    <SiteNav active="notes" />
    <article className="article-shell">
      <header className="article-header"><p className="eyebrow"><span /> {article.collection.toUpperCase()}</p><h1>{article.title}</h1><time>{article.date}</time>{article.sourceUrl && <a className="source-link" href={article.sourceUrl} target="_blank" rel="noreferrer">查看原始发布 ↗</a>}</header>
      <div className="article-body"><ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown></div>
      <nav className="article-navigation" aria-label="文章导航">
        {previousArticle ? <a href={`/articles/${previousArticle.slug}`}><span>上一篇</span><strong>{previousArticle.title}</strong></a> : <span />}
        {nextArticle ? <a href={`/articles/${nextArticle.slug}`}><span>下一篇</span><strong>{nextArticle.title}</strong></a> : <span />}
      </nav>
    </article>
    <footer><p>FINIKZ / 张凤鸣</p><p>AI · STRATEGY · CULTURE</p><a href="/articles">返回文章库 ↗</a></footer>
  </main>;
}
