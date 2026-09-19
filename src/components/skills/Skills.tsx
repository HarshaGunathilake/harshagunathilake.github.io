"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { skillCategories } from "@/lib/skills";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    sectionRef.current.style.setProperty("--mx", `${x * 12}px`);
    sectionRef.current.style.setProperty("--my", `${y * 12}px`);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative bg-[var(--bg)] py-28 lg:py-40 overflow-hidden"
      style={{ ["--mx" as string]: "0px", ["--my" as string]: "0px" }}
    >
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">Toolbox</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-4 mb-16 lg:mb-24 text-[10vw] sm:text-6xl lg:text-7xl font-medium tracking-tight">
            SKILLS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 0.06} amount={0.2}>
              <div>
                <p className="eyebrow mb-5 text-[var(--fg)]">{cat.name}</p>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      style={
                        reduced
                          ? undefined
                          : {
                              transform: `translate(calc(var(--mx) * ${((i % 3) - 1) * 0.4}), calc(var(--my) * ${((i % 2) - 0.5) * 0.6}))`,
                            }
                      }
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--muted)] transition-all duration-500 ease-out hover:border-[var(--accent)] hover:text-[var(--fg)] hover:-translate-y-0.5"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-[var(--accent)]/[0.04] glow-blur"
        aria-hidden="true"
      />
    </section>
  );
}
