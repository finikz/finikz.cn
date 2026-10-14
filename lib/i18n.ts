export const locales = ["zh", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const localeTags: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
  fr: "fr",
};

export function localizedPath(locale: Locale, path: string) {
  const cleanPath = `/${path.replace(/^\/+|\/+$/g, "")}`;
  const basePath = locale === "zh" ? "" : `/${locale}`;
  return cleanPath === "/" ? `${basePath}/` : `${basePath}${cleanPath}/`;
}

export function languageAlternates(path: string) {
  return {
    "zh-CN": localizedPath("zh", path),
    en: localizedPath("en", path),
    fr: localizedPath("fr", path),
  };
}

export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment === "en" || segment === "fr" ? segment : "zh";
}

export function pathWithoutLocale(pathname: string) {
  const locale = localeFromPath(pathname);
  const path = locale === "zh" ? pathname : pathname.replace(/^\/(en|fr)(?=\/|$)/, "");
  return path || "/";
}
