/**
 * Small-caps gold "eyebrow" label with a four-point sparkle (✦) that echoes
 * the logo's star motif. Sits above section headings.
 */
export default function Eyebrow({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
    >
      <span className="text-gold/80" aria-hidden>
        ✦
      </span>
      <span className="eyebrow">{children}</span>
      <span aria-hidden className="h-px w-10 bg-goldline" />
    </div>
  );
}
