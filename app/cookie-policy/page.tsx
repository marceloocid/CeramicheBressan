import { SectionTitle } from "@/components/SectionTitle";

export default function CookiePolicyPage() {
  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Informativa"
          title="Cookie Policy"
          intro="Pagina predisposta per il testo definitivo sui cookie. Verificare strumenti installati, mappe, analytics e banner consenso prima della pubblicazione."
        />
        <div className="paper-panel mt-10 rounded-sm p-8 leading-8 text-argilla">
          <p>
            Questo sito è predisposto come catalogo informativo. Prima della pubblicazione inserire
            l’elenco dei cookie tecnici e di eventuali servizi terzi effettivamente attivati.
          </p>
        </div>
      </div>
    </main>
  );
}
