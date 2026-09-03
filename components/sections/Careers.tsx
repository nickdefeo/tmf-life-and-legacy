import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { careers } from "@/data/site-content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

/**
 * Agent-facing section. The darker band + "For Agents" eyebrow create a clear
 * visual transition away from the client-focused content above it.
 */
export default function Careers() {
  return (
    <section
      id="careers"
      className="relative section-pad bg-navy"
    >
      {/* Subtle top glow to mark the transition into the agent section */}
      <div className="radial-glow pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />

      <div className="container-tmf relative">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow centered>{careers.eyebrow}</Eyebrow>
          </div>
          <Reveal>
            <h2 className="mt-5 font-cormorant text-4xl font-semibold leading-tight text-praxeti sm:text-5xl">
              {careers.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-praxeti-muted sm:text-lg">
              {careers.intro}
            </p>
          </Reveal>
        </div>

        {/* What we offer */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-navy-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-mantis hover:shadow-accent-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-mantis/10 text-mantis">
                  <Icon name={offer.icon} className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-5 font-cormorant text-xl font-semibold text-praxeti">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-praxeti-muted">
                  {offer.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Who thrives + Our promise */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-hairline bg-navy-card p-8">
              <h3 className="font-cormorant text-2xl font-semibold text-praxeti">
                {careers.thrive.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {careers.thrive.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-praxeti-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mantis" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-mantis/40 bg-navy-card p-8">
              <h3 className="font-cormorant text-2xl font-semibold text-mantis">
                {careers.promise.heading}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-praxeti-muted">
                {careers.promise.body}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Agent CTA */}
        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={careers.primaryHref} variant="primary">
              {careers.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            {/* TODO: wire up a real agent portal before exposing this link. */}
            <Link
              href={careers.agentLoginHref}
              className="text-sm text-praxeti-muted underline-offset-4 transition-colors hover:text-mantis hover:underline"
            >
              {careers.agentLoginLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
