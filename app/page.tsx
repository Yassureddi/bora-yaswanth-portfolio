import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import StatsStrip from "@/components/StatsStrip/StatsStrip";
import About from "@/components/About/About";
import WhatIDo from "@/components/WhatIDo/WhatIDo";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import WhyWorkWithMe from "@/components/WhyWorkWithMe/WhyWorkWithMe";
import ResumeCTA from "@/components/ResumeCTA/ResumeCTA";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <WhatIDo />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <WhyWorkWithMe />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
