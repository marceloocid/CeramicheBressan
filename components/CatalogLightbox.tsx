"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/data/site";

type CatalogLightboxProps = {
  images: ProductImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export function CatalogLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  title
}: CatalogLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex];
  const titleId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-gallery-title`;

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (!hasMultipleImages) {
        return;
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, hasMultipleImages, isOpen, onClose]);

  if (!isOpen || !activeImage) {
    return null;
  }

  return (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2318]/85 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm border border-white/20 bg-[#fffaf1] shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-ceramica/20 px-4 py-3 sm:px-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ceramica">Galleria</p>
            <h2 className="font-serif text-xl font-semibold leading-tight text-ceramica sm:text-2xl" id={titleId}>
              {title}
            </h2>
          </div>
          <button
            aria-label="Chiudi la galleria"
            className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-ceramica/30 bg-white text-2xl leading-none text-ceramica transition hover:bg-white/70"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            &times;
          </button>
        </div>

        <div
          className="relative min-h-0 flex-1 bg-white"
          onTouchEnd={(event) => {
            if (touchStartX.current === null || !hasMultipleImages) {
              return;
            }

            const distance = event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;

            if (Math.abs(distance) < 45) {
              return;
            }

            if (distance > 0) {
              goToPrevious();
            } else {
              goToNext();
            }
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
        >
          <div className="relative h-[58vh] max-h-[680px] min-h-[280px] sm:h-[66vh]">
            <Image
              alt={activeImage.alt}
              className="object-contain p-3 sm:p-6"
              fill
              sizes="100vw"
              src={activeImage.src}
            />
          </div>

          {hasMultipleImages ? (
            <>
              <button
                aria-label="Immagine precedente"
                className="focus-ring absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/75 bg-[#1e2318]/65 text-3xl leading-none text-white transition hover:bg-[#1e2318]/85 sm:left-5"
                onClick={goToPrevious}
                type="button"
              >
                &lsaquo;
              </button>
              <button
                aria-label="Immagine successiva"
                className="focus-ring absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/75 bg-[#1e2318]/65 text-3xl leading-none text-white transition hover:bg-[#1e2318]/85 sm:right-5"
                onClick={goToNext}
                type="button"
              >
                &rsaquo;
              </button>
            </>
          ) : null}

          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-sm bg-[#1e2318]/72 px-3 py-1 text-sm font-bold text-white">
            {activeIndex + 1} / {images.length}
          </p>
        </div>

        {hasMultipleImages ? (
          <div className="flex gap-2 overflow-x-auto border-t border-ceramica/20 bg-[#fffaf1] p-3 sm:p-4">
            {images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  aria-label={`Vai all'immagine ${index + 1} di ${images.length}`}
                  className={`focus-ring relative h-16 w-20 shrink-0 overflow-hidden rounded-sm border bg-white transition sm:h-20 sm:w-28 ${
                    isActive ? "border-ceramica ring-2 ring-ceramica/25" : "border-ceramica/20 hover:border-ceramica"
                  }`}
                  key={`${title}-${image.src}`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <Image
                    alt=""
                    className={image.fit === "cover" ? "object-cover" : "object-contain p-1"}
                    fill
                    sizes="112px"
                    src={image.src}
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
