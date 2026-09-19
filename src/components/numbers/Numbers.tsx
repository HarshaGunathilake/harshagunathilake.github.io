"use client";

import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Clients Worldwide" },
  { value: 20, suffix: "+", label: "Technologies" },
];

export default function Numbers() {
  return (
    <section className="relative bg-[var(--bg-elevated)] py-28 lg:py-36 overflow-hidden border-y border-[var(--border)]" aria-label="Numbers">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[40vw] rounded-full bg-[var(--accent)]/[0.05] glow-blur"
        aria-hidden="true"
      />
      <div className="container-px relative grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} amount={0.4}>
            <div className="text-center lg:text-left">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-display block text-[15vw] sm:text-7xl lg:text-8xl font-medium tracking-tight text-[var(--fg)] tabular-nums leading-none"
              />
              <span className="mt-4 block text-sm sm:text-base text-[var(--muted)]">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
