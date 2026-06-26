import type { Metadata } from "next";
import "./globals.css";
import { CookieConsentProvider } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallButton } from "@/components/MobileCallButton";
import { site } from "@/data/site";

function getSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString();
  } catch {
    return "http://localhost:3000";
  }
}

const siteUrl = getSiteUrl();
const socialImage = "/images/home-laboratorio-bressan.jpg";

export const metadata: Metadata = {
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.visibleName,
    legalName: site.legalName,
    url: siteUrl,
    description:
      "Bottega artigiana di ceramiche artistiche, oggettistica varia in ceramica e creazioni dipinte a mano per casa, tavola e regalo.",
    telephone: "+39042475762",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.province,
      postalCode: site.postalCode,
      addressCountry: site.country
    },
    taxID: site.vat,
    sameAs: [site.facebookUrl]
  };

  return (
    <html lang="it" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CookieConsentProvider>
          <Header />
          {children}
          <Footer />
          <MobileCallButton />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
