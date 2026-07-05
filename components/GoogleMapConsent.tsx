"use client";

import { useCookieConsent } from "@/components/CookieConsent";
import type { Locale } from "@/lib/i18n";
import { mapText } from "@/lib/translations";

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Via%20San%20Giuseppe%209%2036060%20Pianezze%20VI%20Italia&output=embed";
const googleMapsExternalUrl =
  "https://www.google.com/maps/search/?api=1&query=Via%20San%20Giuseppe%209%2036060%20Pianezze%20VI%20Italia";

export function GoogleMapConsent({ locale }: { locale: Locale }) {
  const { acceptExternalContent, settings } = useCookieConsent();
  const text = mapText[locale];

  if (settings.contenutiEsterni) {
    return (
      <iframe
        className="h-[420px] w-full rounded-sm border-0"
        title={text.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={googleMapsEmbedUrl}
      />
    );
  }

  return (
    <div className="flex min-h-[360px] flex-col items-start justify-center rounded-sm border border-oro/35 bg-[#fffaf1] p-6 sm:min-h-[420px] sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-ceramica">{text.eyebrow}</p>
      <h3 className="mt-3 font-serif text-2xl font-semibold text-ceramica">
        {text.blockedTitle}
      </h3>
      <p className="mt-4 max-w-2xl leading-7 text-argilla">{text.blockedText}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="focus-ring min-h-11 rounded-sm border border-ceramica bg-ceramica px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#004f31]"
          onClick={acceptExternalContent}
          type="button"
        >
          {text.accept}
        </button>
        <a
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-oro/60 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ceramica transition hover:border-ceramica hover:bg-white/50"
          href={googleMapsExternalUrl}
          rel="noreferrer"
          target="_blank"
        >
          {text.open}
        </a>
      </div>
    </div>
  );
}
