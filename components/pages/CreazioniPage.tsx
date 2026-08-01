import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionTitle } from "@/components/SectionTitle";
import { getCollectionCategories, getSiteContent } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function CreazioniPageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].creazioni;
  const siteText = getSiteContent(locale);
  const collectionCategories = getCollectionCategories(locale);

  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={text.eyebrow}
            title={text.title}
            intro={text.intro}
            align="center"
            as="h1"
          />
          <div className="paper-panel mx-auto mt-10 max-w-4xl rounded-sm p-6 text-center text-argilla">
            <p className="leading-7">{text.notice}</p>
            <p className="mt-4 font-bold text-ceramica">{siteText.b2bNotice}</p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collectionCategories.map((category) => (
              <CollectionCard {...category} headingLevel="h2" key={category.slug} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={text.productEyebrow}
            title={text.productTitle}
            intro={text.productIntro}
          />
          <div className="paper-panel mt-10 grid gap-6 rounded-sm p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-ceramica">
                {text.promptTitle}
              </h3>
              <p className="mt-3 leading-7 text-argilla">{text.promptText}</p>
            </div>
            <ButtonLink href={getRoutePath("catalogo", locale)} variant="secondary">
              {text.promptButton}
            </ButtonLink>
          </div>
        </div>
      </section>

      <ContactCta locale={locale} />
    </main>
  );
}
