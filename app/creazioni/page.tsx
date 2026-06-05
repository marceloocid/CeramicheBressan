import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { GalleryFilter } from "@/components/GalleryFilter";
import { SectionTitle } from "@/components/SectionTitle";
import { collectionCategories } from "@/data/site";

export default function CreazioniPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Creazioni e collezioni"
            title="Catalogo visuale di ceramiche artistiche"
            intro="Una panoramica delle proposte Bressan C2 per la casa, la tavola, la cucina e il regalo. La disponibilita viene verificata su richiesta, senza acquisto online."
            align="center"
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collectionCategories.map((category) => (
              <CollectionCard {...category} key={category.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe3d1] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Galleria"
            title="Filtra le ispirazioni per categoria"
            intro="Le immagini sono pensate come vetrina e punto di partenza per una richiesta diretta."
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
