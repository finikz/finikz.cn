"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

type Summary = { slug: string; title: string; date: string };

const labels = {
  zh: { search: "搜索标题", results: (count: number) => `${count} 篇文章`, previous: "上一页", next: "下一页", pagination: "文章分页" },
  en: { search: "Search titles", results: (count: number) => `${count} article${count === 1 ? "" : "s"}`, previous: "Previous", next: "Next", pagination: "Article pagination" },
  fr: { search: "Rechercher dans les titres", results: (count: number) => `${count} article${count === 1 ? "" : "s"}`, previous: "Précédent", next: "Suivant", pagination: "Pagination des articles" },
} satisfies Record<Locale, { search: string; results: (count: number) => string; previous: string; next: string; pagination: string }>;

export default function ArticleIndex({ articles, locale = "zh" }: { articles: Summary[]; locale?: Locale }) {
  const copy = labels[locale];
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const visible = useMemo(() => articles.filter((article) =>
    article.title.toLocaleLowerCase(locale).includes(query.toLocaleLowerCase(locale)),
  ), [articles, query, locale]);
  const totalPages = Math.max(1, Math.ceil(visible.length / 10));
  const currentPage = Math.min(page, totalPages);
  const pagedArticles = visible.slice((currentPage - 1) * 10, currentPage * 10);

  return <>
    <div className="archive-tools">
      <label className="search"><span>⌕</span><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder={copy.search} aria-label={copy.search} /></label>
    </div>
    <p className="result-count">{copy.results(visible.length)}</p>
    <div className="archive-list">
      {pagedArticles.map((article) => <Link className="archive-item" href={localizedPath(locale, `/articles/${article.slug}/`)} key={article.slug}>
        <time dateTime={article.date || undefined}>{article.date || "—"}</time><h2>{article.title}</h2>
      </Link>)}
    </div>
    {totalPages > 1 && <nav className="archive-pagination" aria-label={copy.pagination}><button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>{copy.previous}</button><span>{currentPage} / {totalPages}</span><button disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>{copy.next}</button></nav>}
  </>;
}
