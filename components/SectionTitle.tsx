type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, intro, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ceramica sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-lg leading-8 text-argilla">{intro}</p> : null}
      <div className={align === "center" ? "brush-divider mx-auto mt-6" : "brush-divider mt-6"} />
    </div>
  );
}
