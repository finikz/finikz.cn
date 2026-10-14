"use client";

import Link from "next/link";
import { useEffect } from "react";
import { languageAlternates, localeFromPath, localeTags, localizedPath, pathWithoutLocale, type Locale } from "@/lib/i18n";

const storageKey = "finikz-language";
const localeLabels: Record<Locale, string> = { zh: "ZH", en: "EN", fr: "FR" };

export function LanguagePreference() {
  useEffect(() => {
    const pathname = window.location.pathname;
    const locale = localeFromPath(pathname);
    document.documentElement.lang = localeTags[locale];

    if (pathname !== "/") return;

    try {
      const stored = window.localStorage.getItem(storageKey);
      const browserLanguage = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
      const preferred: Locale = stored === "zh" || stored === "en" || stored === "fr"
        ? stored
        : browserLanguage.startsWith("fr") ? "fr" : browserLanguage.startsWith("en") ? "en" : "zh";
      window.localStorage.setItem(storageKey, preferred);
      if (preferred !== "zh") {
        window.location.replace(`${localizedPath(preferred, "/")}${window.location.search}${window.location.hash}`);
      }
    } catch {
      // Keep the requested page when browser storage is unavailable.
    }
  }, []);

  return null;
}

export function LanguageSwitch({ path, locale }: { path: string; locale: Locale }) {
  return (
    <div className="language-switcher" role="group" aria-label={locale === "zh" ? "选择语言" : locale === "fr" ? "Choisir la langue" : "Choose a language"}>
      {Object.keys(languageAlternates(path)).map((targetLocale) => {
        const target = targetLocale === "zh-CN" ? "zh" : targetLocale as Locale;
        return (
          <Link
            aria-current={target === locale ? "page" : undefined}
            className={target === locale ? "language-switch active" : "language-switch"}
            href={localizedPath(target, path)}
            hrefLang={localeTags[target]}
            key={target}
            onClick={() => {
              try {
                window.localStorage.setItem(storageKey, target);
              } catch {
                // The link still works when browser storage is unavailable.
              }
            }}
          >
            {localeLabels[target]}
          </Link>
        );
      })}
    </div>
  );
}
