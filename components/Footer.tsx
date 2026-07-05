import Link from "next/link";
import { CookiePreferencesButton } from "@/components/CookieConsent";
import { getNavItems, getSiteContent, site } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { globalText } from "@/lib/translations";

export function Footer({ locale }: { locale: Locale }) {
  const navItems = getNavItems(locale);
  const siteText = getSiteContent(locale);
  const text = globalText[locale];

  return (
    <footer className="border-t border-ceramica/25 bg-[#f2e4ca] pb-20 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold text-ceramica">{site.visibleName}</p>
          <p className="mt-3 max-w-md leading-7 text-argilla">{siteText.footerDescription}</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ceramica">{text.contacts}</p>
          <address className="mt-3 not-italic leading-7 text-argilla">
            {site.address}
            <br />
            <a className="focus-ring underline-offset-4 hover:underline" href={site.phoneHref}>
              {site.phone}
            </a>
            <br />
            <a className="focus-ring underline-offset-4 hover:underline" href={site.emailHref}>
              {site.email}
            </a>
          </address>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ceramica">{text.links}</p>
          <div className="mt-3 grid gap-2 text-argilla">
            {navItems.map((item) => (
              <Link className="focus-ring hover:text-ceramica" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a className="focus-ring hover:text-ceramica" href={site.facebookUrl}>
              {text.facebook}
            </a>
            <Link className="focus-ring hover:text-ceramica" href={getRoutePath("privacy", locale)}>
              {text.privacyPolicy}
            </Link>
            <Link className="focus-ring hover:text-ceramica" href={getRoutePath("cookie", locale)}>
              {text.cookiePolicy}
            </Link>
            <CookiePreferencesButton locale={locale} />
          </div>
        </div>
      </div>
      <div className="border-t border-oro/25 px-4 py-4 text-center text-sm text-argilla">
        {site.legalName} - C.F. / P.IVA {site.vat}
      </div>
    </footer>
  );
}
