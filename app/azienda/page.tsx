import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Azienda artigiana a Pianezze",
  description:
    "Scopri Ceramiche Artistiche Bressan C2, bottega artigiana a Pianezze, Vicenza, specializzata in ceramiche dipinte a mano per negozi e punti vendita."
};

export default function AziendaPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <SectionTitle
            eyebrow="Azienda"
            title="Una bottega artigiana nel territorio vicentino"
            intro="Da Bressan C2 la ceramica nasce come oggetto decorativo e funzionale: forme, colori e dettagli pensati per portare nei punti vendita il calore della lavorazione artigianale italiana."
            as="h1"
          />
          <div className="image-frame ornamental-border relative aspect-[4/3] overflow-hidden rounded-sm">
            {/* Placeholder: sostituire con immagine reale dell'esterno o dell'interno laboratorio. */}
            <Image
              className="object-cover"
              src="/images/laboratorio-ceramica.jpg"
              alt="Bottega artigiana di ceramiche a Pianezze"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 text-lg leading-8 text-argilla md:grid-cols-2">
          <p>
            Ceramiche Artistiche Bressan C2 opera a Pianezze, in un territorio vicentino dove la
            ceramica conserva un forte legame con la casa, la tavola e gli oggetti decorativi.
            La bottega realizza ceramiche artistiche, oggettistica varia e prodotti per la cucina
            con un linguaggio caldo, familiare e riconoscibile.
          </p>
          <p>
            Il lavoro artigianale si riconosce nella cura delle superfici, nella scelta dei colori e
            nell’attenzione al dettaglio. Ogni creazione viene pensata per essere proposta in un
            punto vendita con un carattere riconoscibile, caldo e autenticamente artigianale.
          </p>
          <p>
            La continuità familiare e la dimensione artigianale permettono un rapporto diretto con
            negozi, botteghe e realtà che scelgono ceramiche italiane da inserire nel proprio
            assortimento con cura.
          </p>
          <p>
            Non una piattaforma di vendita online, ma una vetrina di forme e decori da conoscere
            attraverso catalogo visuale, richiesta di informazioni e contatto diretto.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 shadow-soft">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">Per negozi e punti vendita</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ceramica">
            Creazioni artigianali da inserire nel tuo spazio
          </h2>
          <p className="mt-5 text-lg leading-8 text-argilla">
            Le nostre creazioni sono rivolte a negozi, botteghe e punti vendita dedicati alla casa,
            al regalo e al turismo, che cercano oggetti in ceramica artistica da proporre con identità
            e valore artigianale.
          </p>
          <p className="mt-5 border-l-4 border-ceramica bg-white/65 px-4 py-3 font-bold leading-7 text-ceramica">
            {site.b2bNotice}
          </p>
        </div>
      </section>

      <section className="bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle
            eyebrow="Dove lavoriamo"
            title="Pianezze, nel territorio vicentino"
            intro="La nostra sede produttiva si trova a Pianezze, in provincia di Vicenza. Da qui realizziamo ceramiche artistiche dipinte a mano per negozi, botteghe e punti vendita."
          />
          <div className="paper-panel rounded-sm p-7 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">Sede produttiva</p>
            <address className="mt-3 not-italic text-lg leading-8 text-argilla">
              {site.streetAddress}
              <br />
              {site.postalCode} {site.city} ({site.province}), Italia
            </address>
            <p className="mt-4 leading-7 text-argilla">
              Per indicazioni, contatti e mappa completa puoi visitare la pagina contatti.
            </p>
            <ButtonLink href="/contatti#dove-siamo" variant="secondary" className="mt-6">
              Vedi contatti e mappa
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 shadow-soft">
          <h2 className="font-serif text-3xl font-semibold text-ceramica">Dati aziendali</h2>
          <dl className="mt-6 grid gap-5 text-argilla sm:grid-cols-2">
            <div>
              <dt className="font-bold text-ceramica">Nome visibile</dt>
              <dd className="mt-1">{site.visibleName}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">Ragione sociale</dt>
              <dd className="mt-1">{site.legalName}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">Indirizzo</dt>
              <dd className="mt-1">{site.address}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">Telefono</dt>
              <dd className="mt-1">
                <a className="focus-ring underline-offset-4 hover:underline" href={site.phoneHref}>
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">Email</dt>
              <dd className="mt-1">
                <a className="focus-ring underline-offset-4 hover:underline" href={site.emailHref}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">P.IVA / C.F.</dt>
              <dd className="mt-1">{site.vat}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">Attività</dt>
              <dd className="mt-1">
                Ceramiche artistiche, oggettistica varia in ceramica, prodotti in ceramica per la
                casa e la cucina, dipinti a mano.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
