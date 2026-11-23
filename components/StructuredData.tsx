import type { Article } from "@/lib/articles";
import { localeTags, localizedPath, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";
import { englishWorks, frenchWorks, works } from "@/lib/works";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const sameAsProfiles = [
  "https://www.linkedin.com/in/finikz",
  "https://twitter.com/finikz",
  "https://instagram.com/finikz",
  "https://www.weibo.com/finikz",
  "https://www.douban.com/people/phoenixZ/",
];

const personCopy: Record<
  Locale,
  {
    name: string;
    jobTitle: string;
    description: string;
    alumniOf: string;
    orgName: string;
    orgUrl: string;
  }
> = {
  zh: {
    name: "张凤鸣",
    jobTitle: "AI Native 与营销战略顾问",
    description: "帮企业建立 AI Native 的战略顾问、跨文化内容创作者，以中英法三种语言工作。",
    alumniOf: "中山大学",
    orgName: "深圳市非你可思文化科技有限公司",
    orgUrl: "https://finikz.com/",
  },
  en: {
    name: "Zhang Fengming",
    jobTitle: "AI-Native & Marketing Strategy Consultant",
    description:
      "AI-native and marketing strategy consultant and Chinese-English-French translator helping companies rebuild work around AI and improve AI search visibility (GEO).",
    alumniOf: "Sun Yat-sen University",
    orgName: "Finikz Culture & Technology",
    orgUrl: "https://finikz.com/en/",
  },
  fr: {
    name: "Zhang Fengming",
    jobTitle: "Consultant en stratégie AI-native et marketing",
    description:
      "Consultant en stratégie AI-native et marketing, traducteur chinois-anglais-français, accompagnant les entreprises dans leur transformation AI-native et leur visibilité GEO.",
    alumniOf: "Université Sun Yat-sen",
    orgName: "Finikz Culture & Technology",
    orgUrl: "https://finikz.com/fr/",
  },
};

export function personEntity(locale: Locale) {
  const copy = personCopy[locale];
  return {
    "@type": "Person",
    name: copy.name,
    alternateName: "Finikz",
    url: `${siteUrl}${localizedPath(locale, "/")}`,
  };
}

export function PersonJsonLd({ locale }: { locale: Locale }) {
  const copy = personCopy[locale];
  const url = `${siteUrl}${localizedPath(locale, "/")}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    inLanguage: localeTags[locale],
    mainEntity: {
      "@type": "Person",
      name: copy.name,
      alternateName: "Finikz",
      url,
      image: `${siteUrl}/og.jpg`,
      jobTitle: copy.jobTitle,
      description: copy.description,
      alumniOf: { "@type": "CollegeOrUniversity", name: copy.alumniOf },
      worksFor: { "@type": "Organization", name: copy.orgName, url: copy.orgUrl },
      knowsLanguage: ["zh-CN", "en", "fr"],
      sameAs: sameAsProfiles,
    },
  };
  return <JsonLdScript data={data} />;
}

export function WorksJsonLd({ locale, trilogyOnly = false }: { locale: Locale; trilogyOnly?: boolean }) {
  const path = trilogyOnly ? "/works/dionysus-trilogy/" : "/works/";
  const url = `${siteUrl}${localizedPath(locale, path)}`;
  const translator = personEntity(locale);

  const items =
    locale === "zh"
      ? works
          .filter((work) => !trilogyOnly || work.group === "酒神三部曲")
          .map((work) => ({
            "@type": "Book",
            name: work.subtitle ? `${work.title}：${work.subtitle}` : work.title,
            author: { "@type": "Person", name: work.author },
            translator,
            publisher: { "@type": "Organization", name: work.publisher },
            datePublished: work.year,
            inLanguage: "zh-CN",
            image: `${siteUrl}${work.cover}`,
            sameAs: work.url,
          }))
      : locale === "en"
        ? englishWorks
            .filter((work) => !trilogyOnly || work.englishGroup === "The Dionysian Trilogy")
            .map((work) => ({
              "@type": "Book",
              name: work.englishTitle,
              alternateName: work.originalTitle || work.title,
              author: { "@type": "Person", name: work.englishAuthor },
              translator,
              publisher: { "@type": "Organization", name: work.englishPublisher },
              datePublished: work.year,
              inLanguage: "zh-CN",
              image: `${siteUrl}${work.cover}`,
              sameAs: work.url,
            }))
        : frenchWorks
            .filter((work) => !trilogyOnly || work.frenchGroup === "La trilogie dionysiaque")
            .map((work) => ({
              "@type": "Book",
              name: work.frenchTitle,
              alternateName: work.title,
              author: { "@type": "Person", name: work.frenchAuthor },
              translator,
              publisher: { "@type": "Organization", name: work.frenchPublisher },
              datePublished: work.year,
              inLanguage: "zh-CN",
              image: `${siteUrl}${work.cover}`,
              sameAs: work.url,
            }));

  const names: Record<Locale, { all: string; trilogy: string }> = {
    zh: { all: "张凤鸣（Finikz）翻译作品", trilogy: "酒神三部曲" },
    en: { all: "Translation Works by Finikz", trilogy: "The Dionysian Trilogy" },
    fr: { all: "Œuvres traduites par Finikz", trilogy: "La trilogie dionysiaque" },
  };

  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: trilogyOnly ? names[locale].trilogy : names[locale].all,
    url,
    inLanguage: localeTags[locale],
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item,
      })),
    },
  };
  return <JsonLdScript data={data} />;
}

export function ArticlesCollectionJsonLd({ locale, articles }: { locale: Locale; articles: Article[] }) {
  const url = `${siteUrl}${localizedPath(locale, "/articles/")}`;
  const titles: Record<Locale, string> = {
    zh: "文章：AI、营销与文化观察｜Finikz 张凤鸣",
    en: "Writing on AI, Marketing & Culture | Finikz",
    fr: "Écrits sur l’IA, le marketing et la culture | Finikz",
  };
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: titles[locale],
    url,
    inLanguage: localeTags[locale],
    author: personEntity(locale),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.slice(0, 20).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${localizedPath(locale, `/articles/${article.slug}/`)}`,
        name: article.title,
      })),
    },
  };
  return <JsonLdScript data={data} />;
}
