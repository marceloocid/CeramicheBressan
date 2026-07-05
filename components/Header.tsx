import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          className="brand-plaque focus-ring block px-4 py-2"
          href={getRoutePath("home", locale)}
          aria-label={text.brandAria}
        >
          <span className="relative z-10 block text-xs italic leading-none text-ceramica sm:text-sm">
            Ceramiche Artistiche
          </span>
          <span className="brand-script relative z-10 block text-3xl font-semibold leading-none text-ceramica sm:text-4xl">
            Bressan C2
          </span>
          <span className="relative z-10 hidden text-[10px] uppercase tracking-[0.18em] text-argilla sm:block">
            Pianezze, Vicenza
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label={text.mainNavigation}>
          {navItems.map((item) => (
            <Link
              className="focus-ring text-sm font-bold uppercase tracking-[0.11em] text-argilla transition hover:text-ceramica"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 sm:flex">
          <LanguageSwitcher locale={locale} />
          <ButtonLink href={`${getRoutePath("contatti", locale)}#richiesta`} variant="secondary" className="px-4 py-2">
            {text.requestInfo}
          </ButtonLink>
        </div>
      </div>

      <nav
        className="flex items-center gap-4 overflow-x-auto border-t border-ceramica/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-argilla lg:hidden"
        aria-label={text.mobileNavigation}
      >
        {navItems.map((item) => (
          <Link className="focus-ring shrink-0 py-1 hover:text-ceramica" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <div className="shrink-0 sm:hidden">
          <LanguageSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
}
