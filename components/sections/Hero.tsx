"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { hero } from "@/data/site-content";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Faint green radial glow + vignette */}
      <div className="radial-glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,21,43,0.75)_100%)]"
        aria-hidden
      />

      <div className="container-tmf relative z-10 flex flex-col items-center text-center">
        {/* Headline — middle phrase in solid Mantis green */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="max-w-4xl font-cormorant text-5xl font-semibold leading-[1.05] text-praxeti sm:text-6xl lg:text-7xl"
        >
          {hero.headlineLead}{" "}
          <span className="text-mantis">{hero.headlineAccent}</span>
          {hero.headlineTrail}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-praxeti-muted"
        >
          {hero.subhead}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href={hero.primaryHref} variant="primary">
            {hero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href={hero.secondaryHref} variant="secondary">
            {hero.secondaryCta}
          </Button>
        </motion.div>

        <p className="mt-4 text-xs text-praxeti-muted/80">{hero.microcopy}</p>

        {/* Quieter link for the second audience (agents) */}
        <Link
          href={hero.agentNudgeHref}
          className="group mt-6 inline-flex items-center gap-1.5 text-sm text-mantis transition-colors hover:text-mantis"
        >
          {hero.agentNudge}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>

        {/* Trust chips */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {hero.trustChips.map((chip) => (
            <li
              key={chip}
              className="flex items-center gap-2 rounded-full border border-hairline bg-navy-card/60 px-4 py-2 text-xs text-praxeti-muted sm:text-sm"
            >
              <Check className="h-3.5 w-3.5 text-mantis" aria-hidden />
              {chip}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
