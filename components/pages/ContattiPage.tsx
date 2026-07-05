import { ContactForm } from "@/components/ContactForm";
import { GoogleMapConsent } from "@/components/GoogleMapConsent";
import { site } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function ContattiPageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].contatti;

  return (
    <main>
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{text.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-tight text-ceramica sm:text-6xl">
                {text.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-argilla">{text.intro}</p>
            </div>

            <aside className="paper-panel rounded-sm border-l-4 border-l-ceramica p-6 sm:p-7">
              <h2 className="font-serif text-2xl font-semibold text-ceramica">{text.infoTitle}</h2>
              <p className="mt-3 leading-7 text-argilla">{text.infoText}</p>
              <div className="mt-5 grid gap-3">
                {text.highlights.map((item) => (
                  <p className="flex gap-3 text-sm font-bold leading-6 text-argilla" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ceramica" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-8 grid gap-4 rounded-sm border border-oro/35 bg-white/55 p-4 sm:grid-cols-2 lg:grid-cols-3 lg:p-5">
            <div className="px-2 py-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ceramica">{text.phone}</p>
              <a
                className="focus-ring mt-2 inline-block text-lg font-bold text-ceramica underline-offset-4 hover:underline"
                href={site.phoneHref}
              >
                {site.phone}
              </a>
            </div>
            <div className="px-2 py-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ceramica">{text.productionSite}</p>
              <address className="mt-2 not-italic leading-7 text-argilla">
                {site.streetAddress}, {site.city} ({site.province})
              </address>
            </div>
            <div className="px-2 py-2 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ceramica">{text.commercialRequests}</p>
              <a className="focus-ring mt-2 inline-block font-bold text-ceramica underline-offset-4 hover:underline" href="#richiesta">
                {text.formAnchor}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-36 bg-white/45 px-4 py-16 sm:px-6 lg:scroll-mt-40 lg:px-8 lg:py-20" id="richiesta">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{text.formEyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ceramica sm:text-5xl">
              {text.formTitle}
            </h2>
            <p className="mt-5 leading-8 text-argilla">{text.formIntro}</p>
            <div className="mt-8 rounded-sm border border-oro/35 bg-avorio/70 p-5 leading-7 text-argilla">
              <p className="font-bold text-ceramica">{text.directTitle}</p>
              <a
                className="focus-ring mt-2 inline-block break-words font-bold text-ceramica underline-offset-4 hover:underline"
                href={site.emailHref}
              >
                {site.email}
              </a>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>

      <section className="scroll-mt-36 bg-[#f2e4ca] px-4 py-16 sm:px-6 lg:scroll-mt-40 lg:px-8 lg:py-20" id="dove-siamo">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{text.mapEyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ceramica">
                {text.mapTitle}
              </h2>
              <p className="mt-5 leading-8 text-argilla">{text.mapText}</p>
            </div>
            <div className="paper-panel overflow-hidden rounded-sm p-4 shadow-soft">
              <GoogleMapConsent locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
