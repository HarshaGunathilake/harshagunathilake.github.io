import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/cursor/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const SITE_URL = "https://harshagunathilake.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Harsha Gunathilake - Full-Stack Developer",
    template: "%s - Harsha Gunathilake",
  },
  description:
    "Harsha Gunathilake is a Full-Stack Developer specializing in Next.js, React, Angular, Node.js, Laravel and modern web technologies.",
  keywords: [
    "Harsha Gunathilake",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Sri Lanka Developer",
    "Laravel Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Harsha Gunathilake", url: SITE_URL }],
  creator: "Harsha Gunathilake",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Harsha Gunathilake",
    title: "Harsha Gunathilake - Full-Stack Developer",
    description:
      "Full-Stack Developer building modern, high-performance web applications with React, Next.js, Angular, Node.js and Laravel.",
    images: [{ url: "/og-image.png", width: 512, height: 512, alt: "Harsha Gunathilake - Full-Stack Developer" }],
  },
  twitter: {
    card: "summary",
    title: "Harsha Gunathilake - Full-Stack Developer",
    description:
      "Full-Stack Developer building modern, high-performance web applications with React, Next.js, Angular, Node.js and Laravel.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsha Gunathilake",
  jobTitle: "Full-Stack Developer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/HarshaGunathilake",
    "https://www.linkedin.com/in/harsha-gunathilake5",
  ],
  address: { "@type": "PostalAddress", addressCountry: "LK" },
  knowsAbout: ["React", "Next.js", "Angular", "Node.js", "Laravel", "TypeScript"],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Harsha Gunathilake - Full-Stack Developer",
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--fg)] focus:text-[var(--bg)] focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <div className="grain-overlay" aria-hidden="true" />
          {children}
        </SmoothScroll>
        <GoogleAnalytics gaId="G-C0REVFNXL6" />
      </body>
    </html>
  );
}
