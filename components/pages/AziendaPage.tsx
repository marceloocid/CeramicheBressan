import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { getSiteContent, site } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function AziendaPageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].azienda;
  const siteText = getSiteContent(locale);

  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <SectionTitle
            eyebrow={text.heroEyebrow}
            title={text.heroTitle}
            intro={text.heroIntro}
            as="h1"
          />
          <div className="image-frame ornamental-border relative aspect-[4/3] overflow-hidden rounded-sm">
            {/* Placeholder: sostituire con immagine reale dell'esterno o dell'interno laboratorio. */}
            <Image
              className="object-cover"
              src="/images/laboratorio-ceramica.webp"
              alt={text.heroAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 text-lg leading-8 text-argilla md:grid-cols-2">
          {text.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 shadow-soft">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">{text.retailEyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ceramica">
            {text.retailTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-argilla">{text.retailText}</p>
          <p className="mt-5 border-l-4 border-ceramica bg-white/65 px-4 py-3 font-bold leading-7 text-ceramica">
            {siteText.b2bNotice}
          </p>
        </div>
      </section>

      <section className="bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle
            eyebrow={text.locationEyebrow}
            title={text.locationTitle}
            intro={text.locationIntro}
          />
          <div className="paper-panel rounded-sm p-7 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">{text.productionSite}</p>
            <address className="mt-3 not-italic text-lg leading-8 text-argilla">
              {site.streetAddress}
              <br />
              {site.postalCode} {site.city} ({site.province}), {siteText.countryName}
            </address>
            <p className="mt-4 leading-7 text-argilla">{text.directionsText}</p>
            <ButtonLink href={`${getRoutePath("contatti", locale)}#dove-siamo`} variant="secondary" className="mt-6">
              {text.directionsButton}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 shadow-soft">
          <h2 className="font-serif text-3xl font-semibold text-ceramica">{text.companyData}</h2>
          <dl className="mt-6 grid gap-5 text-argilla sm:grid-cols-2">
            <div>
              <dt className="font-bold text-ceramica">{text.visibleName}</dt>
              <dd className="mt-1">{site.visibleName}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">{text.legalName}</dt>
              <dd className="mt-1">{site.legalName}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">{text.address}</dt>
              <dd className="mt-1">{site.address}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">{text.phone}</dt>
              <dd className="mt-1">
                <a className="focus-ring underline-offset-4 hover:underline" href={site.phoneHref}>
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">{text.email}</dt>
              <dd className="mt-1">
                <a className="focus-ring underline-offset-4 hover:underline" href={site.emailHref}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">{text.vat}</dt>
              <dd className="mt-1">{site.vat}</dd>
            </div>
            <div>
              <dt className="font-bold text-ceramica">{text.activity}</dt>
              <dd className="mt-1">{text.activityText}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ContactCta locale={locale} />
    </main>
  );
}
