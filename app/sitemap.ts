import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { englishArticles, frenchArticles } from "@/lib/localized-articles";

export const dynamic = "force-static";

const siteUrl = "https://finikz.cn";
// /about/ is left out: it canonicalises to the homepage.
const pages = ["/", "/works/", "/works/dionysus-trilogy/", "/articles/", "/projects/", "/privacy/", "/terms/"];

const englishSlugs = new Set(englishArticles.map((article) => article.slug));
const frenchSlugs = new Set(frenchArticles.map((article) => article.slug));

function localizedEntries(path: string, prefixes: string[], lastModified?: string): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const prefix of prefixes) languages[prefix ? prefix.slice(1) : "zh-CN"] = `${siteUrl}${prefix}${path}`;
  const alternates = prefixes.length > 1 ? { languages } : undefined;
  return Object.values(languages).map((url) => ({ url, lastModified, alternates }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.flatMap((path) => localizedEntries(path, ["", "/en", "/fr"])),
    ...articles.flatMap((article) => {
      const prefixes = ["", ...(englishSlugs.has(article.slug) ? ["/en"] : []), ...(frenchSlugs.has(article.slug) ? ["/fr"] : [])];
      return localizedEntries(`/articles/${article.slug}/`, prefixes, article.date || undefined);
    }),
  ];
}
