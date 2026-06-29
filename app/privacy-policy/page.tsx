import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa privacy per il sito Ceramiche Artistiche Bressan C2, il modulo di contatto e i servizi tecnici collegati."
};

const thirdPartyServices = [
  {
    name: "Resend",
    text: "servizio utilizzato lato server per l'invio delle email generate dal modulo di contatto."
  },
  {
    name: "Cloudflare Turnstile",
    text: "servizio antispam utilizzato per verificare che l'invio del modulo non provenga da sistemi automatici."
  },
  {
    name: "Vercel Analytics",
    text: "strumento di statistiche aggregate e privacy-friendly, attivato solo se l'utente accetta la categoria Statistiche."
  },
  {
    name: "Google Maps",
    text: "contenuto esterno disponibile nella pagina Contatti, caricato nella pagina solo dopo il consenso ai Contenuti esterni."
  }
];

const lastUpdated = "29 giugno 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Informativa"
          title="Privacy Policy"
          intro="Informazioni sul trattamento dei dati personali raccolti tramite questo sito e tramite il modulo di richiesta informazioni."
          as="h1"
        />

        <div className="paper-panel mt-10 rounded-sm p-6 leading-8 text-argilla sm:p-8">
          {/* Nota interna: documento da verificare con il titolare o con un consulente privacy prima della pubblicazione definitiva. */}

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Titolare del trattamento</h2>
            <p className="mt-3">
              Il titolare del trattamento è {site.legalName}, con sede in {site.address}, C.F. / P.IVA{" "}
              {site.vat}.
            </p>
            <p className="mt-3">
              Email di contatto:{" "}
              <a className="focus-ring font-bold text-ceramica underline-offset-4 hover:underline" href={site.emailHref}>
                {site.email}
              </a>
              .
            </p>
            <p className="mt-3">
              Per richieste relative alla privacy è possibile utilizzare lo stesso recapito email indicato
              sopra.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Dati raccolti</h2>
            <p className="mt-3">
              Il modulo di contatto può raccogliere nome e cognome, nome del negozio o attività, email,
              telefono, città, messaggio e consenso al trattamento dei dati personali per essere
              ricontattati in merito alla richiesta inviata.
            </p>
            <p className="mt-3">
              Il sito può inoltre trattare dati tecnici necessari al funzionamento, alla sicurezza e alla
              protezione antispam del modulo.
            </p>
            <p className="mt-3">
              Le preferenze cookie e servizi esterni vengono salvate localmente nel browser per ricordare
              la scelta dell’utente.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Finalità del trattamento</h2>
            <p className="mt-3">
              I dati inviati tramite il modulo vengono utilizzati per rispondere alle richieste ricevute,
              fornire informazioni sulle linee disponibili, valutare collaborazioni con negozi, botteghe e
              punti vendita e gestire comunicazioni collegate alla richiesta.
            </p>
            <p className="mt-3">
              I dati tecnici possono essere utilizzati per sicurezza, prevenzione dello spam, funzionamento
              del sito, gestione delle preferenze e, solo con consenso, statistiche aggregate del traffico.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Base giuridica</h2>
            <p className="mt-3">
              Il trattamento dei dati inviati volontariamente tramite il modulo di contatto si basa
              sull&apos;esecuzione di misure precontrattuali richieste dall&apos;interessato e sul consenso espresso
              per essere ricontattati in merito alla richiesta inviata.
            </p>
            <p className="mt-3">
              I trattamenti tecnici necessari al funzionamento, alla sicurezza del sito e alla prevenzione
              dello spam si basano sul legittimo interesse del titolare a mantenere il sito sicuro e
              correttamente funzionante.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Conservazione</h2>
            <p className="mt-3">
              I dati saranno conservati per il tempo necessario a gestire la richiesta e gli eventuali
              rapporti successivi con il punto vendita interessato. In assenza di rapporti commerciali
              successivi, le richieste ricevute tramite il modulo sono conservate di norma per un periodo
              massimo di 24 mesi, salvo obblighi di legge o necessità di tutela dei diritti del titolare.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Servizi terzi</h2>
            <div className="mt-4 grid gap-4">
              {thirdPartyServices.map((service) => (
                <p className="rounded-sm border border-oro/35 bg-white/55 px-4 py-3" key={service.name}>
                  <strong className="text-ceramica">{service.name}:</strong> {service.text}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Diritti dell’interessato</h2>
            <p className="mt-3">
              L’interessato può richiedere accesso, rettifica, cancellazione, limitazione, opposizione al
              trattamento e portabilità dei dati nei casi previsti dalla normativa applicabile.
            </p>
            <p className="mt-3">
              Le richieste possono essere inviate ai recapiti indicati in questa informativa.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Ultimo aggiornamento</h2>
            <p className="mt-3 font-bold text-ceramica">{lastUpdated}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
