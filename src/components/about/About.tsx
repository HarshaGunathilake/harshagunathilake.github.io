"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useReducedMotion } from "@/lib/useReducedMotion";

const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 15, suffix: "+", label: "Clients" },
];

export default function About() {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imgWrapRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-40, 40]);

  return (
    <section id="about" className="relative bg-[var(--bg)] py-28 lg:py-40">
      <div className="container-px grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <div ref={imgWrapRef} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
              <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
                <Image
                  src="/images/harsha-portrait.jpg"
                  alt="Portrait of Harsha Gunathilake, Full-Stack Developer"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                  priority={false}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 via-[var(--bg)]/5 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--accent)]/10" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="eyebrow text-[var(--fg)]">Sri Lanka</span>
                <span className="eyebrow text-[var(--fg)]">05+ YRS</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <Reveal>
            <span className="eyebrow">About Me</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display mt-4 text-[8vw] sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-medium tracking-tight">
              I&apos;m a Full-Stack Developer with 5+ years of experience building modern web
              applications, dashboards, e-commerce platforms, and digital products.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[var(--muted)] leading-relaxed">
              I work across the stack — React, Next.js, Angular on the frontend; Node.js and
              Laravel on the backend — shipping production systems for streaming platforms,
              publishing companies, ERP suites, and client businesses across three continents.
              I care about clean architecture, secure production infrastructure, and interfaces
              that feel considered down to the last transition.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                <div className="border-t border-[var(--border)] pt-4">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-display block text-4xl sm:text-5xl font-medium tracking-tight text-[var(--fg)] tabular-nums"
                  />
                  <span className="mt-2 block text-sm text-[var(--muted)]">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
