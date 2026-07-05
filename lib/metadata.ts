import type { Metadata } from "next";
import { getLanguageAlternates, getRoutePath, type Locale, type RouteKey } from "@/lib/i18n";
import { getSeoText } from "@/lib/translations";

export function getSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}

export function createPageMetadata(locale: Locale, routeKey: RouteKey): Metadata {
  const seo = getSeoText(locale, routeKey);
  const routePath = getRoutePath(routeKey, locale);
  const alternates = getLanguageAlternates(routeKey);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: routePath,
      languages: {
        "it-IT": alternates.it,
        "en-US": alternates.en,
        "x-default": alternates.it
      }
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: routePath,
      locale: locale === "it" ? "it_IT" : "en_US",
      alternateLocale: locale === "it" ? ["en_US"] : ["it_IT"]
    },
    twitter: {
      title: seo.title,
      description: seo.description
    }
  };
}
