import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/data/personal";
import styles from "./Hero.module.css";

function hasProfileImage() {
  return fs.existsSync(
    path.join(process.cwd(), "public", "profile", "profile-hero.png")
  );
}

export default function Hero() {
  const showPhoto = hasProfileImage();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.dots} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.hi}>{personal.heroGreeting}</p>
          <h1 className={styles.title}>
            {personal.heroLead}{" "}
            <span className={styles.accent}>{personal.displayName}</span>
          </h1>
          <p className={styles.role}>{personal.role.toUpperCase()}</p>
          <p className={styles.summary}>{personal.summary}</p>
          <p className={styles.support}>{personal.supporting}</p>

          <div className={styles.actions}>
            <a
              href={personal.resumePath}
              download={personal.resumeFilename}
              className={styles.primary}
            >
              Download My Resume
            </a>
            <a href="#projects" className={styles.secondary}>
              View My Work
            </a>
          </div>

          <div className={styles.socials} aria-label="Social links">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            {personal.github ? (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
            ) : null}
          </div>
        </div>

        <div className={styles.profileVisual}>
          {showPhoto ? (
            <Image
              src={personal.profileImage}
              alt="Bora Yaswanth, Full Stack Developer"
              width={513}
              height={541}
              className={styles.profileHeroImage}
              priority
              unoptimized
            />
          ) : (
            <div className={styles.photoFallback}>
              <span>BY</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
