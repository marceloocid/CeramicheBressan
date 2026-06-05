import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function PrivacyPolicyPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Informativa"
          title="Privacy Policy"
          intro="Pagina predisposta per il testo legale definitivo. Prima della pubblicazione sostituire questo contenuto con un'informativa conforme, verificata dal cliente o dal consulente incaricato."
        />
        <div className="paper-panel mt-10 rounded-sm p-8 leading-8 text-argilla">
          <p>
            Titolare del trattamento: {site.legalName}, {site.address}, P.IVA / C.F. {site.vat}.
          </p>
          <p className="mt-4">
            I dati inviati tramite modulo di contatto saranno utilizzati esclusivamente per rispondere
            alla richiesta ricevuta. Integrare basi giuridiche, tempi di conservazione, diritti
            dell’interessato e riferimenti di contatto prima della messa online.
          </p>
        </div>
      </div>
    </main>
  );
}
