import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CollectionCard } from "@/components/CollectionCard";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { collectionCategories } from "@/data/site";

const pillars = [
  {
    title: "Tradizione artigianale",
    text: "Una bottega legata al territorio vicentino, dove forme e colori conservano il calore della ceramica italiana."
  },
  {
    title: "Decorazioni dipinte a mano",
    text: "Decori, pennellate e piccoli dettagli rendono ogni creazione riconoscibile, viva e naturalmente diversa."
  },
  {
    title: "Creazioni per negozi e punti vendita",
    text: "Oggetti in ceramica pensati per arricchire esposizioni, vetrine e spazi dedicati alla casa e al regalo."
  }
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <Image
          priority
          className="absolute inset-0 -z-20 object-cover"
          src="/images/home-laboratorio-bressan.jpg"
          alt="Laboratorio Bressan C2 con ceramiche artistiche dipinte a mano"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10170d]/82 via-[#1c2a16]/62 to-[#10170d]/24" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10170d]/58 via-transparent to-[#10170d]/34" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_45%,rgba(255,249,240,0.18),transparent_34%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="relative z-10 max-w-3xl rounded-sm border border-white/35 bg-[#fffaf1]/90 p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:p-10">
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
              Ceramiche artistiche dipinte a mano
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-argilla">
              Creazioni in ceramica per la casa, la tavola e il regalo, pensate per arricchire negozi,
              botteghe e punti vendita con il valore dell’artigianato italiano.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/creazioni">Scopri le collezioni</ButtonLink>
              <ButtonLink href="/catalogo" variant="ghost">
                Richiedi informazioni
              </ButtonLink>
              <ButtonLink href="/contatti" variant="secondary">
                Contattaci
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="La bottega"
            title="Ceramiche nate per essere esposte, raccontate e scelte"
            intro="Lavoriamo con negozi, botteghe e punti vendita che desiderano proporre ceramiche artistiche italiane, curate nei dettagli e dal carattere autentico."
          />
          <div className="paper-panel rounded-sm p-8 text-lg leading-8 text-argilla">
            <p>
              A Pianezze, nel territorio vicentino, Bressan C2 realizza ceramiche artistiche,
              oggettistica varia e prodotti per la casa, la tavola, la cucina e il regalo con un linguaggio
              caldo, familiare e riconoscibile.
            </p>
            <p className="mt-5">
              La web è una vetrina di creazioni e collezioni: per conoscere disponibilità e dettagli,
              il contatto avviene direttamente con l’azienda.
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
            eyebrow="Collezioni"
            title="Una selezione per casa, tavola e regalo"
            intro="Il catalogo visuale presenta categorie e ispirazioni come vetrina di creazioni: ogni richiesta viene gestita con contatto diretto."
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
              eyebrow="Pensate per il punto vendita"
              title="Oggetti da esporre, raccontare e scegliere"
              intro="Le nostre ceramiche nascono per essere esposte, raccontate e scelte: oggetti decorativi e funzionali che portano nel negozio il calore della lavorazione artigianale italiana."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/per-rivenditori" variant="ghost">
                Per negozi
              </ButtonLink>
              <ButtonLink href="/creazioni" variant="secondary">
                Scopri le collezioni
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
