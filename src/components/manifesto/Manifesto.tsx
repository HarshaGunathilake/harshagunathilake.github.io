"use client";

import { useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT =
  "Turning ideas into scalable, high-performance digital products — engineered with the same care as they're designed.";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const words = TEXT.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section className="relative bg-[var(--bg)] py-32 lg:py-44" aria-label="Manifesto">
      <div ref={containerRef} className="container-px">
        <p className="text-display font-medium leading-[1.15] tracking-tight text-[7vw] sm:text-[5vw] lg:text-[3.4vw] max-w-6xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
                reduced={reduced}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
  reduced,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  reduced: boolean;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["rgb(90,90,95)", "rgb(244,243,240)"]);

  return (
    <motion.span
      style={reduced ? { opacity: 1, color: "rgb(244,243,240)" } : { opacity, color }}
      className="mr-[0.28em] inline-block"
    >
      {word}
    </motion.span>
  );
}
