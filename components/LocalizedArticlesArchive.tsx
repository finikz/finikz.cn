import ArticleIndex from "@/app/articles/ArticleIndex";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "WRITING ARCHIVE",
    title: <>Keep a record<br /><em>of what you notice.</em></>,
    description: "Notes from the worlds of culture, technology, language and work.",
  },
  fr: {
    eyebrow: "ARCHIVES D'ÉCRITURE",
    title: <>Garder une trace<br /><em>de ce qui nous marque.</em></>,
    description: "Des notes sur la culture, la technologie, les langues et le travail.",
  },
} as const;

export default function LocalizedArticlesArchive({ articles, locale }: { articles: Article[]; locale: Exclude<Locale, "zh"> }) {
  const language = copy[locale];
  const collections = [...new Set(articles.map((article) => article.collection))];

  return (
    <main className={`archive-page ${locale}-page`} lang={locale}>
      <SiteNav active="notes" locale={locale} path="/articles/" />
      <header className="archive-hero"><p className="eyebrow">{language.eyebrow} · {articles.length}</p><h1>{language.title}</h1><p>{language.description}</p></header>
      <section className="archive-content"><ArticleIndex articles={articles.map(({ slug, title, collection, date }) => ({ slug, title, collection, date }))} collections={collections} locale={locale} /></section>
      <SiteFooter locale={locale} />
    </main>
  );
}
