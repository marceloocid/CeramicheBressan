import { site } from "@/data/site";

export function MobileCallButton() {
  return (
    <a
      className="focus-ring fixed inset-x-4 bottom-4 z-50 flex min-h-12 items-center justify-center rounded-sm border border-ceramica bg-ceramica px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-soft transition hover:bg-[#004f31] sm:hidden"
      href={site.phoneHref}
    >
      Chiama ora
    </a>
  );
}
