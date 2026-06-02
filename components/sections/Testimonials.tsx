import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type Item = {
  quote: string;
  name: string;
  detail: string;
  rating: number;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-gold text-gold" : "text-gold/25"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function Card({ item, delay }: { item: Item; delay: number }) {
  return (
    <Reveal delay={delay}>
      <figure className="flex h-full flex-col rounded-2xl border border-goldline bg-black-card p-8 shadow-card">
        <Quote className="h-8 w-8 text-gold/50" aria-hidden />
        <blockquote className="mt-4 flex-1 font-cormorant text-xl italic leading-relaxed text-ivory">
          “{item.quote}”
        </blockquote>
        <figcaption className="mt-6 border-t border-goldline pt-5">
          <Stars rating={item.rating} />
          <div className="mt-3 font-semibold text-ivory">{item.name}</div>
          <div className="text-sm text-ivory-muted">{item.detail}</div>
        </figcaption>
      </figure>
    </Reveal>
  );
}

/** Small gold label that groups testimonials by audience. */
function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="eyebrow">{children}</span>
      <span aria-hidden className="h-px flex-1 bg-goldline" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-black-soft">
      <div className="container-tmf">
        <SectionHeading eyebrow={testimonials.eyebrow} heading={testimonials.heading} />

        {/* Client testimonials */}
        <div className="mt-16">
          <GroupLabel>{testimonials.clients.label}</GroupLabel>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.clients.items.map((item, i) => (
              <Card key={item.name} item={item} delay={i * 0.08} />
            ))}
          </div>
        </div>

        {/* Agent testimonials */}
        <div className="mt-14">
          <GroupLabel>{testimonials.agents.label}</GroupLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.agents.items.map((item, i) => (
              <Card key={item.name} item={item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
