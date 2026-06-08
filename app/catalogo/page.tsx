import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { catalogItems, collectionCategories } from "@/data/site";

export default function CatalogoPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Catalogo"
            title="Una selezione delle nostre ceramiche artistiche"
            intro="Questa pagina presenta esempi e categorie di prodotto. Non è una vendita online: per disponibilità, varianti e visite in laboratorio puoi inviare una richiesta o telefonare."
            align="center"
          />

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
                    Chiedi disponibilità
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-16 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-4xl rounded-sm p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">Catalogo PDF</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ceramica">
            Catalogo PDF - prossimamente disponibile
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-argilla">
            Il pulsante potrà essere attivato quando sarà disponibile un file PDF confermato con il
            cliente.
          </p>
          {/*
            Attivare quando esiste un file reale:
            <a href="/catalogo-bressan-c2.pdf">Scarica il catalogo PDF</a>
          */}
          <button
            className="mt-7 min-h-11 cursor-not-allowed rounded-sm border border-oro/50 px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-argilla opacity-70"
            disabled
            type="button"
          >
            Download non disponibile
          </button>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
