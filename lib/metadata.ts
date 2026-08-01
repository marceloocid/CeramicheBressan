import type { Metadata } from "next";
import { getLanguageAlternates, getRoutePath, type Locale, type RouteKey } from "@/lib/i18n";
import { getSeoText } from "@/lib/translations";

export const siteName = "Ceramiche Artistiche Bressan C2";
export const socialImagePath = "/images/home-laboratorio-bressan.webp";
export const socialImageAlt: Record<Locale, string> = {
  it: "Laboratorio Bressan C2 con ceramiche artistiche dipinte a mano",
  en: "Bressan C2 workshop with hand-painted artistic ceramics"
};

const routeSocialImages: Partial<
  Record<RouteKey, { path: string; alt: Record<Locale, string>; width: number; height: number }>
> = {
  storia: {
    path: "/images/storia/bruno-bressan-laboratorio-dittico.webp",
    alt: {
      it: "Due fotografie storiche di Bruno Bressan al lavoro nel laboratorio di ceramica",
      en: "Two historical photographs of Bruno Bressan at work in the ceramics workshop"
    },
    width: 1536,
    height: 2116
  }
};

function normalizeSiteUrl(value: string) {
  const candidate = value.trim();

  if (!candidate) {
    return null;
  }

  const url = new URL(/^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`);

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error(`Unsupported site URL protocol: ${url.protocol}`);
  }

  return url.origin;
}

export function getSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL
  ];

  for (const candidate of candidates) {
    if (!candidate) {
      continue;
    }

    try {
      const normalizedUrl = normalizeSiteUrl(candidate);

      if (normalizedUrl) {
        return normalizedUrl;
      }
    } catch {
      continue;
    }
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  throw new Error(
    "A valid NEXT_PUBLIC_SITE_URL, VERCEL_PROJECT_PRODUCTION_URL, or VERCEL_URL is required outside local development."
  );
}

export function createPageMetadata(locale: Locale, routeKey: RouteKey): Metadata {
  const seo = getSeoText(locale, routeKey);
  const routePath = getRoutePath(routeKey, locale);
  const alternates = getLanguageAlternates(routeKey);
  const siteUrl = getSiteUrl();
  const pageUrl = new URL(routePath, siteUrl).toString();
  const routeSocialImage = routeSocialImages[routeKey];
  const socialImageUrl = new URL(routeSocialImage?.path ?? socialImagePath, siteUrl).toString();
  const currentSocialImageAlt = routeSocialImage?.alt[locale] ?? socialImageAlt[locale];

  return {
    title: routeKey === "home" ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        "it-IT": new URL(alternates.it, siteUrl).toString(),
        "en-US": new URL(alternates.en, siteUrl).toString(),
        "x-default": new URL(alternates.it, siteUrl).toString()
      }
    },
    openGraph: {
      siteName,
      title: seo.title,
      description: seo.description,
      url: pageUrl,
      images: [
        {
          url: socialImageUrl,
          alt: currentSocialImageAlt,
          ...(routeSocialImage
            ? { width: routeSocialImage.width, height: routeSocialImage.height }
            : {})
        }
      ],
      locale: locale === "it" ? "it_IT" : "en_US",
      alternateLocale: locale === "it" ? ["en_US"] : ["it_IT"],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [socialImageUrl]
    }
  };
}
