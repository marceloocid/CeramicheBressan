import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { GalleryFilter } from "@/components/GalleryFilter";
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
            eyebrow="Galleria"
            title="Filtra gli esempi per categoria"
            intro="Le immagini sono pensate come vetrina di ispirazione e punto di partenza per una richiesta diretta."
          />
          <div className="mt-10">
            <GalleryFilter />
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
