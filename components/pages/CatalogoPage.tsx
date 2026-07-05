import { CatalogItemCard } from "@/components/CatalogItemCard";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionTitle } from "@/components/SectionTitle";
import { getCatalogItems, getCollectionCategories, getSiteContent } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function CatalogoPageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].catalogo;
  const siteText = getSiteContent(locale);
  const catalogItems = getCatalogItems(locale);
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
          <div className="paper-panel mx-auto mt-10 max-w-4xl rounded-sm p-6 text-center">
            <p className="leading-7 text-argilla">{text.notice}</p>
            <p className="mt-3 font-bold leading-7 text-ceramica">{siteText.b2bNotice}</p>
          </div>

          <nav
            aria-label={text.indexLabel}
            className="mx-auto mt-8 max-w-5xl rounded-sm border border-ceramica/20 bg-[#fffaf1] p-2 shadow-[0_10px_26px_rgba(41,31,18,0.10)] lg:sticky lg:top-32 lg:z-30"
          >
            <div className="flex gap-2 overflow-x-auto">
              {collectionCategories.map((category) => {
                const hasItems = catalogItems.some((item) => item.category === category.slug);

                if (!hasItems) {
                  return null;
                }

                return (
                  <a
                    className="focus-ring shrink-0 rounded-sm border border-oro/45 bg-white/55 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-argilla transition hover:border-ceramica hover:text-ceramica"
                    href={`#${category.slug}`}
                    key={category.slug}
                  >
                    {category.title}
                  </a>
                );
              })}
            </div>
          </nav>

          <div className="mt-14 space-y-16">
            {collectionCategories.map((category) => {
              const categoryItems = catalogItems.filter((item) => item.category === category.slug);

              if (categoryItems.length === 0) {
                return null;
              }

              return (
                <section className="scroll-mt-28 lg:scroll-mt-[13.5rem]" id={category.slug} key={category.slug}>
                  <div className="mb-7 max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">
                      {category.title}
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-semibold text-ceramica">
                      {category.themes.join(", ")}
                    </h2>
                    <p className="mt-4 leading-7 text-argilla">{category.description}</p>
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
