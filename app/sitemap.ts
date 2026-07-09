import type { MetadataRoute } from "next";
import { localizedRoutes, type Locale, type RouteKey } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/metadata";

const routeKeys = Object.keys(localizedRoutes) as RouteKey[];
const routeLocales: Locale[] = ["it", "en"];
const sitemapLastModified = new Date("2026-07-04T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return routeKeys.flatMap((routeKey) =>
    routeLocales.map((locale) => {
      const route = localizedRoutes[routeKey][locale];

      return {
        url: new URL(route, baseUrl).toString(),
        lastModified: sitemapLastModified,
        changeFrequency: routeKey === "home" ? "weekly" : "monthly",
        priority: routeKey === "home" ? 1 : 0.7,
        alternates: {
          languages: {
            "it-IT": new URL(localizedRoutes[routeKey].it, baseUrl).toString(),
            "en-US": new URL(localizedRoutes[routeKey].en, baseUrl).toString()
          }
        }
      } satisfies MetadataRoute.Sitemap[number];
    })
  );
}
