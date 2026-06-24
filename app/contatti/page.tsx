import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export default function ContattiPage() {
  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Contatti"
              title="Contatti"
              intro="Per informazioni sulle collezioni e sulle possibilità di collaborazione con negozi e punti vendita, contattaci direttamente."
            />
            <div className="mt-10 grid gap-6">
              <div className="paper-panel rounded-sm border-l-4 border-l-ceramica p-6">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Collezioni e informazioni</h2>
                <p className="mt-3 leading-7 text-argilla">
                  Raccontaci il tuo negozio o il tuo punto vendita: ti risponderemo con indicazioni
                  sulle creazioni più adatte e sulle linee disponibili.
                </p>
              </div>
              <div className="paper-panel rounded-sm p-6">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Sede produttiva</h2>
                <address className="mt-3 not-italic leading-7 text-argilla">{site.address}</address>
              </div>
              <div className="paper-panel rounded-sm p-6">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Telefono</h2>
                <a
                  className="focus-ring mt-3 inline-block text-xl font-bold text-ceramica underline-offset-4 hover:underline"
                  href={site.phoneHref}
                >
                  {site.phone}
                </a>
                <p className="mt-3 leading-7 text-argilla">
                  Preferisci parlare direttamente con noi? Chiamaci allo {site.phone}.
                </p>
              </div>
              <div className="paper-panel rounded-sm p-6">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Email</h2>
                <a
                  className="focus-ring mt-3 inline-block font-bold text-ceramica underline-offset-4 hover:underline"
                  href={site.emailHref}
                >
                  {site.email}
                </a>
              </div>
              <div className="paper-panel rounded-sm p-6">
                <h2 className="font-serif text-2xl font-semibold text-ceramica">Facebook</h2>
                <a
                  className="focus-ring mt-3 inline-block font-bold text-ceramica underline-offset-4 hover:underline"
                  href={site.facebookUrl}
                >
                  Visita la pagina Facebook
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
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
