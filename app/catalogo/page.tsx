import { CatalogItemCard } from "@/components/CatalogItemCard";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { catalogItems, collectionCategories, site } from "@/data/site";

export default function CatalogoPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Catalogo"
            title="Esempi fotografici per tema"
            intro="Una selezione organizzata di ceramiche artistiche per negozi, botteghe e punti vendita. Ogni scheda raccoglie tutte le immagini disponibili della stessa linea o famiglia di prodotto."
            align="center"
          />
          <div className="paper-panel mx-auto mt-10 max-w-4xl rounded-sm p-6 text-center">
            <p className="leading-7 text-argilla">
              Le immagini rappresentano esempi di prodotto. Per disponibilità e dettagli sulle collezioni,
              contattaci direttamente.
            </p>
            <p className="mt-3 font-bold leading-7 text-ceramica">{site.b2bNotice}</p>
          </div>

          <div className="mt-14 space-y-16">
            {collectionCategories.map((category) => {
              const categoryItems = catalogItems.filter((item) => item.category === category.slug);

              if (categoryItems.length === 0) {
                return null;
              }

              return (
                <section className="scroll-mt-28" id={category.slug} key={category.slug}>
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
                      <CatalogItemCard categoryTitle={category.title} item={item} key={item.slug} />
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
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">Collezioni per il punto vendita</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ceramica">
            Richiedi informazioni sulle collezioni disponibili
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-argilla">
            Se hai un negozio, una bottega o un punto vendita, contattaci per ricevere maggiori
            informazioni sulle creazioni disponibili.
          </p>
          {/*
            Attivare quando esiste un file reale:
            <a href="/catalogo-bressan-c2.pdf">Scarica il catalogo PDF</a>
          */}
          <ButtonLink href="/contatti" variant="secondary" className="mt-7">
            Richiedi informazioni
          </ButtonLink>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
