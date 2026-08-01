"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { catalogUiText } from "@/lib/translations";

type CatalogLightboxProps = {
  images: ProductImage[];
  initialIndex?: number;
  isOpen: boolean;
  locale: Locale;
  onClose: () => void;
  title: string;
};

export function CatalogLightbox({
  images,
  initialIndex = 0,
  isOpen,
  locale,
  onClose,
  title
}: CatalogLightboxProps) {
  const text = catalogUiText[locale];
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const hasMultipleImages = images.length > 1;
  const activeImage = useMemo(() => images[activeIndex], [activeIndex, images]);
  const titleId = useMemo(
    () => `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-gallery-title`,
    [title]
  );

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  const selectImage = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
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
    },
    [goToNext, goToPrevious, hasMultipleImages]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => element.getClientRects().length > 0);

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;

        if (event.shiftKey && (activeElement === firstElement || !dialogRef.current.contains(activeElement))) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }

        return;
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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
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
        ref={dialogRef}
      >
        <div className="flex items-center justify-between gap-4 border-b border-ceramica/20 px-4 py-3 sm:px-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ceramica">{text.gallery}</p>
            <h2 className="font-serif text-xl font-semibold leading-tight text-ceramica sm:text-2xl" id={titleId}>
              {title}
            </h2>
          </div>
          <button
            aria-label={text.closeGallery}
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
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
        >
          <div className="relative h-[58vh] max-h-[680px] min-h-[280px] sm:h-[66vh]">
            <Image
              alt={activeImage.alt}
              className="object-contain p-3 sm:p-6"
              fill
              loading="eager"
              sizes="100vw"
              src={activeImage.src}
            />
          </div>

          {hasMultipleImages ? (
            <>
              <button
                aria-label={text.previousImage}
                className="focus-ring absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/75 bg-[#1e2318]/65 text-3xl leading-none text-white transition hover:bg-[#1e2318]/85 sm:left-5"
                onClick={goToPrevious}
                type="button"
              >
                &lsaquo;
              </button>
              <button
                aria-label={text.nextImage}
                className="focus-ring absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/75 bg-[#1e2318]/65 text-3xl leading-none text-white transition hover:bg-[#1e2318]/85 sm:right-5"
                onClick={goToNext}
                type="button"
              >
                &rsaquo;
              </button>
            </>
          ) : null}

          <p
            aria-live="polite"
            className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-sm bg-[#1e2318]/72 px-3 py-1 text-sm font-bold text-white"
          >
            {activeIndex + 1} / {images.length}
          </p>
        </div>

        {hasMultipleImages ? (
          <ThumbnailStrip
            activeIndex={activeIndex}
            images={images}
            onSelect={selectImage}
            title={title}
            text={text}
          />
        ) : null}
      </div>
    </div>
  );
}

type ThumbnailStripProps = {
  activeIndex: number;
  images: ProductImage[];
  onSelect: (index: number) => void;
  text: (typeof catalogUiText)[Locale];
  title: string;
};

const ThumbnailStrip = memo(function ThumbnailStrip({
  activeIndex,
  images,
  onSelect,
  text,
  title
}: ThumbnailStripProps) {
  return (
    <div className="flex gap-2 overflow-x-auto border-t border-ceramica/20 bg-[#fffaf1] p-3 sm:p-4">
      {images.map((image, index) => (
        <ThumbnailButton
          image={image}
          index={index}
          isActive={index === activeIndex}
          key={`${title}-${image.src}`}
          onSelect={onSelect}
          text={text}
          total={images.length}
        />
      ))}
    </div>
  );
});

type ThumbnailButtonProps = {
  image: ProductImage;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
  text: (typeof catalogUiText)[Locale];
  total: number;
};

const ThumbnailButton = memo(function ThumbnailButton({
  image,
  index,
  isActive,
  onSelect,
  text,
  total
}: ThumbnailButtonProps) {
  const handleClick = useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);

  return (
    <button
      aria-label={`${text.goToImage} ${index + 1} / ${total}`}
      aria-pressed={isActive}
      className={`focus-ring relative h-16 w-20 shrink-0 overflow-hidden rounded-sm border bg-white transition sm:h-20 sm:w-28 ${
        isActive ? "border-ceramica ring-2 ring-ceramica/25" : "border-ceramica/20 hover:border-ceramica"
      }`}
      onClick={handleClick}
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
});
