"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/data/site-content";

/** Animated count-up number that runs once when scrolled into view. */
function CountUp({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Respect reduced motion: jump straight to the final value.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const duration = 1500;
    let startTs: number | null = null;
    let raf = 0;

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  // The animated value starts at 0, so the server-rendered markup would read
  // "0+". Expose the true figure to screen readers and crawlers alongside it.
  return (
    <span ref={ref}>
      <span aria-hidden>
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-hairline bg-navy-soft py-14">
      <div className="container-tmf grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-cormorant text-5xl font-semibold text-mantis sm:text-6xl">
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-praxeti-muted sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
