"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ARTICLE_TOPICS,
  TOPIC_LABELS,
  type ArticleFilterTopic,
  type ArticleTopic,
} from "@/lib/article-topics";
import { localizedPath, type Locale } from "@/lib/i18n";

type Summary = { slug: string; title: string; date: string; topic: ArticleTopic };

const labels = {
  zh: { search: "搜索标题", filterGroup: "按主题筛选", results: (count: number) => `${count} 篇文章`, previous: "上一页", next: "下一页", pagination: "文章分页" },
  en: { search: "Search titles", filterGroup: "Filter by topic", results: (count: number) => `${count} article${count === 1 ? "" : "s"}`, previous: "Previous", next: "Next", pagination: "Article pagination" },
  fr: { search: "Rechercher dans les titres", filterGroup: "Filtrer par thème", results: (count: number) => `${count} article${count === 1 ? "" : "s"}`, previous: "Précédent", next: "Suivant", pagination: "Pagination des articles" },
} satisfies Record<Locale, { search: string; filterGroup: string; results: (count: number) => string; previous: string; next: string; pagination: string }>;

export default function ArticleIndex({ articles, locale = "zh" }: { articles: Summary[]; locale?: Locale }) {
  const copy = labels[locale];
  const topicLabels = TOPIC_LABELS[locale];
  const [topic, setTopic] = useState<ArticleFilterTopic>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const topicCounts = useMemo(() => {
    const counts: Record<ArticleFilterTopic, number> = {
      all: articles.length,
      ai: 0,
      "film-music": 0,
      language: 0,
      culture: 0,
    };
    for (const article of articles) {
      counts[article.topic] += 1;
    }
    return counts;
  }, [articles]);

  const visible = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(locale);
    return articles.filter((article) => {
      if (topic !== "all" && article.topic !== topic) return false;
      if (!normalizedQuery) return true;
      return article.title.toLocaleLowerCase(locale).includes(normalizedQuery);
    });
  }, [articles, topic, query, locale]);

  const totalPages = Math.max(1, Math.ceil(visible.length / 10));
  const currentPage = Math.min(page, totalPages);
  const pagedArticles = visible.slice((currentPage - 1) * 10, currentPage * 10);

  return <>
    <div className="archive-tools">
      <div className="filters" role="group" aria-label={copy.filterGroup}>
        {ARTICLE_TOPICS.map((item) => (
          <button
            key={item}
            type="button"
            className={topic === item ? "active" : undefined}
            aria-pressed={topic === item}
            onClick={() => { setTopic(item); setPage(1); }}
          >
            {topicLabels[item]} <span className="filter-count">{topicCounts[item]}</span>
          </button>
        ))}
      </div>
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
