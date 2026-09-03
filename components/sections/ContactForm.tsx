import { Mail, MapPin, ArrowRight } from "lucide-react";
import { contactSection as c, contact } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * Contact section — email-only for now (no form).
 * The primary action is a mailto: link to contact.email (admin@tmflife.com).
 * Edit the copy in data/site-content.ts → contactSection / contact.
 *
 * NOTE: kept the filename ContactForm.tsx so existing imports don't change;
 * when you're ready to add a real form later, this is the place to build it.
 */
export default function ContactForm() {
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    c.emailSubject
  )}`;

  return (
    <section id="contact" className="section-pad bg-navy">
      <div className="container-tmf">
        <SectionHeading eyebrow={c.eyebrow} heading={c.heading} intro={c.intro} />

        <Reveal>
          <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-hairline bg-navy-card p-10 text-center shadow-card sm:p-12">
            {/* Email icon */}
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-hairline bg-lime/5 text-lime">
              <Mail className="h-7 w-7" strokeWidth={1.5} aria-hidden />
            </span>

            {/* Email address (clickable) */}
            <a
              href={mailto}
              className="mt-6 block font-cormorant text-2xl font-semibold text-accent-gradient transition-opacity hover:opacity-90 sm:text-3xl"
            >
              {contact.email}
            </a>

            {/* Primary email button */}
            <div className="mt-8 flex justify-center">
              <Button href={mailto} variant="primary">
                {c.emailButtonLabel} <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>

            <p className="mt-6 text-sm text-praxeti-muted">{c.responseNote}</p>

            {/* Office address */}
            <div className="accent-hairline mx-auto my-7 w-24" />
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start justify-center gap-2 text-sm text-praxeti-muted transition-colors hover:text-lime"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
              <span>
                {contact.address.line1}, {contact.address.city}, {contact.address.state}{" "}
                {contact.address.zip}
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
