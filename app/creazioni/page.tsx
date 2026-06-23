import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionTitle } from "@/components/SectionTitle";
import { collectionCategories, site } from "@/data/site";

export default function CreazioniPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Creazioni e collezioni"
            title="Collezioni artigianali in ceramica"
            intro="Una panoramica delle proposte Bressan C2 per negozi casa, regalo, botteghe e punti vendita che scelgono prodotti artigianali italiani."
            align="center"
          />
          <div className="paper-panel mx-auto mt-10 max-w-4xl rounded-sm p-6 text-center text-argilla">
            <p className="leading-7">
              Le immagini rappresentano esempi di produzione. Per conoscere collezioni disponibili
              e dettagli sulle creazioni, contattaci direttamente.
            </p>
            <p className="mt-4 font-bold text-ceramica">{site.b2bNotice}</p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collectionCategories.map((category) => (
              <CollectionCard {...category} key={category.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Dal tema al prodotto"
            title="Una lettura ordinata delle proposte"
            intro="Questa pagina presenta le famiglie decorative e le direzioni di assortimento. Il catalogo raccoglie invece le serie fotografiche complete, con tutti gli esempi disponibili per ogni tema."
          />
          <div className="paper-panel mt-10 grid gap-6 rounded-sm p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-ceramica">
                Vuoi vedere gli esempi concreti?
              </h3>
              <p className="mt-3 leading-7 text-argilla">
                Nel catalogo trovi le linee come agrumi, limoni, pizza, pasta, ortaggi, fiori e mare,
                con tutte le immagini disponibili per ciascuna serie.
              </p>
            </div>
            <ButtonLink href="/catalogo" variant="secondary">
              Vai al catalogo
            </ButtonLink>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
