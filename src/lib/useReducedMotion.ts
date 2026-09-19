"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  // Always start `false` (matching SSR output) and correct after mount —
  // reading matchMedia during the initial render would mismatch the server HTML.
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
