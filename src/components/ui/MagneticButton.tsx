"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  strength?: number;
  cursorLabel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className,
  as = "button",
  href,
  onClick,
  strength = 0.35,
  cursorLabel,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    const inner = ref.current.querySelector<HTMLElement>("[data-magnetic-inner]");
    if (inner) inner.style.transform = `translate(${x * strength * 0.4}px, ${y * strength * 0.4}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    const inner = ref.current.querySelector<HTMLElement>("[data-magnetic-inner]");
    if (inner) inner.style.transform = "translate(0px, 0px)";
  };

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="magnetic-wrap inline-block transition-transform duration-300 ease-out"
      data-cursor="large"
      data-cursor-text={cursorLabel ?? "CLICK"}
    >
      <Comp
        {...(as === "a" ? { href } : { type, disabled })}
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className={cn(className)}
      >
        <span data-magnetic-inner className="inline-flex items-center gap-2 transition-transform duration-300 ease-out">
          {children}
        </span>
      </Comp>
    </div>
  );
}
