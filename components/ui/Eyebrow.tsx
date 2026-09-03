/**
 * Wide-tracked green "eyebrow" label with a short accent rule that echoes the
 * logo's baseline rule. Sits above section headings.
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
      <span className="eyebrow">{children}</span>
      <span aria-hidden className="h-px w-10 bg-hairline" />
    </div>
  );
}
