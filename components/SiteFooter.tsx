import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale?: Locale;
};

const footerLabels: Record<Locale, { aria: string; about: string; contact: string; rss: string }> = {
  zh: { aria: "页脚导航", about: "关于", contact: "联系方式", rss: "RSS 订阅" },
  en: { aria: "Footer navigation", about: "About", contact: "Contact", rss: "RSS" },
  fr: { aria: "Navigation de pied de page", about: "À propos", contact: "Contact", rss: "Flux RSS" },
};

export default function SiteFooter({ locale = "zh" }: SiteFooterProps) {
  const labels = footerLabels[locale];

  return (
    <footer className="site-footer" lang={locale === "zh" ? "zh-CN" : locale}>
      <p>© FINIKZ</p>
      <nav aria-label={labels.aria}>
        <Link href={localizedPath(locale, "/about/")}>{labels.about}</Link>
        <a href="mailto:mail@finikz.com">{labels.contact}</a>
        <a href={locale === "zh" ? "/rss.xml" : `/${locale}/rss.xml`}>{labels.rss}</a>
      </nav>
    </footer>
  );
}
