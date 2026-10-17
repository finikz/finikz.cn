import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";
import { localeTags, localizedPath } from "@/lib/i18n";
import { articleExcerpt, siteUrl } from "@/lib/seo";

export default function ArticleJsonLd({ article, locale }: { article: Article; locale: Locale }) {
  const url = `${siteUrl}${localizedPath(locale, `/articles/${article.slug}/`)}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: articleExcerpt(article.body),
    datePublished: article.date,
    inLanguage: localeTags[locale],
    url,
    mainEntityOfPage: url,
    image: `${siteUrl}/og.jpg`,
    author: { "@type": "Person", name: "张凤鸣", alternateName: "Finikz", url: `${siteUrl}/` },
    publisher: { "@type": "Person", name: "张凤鸣", alternateName: "Finikz", url: `${siteUrl}/` },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
