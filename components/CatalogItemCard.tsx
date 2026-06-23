"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CatalogLightbox } from "@/components/CatalogLightbox";
import type { CatalogItem } from "@/data/site";

type CatalogItemCardProps = {
  item: CatalogItem;
  categoryTitle: string;
};

export function CatalogItemCard({ item, categoryTitle }: CatalogItemCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const coverImage = item.images[0];
  const hasGallery = item.images.length > 1;

  return (
    <article className="paper-panel flex h-full flex-col overflow-hidden rounded-sm shadow-soft" id={item.slug}>
      <button
        aria-label={`Apri immagine grande per ${item.name}`}
        className="focus-ring group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-[#fffaf1]"
        onClick={() => setIsGalleryOpen(true)}
        type="button"
      >
        <Image
          className={`${coverImage.fit === "cover" ? "object-cover" : "object-contain p-3 sm:p-4"} transition duration-300 group-hover:scale-[1.015]`}
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 44vw, 100vw"
        />
        <span className="absolute bottom-3 left-3 rounded-sm bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ceramica shadow-sm">
          {item.images.length} {item.images.length === 1 ? "immagine" : "immagini"}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-ceramica">{categoryTitle}</p>
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-ceramica sm:text-3xl">{item.name}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-argilla">{item.theme}</p>
        <p className="mt-4 flex-1 leading-7 text-argilla">{item.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {hasGallery ? (
            <button
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-oro/60 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ceramica transition hover:border-ceramica hover:bg-white/50"
              onClick={() => setIsGalleryOpen(true)}
              type="button"
            >
              Vedi la galleria
            </button>
          ) : null}
          <ButtonLink href="/contatti" variant="ghost">
            Chiedi informazioni
          </ButtonLink>
        </div>
      </div>

      {isGalleryOpen ? (
        <CatalogLightbox
          images={item.images}
          initialIndex={0}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          title={item.name}
        />
      ) : null}
    </article>
  );
}
