"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE } from "@/lib/utils";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(onComplete, 200);
      return () => clearTimeout(t);
    }

    let raf: number;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        setTimeout(onComplete, 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete, reduced]);

  const displayProgress = reduced ? 100 : progress;
  const displayDone = reduced ? true : done;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)]"
      initial={{ y: 0 }}
      animate={displayDone ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: EASE.power, delay: displayDone ? 0.15 : 0 }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE.smooth }}
        >
          <Image
            src="/images/logo.png"
            alt="Harsha Gunathilake"
            width={463}
            height={214}
            priority
            className="h-12 w-auto sm:h-14 select-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE.smooth }}
          className="eyebrow"
        >
          HARSHA GUNATHILAKE
        </motion.div>
      </div>

      <div className="absolute bottom-16 flex flex-col items-center gap-4 w-64">
        <div className="h-px w-full bg-[var(--border)] overflow-hidden">
          <motion.div
            className="h-full bg-[var(--fg)]"
            style={{ width: `${displayProgress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <span className="eyebrow tabular-nums">{displayProgress.toString().padStart(2, "0")}%</span>
      </div>
    </motion.div>
  );
}
