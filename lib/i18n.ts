export const locales = ["it", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export type RouteKey =
  | "home"
  | "azienda"
  | "storia"
  | "creazioni"
  | "perRivenditori"
  | "catalogo"
  | "contatti"
  | "lavorazione"
  | "privacy"
  | "cookie";

export const localizedRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: {
    it: "/",
    en: "/en"
  },
  azienda: {
    it: "/azienda",
    en: "/en/company"
  },
  storia: {
    it: "/storia",
    en: "/en/history"
  },
  creazioni: {
    it: "/creazioni",
    en: "/en/creations"
  },
  perRivenditori: {
    it: "/per-rivenditori",
    en: "/en/retailers"
  },
  catalogo: {
    it: "/catalogo",
    en: "/en/catalog"
  },
  contatti: {
    it: "/contatti",
    en: "/en/contact"
  },
  lavorazione: {
    it: "/lavorazione",
    en: "/en/workmanship"
  },
  privacy: {
    it: "/privacy-policy",
    en: "/en/privacy-policy"
  },
  cookie: {
    it: "/cookie-policy",
    en: "/en/cookie-policy"
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : defaultLocale;
}

export function getRoutePath(routeKey: RouteKey, locale: Locale) {
  return localizedRoutes[routeKey][locale];
}

export function getRouteKeyFromPathname(pathname: string): RouteKey {
  const cleanPath = pathname.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";

  for (const [routeKey, paths] of Object.entries(localizedRoutes) as Array<
    [RouteKey, Record<Locale, string>]
  >) {
    if (Object.values(paths).some((path) => (path.replace(/\/$/, "") || "/") === cleanPath)) {
      return routeKey;
    }
  }

  return "home";
}

export function getAlternateLocalePath(pathname: string, targetLocale: Locale) {
  return getRoutePath(getRouteKeyFromPathname(pathname), targetLocale);
}

export function getLanguageAlternates(routeKey: RouteKey) {
  return {
    it: getRoutePath(routeKey, "it"),
    en: getRoutePath(routeKey, "en")
  };
}
