"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getPortfolioProfile } from "@/lib/portfolio";
import styles from "./ResumeCTA.module.css";

export default function ResumeCTA() {
  const profile = getPortfolioProfile();
  const reduce = useReducedMotion();

  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <motion.div
          className={styles.box}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>
            <span>Ready for</span>
            <span>what&apos;s next?</span>
          </h2>
          {profile.summary ? <p className={styles.text}>{profile.summary}</p> : null}
          <div className={styles.actions}>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              View Resume →
            </a>
            <a href="#contact" className={styles.secondary} data-cursor="talk">
              Let&apos;s Talk →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
