"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { testimonials } from "@/lib/skills";
import { EASE } from "@/lib/utils";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="relative bg-[var(--bg)] py-28 lg:py-40" aria-label="Testimonials">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">Client Words</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-4 mb-16 text-[10vw] sm:text-6xl lg:text-7xl font-medium tracking-tight">
            TESTIMONIALS
          </h2>
        </Reveal>

        <div className="relative max-w-4xl">
          <Quote className="text-[var(--border-strong)] mb-6" size={40} />
          <div className="relative min-h-[240px] sm:min-h-[200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.55, ease: EASE.smooth }}
              >
                <p className="text-display text-2xl sm:text-4xl leading-[1.3] tracking-tight text-[var(--fg)]">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-semibold text-[var(--fg)]">{current.name}</p>
                  <p className="text-sm text-[var(--muted)]">
                    {current.position} · {current.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                data-cursor="text"
                data-cursor-text="PREV"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                data-cursor="text"
                data-cursor-text="NEXT"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial from ${t.name}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === index ? "w-8 bg-[var(--accent)]" : "w-1.5 bg-[var(--border-strong)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
