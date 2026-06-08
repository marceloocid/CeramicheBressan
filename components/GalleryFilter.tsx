"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { collectionCategories, catalogItems } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

const allFilter = { label: "Tutte", value: "tutte" };

export function GalleryFilter() {
  const filters = useMemo(
    () => [allFilter, ...collectionCategories.map((category) => ({ label: category.title, value: category.slug }))],
    []
  );
  const [active, setActive] = useState(allFilter.value);
  const visibleItems =
    active === allFilter.value ? catalogItems : catalogItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Filtra la galleria per categoria">
        {filters.map((filter) => {
          const isActive = active === filter.value;

          return (
            <button
              className={`focus-ring rounded-sm border px-4 py-2 text-sm font-bold transition ${
                isActive
                  ? "border-ceramica bg-ceramica text-white"
                  : "border-oro/50 bg-white/35 text-argilla hover:border-ceramica hover:text-ceramica"
              }`}
              key={filter.value}
              onClick={() => setActive(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article className="paper-panel overflow-hidden rounded-sm" key={`${item.category}-${item.name}`}>
            <div className="relative aspect-[4/3] bg-[#fffaf1]">
              <Image
                className={item.imageFit === "contain" ? "object-contain p-5 sm:p-7" : "object-cover"}
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ceramica">
                {collectionCategories.find((category) => category.slug === item.category)?.title}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ceramica">{item.name}</h3>
              <p className="mt-3 leading-7 text-argilla">{item.description}</p>
              <ButtonLink href="/contatti" variant="ghost" className="mt-5">
                Chiedi informazioni
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
