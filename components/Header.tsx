import Link from "next/link";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-oro/30 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="focus-ring block" href="/" aria-label="Vai alla home">
          <span className="block font-serif text-xl font-semibold leading-tight text-ceramica sm:text-2xl">
            Ceramiche Bressan C2
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-argilla sm:block">
            Pianezze, Vicenza
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigazione principale">
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

        <div className="hidden sm:block">
          <ButtonLink href={site.phoneHref} variant="secondary" className="px-4 py-2">
            Chiama
          </ButtonLink>
        </div>
      </div>

      <nav
        className="flex gap-4 overflow-x-auto border-t border-oro/20 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-argilla lg:hidden"
        aria-label="Navigazione mobile"
      >
        {navItems.map((item) => (
          <Link className="focus-ring shrink-0 py-1 hover:text-ceramica" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
