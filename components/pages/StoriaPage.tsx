import Image from "next/image";
import { Fragment } from "react";
import { ContactCta } from "@/components/ContactCta";
import { storiaContent, storiaHeroImage, type StoriaRecognition } from "@/data/storia";
import type { Locale } from "@/lib/i18n";

function RecognitionFigure({ recognition }: { recognition: StoriaRecognition }) {
  const isPortrait = recognition.height > recognition.width;

  return (
    <li className="border-t border-ceramica/20 py-12 first:border-t-0 first:pt-0 sm:py-16">
      <figure className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.65fr)] lg:gap-14">
        <div className={recognition.imageOnRight ? "lg:order-2" : undefined}>
          <div
            className={`overflow-hidden rounded-sm border border-ceramica/25 bg-white/75 p-2 ${
              isPortrait ? "mx-auto max-w-[34rem]" : ""
            }`}
          >
            <Image
              alt={recognition.alt}
              className="h-auto w-full rounded-[1px]"
              height={recognition.height}
              loading="lazy"
              sizes={
                isPortrait
                  ? "(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 100vw"
                  : "(min-width: 1024px) 58vw, 100vw"
              }
              src={recognition.src}
              width={recognition.width}
            />
          </div>
        </div>

        <figcaption
          className={`border-l-2 border-oro/70 pl-6 font-serif text-xl italic leading-8 text-argilla sm:text-2xl sm:leading-9 ${
            recognition.imageOnRight ? "lg:order-1" : ""
          }`}
        >
          {recognition.caption}
        </figcaption>
      </figure>
    </li>
  );
}

export function StoriaPageContent({ locale }: { locale: Locale }) {
  const content = storiaContent[locale];
  const heroImage = storiaHeroImage[locale];

  return (
    <main>
      <article lang={locale}>
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-44">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">
                {content.pageTitle}
              </p>
              <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-ceramica sm:text-5xl lg:text-6xl">
                {content.heroTitle}
              </h1>
              <div className="brush-divider mt-7" />
              <div className="mt-8 space-y-6 text-lg leading-8 text-argilla">
                {content.heroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <figure>
              <div className="overflow-hidden rounded-sm border border-ceramica/30 bg-white/75 p-2">
                <Image
                  alt={heroImage.alt}
                  className="h-auto w-full rounded-[1px]"
                  height={heroImage.height}
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src={heroImage.src}
                  width={heroImage.width}
                />
              </div>
              <figcaption className="mt-4 border-l-2 border-oro/70 pl-4 font-serif text-lg italic leading-7 text-argilla">
                {content.heroCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-[#f2e4ca] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ceramica">
                {content.pageTitle}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ceramica sm:text-4xl">
                {content.recognitionsTitle}
              </h2>
              <div className="brush-divider mt-6" />
              <p className="mt-7 text-lg leading-8 text-argilla">
                {content.recognitionsIntro}
              </p>
            </div>

            <ol className="mt-12">
              {content.recognitions.map((recognition, index) => (
                <Fragment key={recognition.src}>
                  <RecognitionFigure recognition={recognition} />
                  {index === 0 ? (
                    <li className="mx-auto max-w-4xl border-y border-oro/45 py-9 text-center font-serif text-xl leading-9 text-argilla sm:px-8 sm:text-2xl">
                      {content.companyTransition}
                    </li>
                  ) : null}
                </Fragment>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <div>
              <h2 className="font-serif text-4xl font-semibold text-ceramica">
                {content.todayTitle}
              </h2>
              <div className="brush-divider mt-6" />
            </div>
            <div className="space-y-6 text-lg leading-8 text-argilla">
              {content.todayParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </article>

      <ContactCta locale={locale} />
    </main>
  );
}
