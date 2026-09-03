import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const sizes = "px-7 py-3.5 text-sm sm:text-base";

const variants: Record<Variant, string> = {
  // Picture Book Green fill, Praxeti White text (5.0:1; 6.2:1 on hover).
  // Do NOT put navy text on this green — that is only 3.3:1 and fails AA.
  primary:
    "bg-mantis-deep text-praxeti font-semibold hover:bg-mantis-deeper hover:shadow-accent hover:-translate-y-0.5",
  // Mantis outline on navy (secondary / agent CTA)
  secondary:
    "border border-mantis/70 text-mantis hover:bg-mantis/15 hover:border-mantis hover:shadow-accent-soft hover:-translate-y-0.5",
  // Quiet text link
  ghost: "text-praxeti-muted hover:text-mantis",
};

/**
 * Shared button. Renders a Next.js <Link> when `href` is set (for anchor
 * navigation), otherwise a native <button> (used by the form submit).
 */
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type,
  disabled,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
