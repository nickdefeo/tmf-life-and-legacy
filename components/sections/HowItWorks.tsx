import { howItWorks } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-black">
      <div className="container-tmf">
        <SectionHeading eyebrow={howItWorks.eyebrow} heading={howItWorks.heading} />

        <div className="relative mt-16">
          {/* Connecting line behind the steps (desktop only) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-goldline lg:block"
            aria-hidden
          />
          <ol className="grid gap-10 lg:grid-cols-3">
            {howItWorks.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <li className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-black-card font-cinzel text-xl font-bold text-gold-metallic shadow-gold-soft">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-cormorant text-2xl font-semibold text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
