import type { Metadata } from "next";
import { localeTags, localizedPath, locales as allLocales, type Locale } from "@/lib/i18n";

export const siteUrl = "https://finikz.cn";
const ogLocales: Record<Locale, string> = { zh: "zh_CN", en: "en_US", fr: "fr_FR" };
const ogImage = { url: "/og.jpg", width: 1200, height: 630, alt: "Finikz" };

type PageSeo = {
  locale: Locale;
  /** Locale-free path of the canonical page, e.g. "/works/". */
  path: string;
  title: string;
  description: string;
  /** Language versions that actually exist for this page. */
  locales?: readonly Locale[];
  type?: "website" | "article";
  publishedTime?: string;
};

// Builds title, description, canonical, hreflang and social cards from one place so they never drift apart.
export function pageMetadata({ locale, path, title, description, locales = allLocales, type = "website", publishedTime }: PageSeo): Metadata {
  const languages: Record<string, string> = {};
  for (const version of locales) languages[localeTags[version]] = localizedPath(version, path);
  if (locales.includes("zh")) languages["x-default"] = localizedPath("zh", path);
  const url = localizedPath(locale, path);

  return {
    title,
    description,
    alternates: { canonical: url, languages, types: { "application/rss+xml": "/rss.xml" } },
    openGraph: type === "article"
      ? { type, publishedTime, siteName: "Finikz 张凤鸣", locale: ogLocales[locale], url, title, description, images: [ogImage] }
      : { type, siteName: "Finikz 张凤鸣", locale: ogLocales[locale], url, title, description, images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export function articleExcerpt(markdown: string, length = 110) {
  const text = markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_>#~|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length).trim()}…` : text;
}
