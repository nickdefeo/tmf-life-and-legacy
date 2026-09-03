import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { brand, navLinks, contact, footer } from "@/data/site-content";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-navy-deep">
      <div className="container-tmf py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="#top" className="inline-flex items-center">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-praxeti-muted">
              {footer.blurb}
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-praxeti-muted transition-colors hover:border-mantis hover:text-mantis"
                >
                  <Icon name={s.icon} className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-praxeti-muted transition-colors hover:text-mantis"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-praxeti-muted">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-mantis">
                  <Mail className="h-4 w-4 text-mantis" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.tel}`}
                  className="flex items-center gap-3 hover:text-mantis"
                >
                  <Phone className="h-4 w-4 text-mantis" aria-hidden />
                  {contact.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mantis" aria-hidden />
                <span>
                  {contact.address.full}
                  <br />
                  {contact.location}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-mantis" aria-hidden />
                {contact.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="accent-hairline my-10" />
        <div className="space-y-3">
          {footer.disclaimers.map((d, i) => (
            <p key={i} className="text-xs leading-relaxed text-praxeti-muted/60">
              {d}
            </p>
          ))}
        </div>

        <p className="mt-8 text-xs text-praxeti-muted/70">{footer.copyright}</p>
        <p className="mt-1 text-xs text-praxeti-muted/60">{footer.licenseNote}</p>
      </div>
    </footer>
  );
}
