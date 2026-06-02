import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

/**
 * Standard section header: eyebrow + serif headline + optional intro.
 * `centered` controls alignment; used by most sections for a consistent look.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  centered = true,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={centered ? "flex justify-center" : ""}>
        <Eyebrow centered={centered}>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-5 font-cormorant text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
        {heading}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-ivory-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
