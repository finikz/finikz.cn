"use client";

import { useMemo, useState } from "react";

type Summary = { slug: string; title: string; collection: string; date: string };

export default function ArticleIndex({ articles, collections }: { articles: Summary[]; collections: string[] }) {
  const [collection, setCollection] = useState("全部");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const visible = useMemo(() => articles.filter((article) =>
    (collection === "全部" || article.collection === collection) && article.title.toLowerCase().includes(query.toLowerCase()),
  ), [articles, collection, query]);
  const totalPages = Math.max(1, Math.ceil(visible.length / 10));
  const currentPage = Math.min(page, totalPages);
  const pagedArticles = visible.slice((currentPage - 1) * 10, currentPage * 10);

  return <>
    <div className="archive-tools">
      <div className="filters" aria-label="文章分类筛选">
        {["全部", ...collections].map((item) => <button className={item === collection ? "active" : ""} key={item} onClick={() => { setCollection(item); setPage(1); }}>{item}</button>)}
      </div>
      <label className="search"><span>⌕</span><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="搜索标题" aria-label="搜索文章标题" /></label>
    </div>
    <p className="result-count">{visible.length} 篇文章</p>
    <div className="archive-list">
      {pagedArticles.map((article) => <a className="archive-item" href={`/articles/${article.slug}`} key={article.slug}>
        <time>{article.date}</time><span className="archive-collection">{article.collection}</span><h2>{article.title}</h2>
      </a>)}
    </div>
    {totalPages > 1 && <nav className="archive-pagination" aria-label="文章分页"><button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>上一页</button><span>{currentPage} / {totalPages}</span><button disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>下一页</button></nav>}
  </>;
}
