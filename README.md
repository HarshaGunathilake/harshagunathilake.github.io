# Harsha Gunathilake — Portfolio

A cinematic, Awwwards-style developer portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, GSAP + ScrollTrigger, Framer Motion, and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Replacing placeholder content

- **Images** — every image under `public/images/` (portrait + 7 project covers) and `public/og-image.svg` is a generated placeholder SVG. Swap them for real photography/screenshots at the same paths, or update the `image` field in `src/lib/projects.ts` and `src/components/about/About.tsx` to point at new files (JPG/PNG/WebP all work — `next.config.ts` currently allows SVG too via `dangerouslyAllowSVG`, remove that once you're using raster images only).
- **Copy & data** — all page content lives in `src/lib/`: `projects.ts`, `experience.ts`, `skills.ts` (services, skills, marquee tech, testimonials). Edit these directly; every section reads from them.
- **Contact form** — `src/components/contact/Contact.tsx` currently simulates a submit (loading → success). Wire the `handleSubmit` function to your API route, form service (Resend, Formspree, etc.), or server action.
- **Social links / email** — update `CONTACT_LINKS` in `Contact.tsx`, `SOCIALS` in `Footer.tsx` and `MobileMenu.tsx`, and the `sameAs` array in `src/app/layout.tsx`'s JSON-LD.
- **Domain** — replace `https://harshagunathilake.dev` in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` with your real domain.

## Architecture

```
src/
  app/            layout, page, globals.css, sitemap.ts, robots.ts
  components/
    navigation/   Navbar, MobileMenu
    preloader/    Preloader
    hero/         Hero, HeroBackground (canvas particles + gradient)
    manifesto/    Scroll-scrubbed statement section
    about/        About with animated counters + parallax portrait
    marquee/      Dual-row infinite tech marquee
    experience/   Scroll-filled vertical timeline
    projects/     ProjectCard, SelectedWork (GSAP pinned horizontal scroll), ProjectModal
    services/     Interactive service grid
    skills/       Skill categories with mouse parallax
    numbers/      Big stat section
    testimonials/ Slider with dots
    contact/      Form + parallax glow
    footer/       Footer + back-to-top
    animations/   Reveal, FadeIn, SplitText, Parallax, SmoothScroll (Lenis provider)
    ui/           MagneticButton, ScrollProgress, AnimatedCounter
    cursor/       CustomCursor (desktop-only, magnetic + label states)
  lib/            projects.ts, experience.ts, skills.ts, gsap.ts, utils.ts, useReducedMotion.ts
```

## Notes

- All animation respects `prefers-reduced-motion` — Lenis, GSAP ScrollTrigger, Framer Motion, the custom cursor and particle canvas are all disabled/simplified when it's set.
- The custom cursor and pinned horizontal project scroll are desktop-only (`lg:` breakpoint / `hover: hover` media query); mobile gets a normal vertical stack and native cursor.
- Fonts (Manrope, Space Grotesk) are self-hosted via `@fontsource-variable` so builds don't depend on network access to Google Fonts.
- Update the Person/WebSite JSON-LD in `layout.tsx` and the Open Graph image once real branding is finalized.
