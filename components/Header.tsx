import Link from "next/link";
import { navItems } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ceramica/25 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="brand-plaque focus-ring block px-4 py-2" href="/" aria-label="Vai alla home">
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
          <ButtonLink href="/catalogo" variant="secondary" className="px-4 py-2">
            Richiedi informazioni
          </ButtonLink>
        </div>
      </div>

      <nav
        className="flex gap-4 overflow-x-auto border-t border-ceramica/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-argilla lg:hidden"
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
