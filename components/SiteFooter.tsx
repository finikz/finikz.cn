import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale?: Locale;
};

const footerLabels: Record<Locale, { aria: string; about: string; contact: string; privacy: string; terms: string }> = {
  zh: { aria: "页脚导航", about: "关于", contact: "联系方式", privacy: "隐私政策", terms: "服务条款" },
  en: { aria: "Footer navigation", about: "About", contact: "Contact", privacy: "Privacy", terms: "Terms" },
  fr: { aria: "Navigation de pied de page", about: "À propos", contact: "Contact", privacy: "Confidentialité", terms: "Conditions" },
};

export default function SiteFooter({ locale = "zh" }: SiteFooterProps) {
  const labels = footerLabels[locale];

  return (
    <footer className="site-footer" lang={locale === "zh" ? "zh-CN" : locale}>
      <p>© FINIKZ</p>
      <nav aria-label={labels.aria}>
        <Link href={localizedPath(locale, "/about/")}>{labels.about}</Link>
        <a href="mailto:mail@finikz.com">{labels.contact}</a>
        <Link href={localizedPath(locale, "/privacy/")}>{labels.privacy}</Link>
        <Link href={localizedPath(locale, "/terms/")}>{labels.terms}</Link>
      </nav>
    </footer>
  );
}
