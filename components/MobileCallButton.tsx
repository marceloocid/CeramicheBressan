"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { globalText } from "@/lib/translations";

export function MobileCallButton({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const contactPath = getRoutePath("contatti", locale);
  const text = globalText[locale];

  if (pathname === contactPath) {
    return null;
  }

  return (
    <Link
      aria-label={text.mobileContactAria}
      className="focus-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-11 items-center justify-center rounded-sm border border-ceramica bg-ceramica/95 px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-soft transition hover:bg-[#004f31] sm:hidden"
      href={contactPath}
    >
      {text.contactUs}
    </Link>
  );
}
