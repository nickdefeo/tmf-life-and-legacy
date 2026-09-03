import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coverage, cta } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function Coverage() {
  return (
    <section id="coverage" className="section-pad bg-navy">
      <div className="container-tmf">
        <SectionHeading
          eyebrow={coverage.eyebrow}
          heading={coverage.heading}
          intro={coverage.intro}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link
                href={cta.quoteHref}
                className="group flex h-full flex-col rounded-2xl border border-hairline bg-navy-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-mantis hover:shadow-accent-soft"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-mantis/10 text-mantis transition-colors group-hover:bg-mantis/15">
                  <Icon name={item.icon} className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-6 font-cormorant text-2xl font-semibold text-praxeti">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-praxeti-muted">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-mantis">
                  {coverage.learnMore}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
