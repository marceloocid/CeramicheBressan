import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { getCollectionCategories } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function HomePageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].home;
  const collectionCategories = getCollectionCategories(locale);

  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <Image
          priority
          className="absolute inset-0 -z-20 object-cover"
          src="/images/home-laboratorio-bressan.webp"
          alt={text.heroAlt}
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10170d]/82 via-[#1c2a16]/62 to-[#10170d]/24" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10170d]/58 via-transparent to-[#10170d]/34" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_45%,rgba(255,249,240,0.18),transparent_34%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="relative z-10 max-w-3xl rounded-sm border border-white/35 bg-[#fffaf1]/90 p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="font-serif text-lg italic leading-none text-ceramica">Ceramiche Artistiche</p>
              <p className="brand-script mt-1 text-5xl font-semibold leading-none text-ceramica sm:text-7xl">
                Bressan C2
              </p>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a4f3a]">
              {text.heroEyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] text-ceramica sm:text-6xl">
              {text.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-argilla">
              {text.heroIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={getRoutePath("catalogo", locale)}>{text.heroPrimary}</ButtonLink>
              <ButtonLink href={getRoutePath("creazioni", locale)} variant="ghost">
                {text.heroSecondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow={text.workshopEyebrow}
            title={text.workshopTitle}
            intro={text.workshopIntro}
          />
          <div className="paper-panel rounded-sm p-8 text-lg leading-8 text-argilla">
            <p>{text.workshopParagraphs[0]}</p>
            <p className="mt-5">{text.workshopParagraphs[1]}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {text.pillars.map((pillar) => (
              <article className="paper-panel rounded-sm p-7" key={pillar.title}>
                <h2 className="font-serif text-2xl font-semibold text-ceramica">{pillar.title}</h2>
                <p className="mt-4 leading-7 text-argilla">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={text.collectionsEyebrow}
            title={text.collectionsTitle}
            intro={text.collectionsIntro}
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collectionCategories.slice(0, 3).map((category) => (
              <CollectionCard {...category} key={category.slug} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-sm">
            {/* Placeholder: sostituire con foto ravvicinata di decorazione manuale o dettagli prodotto. */}
            <Image
              className="object-cover"
              src="/images/dettagli-decorazione.webp"
              alt={text.detailAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow={text.retailEyebrow}
              title={text.retailTitle}
              intro={text.retailIntro}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={getRoutePath("perRivenditori", locale)} variant="ghost">
                {text.retailPrimary}
              </ButtonLink>
              <ButtonLink href={getRoutePath("creazioni", locale)} variant="secondary">
                {text.retailSecondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ContactCta locale={locale} />
    </main>
  );
}
