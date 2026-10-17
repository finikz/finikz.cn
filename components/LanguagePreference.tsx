"use client";

import Link from "next/link";
import { useEffect } from "react";
import { languageAlternates, localeFromPath, localeTags, localizedPath, type Locale } from "@/lib/i18n";

const storageKey = "finikz-language";
const localeLabels: Record<Locale, string> = { zh: "中文", en: "EN", fr: "FR" };

// Keeps <html lang> in step with the page; the language redirect itself runs inline in <head> (lib/language-redirect.ts).
export function LanguagePreference() {
  useEffect(() => {
    document.documentElement.lang = localeTags[localeFromPath(window.location.pathname)];
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
