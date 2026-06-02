import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const sizes = "px-7 py-3.5 text-sm sm:text-base";

const variants: Record<Variant, string> = {
  // Gold fill, dark text, soft glow on hover (primary client CTA)
  primary:
    "bg-gold text-black font-semibold hover:bg-gold-bright hover:shadow-gold hover:-translate-y-0.5",
  // Gold outline on dark (secondary / agent CTA)
  secondary:
    "border border-gold/70 text-gold hover:bg-gold/10 hover:border-gold hover:shadow-gold-soft hover:-translate-y-0.5",
  // Quiet text link
  ghost: "text-ivory-muted hover:text-gold",
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
