import type { MetadataRoute } from "next";
import { localizedRoutes, type Locale, type RouteKey } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/metadata";

const routeKeys = Object.keys(localizedRoutes) as RouteKey[];
const routeLocales: Locale[] = ["it", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return routeKeys.flatMap((routeKey) =>
    routeLocales.map((locale) => {
      const route = localizedRoutes[routeKey][locale];

      return {
        url: new URL(route, baseUrl).toString(),
        alternates: {
          languages: {
            "it-IT": new URL(localizedRoutes[routeKey].it, baseUrl).toString(),
            "en-US": new URL(localizedRoutes[routeKey].en, baseUrl).toString(),
            "x-default": new URL(localizedRoutes[routeKey].it, baseUrl).toString()
          }
        }
      } satisfies MetadataRoute.Sitemap[number];
    })
  );
}
