"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import ThemeSwitcher from "@/components/Theme/ThemeSwitcher";
import { getPortfolioProfile, getWatermarkName } from "@/lib/portfolio";
import { navLinks } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const profile = getPortfolioProfile();
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();
  const watermark = getWatermarkName();

  return (
    <footer className={styles.footer}>
      {watermark ? (
        <motion.p
          className={styles.watermark}
          aria-hidden="true"
          style={{
            ["--chars" as string]: String(
              Math.max(watermark.replace(/\s/g, "").length, 4),
            ),
          }}
          initial={reduce ? false : { opacity: 0, y: 30, x: "-50%" }}
          whileInView={{ opacity: 0.9, y: 0, x: "-50%" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {watermark}
        </motion.p>
      ) : null}

      <div className={styles.content}>
        <div className={`container ${styles.top}`}>
          <div className={styles.identity}>
            {profile.profileImage ? (
              <Image
                src={profile.profileImage}
                alt=""
                width={56}
                height={56}
                className={styles.avatar}
                unoptimized
              />
            ) : null}
            <div>
              <p className={styles.name}>{profile.name}</p>
              {profile.role ? (
                <p className={styles.role}>{profile.role}</p>
              ) : null}
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <p>Navigation</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.connect}>
            <p>Connect</p>
            <ul>
              {profile.github ? (
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon size={14} />
                    GitHub
                  </a>
                </li>
              ) : null}
              {profile.linkedin ? (
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon size={14} />
                    LinkedIn
                  </a>
                </li>
              ) : null}
              {profile.email ? (
                <li>
                  <a href={`mailto:${profile.email}`}>
                    <Mail size={14} />
                    Email
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className={`container ${styles.copy}`}>
          <p>{profile.name}</p>
          <ThemeSwitcher compact />
          <p>© {year}</p>
        </div>
      </div>
    </footer>
  );
}
