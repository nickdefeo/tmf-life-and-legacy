/**
 * ============================================================================
 *  Logo — the TMF Life & Legacy tree mark and wordmark lockup.
 * ============================================================================
 *  The tree is inline SVG (crisp at any size, ~2KB, recolours with the theme).
 *  The wordmark is REAL TEXT in Cormorant Garamond rather than traced outlines,
 *  so it renders with the same webfont as the headlines and stays selectable.
 *
 *  The crown is brand lime/mantis at all times. The trunk and roots use
 *  `currentColor`, so the lockup adapts to its surroundings automatically:
 *     on navy  → wrap in `text-praxeti` (light trunk)
 *     on light → wrap in `text-navy`    (dark trunk)
 *
 *  Sizes are driven by one `size` prop so the mark, wordmark and rule always
 *  stay in proportion. To change the artwork itself, edit public/tmf-mark.svg
 *  and this component together (they are the same geometry).
 * --------------------------------------------------------------------------*/

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { mark: string; tmf: string; sub: string; w: string }> = {
  sm: { mark: "h-8", tmf: "text-2xl", sub: "text-[7px]", w: "w-[86px]" },
  md: { mark: "h-11", tmf: "text-[2rem]", sub: "text-[8px]", w: "w-[112px]" },
  lg: { mark: "h-16", tmf: "text-5xl", sub: "text-[10px]", w: "w-[168px]" },
};

/** Just the tree — for favicons, badges, and tight spaces. */
export function TmfMark({ className = "h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 112"
      className={className}
      role="img"
      aria-label="TMF Life & Legacy tree mark"
    >
      <g fill="#74C365">
        <ellipse cx="50" cy="48" rx="18.5" ry="20.5" />
        <ellipse cx="50" cy="27" rx="10" ry="10" />
        <ellipse cx="59" cy="29.81" rx="10" ry="10" />
        <ellipse cx="65.59" cy="37.5" rx="10" ry="10" />
        <ellipse cx="68" cy="48" rx="10" ry="10" />
        <ellipse cx="65.59" cy="58.5" rx="10" ry="10" />
        <ellipse cx="59" cy="66.19" rx="10" ry="10" />
        <ellipse cx="50" cy="69" rx="10" ry="10" />
        <ellipse cx="41" cy="66.19" rx="10" ry="10" />
        <ellipse cx="34.41" cy="58.5" rx="10" ry="10" />
        <ellipse cx="32" cy="48" rx="10" ry="10" />
        <ellipse cx="34.41" cy="37.5" rx="10" ry="10" />
        <ellipse cx="41" cy="29.81" rx="10" ry="10" />
      </g>
      <g fill="#DBE64C">
        <ellipse cx="50" cy="43" rx="18.5" ry="20.5" />
        <ellipse cx="50" cy="22" rx="10" ry="10" />
        <ellipse cx="59" cy="24.81" rx="10" ry="10" />
        <ellipse cx="65.59" cy="32.5" rx="10" ry="10" />
        <ellipse cx="68" cy="43" rx="10" ry="10" />
        <ellipse cx="65.59" cy="53.5" rx="10" ry="10" />
        <ellipse cx="59" cy="61.19" rx="10" ry="10" />
        <ellipse cx="50" cy="64" rx="10" ry="10" />
        <ellipse cx="41" cy="61.19" rx="10" ry="10" />
        <ellipse cx="34.41" cy="53.5" rx="10" ry="10" />
        <ellipse cx="32" cy="43" rx="10" ry="10" />
        <ellipse cx="34.41" cy="32.5" rx="10" ry="10" />
        <ellipse cx="41" cy="24.81" rx="10" ry="10" />
      </g>
      <path
        d="M45.60 60.00 L54.40 60.00 C54.70 75.00 55.20 86.00 55.40 98.00 L44.60 98.00 C44.80 86.00 45.30 75.00 45.60 60.00 Z"
        fill="currentColor"
      />
      <path
        d="M50.00 96.00 C50.00 102.50 43.25 104.70 35.00 105.00"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50.00 96.00 C50.00 102.50 56.75 104.70 65.00 105.00"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * The full vertical lockup: tree over "TMF" over a rule over "LIFE & LEGACY".
 * Decorative by default — the parent <Link> carries the accessible label.
 */
export default function Logo({
  size = "md",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span
      className={`inline-flex flex-col items-center ${s.w} ${className}`}
      aria-hidden
    >
      <TmfMark className={s.mark} />
      <span
        className={`font-cormorant font-semibold leading-[0.92] tracking-[0.02em] ${s.tmf}`}
      >
        TMF
      </span>
      <span className="mt-0.5 h-px w-full bg-current opacity-40" />
      <span
        className={`mt-1 font-sans uppercase leading-none tracking-[0.3em] opacity-90 ${s.sub}`}
      >
        Life &amp; Legacy
      </span>
    </span>
  );
}
