"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

/** Word-by-word reveal: rises from below with blur + opacity, on initial load. */
export default function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.07,
  as = "div",
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const Comp = motion[as];

  return (
    <Comp className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top" style={{ paddingBottom: "0.15em" }} aria-hidden="true">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={reduced ? { y: 0, opacity: 1, filter: "blur(0px)" } : { y: "110%", opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: reduced ? 0.01 : 0.9,
              delay: reduced ? 0 : delay + i * stagger,
              ease: EASE.smooth,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
