import { ArrowRight } from "lucide-react";
import { finalCta } from "@/data/site-content";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black-soft section-pad">
      <div className="radial-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-tmf relative text-center">
        <Reveal>
          <p className="font-cinzel uppercase tracking-brand text-gold">
            {finalCta.tagline}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-cormorant text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
            {finalCta.heading}
          </h2>
        </Reveal>

        {/* Two audience paths */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col items-center rounded-2xl border border-goldline bg-black-card p-8">
              <p className="flex-1 text-base text-ivory-muted">{finalCta.client.text}</p>
              <Button href={finalCta.client.href} variant="primary" className="mt-6">
                {finalCta.client.cta} <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-goldline bg-black-card p-8">
              <p className="flex-1 text-base text-ivory-muted">{finalCta.agent.text}</p>
              <Button href={finalCta.agent.href} variant="secondary" className="mt-6">
                {finalCta.agent.cta} <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
