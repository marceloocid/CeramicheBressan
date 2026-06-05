import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { collectionCategories, site } from "@/data/site";

const pillars = [
  {
    title: "Tradizione artigiana",
    text: "Una bottega legata al territorio vicentino, dove ogni oggetto viene seguito con attenzione e sensibilità manuale."
  },
  {
    title: "Ceramica dipinta a mano",
    text: "Decori, colori e piccoli dettagli rendono le creazioni riconoscibili, calde e naturalmente diverse tra loro."
  },
  {
    title: "Oggetti per la casa e la tavola",
    text: "Ceramiche pensate per entrare negli ambienti quotidiani con eleganza, funzionalita e carattere artigianale."
  }
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <div className="ceramic-gloss absolute -right-24 top-12 h-[420px] w-[420px] rounded-full blur-[1px] sm:h-[560px] sm:w-[560px]" />
          <div className="ceramic-gloss absolute -left-40 bottom-8 h-[360px] w-[360px] rounded-full opacity-70 sm:h-[480px] sm:w-[480px]" />
        </div>
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="relative z-10 max-w-3xl">
            <div className="brand-plaque mb-8 inline-block max-w-full px-6 py-4">
              <p className="relative z-10 text-lg italic leading-none text-ceramica">Ceramiche Artistiche</p>
              <p className="brand-script relative z-10 text-5xl font-semibold leading-none text-ceramica sm:text-7xl">
                Bressan C2
              </p>
              <p className="relative z-10 mt-1 font-serif text-lg font-semibold italic text-argilla">
                Prodotto artigianale fatto a mano
              </p>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-ceramica">
              Bottega artigiana a Pianezze
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] text-ceramica sm:text-6xl">
              Ceramiche artistiche dipinte a mano a Pianezze
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-argilla">
              Oggetti in ceramica per la casa, la tavola e la cucina, realizzati con cura artigianale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/creazioni">Scopri le creazioni</ButtonLink>
              <ButtonLink href="/contatti" variant="ghost">
                Contattaci
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary">
                Chiama ora
              </ButtonLink>
            </div>
          </div>
          <div className="ornamental-border image-frame relative aspect-[4/5] overflow-hidden rounded-sm">
            {/* Placeholder: sostituire con foto reale del laboratorio o di una selezione prodotti Bressan C2. */}
            <Image
              priority
              className="object-cover"
              src="/images/laboratorio-ceramica.jpg"
              alt="Laboratorio artigianale di ceramiche artistiche a Pianezze"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute bottom-6 right-6 flex gap-2" aria-hidden="true">
              <span className="painted-leaf" />
              <span className="painted-leaf translate-y-3 rotate-12" />
              <span className="painted-leaf -translate-y-1 rotate-45" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="La bottega"
            title="Ceramiche nate per abitare la quotidianità"
            intro="Da Bressan C2 la ceramica nasce come oggetto quotidiano e decorativo: forme, colori e dettagli pensati per portare nella casa il calore della lavorazione artigianale."
          />
          <div className="paper-panel rounded-sm p-8 text-lg leading-8 text-argilla">
            <p>
              A Pianezze, nel territorio vicentino, la bottega realizza ceramiche artistiche,
              oggettistica varia e prodotti per la casa e la cucina con un linguaggio caldo,
              familiare e riconoscibile.
            </p>
            <p className="mt-5">
              La vendita avviene attraverso il contatto diretto: ascolto, disponibilità e scelta
              consapevole dei pezzi più adatti alla casa, alla tavola o a un regalo curato.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article className="paper-panel rounded-sm p-7" key={pillar.title}>
                <h2 className="font-serif text-2xl font-semibold text-ceramica">{pillar.title}</h2>
                <p className="mt-4 leading-7 text-argilla">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Creazioni"
            title="Una selezione per casa, tavola e cucina"
            intro="Il catalogo visuale presenta categorie e ispirazioni senza prezzi, carrello o acquisto online: ogni richiesta viene gestita con contatto diretto."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collectionCategories.slice(0, 3).map((category) => (
              <CollectionCard {...category} key={category.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-sm">
            {/* Placeholder: sostituire con foto ravvicinata di decorazione manuale o dettagli prodotto. */}
            <Image
              className="object-cover"
              src="/images/dettagli-decorazione.jpg"
              alt="Dettagli di decorazione manuale su ceramica"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="Dal laboratorio alla tua casa"
              title="Il valore di un oggetto scelto con calma"
              intro="Ogni creazione nasce dal dialogo tra forma, colore e uso quotidiano. La lavorazione artigianale permette di dare attenzione al dettaglio e di proporre ceramiche adatte a chi cerca un prodotto personale, decorativo e durevole."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/lavorazione" variant="ghost">
                Scopri la lavorazione
              </ButtonLink>
              <ButtonLink href="/contatti" variant="secondary">
                Richiedi informazioni
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
