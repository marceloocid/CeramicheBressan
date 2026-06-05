import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

type CollectionCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export function CollectionCard({ title, description, image, alt }: CollectionCardProps) {
  return (
    <article className="paper-panel overflow-hidden rounded-sm shadow-soft">
      {/* Sostituire il file in /public/images con fotografie reali di laboratorio/prodotti. */}
      <div className="relative aspect-[4/3]">
        <Image className="object-cover" src={image} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-ceramica">{title}</h3>
        <p className="mt-3 leading-7 text-argilla">{description}</p>
        <ButtonLink href="/contatti" variant="ghost" className="mt-5">
          Richiedi informazioni
        </ButtonLink>
      </div>
    </article>
  );
}
