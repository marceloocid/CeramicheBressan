import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallButton } from "@/components/MobileCallButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Ceramiche Artistiche Bressan C2 | Ceramiche dipinte a mano",
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
    title: "Ceramiche Artistiche Bressan C2",
    description:
      "Creazioni in ceramica dipinte a mano per la casa, la tavola e il regalo, pensate per negozi e punti vendita.",
    locale: "it_IT",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
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
        <Header />
        {children}
        <Footer />
        <MobileCallButton />
        <Analytics />
      </body>
    </html>
  );
}
