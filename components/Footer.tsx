import Link from "next/link";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ceramica/25 bg-[#f2e4ca] pb-20 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold text-ceramica">{site.visibleName}</p>
          <p className="mt-3 max-w-md leading-7 text-argilla">
            Ceramiche artistiche dipinte a mano per negozi e punti vendita — Pianezze, Vicenza.
            Creazioni in ceramica artigianale per casa, tavola e regalo.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ceramica">Contatti</p>
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
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ceramica">Link</p>
          <div className="mt-3 grid gap-2 text-argilla">
            {navItems.map((item) => (
              <Link className="focus-ring hover:text-ceramica" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a className="focus-ring hover:text-ceramica" href={site.facebookUrl}>
              Facebook
            </a>
            <Link className="focus-ring hover:text-ceramica" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="focus-ring hover:text-ceramica" href="/cookie-policy">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-oro/25 px-4 py-4 text-center text-sm text-argilla">
        {site.legalName} - C.F. / P.IVA {site.vat}
      </div>
    </footer>
  );
}
