import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallButton } from "@/components/MobileCallButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Ceramiche Artistiche Bressan C2 | Ceramiche dipinte a mano a Pianezze",
  description:
    "Ceramiche artistiche dipinte a mano per la casa, la tavola e la cucina. Bressan C2, bottega artigiana a Pianezze, Vicenza.",
  keywords: [
    "ceramiche artistiche Pianezze",
    "ceramiche dipinte a mano Vicenza",
    "ceramiche per la casa",
    "oggetti in ceramica artigianale",
    "Bressan C2 ceramiche"
  ],
  openGraph: {
    title: "Ceramiche Artistiche Bressan C2",
    description:
      "Ceramiche artistiche dipinte a mano per la casa, la tavola e la cucina a Pianezze, Vicenza.",
    locale: "it_IT",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
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
    description:
      "Bottega artigiana di ceramiche artistiche, oggettistica varia in ceramica e prodotti per la casa, la tavola e la cucina dipinti a mano.",
    telephone: "+39042475762",
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
        <Header />
        {children}
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
