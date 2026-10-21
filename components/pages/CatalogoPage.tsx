import { CatalogItemCard } from "@/components/CatalogItemCard";
import { CatalogFamilyIndex } from "@/components/CatalogFamilyIndex";
import { ButtonLink } from "@/components/ButtonLink";
import { getCatalogItems, getCollectionCategories } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { catalogFamilyLabels, pageText } from "@/lib/translations";

export function CatalogoPageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].catalogo;
  const catalogItems = getCatalogItems(locale);
  const collectionCategories = getCollectionCategories(locale);
  const families = collectionCategories
    .filter((category) => catalogItems.some((item) => item.category === category.slug))
    .map((category) => ({ slug: category.slug, label: catalogFamilyLabels[locale][category.slug] ?? category.title }));

  return (
    <main className="catalog-content" data-catalog>
      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">{text.eyebrow}</p>
            <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ceramica sm:text-4xl">{text.title}</h1>
            <p className="mt-3 leading-7 text-argilla">{text.intro}</p>
          </div>
          <div className="paper-panel mx-auto mt-4 max-w-4xl rounded-sm px-4 py-3 text-center">
            <p className="text-sm leading-6 text-argilla">{text.notice}</p>
          </div>

          <CatalogFamilyIndex families={families} indexLabel={text.indexLabel} familyLabel={text.familyLabel} />

          <div className="mt-6 space-y-12 sm:mt-8 sm:space-y-14">
            {collectionCategories.map((category) => {
              const categoryItems = catalogItems.filter((item) => item.category === category.slug);

              if (categoryItems.length === 0) {
                return null;
              }

              return (
                <section className="catalog-family" id={category.slug} key={category.slug}>
                  <div className="mb-5 max-w-3xl sm:mb-7">
                    <h2 className="font-serif text-2xl font-semibold text-ceramica sm:text-3xl">
                      {category.title}
                    </h2>
                    <p className="mt-2 text-sm font-bold leading-6 text-argilla">
                      {category.themes.join(", ")}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-argilla sm:text-base sm:leading-7">{category.description}</p>
                  </div>
                  <div className="grid gap-7 lg:grid-cols-2">
                    {categoryItems.map((item) => (
                      <CatalogItemCard categoryTitle={category.title} item={item} key={item.slug} locale={locale} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-16 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-4xl rounded-sm p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">{text.ctaEyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ceramica">
            {text.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-argilla">{text.ctaText}</p>
          {/*
            Enable when a real file exists:
            <a href="/catalogo-bressan-c2.pdf">Download the PDF catalog</a>
          */}
          <ButtonLink href={getRoutePath("contatti", locale)} variant="secondary" className="mt-7">
            {text.ctaButton}
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
