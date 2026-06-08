import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

const audiences = [
  "Negozi di articoli regalo",
  "Negozi per la casa",
  "Botteghe artigiane",
  "Negozi di ceramiche",
  "Punti vendita turistici",
  "Concept store",
  "Attività commerciali"
];

const reasons = [
  "Produzione artigianale",
  "Estetica italiana",
  "Oggetti decorativi e funzionali",
  "Cura della decorazione",
  "Ceramiche adatte all’esposizione in negozio",
  "Contatto diretto per informazioni e dettagli"
];

export default function PerRivenditoriPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Per negozi"
            title="Ceramiche artigianali per il tuo negozio"
            intro="Collaboriamo con negozi, botteghe e punti vendita che cercano oggetti in ceramica curati, decorativi e dal carattere italiano."
            align="center"
          />
          <div className="paper-panel mx-auto mt-10 max-w-4xl rounded-sm p-6 text-center">
            <p className="text-lg font-bold leading-8 text-ceramica">{site.b2bNotice}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Collaborazioni"
              title="Per chi lavoriamo"
              intro="Le nostre creazioni trovano spazio in realtà che scelgono oggetti artigianali italiani da esporre e raccontare."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((item) => (
              <div className="paper-panel rounded-sm px-5 py-4 font-bold text-argilla" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Valore professionale"
            title="Perché scegliere Bressan C2"
            intro="Una produzione artigianale riconoscibile aiuta il negozio a proporre oggetti con identità, cura del dettaglio e valore decorativo."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <article className="paper-panel rounded-sm p-5" key={item}>
                <h2 className="font-serif text-xl font-semibold text-ceramica">{item}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 text-center shadow-soft">
          <h2 className="font-serif text-3xl font-semibold text-ceramica">
            Vuoi inserire le nostre ceramiche nel tuo negozio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-argilla">
            Contattaci per conoscere le collezioni disponibili e valutare insieme le creazioni più
            adatte al tuo punto vendita.
          </p>
          <ButtonLink href="/contatti" variant="secondary" className="mt-7">
            Contattaci
          </ButtonLink>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
