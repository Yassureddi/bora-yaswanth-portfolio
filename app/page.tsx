import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
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
        <Projects />
        <Services />
        <Experience />
        <Skills />
        <About />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
