import { ButtonLink } from "@/components/ButtonLink";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { globalText, pageText } from "@/lib/translations";

export function ContactCta({ locale }: { locale: Locale }) {
  const text = pageText[locale].cta;
  const global = globalText[locale];

  return (
    <section className="bg-ceramica px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd95a]">{text.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            {text.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#fff6e6]">
            {text.text}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={getRoutePath("contatti", locale)} variant="inverse">
            {global.contactUs}
          </ButtonLink>
          <ButtonLink href={getRoutePath("catalogo", locale)} variant="inverseGhost">
            {global.discoverCatalog}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
