import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { legalText } from "@/lib/translations";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

function formatLegalText(value: string) {
  return value
    .replace("{legalName}", site.legalName)
    .replace("{address}", site.address)
    .replace("{vat}", site.vat)
    .replace("{email}", site.email);
}

function LegalParagraph({ value }: { value: string }) {
  const formatted = formatLegalText(value);
  const emailIndex = formatted.indexOf(site.email);

  if (emailIndex === -1) {
    return <p className="mt-3">{formatted}</p>;
  }

  return (
    <p className="mt-3">
      {formatted.slice(0, emailIndex)}
      <a className="focus-ring font-bold text-ceramica underline-offset-4 hover:underline" href={site.emailHref}>
        {site.email}
      </a>
      {formatted.slice(emailIndex + site.email.length)}
    </p>
  );
}

function TextSections({ sections }: { sections: LegalSection[] }) {
  return sections.map((section) => (
    <section className="mt-8 first:mt-0" key={section.title}>
      <h2 className="font-serif text-2xl font-semibold text-ceramica">{section.title}</h2>
      {section.paragraphs.map((paragraph) => (
        <LegalParagraph key={paragraph} value={paragraph} />
      ))}
    </section>
  ));
}

export function PrivacyPolicyContent({ locale }: { locale: Locale }) {
  const text = legalText[locale].privacy;

  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow={text.eyebrow} title={text.title} intro={text.intro} as="h1" />

        <div className="paper-panel mt-10 rounded-sm p-6 leading-8 text-argilla sm:p-8">
          <TextSections sections={text.sections} />

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">{text.thirdPartyTitle}</h2>
            <div className="mt-4 grid gap-4">
              {text.thirdPartyServices.map((service) => (
                <p className="rounded-sm border border-oro/35 bg-white/55 px-4 py-3" key={service.name}>
                  <strong className="text-ceramica">{service.name}:</strong> {service.text}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">{text.updatedTitle}</h2>
            <p className="mt-3 font-bold text-ceramica">{legalText[locale].lastUpdated}</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export function CookiePolicyContent({ locale }: { locale: Locale }) {
  const text = legalText[locale].cookie;

  return (
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow={text.eyebrow} title={text.title} intro={text.intro} as="h1" />

        <div className="paper-panel mt-10 rounded-sm p-6 leading-8 text-argilla sm:p-8">
          <TextSections sections={text.sections} />

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">{text.servicesTitle}</h2>
            <div className="mt-4 grid gap-4">
              {text.services.map((service) => (
                <p className="rounded-sm border border-oro/35 bg-white/55 px-4 py-3" key={service.title}>
                  <strong className="text-ceramica">{service.title}:</strong> {service.text}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-ceramica">{text.updatedTitle}</h2>
            <p className="mt-3 font-bold text-ceramica">{legalText[locale].lastUpdated}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
