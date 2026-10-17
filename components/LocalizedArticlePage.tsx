import ArticleJsonLd from "@/components/ArticleJsonLd";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import type { Article } from "@/lib/articles";
import { localizedPath, type Locale } from "@/lib/i18n";

const copy = {
  en: { source: "View original publication ↗", previous: "Previous article", next: "Next article", nav: "Article navigation" },
  fr: { source: "Voir la publication d'origine ↗", previous: "Article précédent", next: "Article suivant", nav: "Navigation entre les articles" },
} as const;

export default function LocalizedArticlePage({ article, articles, locale }: { article: Article; articles: Article[]; locale: Exclude<Locale, "zh"> }) {
  const language = copy[locale];
  const chronologicalArticles = [...articles].sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title, locale));
  const articleIndex = chronologicalArticles.findIndex((item) => item.slug === article.slug);
  const previousArticle = chronologicalArticles[articleIndex - 1];
  const nextArticle = chronologicalArticles[articleIndex + 1];
  const articlePath = `/articles/${article.slug}/`;

  return (
    <main className={`article-page ${locale}-page`} lang={locale}>
      <ArticleJsonLd article={article} locale={locale} />
      <SiteNav active="notes" locale={locale} path={articlePath} />
      <article className="article-shell">
        <header className="article-header"><p className="eyebrow">{article.collection.toLocaleUpperCase(locale)}</p><h1>{article.title}</h1><time dateTime={article.date}>{article.date}</time>{article.sourceUrl && <a className="source-link" href={article.sourceUrl} target="_blank" rel="noreferrer">{language.source}</a>}</header>
        <div className="article-body"><ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown></div>
        <nav className="article-navigation" aria-label={language.nav}>
          {previousArticle ? <Link href={localizedPath(locale, `/articles/${previousArticle.slug}/`)}><span>{language.previous}</span><strong>{previousArticle.title}</strong></Link> : <span />}
          {nextArticle ? <Link href={localizedPath(locale, `/articles/${nextArticle.slug}/`)}><span>{language.next}</span><strong>{nextArticle.title}</strong></Link> : <span />}
        </nav>
      </article>
      <SiteFooter locale={locale} />
    </main>
  );
}
