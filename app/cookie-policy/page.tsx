import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sui cookie e sui servizi terzi usati dal sito Ceramiche Artistiche Bressan C2."
};

const services = [
  {
    title: "Cloudflare Turnstile",
    text: "usato nel modulo di contatto per prevenire invii automatici e spam. Può trattare dati tecnici necessari alla verifica."
  },
  {
    title: "Vercel Analytics",
    text: "presente nel progetto per analisi tecniche e statistiche del traffico. Verificare la configurazione effettiva nell'ambiente di produzione."
  },
  {
    title: "Google Maps",
    text: "incorporato nella pagina Contatti per mostrare la sede produttiva. Può comportare il caricamento di risorse e cookie di Google."
  },
  {
    title: "Resend",
    text: "utilizzato lato server per inviare le richieste del modulo via email; non è un widget di tracciamento nel browser."
  }
];

export default function CookiePolicyPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Informativa"
          title="Cookie Policy"
          intro="Informazioni sull'uso di cookie, tecnologie simili e servizi terzi collegati al funzionamento di questo sito."
          as="h1"
        />

        <div className="paper-panel mt-10 rounded-sm p-6 leading-8 text-argilla sm:p-8">
          <p className="border-l-4 border-ceramica bg-white/70 px-4 py-3 font-bold leading-7 text-ceramica">
            Documento da verificare con il titolare o con il consulente incaricato prima della
            pubblicazione definitiva.
          </p>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Titolare</h2>
            <p className="mt-3">
              Il sito è riferito a {site.legalName}, con sede in {site.address}, C.F. / P.IVA {site.vat}.
            </p>
            <p className="mt-3 font-bold text-ceramica">[DA COMPLETARE: email privacy o PEC]</p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Cookie tecnici</h2>
            <p className="mt-3">
              Il sito può utilizzare cookie tecnici o tecnologie equivalenti necessari al corretto
              funzionamento delle pagine, alla sicurezza e alla gestione del modulo di contatto.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Servizi terzi</h2>
            <div className="mt-4 grid gap-4">
              {services.map((service) => (
                <p className="rounded-sm border border-oro/35 bg-white/55 px-4 py-3" key={service.title}>
                  <strong className="text-ceramica">{service.title}:</strong> {service.text}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Consenso e preferenze</h2>
            <p className="mt-3">
              Prima della pubblicazione definitiva occorre verificare quali servizi siano effettivamente
              attivi, se richiedano consenso preventivo e se sia necessario integrare un banner di gestione
              preferenze.
            </p>
            <p className="mt-3 font-bold text-ceramica">
              [DA VERIFICARE: configurazione definitiva di analytics, mappe e strumenti di consenso]
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">Aggiornamento</h2>
            <p className="mt-3 font-bold text-ceramica">[DA COMPLETARE: data di aggiornamento]</p>
          </section>
        </div>
      </div>
    </main>
  );
}
