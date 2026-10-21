import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionTitle } from "@/components/SectionTitle";
import { getCollectionCategories } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function CreazioniPageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].creazioni;
  const collectionCategories = getCollectionCategories(locale);

  return (
    <main>
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">{text.eyebrow}</p>
            <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ceramica sm:text-4xl">{text.title}</h1>
            <p className="mt-3 leading-7 text-argilla">{text.intro}</p>
          </div>
          <div className="paper-panel mx-auto mt-5 max-w-4xl rounded-sm px-4 py-3 text-center text-argilla">
            <p className="text-sm leading-6">{text.notice}</p>
          </div>
          <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collectionCategories.map((category) => (
              <CollectionCard {...category} headingLevel="h2" key={category.slug} locale={locale} showLinesLink />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="paper-panel mx-auto grid max-w-5xl gap-6 rounded-sm p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <SectionTitle eyebrow={text.productEyebrow} title={text.productTitle} intro={text.productIntro} />
          </div>
          <ButtonLink href={getRoutePath("catalogo", locale)} variant="secondary">
            {text.promptButton}
          </ButtonLink>
        </div>
      </section>

      <ContactCta locale={locale} />
    </main>
  );
}
