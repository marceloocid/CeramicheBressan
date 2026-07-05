import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/metadata";

const siteUrl = getSiteUrl().toString();
const socialImage = "/images/home-laboratorio-bressan.jpg";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ceramiche Artistiche Bressan C2 | Ceramiche dipinte a mano",
    template: "%s | Ceramiche Artistiche Bressan C2"
  },
  description:
    "Ceramiche artistiche dipinte a mano per la casa, la tavola e il regalo. Creazioni artigianali italiane pensate per negozi, botteghe e punti vendita.",
  keywords: [
    "ceramiche artistiche per negozi",
    "ceramiche dipinte a mano Vicenza",
    "ceramiche artigianali italiane",
    "oggetti in ceramica per la casa e il regalo",
    "ceramiche per punti vendita",
    "Bressan C2 ceramiche"
  ],
  openGraph: {
    siteName: "Ceramiche Artistiche Bressan C2",
    title: "Ceramiche Artistiche Bressan C2",
    description:
      "Creazioni in ceramica dipinte a mano per la casa, la tavola e il regalo, pensate per negozi e punti vendita.",
    url: "/",
    images: [
      {
        url: socialImage,
        alt: "Laboratorio Bressan C2 con ceramiche artistiche dipinte a mano"
      }
    ],
    locale: "it_IT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceramiche Artistiche Bressan C2",
    description:
      "Ceramiche artistiche dipinte a mano a Pianezze, Vicenza, per negozi, botteghe e punti vendita.",
    images: [socialImage]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-icon.png", sizes: "180x180" }
    ]
  }
};
