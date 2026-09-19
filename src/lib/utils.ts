import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE = {
  smooth: [0.16, 1, 0.3, 1] as const,
  power: [0.65, 0, 0.35, 1] as const,
  out: [0.22, 1, 0.36, 1] as const,
};

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
