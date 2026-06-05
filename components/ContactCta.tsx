import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section className="bg-ceramica px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd95a]">Contatto diretto</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Cerchi un prodotto in ceramica artigianale?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#fff6e6]">
            Contattaci per informazioni, disponibilità o per organizzare una visita al laboratorio.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contatti" variant="secondary">
            Contattaci
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="ghost" className="border-white/70 text-white hover:bg-white/10">
            Chiama ora
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
