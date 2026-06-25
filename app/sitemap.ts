import type { MetadataRoute } from "next";

const routes = [
  "/",
  "/azienda",
  "/creazioni",
  "/per-rivenditori",
  "/catalogo",
  "/contatti",
  "/lavorazione",
  "/privacy-policy",
  "/cookie-policy"
];

function getSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
