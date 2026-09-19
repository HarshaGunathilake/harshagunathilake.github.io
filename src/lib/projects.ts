export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  tech: string[];
  description: string;
  challenge: string;
  solution: string;
  responsibilities: string[];
  results: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "toolgenie",
    index: "01",
    title: "ToolGenie",
    category: "AI Content Creation Platform",
    year: "2025",
    tech: ["React", "Next.js", "Tailwind CSS"],
    description:
      "An AI-powered content-creation platform that takes YouTube creators from idea to publish — video ideas, scripts, voiceovers, thumbnails, titles, descriptions and tags, plus tools for Facebook and X. I contributed to the frontend.",
    challenge:
      "Creators juggling ideation, scripting, voiceover, thumbnails and optimisation across separate tools needed one connected workspace that didn't trade output quality for speed.",
    solution:
      "I worked on the frontend/UI for ToolGenie's suite of AI generation tools — the YouTube idea, script, title, description and tag generators, plus the dashboard shell tying Facebook, X, audio and image tools together into a single token-based workspace.",
    responsibilities: [
      "Frontend/UI development for the AI tool suite",
      "Dashboard and tool-card UI implementation",
      "Cross-platform tool surfaces (YouTube, Facebook, X, Audio, Image)",
    ],
    results:
      "Contributed to a live production SaaS platform serving content creators across multiple subscription tiers, from solo creators to scaling channels.",
    liveUrl: "https://toolgenie.io/",
    image: "/images/projects/toolgenie.png",
    color: "#8b5cf6",
  },
  {
    id: "ayozat-stream",
    index: "02",
    title: "AYOZAT Stream",
    category: "OTT / Streaming Platform",
    year: "2022 – Present",
    tech: ["React", "Node.js", "Laravel", "MySQL", "Fastly", "Cloudflare"],
    description:
      "AYOZAT Holdings' all-in-one entertainment hub — on-demand movies and series, live TV channels, music and radio, podcasts and pay-per-view events in a single subscription platform. Part of my ongoing role leading OTT platform development at AYOZAT Holdings.",
    challenge:
      "Users wanted one place for movies, live TV, music, podcasts and live events instead of juggling separate single-purpose subscriptions, while the business needed a platform that could scale delivery and support a compliance-gated PPV workflow.",
    solution:
      "As part of my role at AYOZAT Holdings I work across product planning, frontend and backend for the platform — spanning VOD and live-TV playback, the music/radio and podcast surfaces, and pay-per-view event delivery — on a Node.js/Laravel backend with MySQL, fronted by React and served through Fastly and Cloudflare for reliable delivery at scale.",
    responsibilities: [
      "Product planning for platform features",
      "Frontend development",
      "Backend development",
      "Live TV, VOD, music, podcast and PPV integration",
    ],
    results:
      "Ongoing contribution to a live, multi-format streaming platform positioned as an all-in-one alternative to single-purpose services like Netflix or Spotify.",
    liveUrl: "http://ayozat.com/",
    image: "/images/projects/ayozat-stream.png",
    color: "#e0245e",
  },
  {
    id: "rightsmint",
    index: "03",
    title: "RightsMint",
    category: "Web3 / IP Rights Platform",
    year: "2025",
    tech: ["React", "Node.js", "Solidity", "Web3.js"],
    description:
      "A blockchain platform letting creators and investors own real, on-chain shares of real-world copyrights — starting with music. I contributed across frontend/UI, backend/API and the on-chain registration logic.",
    challenge:
      "Traditional copyright ownership and trading is opaque and hard to fractionalise; the platform needed a way to represent real-world IP rights on-chain that's both verifiable and usable through an approachable web interface.",
    solution:
      "I worked across the stack — the frontend/UI for browsing and buying rights shares, backend/API work connecting the web app to on-chain state, and the on-chain registration/ownership logic itself — building toward a marketplace and liquidity pool for trading fractional copyright ownership.",
    responsibilities: [
      "Frontend/UI development",
      "Backend/API development",
      "On-chain registration and smart contract work",
    ],
    results:
      "Contributed to a pre-launch Web3 platform for fractional, on-chain copyright ownership, with a marketplace and liquidity pool in development.",
    liveUrl: "https://rightsmint.com/",
    image: "/images/projects/rightsmint.png",
    color: "#ec1861",
  },
  {
    id: "luxor-car-detailing",
    index: "11",
    title: "Luxor Car Detailing",
    category: "Concept Service Business Website",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "A self-directed concept site for a fictional car detailing service — full-bleed cinematic imagery, services, work showcase and a booking flow, designed and built solo end-to-end.",
    challenge:
      "I wanted a portfolio piece for a local service business that read as premium as the work itself, with a straightforward path from landing page to booked appointment.",
    solution:
      "I designed and built the concept solo in Next.js and TypeScript — a full-bleed hero and service sections built around detailing photography, a work/portfolio showcase, and a clear booking call-to-action throughout.",
    responsibilities: [
      "Full end-to-end design and development",
      "Next.js/TypeScript build",
      "Services, work showcase and booking flow",
    ],
    results:
      "Shipped a fully responsive concept site demonstrating a premium small-business web presence with a clear booking path.",
    liveUrl: "https://car-detailing-web-steel.vercel.app/",
    image: "/images/projects/luxor-detailing.png",
    color: "#c9a227",
  },
  {
    id: "lashunda-scales",
    index: "05",
    title: "Lashunda Scales",
    category: "Political Campaign Website",
    year: "2026",
    tech: ["WordPress", "Elementor", "Mailchimp", "Stripe", "Hostinger", "Cloudflare CDN"],
    description:
      "The official re-election campaign website for Lashunda Scales, Jefferson County Commissioner for District 1 — a full-bleed cinematic landing page, candidate bio, news, volunteer sign-up and donation flow.",
    challenge:
      "The campaign needed a fast, polished site that could go live quickly, accept donations securely, capture volunteer and supporter emails, and stay performant under traffic spikes around news coverage and events.",
    solution:
      "I built the site end-to-end on WordPress with Elementor, from the full-bleed hero through the About, News, Volunteer and Contact sections, and wired up the full backend: Stripe for secure online donations, Mailchimp for volunteer/supporter email capture and campaign newsletters, Hostinger for hosting, and Cloudflare CDN in front for performance and uptime under traffic spikes.",
    responsibilities: [
      "Full end-to-end WordPress/Elementor design and build",
      "Stripe donation integration",
      "Mailchimp email capture and newsletter setup",
      "Hosting on Hostinger with Cloudflare CDN",
    ],
    results:
      "Shipped a fast, secure campaign site handling donations and volunteer sign-ups, hosted for reliability under election-cycle traffic.",
    liveUrl: "https://lashundascales.com/",
    image: "/images/projects/lashunda-scales.jpg",
    color: "#1d3a8f",
  },
  {
    id: "echoing-dream-resort",
    index: "06",
    title: "Echoing Dream Resort",
    category: "Luxury Villa Booking",
    year: "2026",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Vercel"],
    description:
      "A production website for a real private four-bedroom pool villa in Baddegama, near Galle, Sri Lanka — full property showcase, room details, guest experiences and a WhatsApp-driven enquiry flow, replacing the client's outdated site.",
    challenge:
      "The client needed a site that felt as considered as the villa itself — minimal, image-led and calm — built entirely from scratch with their real photography, without a booking backend, while still making it effortless for guests to check dates and enquire.",
    solution:
      "I hand-built a fully responsive single-page site (no framework) around the client's own photography: a cinematic hero, story and experience sections, a room slider for each of the four suites, a full-bleed pool section, a lightbox gallery, an embedded location map, guest testimonials, an FAQ accordion and a contact form that builds a pre-filled WhatsApp message on submit. I also handled full on-page SEO — schema.org LodgingBusiness and FAQPage structured data, Open Graph/Twitter cards, sitemap.xml and a custom favicon — and deployed it on Vercel.",
    responsibilities: [
      "Hand-coded HTML/CSS/JS build (no framework)",
      "GSAP scroll & reveal animations",
      "WhatsApp-integrated enquiry flow",
      "SEO (structured data, Open Graph, sitemap)",
      "Real client photography curation & optimization",
    ],
    results:
      "Delivered a polished, production site for a real, operating villa business — replacing their previous site with a faster, image-first, SEO-ready build guests can actually enquire through.",
    liveUrl: "https://echoingdreamresort.com/",
    image: "/images/projects/echoing-dream-resort.jpg",
    color: "#A9834E",
  },
   {
    id: "villa-aurelia",
    index: "07",
    title: "Villa Aurelia",
    category: "Concept Villa Booking & Admin CMS",
    year: "2026",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL (Neon)",
      "Framer Motion",
    ],
    description:
      "A self-directed concept build: a full-stack website and private admin system for a fictional four-bedroom luxury villa in Galle Fort, southern Sri Lanka — a public booking site backed entirely by a database, plus a custom CMS so an owner could update every page, price and photo themselves.",
    challenge:
      "I wanted to go beyond a brochure site and prove out a real product pattern: a polished public experience for browsing suites, experiences and dining, taking bookings and enquiries — plus a way to manage all of it (pricing, room details, gallery, testimonials, even page headings) without ever touching code.",
    solution:
      "I built a Next.js App Router site with every piece of content — villa copy, rooms, amenities, experiences, dining, gallery, testimonials, contact info, booking pricing, and even page hero text — served from a Postgres (Neon) database, with a static fallback so the site never breaks if the database is briefly unreachable. Behind a signed-cookie authenticated /admin panel, an owner gets a dashboard plus full CRUD across every content type, a live bookings and enquiries inbox, and per-page settings editors. Each experience also has its own detail page with a secondary photo, distance and 'Get Directions' link, and a 'Good to Know' section. The booking flow and contact form write directly into the database rather than just sending an email.",
    responsibilities: [
      "Full-stack Next.js 16 (App Router) build with a Postgres (Neon) backend",
      "Custom admin authentication (signed HMAC session cookies, no third-party auth service)",
      "Admin CMS: CRUD for rooms, amenities, experiences, gallery, dining, testimonials, and page content",
      "Dynamic, database-backed page content — no hardcoded marketing copy",
      "Booking flow and contact form wired to real database tables",
      "Experience detail pages with distance/directions and practical trip info",
    ],
    results:
      "Shipped a fully dynamic concept villa website that an owner could run day-to-day without a developer — every page, price and photo editable from a private dashboard — demonstrating a complete full-stack product build from database to admin CMS to public site.",
    liveUrl: "https://villa-modern.vercel.app/",
    image: "/images/projects/au.png",
    color: "#6B7F5E",
  },
  {
    id: "villa-booking",
    index: "08",
    title: "Go House Proud",
    category: "Service Booking Website",
    year: "2026",
    tech: ["Next.js 13", "MySQL", "Custom CMS", "Plesk"],
    description:
      "A booking and lead-generation website for a cleaning services business, backed by a custom-built content management system.",
    challenge:
      "The client needed a fast marketing site with a real content backend they could manage themselves, deployed on constrained shared hosting.",
    solution:
      "I built a lightweight custom CMS on MySQL, paired it with a Next.js 13 frontend for speed and SEO, and configured deployment for Plesk-based shared hosting — working around its Node.js hosting limitations.",
    responsibilities: [
      "Full-stack build (Next.js + custom CMS)",
      "MySQL schema design",
      "Shared-hosting deployment strategy",
      "Booking & enquiry flow",
    ],
    results:
      "Delivered a production site with a fully self-serve content backend, live on shared hosting with no dedicated Node server required.",
    image: "/images/projects/ghp.jpg",
    color: "#a8b5a2",
  },
  {
    id: "loan-management",
    index: "09",
    title: "Loan Management System",
    category: "Fintech / Admin Platform",
    year: "2025",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "A demo daily & monthly loan management platform for lender staff — loan portfolio administration, collections and reporting behind an admin sign-in.",
    challenge:
      "Loan officers need one place to manage a portfolio running on both daily and monthly repayment cycles, track collections, and report on performance, without the complexity of a legacy banking system.",
    solution:
      "I built an admin-first platform around daily and monthly loan cycles, with dedicated portfolio, collections and reporting views behind authenticated admin access — prioritising a clean, functional interface over decorative complexity.",
    responsibilities: [
      "Next.js/TypeScript admin platform build",
      "Daily & monthly loan portfolio structure",
      "Collections administration views",
      "Reporting & analytics UI",
    ],
    results:
      "Delivered a working demo of a lender-facing loan operations platform, covering portfolio, collections and reporting in one authenticated system.",
    liveUrl: "",
    image: "/images/projects/loan.jpg",
    color: "#4f8fc0",
  },
  {
    id: "corporate-site",
    index: "10",
    title: "Eco Facility Management",
    category: "Corporate Website",
    year: "2023",
    tech: ["WordPress", "Elementor", "PHP", "Child Theme"],
    description:
      "A corporate marketing site for a Melbourne-based commercial cleaning company, with an auto-provisioning child theme.",
    challenge:
      "The client wanted a premium, dark-themed brand presence they could roll out quickly without a lengthy build process.",
    solution:
      "I developed a full auto-setup Elementor child theme so the site could be provisioned and styled consistently in a fraction of the usual setup time, before iterating toward a fully custom Next.js rebuild of the same dark aesthetic.",
    responsibilities: [
      "Child theme architecture",
      "Auto-provisioning setup flow",
      "Brand-consistent component library",
    ],
    results:
      "Cut theme setup time significantly and established a reusable base for future dark-themed corporate builds.",
    liveUrl: "https://ecofacilitymanagement.com.au/",
    image: "/images/projects/ecofacility.png",
    color: "#8a8f98",
  },
  {
    id: "amrit-palace",
    index: "11",
    title: "Amrit Palace",
    category: "Concept Restaurant Website",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "A self-directed concept website for a fictional fine-dining Indian restaurant, 'Amrit Palace' — a fully custom Next.js build exploring cinematic scroll storytelling and a working reservation flow.",
    challenge:
      "I wanted a portfolio piece that pushed past generic restaurant-template defaults — a premium, cinematic feel with a complete à la carte menu and a fully working table-reservation system, not just a static brochure layout.",
    solution:
      "I designed and built the concept from scratch in Next.js and TypeScript with a custom design system: a bold charcoal-and-ember palette and heavyweight display type, Framer Motion scroll reveals with one deliberate cinematic peak, a dedicated full-menu page, and a bespoke reservation form with meal-aware time slots and a searchable country-code phone picker.",
    responsibilities: [
      "Full front-end development",
      "Custom design system and art direction",
      "Scroll-driven animation and interaction design",
      "Reservation flow logic and form UX",
    ],
    results:
      "Shipped a fully responsive concept site with a distinct visual identity, a dedicated menu page, and a working reservation flow — demonstrating end-to-end product design and build capability.",
    liveUrl: "https://restaurants-web-theta.vercel.app/",
    image: "/images/projects/restaurant.png",
    color: "#c1401c",
  },
  {
    id: "sms-gateway",
    index: "12",
    title: "Managed Bulk SMS Platform",
    category: "SaaS Admin Platform",
    year: "2026",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "BullMQ",
      "Redis",
      "Tailwind CSS",
    ],
    description:
      "A multi-tenant bulk SMS platform for managing business customers, campaigns, and delivery at scale — built as a full-stack admin system with real SMS provider integration, not a demo shell.",
    challenge:
      "The platform needed to handle real operational complexity: multiple business customers with their own approval requirements and pricing, a compliance-gated campaign workflow, role-based access for internal staff, provider-agnostic SMS delivery with retries and status tracking, and billing — all behind a single, coherent admin experience.",
    solution:
      "I built the system end-to-end in Next.js with Server Actions, Drizzle ORM over PostgreSQL, and BullMQ/Redis for the send-and-retry pipeline, integrating Text.lk as the live delivery provider with real-time status polling. I designed a DB-driven role and permission system so access changes take effect immediately, a full campaign lifecycle (draft → approval → scheduling → delivery), contact and contact-group management feeding directly into campaign recipient selection, a reusable message-template library, sender ID approval workflows, invoicing and profitability tracking per company, and an internal notification system that alerts staff when something needs their attention.",
    responsibilities: [
      "Full-stack architecture and development",
      "Database schema and permission system design",
      "SMS provider integration and delivery pipeline (queue, retries, status tracking)",
      "Admin UX for campaigns, billing, contacts, and role management",
    ],
    results:
      "Shipped a production-grade internal admin platform with live SMS sending, a complete campaign approval and billing workflow, and role-gated CRUD across every operational area of the business — company management, contacts, templates, sender IDs, and audit logging.",
    liveUrl: "",
    image: "/images/projects/sms.jpg",
    color: "#2563eb",
  },
  
];
