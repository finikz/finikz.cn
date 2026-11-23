import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";
import { localeTags, localizedPath } from "@/lib/i18n";
import { articleExcerpt, siteUrl } from "@/lib/seo";
import { personEntity } from "@/components/StructuredData";

function firstArticleImage(markdown: string): string {
  const match = markdown.match(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/);
  if (!match) return `${siteUrl}/og.jpg`;
  const src = match[1].trim();
  if (/^https?:\/\//i.test(src)) return src;
  return src.startsWith("/") ? `${siteUrl}${src}` : `${siteUrl}/og.jpg`;
}

export default function ArticleJsonLd({ article, locale }: { article: Article; locale: Locale }) {
  const url = `${siteUrl}${localizedPath(locale, `/articles/${article.slug}/`)}`;
  const author = personEntity(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: articleExcerpt(article.body),
    ...(article.date ? { datePublished: article.date } : {}),
    inLanguage: localeTags[locale],
    url,
    mainEntityOfPage: url,
    image: firstArticleImage(article.body),
    author,
    publisher: author,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
