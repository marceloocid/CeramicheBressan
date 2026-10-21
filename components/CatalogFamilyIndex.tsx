"use client";

import { useEffect, useRef, useState } from "react";

type CatalogFamilyIndexProps = {
  families: { slug: string; label: string }[];
  indexLabel: string;
  familyLabel: string;
};

export function CatalogFamilyIndex({ families, indexLabel, familyLabel }: CatalogFamilyIndexProps) {
  const navRef = useRef<HTMLElement>(null);
  const [activeSlug, setActiveSlug] = useState(families[0]?.slug ?? "");

  useEffect(() => {
    const nav = navRef.current;
    const content = nav?.closest<HTMLElement>("[data-catalog]");
    const header = document.querySelector("header");

    if (!nav || !content || !header) {
      return;
    }

    const sections = families.flatMap(({ slug }) => {
      const section = document.getElementById(slug);
      return section ? [section] : [];
    });
    let frame = 0;
    let anchorFrame = 0;

    const updateActiveFamily = () => {
      const readingTop = nav.getBoundingClientRect().bottom + 24;
      const current = sections.findLast((section) => section.getBoundingClientRect().top <= readingTop);
      const slug = current?.id ?? families[0]?.slug ?? "";
      setActiveSlug((previous) => (previous === slug ? previous : slug));
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveFamily);
    };

    const measureNavigation = () => {
      content.style.setProperty("--catalog-header-height", `${header.getBoundingClientRect().height}px`);
      content.style.setProperty("--catalog-index-height", `${nav.getBoundingClientRect().height}px`);
      scheduleUpdate();
    };

    const observer = new ResizeObserver(measureNavigation);
    observer.observe(header);
    observer.observe(nav);
    measureNavigation();

    // Align incoming links from Creazioni after the actual sticky heights are known.
    const target = sections.find((section) => `#${section.id}` === window.location.hash);
    if (target) {
      anchorFrame = requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start", behavior: "instant" });
        scheduleUpdate();
      });
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(anchorFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      content.style.removeProperty("--catalog-header-height");
      content.style.removeProperty("--catalog-index-height");
    };
  }, [families]);

  return (
    <nav
      aria-label={indexLabel}
      className="sticky top-[calc(var(--catalog-header-height)+var(--catalog-index-gap))] z-30 mx-auto mt-4 max-w-5xl rounded-sm border border-ceramica/20 bg-[#fffaf1] p-2 shadow-[0_6px_18px_rgba(41,31,18,0.10)] sm:mt-5"
      ref={navRef}
    >
      <div className="flex items-center gap-3 md:hidden">
        <label className="shrink-0 pl-1 text-xs font-bold uppercase tracking-[0.08em] text-ceramica" htmlFor="catalog-family">
          {familyLabel}
        </label>
        <select
          className="focus-ring min-h-11 min-w-0 flex-1 rounded-sm border border-oro/60 bg-white px-3 py-2 text-sm font-bold text-ceramica"
          id="catalog-family"
          onChange={(event) => {
            const slug = event.target.value;
            setActiveSlug(slug);
            if (window.location.hash === `#${slug}`) {
              document.getElementById(slug)?.scrollIntoView({
                block: "start",
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
              });
            } else {
              window.location.hash = slug;
            }
          }}
          value={activeSlug}
        >
          {families.map(({ slug, label }) => (
            <option key={slug} value={slug}>{label}</option>
          ))}
        </select>
      </div>
      <div className="hidden grid-cols-6 gap-1 md:grid">
        {families.map(({ slug, label }) => (
          <a
            aria-current={activeSlug === slug ? "location" : undefined}
            className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border px-2 py-2 text-sm font-bold uppercase tracking-[0.06em] transition-colors ${
              activeSlug === slug
                ? "border-ceramica bg-ceramica text-white"
                : "border-oro/45 bg-white/55 text-ceramica hover:border-ceramica hover:bg-white"
            }`}
            href={`#${slug}`}
            key={slug}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
