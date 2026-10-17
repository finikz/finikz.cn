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
  // Same order as the Chinese archive: newest first, undated pieces last.
  const sorted = [...articles].sort((a, b) => (b.date || "0").localeCompare(a.date || "0"));

  return (
    <main className={`archive-page ${locale}-page`} lang={locale}>
      <SiteNav active="notes" locale={locale} path="/articles/" />
      <header className="archive-hero"><p className="eyebrow">{language.eyebrow} · {articles.length}</p><h1>{language.title}</h1><p>{language.description}</p></header>
      <section className="archive-content"><ArticleIndex articles={sorted.map(({ slug, title, date }) => ({ slug, title, date }))} locale={locale} /></section>
      <SiteFooter locale={locale} />
    </main>
  );
}
