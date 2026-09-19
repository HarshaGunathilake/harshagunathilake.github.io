"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [variant, setVariant] = useState<"default" | "large" | "text">("default");
  // Start `true` (matching SSR output — cursor hidden) and correct after mount,
  // since matchMedia isn't available on the server.
  const [isTouch, setIsTouch] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouch(touch);
  }, []);

  useEffect(() => {
    if (isTouch || reduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    window.addEventListener("mousemove", move);

    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]") as HTMLElement | null;
      if (!el) return;
      const kind = el.getAttribute("data-cursor");
      const text = el.getAttribute("data-cursor-text");
      if (kind === "large") {
        setVariant("large");
        setLabel(text ?? "VIEW");
      } else if (kind === "text") {
        setVariant("text");
        setLabel(text ?? "");
      }
    };

    const handleOut = (e: Event) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]") as HTMLElement | null;
      if (!el) return;
      setVariant("default");
      setLabel("");
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    document.body.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf);
    };
  }, [isTouch, reduced]);

  if (isTouch || reduced) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={`cursor-ring cursor-ring--${variant}`}
        aria-hidden="true"
      >
        {label && <span className="cursor-label">{label}</span>}
      </div>
    </>
  );
}
