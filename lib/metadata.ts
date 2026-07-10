import type { Metadata } from "next";
import { getLanguageAlternates, getRoutePath, type Locale, type RouteKey } from "@/lib/i18n";
import { getSeoText } from "@/lib/translations";

export const siteName = "Ceramiche Artistiche Bressan C2";
export const socialImagePath = "/images/home-laboratorio-bressan.webp";
export const socialImageAlt = "Laboratorio Bressan C2 con ceramiche artistiche dipinte a mano";

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
  const socialImageUrl = new URL(socialImagePath, siteUrl).toString();

  return {
    title: routeKey === "home" ? { absolute: `${seo.title} | ${siteName}` } : seo.title,
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
          alt: socialImageAlt
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
