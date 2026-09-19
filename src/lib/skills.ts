export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  { name: "Frontend", items: ["React", "Next.js", "Angular", "Ionic", "TypeScript", "Redux", "Tailwind CSS", "Framer Motion", "GSAP"] },
  { name: "Backend", items: ["Node.js", "Express", "Laravel", "CodeIgniter", "PHP", "Python", "REST APIs", "JWT Auth"] },
  { name: "Database", items: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Firebase", "Prisma"] },
  { name: "DevOps", items: ["Docker", "Git", "AWS", "Cloudflare", "Fastly", "PLESK", "Vercel", "DigitalOcean", "Hostinger", "IONOS"] },
  { name: "CMS", items: ["WordPress", "Elementor", "WooCommerce"] },
  { name: "Tools", items: ["Figma", "Postman", "Stripe", "JIRA", "ClickUp", "Grafana k6", "Termius", "HeidiSQL", "Mailchimp"] },
];

export const marqueeTech = [
  "Next.js", "React", "Angular", "Ionic", "TypeScript", "JavaScript", "Node.js",
  "Express", "Laravel", "PHP", "MySQL", "MongoDB", "Redux", "Tailwind CSS",
  "GSAP", "Framer Motion", "WordPress", "Docker", "Git", "AWS", "Firebase",
];

export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    index: "01",
    title: "Web Development",
    description: "End-to-end websites engineered for speed, clarity and long-term maintainability.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    index: "02",
    title: "Full-Stack Development",
    description: "Complete product builds — from database schema to polished, production-ready UI.",
    tags: ["Node.js", "Laravel", "MySQL"],
  },
  {
    index: "03",
    title: "Frontend Development",
    description: "Interfaces that feel considered — accessible, responsive, and animated with purpose.",
    tags: ["React", "Angular", "Tailwind"],
  },
  {
    index: "04",
    title: "Backend Development",
    description: "Reliable APIs and services built around clean architecture and real-world scale.",
    tags: ["Node.js", "Laravel", "REST"],
  },
  {
    index: "05",
    title: "E-commerce",
    description: "Storefronts and checkout flows that convert, built on WooCommerce or custom stacks.",
    tags: ["WooCommerce", "Stripe", "WordPress"],
  },
  {
    index: "06",
    title: "UI / UX Implementation",
    description: "Pixel-accurate builds from Figma to production, with motion that supports usability.",
    tags: ["Figma", "Framer Motion", "GSAP"],
  },
  {
    index: "07",
    title: "API Development",
    description: "Well-documented, secure APIs designed to be consumed by web, mobile and third parties.",
    tags: ["REST", "JWT", "Postman"],
  },
  {
    index: "08",
    title: "Performance Optimisation",
    description: "Auditing and tuning real production apps — load time, Core Web Vitals, and beyond.",
    tags: ["Lighthouse", "Caching", "CDN"],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Harsha delivered a clean, scalable solution and was excellent to work with throughout the project. He caught issues in our production setup we hadn't even flagged.",
    name: "James Whitfield",
    position: "Product Director",
    company: "AYOZAT Holdings",
  },
  {
    quote:
      "Genuinely one of the most thorough developers we've worked with. He rebuilt our streaming platform's premium logic and fixed security issues we didn't know existed.",
    name: "Melissa Grant",
    position: "Founder",
    company: "Streamline Media",
  },
  {
    quote:
      "Fast, communicative, and precise. Harsha turned a vague brief into a working booking platform in weeks, not months.",
    name: "David Okafor",
    position: "Operations Lead",
    company: "Go House Proud",
  },
  {
    quote:
      "He understood our non-technical team's needs immediately and built us a CMS we can actually manage ourselves. Rare combination of technical depth and empathy.",
    name: "Anika Fernando",
    position: "Programme Manager",
    company: "EEEFA Organisation",
  },
  {
    quote:
      "We handed Harsha a messy legacy codebase and he turned it into something we trust in production. Meticulous, honest about trade-offs, and easy to work with.",
    name: "Ryan Coetzee",
    position: "CTO",
    company: "Drifting Desk",
  },
];
