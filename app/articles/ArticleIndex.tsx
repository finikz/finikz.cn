"use client";

import { useMemo, useState } from "react";

type Summary = { slug: string; title: string; collection: string; date: string };

export default function ArticleIndex({ articles, collections }: { articles: Summary[]; collections: string[] }) {
  const [collection, setCollection] = useState("全部");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => articles.filter((article) =>
    (collection === "全部" || article.collection === collection) && article.title.toLowerCase().includes(query.toLowerCase()),
  ), [articles, collection, query]);

  return <>
    <div className="archive-tools">
      <div className="filters" aria-label="文章分类筛选">
        {["全部", ...collections].map((item) => <button className={item === collection ? "active" : ""} key={item} onClick={() => setCollection(item)}>{item}</button>)}
      </div>
      <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索标题" aria-label="搜索文章标题" /></label>
    </div>
    <p className="result-count">{visible.length} 篇文章</p>
    <div className="archive-list">
      {visible.map((article) => <a className="archive-item" href={`/articles/${article.slug}`} key={article.slug}>
        <time>{article.date}</time><span className="archive-collection">{article.collection}</span><h2>{article.title}</h2><b>↗</b>
      </a>)}
    </div>
  </>;
}
