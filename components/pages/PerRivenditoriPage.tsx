import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { SectionTitle } from "@/components/SectionTitle";
import { getSiteContent } from "@/data/site";
import { getRoutePath, type Locale } from "@/lib/i18n";
import { pageText } from "@/lib/translations";

export function PerRivenditoriPageContent({ locale }: { locale: Locale }) {
  const text = pageText[locale].retailers;
  const siteText = getSiteContent(locale);

  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={text.eyebrow}
            title={text.title}
            intro={text.intro}
            align="center"
            as="h1"
          />
          <p className="mx-auto mt-7 max-w-3xl text-center text-lg font-bold leading-8 text-ceramica">
            {text.shippingText}
          </p>
          <div className="paper-panel mx-auto mt-10 max-w-4xl rounded-sm p-6 text-center">
            <p className="text-lg font-bold leading-8 text-ceramica">{siteText.b2bNotice}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2e4ca] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow={text.collaborationsEyebrow}
              title={text.collaborationsTitle}
              intro={text.collaborationsIntro}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {text.audiences.map((item) => (
              <div className="paper-panel rounded-sm px-5 py-4 font-bold text-argilla" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow={text.valueEyebrow}
            title={text.valueTitle}
            intro={text.valueIntro}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {text.reasons.map((item) => (
              <article className="paper-panel rounded-sm p-5" key={item}>
                <h2 className="font-serif text-xl font-semibold text-ceramica">{item}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="paper-panel mx-auto max-w-5xl rounded-sm p-8 text-center shadow-soft">
          <h2 className="font-serif text-3xl font-semibold text-ceramica">
            {text.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-argilla">{text.finalText}</p>
          <ButtonLink href={getRoutePath("contatti", locale)} variant="secondary" className="mt-7">
            {text.finalButton}
          </ButtonLink>
        </div>
      </section>

      <ContactCta locale={locale} />
    </main>
  );
}
