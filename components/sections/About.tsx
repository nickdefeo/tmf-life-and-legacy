import Image from "next/image";
import { about, brand } from "@/data/site-content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad bg-navy-soft">
      <div className="container-tmf grid items-center gap-14 lg:grid-cols-2">
        {/* Logo / motif accent with faint glow */}
        <Reveal className="relative flex justify-center lg:justify-start">
          <div className="radial-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative rounded-3xl border border-hairline bg-navy-card p-12 shadow-card">
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={750}
              height={463}
              className="h-auto w-56 sm:w-72"
            />
          </div>
        </Reveal>

        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className="mt-5 font-cormorant text-4xl font-semibold leading-tight text-praxeti sm:text-5xl">
              {about.heading}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {about.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-praxeti-muted">{para}</p>
              </Reveal>
            ))}
          </div>

          {/* Pull quote / tagline echo */}
          <Reveal delay={0.2}>
            <div className="mt-8 border-l-2 border-lime pl-5">
              <p className="font-cormorant text-2xl italic text-mantis">
                {about.pullQuote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
