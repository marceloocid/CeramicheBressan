import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-ceramica text-white border-ceramica hover:bg-[#004f31] hover:border-[#004f31]",
  secondary:
    "bg-ceramica text-white border-ceramica hover:bg-[#004f31] hover:border-[#004f31]",
  ghost:
    "bg-transparent text-ceramica border-oro/60 hover:bg-white/50 hover:border-ceramica"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] transition";

  if (href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a className={`${base} ${styles[variant]} ${className}`} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles[variant]} ${className}`} href={href}>
      {children}
    </Link>
  );
}
