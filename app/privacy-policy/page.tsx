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
    text: "servizio utilizzato per l'invio delle email generate dal modulo di contatto."
  },
  {
    name: "Cloudflare Turnstile",
    text: "servizio antispam utilizzato per verificare che l'invio del modulo non provenga da sistemi automatici."
  },
  {
    name: "Vercel Analytics",
    text: "strumento di analisi tecnica e statistica del traffico, se attivo nell'ambiente di pubblicazione."
  },
  {
    name: "Google Maps",
    text: "servizio esterno incorporato nella pagina Contatti per mostrare la posizione della sede produttiva."
  }
];

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
          <p className="border-l-4 border-ceramica bg-white/70 px-4 py-3 font-bold leading-7 text-ceramica">
            Documento da verificare con il titolare o con il consulente incaricato prima della
            pubblicazione definitiva.
          </p>

          <section className="mt-8">
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
            <p className="mt-3 font-bold text-ceramica">[DA COMPLETARE: PEC o email privacy dedicata]</p>
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
              del sito e analisi tecnica del traffico.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Base giuridica</h2>
            <p className="mt-3">
              La base giuridica può comprendere l’esecuzione di misure precontrattuali richieste
              dall’interessato, il consenso espresso tramite il modulo e il legittimo interesse del titolare
              alla sicurezza del sito e alla gestione delle richieste ricevute.
            </p>
            <p className="mt-3 font-bold text-ceramica">
              [DA VERIFICARE: formulazione definitiva della base giuridica con consulente privacy]
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Conservazione</h2>
            <p className="mt-3">
              I dati saranno conservati per il tempo necessario a gestire la richiesta e gli eventuali
              rapporti successivi con il punto vendita interessato.
            </p>
            <p className="mt-3 font-bold text-ceramica">[DA COMPLETARE: periodo di conservazione]</p>
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
            <p className="mt-3 font-bold text-ceramica">[DA COMPLETARE: data di aggiornamento]</p>
          </section>
        </div>
      </div>
    </main>
  );
}
