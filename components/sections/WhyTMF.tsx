import { whyTmf } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function WhyTMF() {
  return (
    <section id="why-tmf" className="section-pad bg-navy-soft">
      <div className="container-tmf">
        <SectionHeading
          eyebrow={whyTmf.eyebrow}
          heading={whyTmf.heading}
          intro={whyTmf.intro}
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyTmf.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-5">
                <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-lime/5 text-lime">
                  <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-praxeti">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-praxeti-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
