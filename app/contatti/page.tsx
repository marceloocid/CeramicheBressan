import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contatti e richiesta informazioni",
  description:
    "Contatti, sede e modulo di richiesta informazioni per Ceramiche Artistiche Bressan C2 a Pianezze, Vicenza."
};

export default function ContattiPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Contatti"
            title="Contatti"
            intro="Per informazioni sulle linee disponibili, sulle collaborazioni con negozi e punti vendita o sulle creazioni più adatte al tuo assortimento, contattaci direttamente."
            align="center"
            as="h1"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="paper-panel self-start rounded-sm border-l-4 border-l-ceramica p-5 sm:p-6">
              <h2 className="font-serif text-2xl font-semibold text-ceramica">Informazioni per negozi</h2>
              <p className="mt-3 leading-7 text-argilla">
                Raccontaci il tuo negozio o il tuo punto vendita: ti risponderemo con indicazioni
                sulle linee disponibili, sulle collaborazioni e sulle creazioni più adatte al tuo assortimento.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  "Linee disponibili per negozi e punti vendita",
                  "Informazioni su assortimento e collaborazioni",
                  "Produzione artigianale a Pianezze, Vicenza"
                ].map((item) => (
                  <p className="border-l border-oro/60 pl-3 text-sm font-bold leading-6 text-argilla" key={item}>
                    {item}
                  </p>
                ))}
              </div>
              <ButtonLink href="/contatti#richiesta" variant="secondary" className="mt-5">
                Richiedi informazioni
              </ButtonLink>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="paper-panel rounded-sm p-6">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Telefono</h2>
                <a
                  className="focus-ring mt-3 inline-block text-xl font-bold text-ceramica underline-offset-4 hover:underline"
                  href={site.phoneHref}
                >
                  {site.phone}
                </a>
                <p className="mt-3 leading-7 text-argilla">Preferisci parlare direttamente con noi?</p>
              </div>
              <div className="paper-panel rounded-sm p-6">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Email</h2>
                <a
                  className="focus-ring mt-3 inline-block break-words font-bold text-ceramica underline-offset-4 hover:underline"
                  href={site.emailHref}
                >
                  {site.email}
                </a>
              </div>
              <div className="paper-panel rounded-sm p-6 sm:col-span-2">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Sede produttiva</h2>
                <address className="mt-3 not-italic leading-7 text-argilla">
                  {site.streetAddress}
                  <br />
                  {site.postalCode} {site.city} ({site.province}), Italia
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-36 bg-white/45 px-4 py-20 sm:px-6 lg:scroll-mt-40 lg:px-8" id="richiesta">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Modulo"
            title="Richiedi informazioni"
            intro="Compila il modulo per ricevere informazioni sulle linee disponibili, sulle collaborazioni con negozi e sui prodotti più adatti al tuo punto vendita."
          />
          <ContactForm />
        </div>
      </section>

      <section className="scroll-mt-36 bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:scroll-mt-40 lg:px-8" id="dove-siamo">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Dove siamo"
            title="Via San Giuseppe, 9 - Pianezze"
            intro="Sede produttiva di Ceramiche Artistiche Bressan C2 a Pianezze, Vicenza."
          />
          <div className="paper-panel mt-10 overflow-hidden rounded-sm p-4 shadow-soft">
            <iframe
              className="h-[420px] w-full rounded-sm border-0"
              title="Mappa per Ceramiche Artistiche Bressan C2 a Pianezze"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Via%20San%20Giuseppe%209%2036060%20Pianezze%20VI%20Italia&output=embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
