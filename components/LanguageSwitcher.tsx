"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateLocalePath, type Locale } from "@/lib/i18n";
import { globalText } from "@/lib/translations";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const text = globalText[locale];
  const languageItems = ["it", "en"] as const;

  return (
    <div
      aria-label={text.languageSelector}
      className="inline-flex shrink-0 items-center rounded-full border border-oro/45 bg-white/55 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-argilla/60 shadow-[0_1px_0_rgba(92,61,36,0.06)]"
    >
      {languageItems.map((itemLocale, index) => {
        const isCurrent = itemLocale === locale;
        const separator = index < languageItems.length - 1 ? (
          <span aria-hidden="true" className="mx-2 text-argilla/30">
            &middot;
          </span>
        ) : null;

        return isCurrent ? (
          <span className="inline-flex items-center" key={itemLocale}>
            <span
              aria-current="true"
              className="font-black text-ceramica"
              title={text.currentLanguage}
            >
              {itemLocale}
            </span>
            {separator}
          </span>
        ) : (
          <span className="inline-flex items-center" key={itemLocale}>
            <Link
              className="focus-ring transition hover:text-ceramica"
              href={getAlternateLocalePath(pathname, itemLocale)}
              hrefLang={itemLocale}
              title={`${text.switchTo} ${itemLocale.toUpperCase()}`}
            >
              {itemLocale}
            </Link>
            {separator}
          </span>
        );
      })}
    </div>
  );
}
