import { ButtonLink } from "@/components/ButtonLink";

export function ContactCta() {
  return (
    <section className="bg-ceramica px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd95a]">Contatto diretto</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Cerchi ceramiche artigianali per il tuo punto vendita?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#fff6e6]">
            Contattaci per conoscere le collezioni disponibili e valutare insieme le creazioni più adatte al tuo spazio.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contatti" variant="secondary">
            Contattaci
          </ButtonLink>
          <ButtonLink
            href="/catalogo"
            variant="ghost"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-white bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ceramica shadow-soft transition hover:bg-[#fff6e6] hover:border-[#fff6e6]"
          >
            Scopri il catalogo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
