/**
 * ============================================================================
 *  Logo — the TMF Life & Legacy laurel mark and wordmark lockup.
 * ============================================================================
 *  A hollow laurel wreath crowned by a four-point star. This carries over the
 *  vocabulary of the retired gold mark (laurel, star, arch) into the new
 *  palette — laurel means honour and legacy, which is the brand. There is
 *  deliberately no trunk inside the wreath: a vertical shaft with a flared
 *  base reads as a sword, and the original mark framed the TMF letters, not a
 *  tree.
 *
 *  The wordmark is REAL TEXT in Cormorant Garamond rather than traced
 *  outlines, so it renders with the same webfont as the headlines and stays
 *  selectable.
 *
 *  `detail`
 *    "full"     8 leaves per side — display sizes (default)
 *    "compact"  5 leaves, heavier — favicon/tiny sizes. A scaled-down full
 *               mark turns to mush below ~32px, so it gets its own drawing.
 *
 *  `tone`
 *    "light"  lime + mantis — for navy backgrounds (default)
 *    "dark"   navy + green  — for light backgrounds. Required there: lime on
 *             Praxeti White is only 1.3:1 and would effectively vanish.
 *
 *  Geometry is generated (leaves ride the stem at tangent-derived angles), so
 *  edit public/tmf-mark.svg and this component together — same control points.
 * --------------------------------------------------------------------------*/

type Tone = "light" | "dark";
type Detail = "full" | "compact";
type Size = "sm" | "md" | "lg";

const TONES: Record<Tone, { outer: string; inner: string; stem: string; star: string }> = {
  light: { outer: "#DBE64C", inner: "#74C365", stem: "#74C365", star: "#DBE64C" },
  dark: { outer: "#001F3F", inner: "#00804C", stem: "#001F3F", star: "#00804C" },
};

const SIZES: Record<Size, { mark: string; tmf: string; sub: string; w: string }> = {
  sm: { mark: "h-8", tmf: "text-2xl", sub: "text-[7px]", w: "w-[86px]" },
  md: { mark: "h-11", tmf: "text-[2rem]", sub: "text-[8px]", w: "w-[112px]" },
  lg: { mark: "h-16", tmf: "text-5xl", sub: "text-[10px]", w: "w-[168px]" },
};

/** Just the wreath — for favicons, badges, and tight spaces. */
export function TmfMark({
  className = "h-10",
  tone = "light",
  detail = "full",
  title = "TMF Life & Legacy laurel mark",
}: {
  className?: string;
  tone?: Tone;
  detail?: Detail;
  title?: string;
}) {
  const c = TONES[tone];
  return (
    <svg viewBox="0 0 100 112" className={className} role="img" aria-label={title}>
      {detail === "full" ? (
        <g>
        <path d="M47.00 101.00C19.00 95.00 9.00 43.00 37.00 15.00" fill="none" stroke={c.stem} strokeWidth="2.60" strokeLinecap="round" />
        <path d="M34.38 94.30C26.14 87.94 16.62 86.98 9.59 93.79C18.40 100.77 27.84 101.07 34.38 94.30Z" fill={c.outer} />
        <path d="M28.65 87.46C34.47 80.43 33.59 71.56 26.25 64.11C20.35 71.60 21.86 80.47 28.65 87.46Z" fill={c.inner} />
        <path d="M24.33 78.99C20.14 70.56 12.77 66.01 4.36 68.77C8.76 77.94 16.32 81.92 24.33 78.99Z" fill={c.outer} />
        <path d="M21.53 69.32C28.75 65.43 31.01 57.73 27.39 49.03C19.95 53.29 18.21 61.20 21.53 69.32Z" fill={c.inner} />
        <path d="M20.37 58.87C19.40 50.50 14.59 44.43 6.67 44.20C7.59 53.25 12.74 58.90 20.37 58.87Z" fill={c.outer} />
        <path d="M20.98 48.05C28.18 46.88 32.33 41.07 31.83 32.72C24.33 34.12 20.57 40.26 20.98 48.05Z" fill={c.inner} />
        <path d="M23.47 37.28C25.16 30.04 22.96 23.56 16.45 21.01C14.52 28.81 17.12 35.03 23.47 37.28Z" fill={c.outer} />
        <path d="M27.96 26.98C34.21 28.31 39.43 24.88 41.66 17.90C35.10 16.68 30.09 20.50 27.96 26.98Z" fill={c.inner} />
        <path d="M53.00 101.00C81.00 95.00 91.00 43.00 63.00 15.00" fill="none" stroke={c.stem} strokeWidth="2.60" strokeLinecap="round" />
        <path d="M65.62 94.30C72.16 101.07 81.60 100.77 90.41 93.79C83.38 86.98 73.86 87.94 65.62 94.30Z" fill={c.outer} />
        <path d="M71.35 87.46C78.14 80.47 79.65 71.60 73.75 64.11C66.41 71.56 65.53 80.43 71.35 87.46Z" fill={c.inner} />
        <path d="M75.67 78.99C83.68 81.92 91.24 77.94 95.64 68.77C87.23 66.01 79.86 70.56 75.67 78.99Z" fill={c.outer} />
        <path d="M78.47 69.32C81.79 61.20 80.05 53.29 72.61 49.03C68.99 57.73 71.25 65.43 78.47 69.32Z" fill={c.inner} />
        <path d="M79.63 58.87C87.26 58.90 92.41 53.25 93.33 44.20C85.41 44.43 80.60 50.50 79.63 58.87Z" fill={c.outer} />
        <path d="M79.02 48.05C79.43 40.26 75.67 34.12 68.17 32.72C67.67 41.07 71.82 46.88 79.02 48.05Z" fill={c.inner} />
        <path d="M76.53 37.28C82.88 35.03 85.48 28.81 83.55 21.01C77.04 23.56 74.84 30.04 76.53 37.28Z" fill={c.outer} />
        <path d="M72.04 26.98C69.91 20.50 64.90 16.68 58.34 17.90C60.57 24.88 65.79 28.31 72.04 26.98Z" fill={c.inner} />
        <path d="M50.00 14.50L51.99 22.00L59.50 24.00L51.99 26.00L50.00 33.50L48.01 26.00L40.50 24.00L48.01 22.00Z" fill={c.star} />
        </g>
      ) : (
        <g>
        <path d="M47.00 101.00C19.00 95.00 9.00 43.00 37.00 15.00" fill="none" stroke={c.stem} strokeWidth="4.20" strokeLinecap="round" />
        <path d="M32.52 92.44C23.68 83.35 12.94 81.35 4.39 89.62C13.83 99.53 24.52 100.67 32.52 92.44Z" fill={c.outer} />
        <path d="M24.69 79.90C33.64 73.53 34.57 63.52 26.90 53.53C17.71 60.40 17.59 70.55 24.69 79.90Z" fill={c.inner} />
        <path d="M20.73 64.17C19.22 53.07 12.65 46.01 2.23 47.39C3.74 59.39 10.73 65.81 20.73 64.17Z" fill={c.outer} />
        <path d="M21.14 46.96C30.74 46.29 36.01 39.25 34.85 28.27C24.85 29.20 20.11 36.72 21.14 46.96Z" fill={c.inner} />
        <path d="M26.40 30.00C30.40 21.14 28.83 12.92 20.53 9.13C16.10 18.65 18.28 26.60 26.40 30.00Z" fill={c.outer} />
        <path d="M53.00 101.00C81.00 95.00 91.00 43.00 63.00 15.00" fill="none" stroke={c.stem} strokeWidth="4.20" strokeLinecap="round" />
        <path d="M67.48 92.44C75.48 100.67 86.17 99.53 95.61 89.62C87.06 81.35 76.32 83.35 67.48 92.44Z" fill={c.outer} />
        <path d="M75.31 79.90C82.41 70.55 82.29 60.40 73.10 53.53C65.43 63.52 66.36 73.53 75.31 79.90Z" fill={c.inner} />
        <path d="M79.27 64.17C89.27 65.81 96.26 59.39 97.77 47.39C87.35 46.01 80.78 53.07 79.27 64.17Z" fill={c.outer} />
        <path d="M78.86 46.96C79.89 36.72 75.15 29.20 65.15 28.27C63.99 39.25 69.26 46.29 78.86 46.96Z" fill={c.inner} />
        <path d="M73.60 30.00C81.72 26.60 83.90 18.65 79.47 9.13C71.17 12.92 69.60 21.14 73.60 30.00Z" fill={c.outer} />
        <path d="M50.00 11.00L52.31 19.69L61.00 22.00L52.31 24.31L50.00 33.00L47.69 24.31L39.00 22.00L47.69 19.69Z" fill={c.star} />
        </g>
      )}
    </svg>
  );
}

/**
 * The full vertical lockup: wreath over "TMF" over a rule over "LIFE & LEGACY".
 * The text colour comes from `currentColor`, so wrap in `text-praxeti` on navy
 * or `text-navy` on light — and pass the matching `tone`.
 */
export default function Logo({
  size = "md",
  tone = "light",
  className = "",
}: {
  size?: Size;
  tone?: Tone;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span className={`inline-flex flex-col items-center ${s.w} ${className}`} aria-hidden>
      <TmfMark className={s.mark} tone={tone} />
      <span className={`font-cormorant font-semibold leading-[0.92] tracking-[0.02em] ${s.tmf}`}>
        TMF
      </span>
      <span className="mt-0.5 h-px w-full bg-current opacity-40" />
      <span className={`mt-1 font-sans uppercase leading-none tracking-[0.3em] opacity-90 ${s.sub}`}>
        Life &amp; Legacy
      </span>
    </span>
  );
}
