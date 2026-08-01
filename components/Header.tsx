import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getNavItems } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { getRoutePath } from "@/lib/i18n";
import { globalText } from "@/lib/translations";

export function Header({ locale }: { locale: Locale }) {
  const navItems = getNavItems(locale);
  const text = globalText[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-ceramica/25 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          className="brand-plaque focus-ring block shrink-0 px-4 py-2"
          href={getRoutePath("home", locale)}
          aria-label={text.brandAria}
        >
          <span className="relative z-10 block text-xs italic leading-none text-ceramica sm:text-sm">
            Ceramiche Artistiche
          </span>
          <span className="brand-script relative z-10 block text-3xl font-semibold leading-none text-ceramica sm:text-4xl">
            Bressan C2
          </span>
          <span className="relative z-10 hidden whitespace-nowrap text-[8px] uppercase tracking-[0.08em] text-argilla sm:block lg:text-[9px]">
            {text.brandClaimShort}
          </span>
        </Link>

        <HeaderNavigation items={navItems} label={text.mainNavigation} variant="desktop" />

        <div className="hidden shrink-0 items-center gap-4 sm:flex">
          <LanguageSwitcher locale={locale} />
          <ButtonLink
            href={`${getRoutePath("contatti", locale)}#richiesta`}
            variant="secondary"
            className="whitespace-nowrap px-4 py-2"
          >
            {text.requestInfo}
          </ButtonLink>
        </div>

        <div className="sm:hidden">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>

      <HeaderNavigation items={navItems} label={text.mobileNavigation} variant="mobile" />
    </header>
  );
}
