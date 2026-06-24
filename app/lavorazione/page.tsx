import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    title: "Decorazione manuale",
    text: "Il decoro nasce dal gesto della mano: colori, pennellate e piccoli segni rendono ogni ceramica personale e riconoscibile."
  },
  {
    title: "Cura dei dettagli",
    text: "Bordi, superfici e proporzioni vengono osservati con attenzione, per ottenere oggetti piacevoli da usare e da esporre."
  },
  {
    title: "Smalti, colori e finiture",
    text: "La scelta cromatica accompagna la forma e valorizza il carattere della ceramica, tra toni classici e richiami alla tradizione."
  },
  {
    title: "Produzione pensata per durare",
    text: "Le creazioni sono pensate per mantenere valore nel tempo e portare nel punto vendita una presenza curata e riconoscibile."
  }
];

export default function LavorazionePage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-sm">
            {/* Placeholder: sostituire con foto reale della decorazione a mano. */}
            <Image
              className="object-cover"
              src="/images/dettagli-decorazione.jpg"
              alt="Decorazione manuale di una ceramica artistica"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <SectionTitle
            eyebrow="Lavorazione artigianale"
            title="La qualità si vede nei dettagli"
            intro="La ceramica artigianale richiede tempo, sensibilità e attenzione. Bressan C2 valorizza il lavoro manuale per creare oggetti caldi, curati e riconoscibili."
          />
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <article className="paper-panel rounded-sm p-7" key={step.title}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ceramica">{step.title}</h2>
              <p className="mt-4 leading-7 text-argilla">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 text-center shadow-soft">
          <h2 className="font-serif text-3xl font-semibold text-ceramica">
            Vuoi conoscere le linee disponibili?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-argilla">
            Se hai un negozio, una bottega o un punto vendita, contattaci per conoscere prodotti,
            categorie e disponibilità.
          </p>
          <ButtonLink href="/contatti" variant="secondary" className="mt-7">
            Richiedi informazioni
          </ButtonLink>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
