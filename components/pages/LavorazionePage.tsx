import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function LavorazionePageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].lavorazione;

  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-sm">
            {/* Placeholder: sostituire con foto reale della decorazione a mano. */}
            <Image
              priority
              className="object-cover"
              src="/images/dettagli-decorazione.webp"
              alt={text.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <SectionTitle
            eyebrow={text.eyebrow}
            title={text.title}
            intro={text.intro}
            as="h1"
          />
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {text.steps.map((step, index) => (
            <article className="paper-panel rounded-sm p-7" key={step.title}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ceramica">{step.title}</h2>
              <p className="mt-4 leading-7 text-argilla">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 text-center shadow-soft">
          <h2 className="font-serif text-3xl font-semibold text-ceramica">
            {text.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-argilla">{text.finalText}</p>
          <ButtonLink href={getRoutePath("contatti", locale)} variant="secondary" className="mt-7">
            {text.finalButton}
          </ButtonLink>
        </div>
      </section>

      <ContactCta locale={locale} />
    </main>
  );
}
