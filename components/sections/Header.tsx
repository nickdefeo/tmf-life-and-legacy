"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { brand, navLinks, cta } from "@/data/site-content";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solidify the header (bg + gold hairline) once the user scrolls past the hero top.
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
          ? "border-b border-goldline bg-black-soft/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-tmf flex h-28 items-center justify-between">
        {/* Logo (the mark already includes the wordmark, so no text beside it) */}
        <Link href="#top" className="flex items-center" aria-label={brand.name}>
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={750}
            height={463}
            className="h-16 w-auto sm:h-[84px]"
            priority
          />
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
              className="group relative whitespace-nowrap text-[13px] text-ivory-muted transition-colors hover:text-ivory xl:text-sm"
            >
              {link.label}
              {/* Animated gold underline */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
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
          className="text-ivory lg:hidden"
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
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-goldline bg-black-soft p-6 shadow-card transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-cinzel text-sm tracking-[0.2em] text-gold">
              TMF LIFE &amp; LEGACY
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-ivory"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="gold-hairline my-6" />

          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ivory-muted transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-6">
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
