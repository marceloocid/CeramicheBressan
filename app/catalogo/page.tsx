import Image from "next/image";
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
            title="Collezioni per negozi e punti vendita"
            intro="Una selezione di ceramiche artistiche pensate per arricchire l’assortimento di negozi, botteghe e spazi dedicati alla casa, al regalo e al turismo."
            align="center"
          />
          <div className="paper-panel mx-auto mt-10 max-w-4xl rounded-sm p-6 text-center">
            <p className="leading-7 text-argilla">
              Le immagini rappresentano esempi di prodotto. Per disponibilità e dettagli sulle collezioni,
              contattaci direttamente.
            </p>
            <p className="mt-3 font-bold leading-7 text-ceramica">{site.b2bNotice}</p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {catalogItems.map((item) => (
              <article className="paper-panel overflow-hidden rounded-sm shadow-soft" key={`${item.name}-${item.category}`}>
                <div className="relative aspect-[4/3] bg-[#fffaf1]">
                  {/* Placeholder: sostituire con foto reale del prodotto corrispondente. */}
                  <Image
                    className={item.imageFit === "contain" ? "object-contain p-5 sm:p-7" : "object-cover"}
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ceramica">
                    {collectionCategories.find((category) => category.slug === item.category)?.title}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-ceramica">{item.name}</h2>
                  <p className="mt-3 leading-7 text-argilla">{item.description}</p>
                  <ButtonLink href="/contatti" variant="ghost" className="mt-5">
                    Chiedi informazioni
                  </ButtonLink>
                </div>
              </article>
            ))}
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
