"use client";

import { useState } from "react";
import Preloader from "@/components/preloader/Preloader";
import Navbar from "@/components/navigation/Navbar";
import MobileMenu from "@/components/navigation/MobileMenu";
import Hero from "@/components/hero/Hero";
import Manifesto from "@/components/manifesto/Manifesto";
import About from "@/components/about/About";
import TechMarquee from "@/components/marquee/TechMarquee";
import Experience from "@/components/experience/Experience";
import SelectedWork from "@/components/projects/SelectedWork";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Numbers from "@/components/numbers/Numbers";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {loading && (
        <Preloader
          onComplete={() => {
            setLoading(false);
            setLoaded(true);
          }}
        />
      )}

      <Navbar onMenuToggle={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="main-content">
        <Hero loaded={loaded} />
        <Manifesto />
        <About />
        <TechMarquee />
        <Experience />
        <SelectedWork />
        <Services />
        <Skills />
        <Numbers />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
