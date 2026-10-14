import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguagePreference";
import { localizedPath, type Locale } from "@/lib/i18n";

type SiteNavProps = {
  active?: "about" | "works" | "notes";
  home?: boolean;
  locale?: Locale;
  path?: string;
};

const navigationLabels: Record<Locale, { aria: string; works: string; articles: string }> = {
  zh: { aria: "主导航", works: "作品", articles: "文章" },
  en: { aria: "Main navigation", works: "Works", articles: "Articles" },
  fr: { aria: "Navigation principale", works: "Œuvres", articles: "Articles" },
};

export default function SiteNav({ active, home = false, locale = "zh", path }: SiteNavProps) {
  const basePath = locale === "zh" ? "" : `/${locale}`;
  const languagePath = path ?? (active === "works" ? "/works/" : active === "notes" ? "/articles/" : "/about/");
  const labels = navigationLabels[locale];

  return (
    <nav className="nav" aria-label={labels.aria} lang={locale === "zh" ? "zh-CN" : locale}>
      <Link className="brand" href={home ? "#top" : localizedPath(locale, "/")}>
        FINIKZ
        <span className="brand-subtitle">AI, CULTURE &amp; STRATEGY</span>
      </Link>
      <div className="nav-links">
        <Link className={active === "works" ? "active" : undefined} href={`${basePath}/works/`}>{labels.works}</Link>
        <Link className={active === "notes" ? "active" : undefined} href={localizedPath(locale, "/articles/")}>{labels.articles}</Link>
        <LanguageSwitch locale={locale} path={languagePath} />
      </div>
    </nav>
  );
}
