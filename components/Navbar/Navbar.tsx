"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "@/components/Theme/ThemeSwitcher";
import { getPortfolioProfile } from "@/lib/portfolio";
import { navLinks } from "@/data/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const profile = getPortfolioProfile();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className={`${styles.wrap} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={styles.bar} aria-label="Primary">
        <a href="#home" className={styles.brand}>
          {profile.name}
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.tools}>
          <span className={styles.themeDesk}>
            <ThemeSwitcher tone="dark" compact />
          </span>
          <a href="#contact" className={styles.cta} data-cursor="talk">
            Let&apos;s Talk →
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className={styles.mobileCta}
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s Talk →
                </a>
              </li>
            </ul>
            <ThemeSwitcher tone="dark" compact />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
