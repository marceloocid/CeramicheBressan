import type { ReactNode } from "react";
import { LocalizedChrome } from "@/components/LocalizedChrome";
import { getSiteContent, site } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/metadata";

const siteUrl = getSiteUrl().toString();

export function SiteRootLayout({
  children,
  locale
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const siteText = getSiteContent(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.visibleName,
    legalName: site.legalName,
    url: siteUrl,
    description: siteText.structuredDataDescription,
    telephone: site.phoneE164,
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        contactType: "customer service",
        availableLanguage: ["Italian", "English"]
      },
      {
        "@type": "ContactPoint",
        telephone: site.mobilePhoneE164,
        contactType: "customer service",
        availableLanguage: ["Italian", "English"]
      }
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:30"
    },
    sameAs: [site.facebookUrl]
  };

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LocalizedChrome locale={locale}>{children}</LocalizedChrome>
      </body>
    </html>
  );
}
