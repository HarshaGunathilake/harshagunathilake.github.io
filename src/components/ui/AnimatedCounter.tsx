"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", className, duration = 1.6 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(reduced ? value : value);
  }, [inView, motionValue, value, reduced]);

  useEffect(() => {
    if (!ref.current) return;
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest).toString().padStart(2, "0")}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      00{suffix}
    </motion.span>
  );
}
