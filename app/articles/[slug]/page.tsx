import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from "@/lib/articles";

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
  return <main className="article-page">
    <nav className="nav" aria-label="主导航"><a className="brand" href="/">FINIKZ<small>张凤鸣 / PERSONAL STUDIO</small></a><div className="nav-links"><a href="/about">About</a><a href="/works">Works</a><a href="/articles">Notes</a></div></nav>
    <article className="article-shell">
      <header className="article-header"><p className="eyebrow"><span /> {article.collection.toUpperCase()}</p><h1>{article.title}</h1><time>{article.date}</time>{article.sourceUrl && <a className="source-link" href={article.sourceUrl} target="_blank" rel="noreferrer">查看原始发布 ↗</a>}</header>
      <div className="article-body"><ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown></div>
    </article>
    <footer><p>FINIKZ / 张凤鸣</p><p>写作归档</p><a href="/articles">返回文章库 ↗</a></footer>
  </main>;
}
