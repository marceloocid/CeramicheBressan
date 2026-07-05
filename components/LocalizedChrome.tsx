"use client";

import type { ReactNode } from "react";
import { CookieConsentProvider } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallButton } from "@/components/MobileCallButton";
import type { Locale } from "@/lib/i18n";

export function LocalizedChrome({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <CookieConsentProvider locale={locale}>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
      <MobileCallButton locale={locale} />
    </CookieConsentProvider>
  );
}
