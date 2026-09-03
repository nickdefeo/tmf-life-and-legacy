"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { brand, navLinks, cta, contact } from "@/data/site-content";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solidify the header (bg + accent hairline) once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-navy-soft/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-tmf flex h-28 items-center justify-between">
        {/* Logo — tree mark + Cormorant wordmark (see components/ui/Logo.tsx) */}
        <Link
          href="#top"
          className="flex items-center text-praxeti"
          aria-label={brand.name}
        >
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap text-[13px] text-praxeti-muted transition-colors hover:text-praxeti xl:text-sm"
            >
              {link.label}
              {/* Animated lime underline */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={`tel:${contact.phone.tel}`}
            className="mr-1 inline-flex items-center gap-2 whitespace-nowrap text-[13px] font-medium text-praxeti transition-colors hover:text-lime"
          >
            <Phone className="h-4 w-4 text-lime" aria-hidden />
            {contact.phone.display}
          </a>
          <Button
            href={cta.joinHref}
            variant="secondary"
            className="whitespace-nowrap px-4 py-2 text-[13px]"
          >
            {cta.join}
          </Button>
          <Button
            href={cta.quoteHref}
            variant="primary"
            className="whitespace-nowrap px-4 py-2 text-[13px]"
          >
            {cta.quote}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-praxeti lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy-deep/80 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-hairline bg-navy-soft p-6 shadow-card transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-sans text-sm font-semibold tracking-[0.2em] text-lime">
              TMF LIFE &amp; LEGACY
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-praxeti"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="accent-hairline my-6" />

          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-praxeti-muted transition-colors hover:bg-lime/10 hover:text-lime"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <a
              href={`tel:${contact.phone.tel}`}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-praxeti transition-colors hover:border-lime hover:text-lime"
            >
              <Phone className="h-4 w-4 text-lime" aria-hidden />
              {contact.phone.display}
            </a>
            <Button
              href={cta.joinHref}
              variant="secondary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {cta.join}
            </Button>
            <Button
              href={cta.quoteHref}
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {cta.quote}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
