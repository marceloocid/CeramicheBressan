"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCallButton() {
  const pathname = usePathname();

  if (pathname === "/contatti") {
    return null;
  }

  return (
    <Link
      aria-label="Vai alla pagina contatti"
      className="focus-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-11 items-center justify-center rounded-sm border border-ceramica bg-ceramica/95 px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-soft transition hover:bg-[#004f31] sm:hidden"
      href="/contatti"
    >
      Contattaci
    </Link>
  );
}
