"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/site";

type HeaderNavigationProps = {
  items: NavItem[];
  label: string;
  variant: "desktop" | "mobile";
};

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

function isCurrentPath(pathname: string, href: string) {
  return normalizePath(pathname) === normalizePath(href);
}

export function HeaderNavigation({ items, label, variant }: HeaderNavigationProps) {
  const pathname = usePathname();
  const mobileNavigationRef = useRef<HTMLElement>(null);
  const activeMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const navigation = mobileNavigationRef.current;
    const activeLink = activeMobileLinkRef.current;

    if (variant !== "mobile" || !navigation || !activeLink) {
      return;
    }

    const centeredPosition = activeLink.offsetLeft - (navigation.clientWidth - activeLink.offsetWidth) / 2;
    navigation.scrollTo({ left: Math.max(0, centeredPosition), behavior: "auto" });
  }, [pathname, variant]);

  if (variant === "desktop") {
    return (
      <nav
        aria-label={label}
        className="hidden shrink-0 items-center gap-5 min-[1340px]:flex"
      >
        {items.map((item) => {
          const isActive = isCurrentPath(pathname, item.href);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`focus-ring relative inline-flex min-h-11 items-center whitespace-nowrap text-sm font-bold uppercase tracking-[0.11em] transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-center after:rounded-full after:bg-oro after:transition-transform ${
                isActive
                  ? "text-ceramica after:scale-x-100"
                  : "text-argilla after:scale-x-0 hover:text-ceramica"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav
      aria-label={label}
      className="flex items-center gap-4 overflow-x-auto border-t border-ceramica/15 px-4 py-1 text-sm font-bold uppercase tracking-[0.08em] text-argilla min-[1340px]:hidden"
      ref={mobileNavigationRef}
    >
      {items.map((item) => {
        const isActive = isCurrentPath(pathname, item.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`focus-ring relative inline-flex min-h-11 shrink-0 items-center transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-center after:rounded-full after:bg-oro after:transition-transform ${
              isActive
                ? "text-ceramica after:scale-x-100"
                : "text-argilla after:scale-x-0 hover:text-ceramica"
            }`}
            href={item.href}
            key={item.href}
            ref={isActive ? activeMobileLinkRef : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
