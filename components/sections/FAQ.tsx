"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-black">
      <div className="container-tmf">
        <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-goldline border-y border-goldline">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-gold"
                  >
                    <span className="flex items-center gap-3">
                      {/* Audience tag */}
                      <span
                        className={`hidden shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-wider sm:inline-block ${
                          item.audience === "agent"
                            ? "border-gold/40 text-gold"
                            : "border-goldline text-ivory-muted"
                        }`}
                      >
                        {item.audience === "agent" ? "Agents" : "Clients"}
                      </span>
                      <span className="font-cormorant text-lg font-semibold text-ivory sm:text-xl">
                        {item.q}
                      </span>
                    </span>
                    <span className="shrink-0 text-gold" aria-hidden>
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-ivory-muted sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
