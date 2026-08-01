import { ButtonLink } from "@/components/ButtonLink";
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
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-ceramica">{text.phone}</h2>
              <dl className="mt-3 grid gap-2 text-argilla">
                <div>
                  <dt className="text-sm font-bold text-ceramica">{text.landline}</dt>
                  <dd>
                    <a className="focus-ring text-lg font-bold underline-offset-4 hover:underline" href={site.phoneHref}>
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-ceramica">{text.mobile}</dt>
                  <dd>
                    <a className="focus-ring text-lg font-bold underline-offset-4 hover:underline" href={site.mobilePhoneHref}>
                      {site.mobilePhone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-2 py-2">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-ceramica">{text.openingHours}</h2>
              <div className="mt-3 leading-7 text-argilla">
                <p>{text.weekdaysHours}</p>
                <p>{text.weekendHours}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-ceramica">{text.productionSite}</p>
                <address className="mt-1 not-italic leading-7 text-argilla">
                  {site.streetAddress}, {site.city} ({site.province})
                </address>
              </div>
            </div>
            <div className="flex flex-col items-start px-2 py-2 sm:col-span-2 lg:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-ceramica">
                {text.commercialRequests}
              </h2>
              <p className="mt-3 max-w-sm leading-7 text-argilla">{text.formSummary}</p>
              <ButtonLink className="mt-5" href="#richiesta" variant="ghost">
                {text.formAnchor}
              </ButtonLink>
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
            <p className="mt-3 font-bold leading-7 text-ceramica">{text.responseTime}</p>
            <div className="mt-8 rounded-sm border border-oro/35 bg-avorio/70 p-5">
              <p className="font-bold text-ceramica">{text.directTitle}</p>
              <div className="mt-4 grid gap-3">
                <a
                  className="focus-ring group flex min-h-14 w-full items-center gap-3 rounded-sm border border-oro/45 bg-white/55 px-4 py-3 transition hover:border-ceramica hover:bg-white/80 active:scale-[0.99] active:border-ceramica active:bg-white"
                  href={site.emailHref}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ceramica/20 bg-ceramica/5 text-ceramica"
                  >
                    <svg className="size-5" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M3.75 6.75h16.5v10.5H3.75V6.75Zm.5.5L12 13l7.75-5.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ceramica">
                      {text.email}
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold leading-5 text-argilla transition-colors group-hover:text-ceramica">
                      {site.email}
                    </span>
                  </span>
                  <svg
                    aria-hidden="true"
                    className="ml-auto size-4 shrink-0 text-ceramica/65 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 5 7 7-7 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                  </svg>
                </a>

                <a
                  className="focus-ring group flex min-h-14 w-full items-center gap-3 rounded-sm border border-oro/45 bg-white/55 px-4 py-3 transition hover:border-ceramica hover:bg-white/80 active:scale-[0.99] active:border-ceramica active:bg-white"
                  href={site.whatsappHref}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ceramica/20 bg-ceramica/5 text-ceramica"
                  >
                    <svg className="size-5" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M5.25 17.25 4.5 20l2.85-.75A8.25 8.25 0 1 0 3.75 12c0 1.95.67 3.75 1.8 5.17"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8.25 9.25c.45 2.85 2.65 5.05 5.5 5.5l1.5-1.5-2.1-1-.85.85a6.2 6.2 0 0 1-1.4-1 6.2 6.2 0 0 1-1-1.4l.85-.85-1-2.1-1.5 1.5Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ceramica">
                      {text.whatsapp}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-5 text-argilla transition-colors group-hover:text-ceramica">
                      {site.mobilePhone}
                    </span>
                  </span>
                  <svg
                    aria-hidden="true"
                    className="ml-auto size-4 shrink-0 text-ceramica/65 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 5 7 7-7 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                  </svg>
                </a>
              </div>
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
