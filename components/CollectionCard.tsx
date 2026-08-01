import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import type { CollectionCategory } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { globalText } from "@/lib/translations";

export function CollectionCard({
  title,
  description,
  image,
  alt,
  imageFit = "contain",
  themes,
  locale = "it",
  headingLevel = "h3"
}: CollectionCategory & { locale?: Locale; headingLevel?: "h2" | "h3" }) {
  const text = globalText[locale];
  const Heading = headingLevel;

  return (
    <article className="paper-panel overflow-hidden rounded-sm shadow-soft">
      <div className="relative aspect-[4/3] bg-[#fffaf1]">
        <Image
          className={imageFit === "cover" ? "object-cover" : "object-contain p-4"}
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-6">
        <Heading className="font-serif text-2xl font-semibold text-ceramica">{title}</Heading>
        <p className="mt-3 leading-7 text-argilla">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {themes.map((theme) => (
            <span
              className="rounded-sm border border-oro/45 bg-white/45 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-argilla"
              key={theme}
            >
              {theme}
            </span>
          ))}
        </div>
        <ButtonLink href={getRoutePath("contatti", locale)} variant="ghost" className="mt-5">
          {text.requestInfo}
        </ButtonLink>
      </div>
    </article>
  );
}
