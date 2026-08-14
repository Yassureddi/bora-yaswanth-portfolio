"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { getPortfolioProfile } from "@/lib/portfolio";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const profile = getPortfolioProfile();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [hasImage, setHasImage] = useState(Boolean(profile.profileImage));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 20, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 20, mass: 0.4 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const leftY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -20]);
  const leftOpacity = useTransform(
    scrollYProgress,
    [0, 0.55],
    [1, reduce ? 1 : 0.35]
  );

  const imageMouseX = useTransform(springX, (v) => (reduce ? 0 : v * 12));
  const imageMouseY = useTransform(springY, (v) => (reduce ? 0 : v * 10));

  useEffect(() => {
    if (reduce) return;
    const node = sectionRef.current;
    if (!node) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, mouseX, mouseY]);

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.stage}>
        <motion.p
          className={`${styles.status} ${profile.available ? styles.live : ""}`}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <span />
          {profile.availabilityLabel}
        </motion.p>

        <motion.h1
          className={styles.name}
          style={{ y: nameY }}
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className={styles.honorific}>{profile.honorific}</span>
          <span className={styles.display}>{profile.displayName}</span>
        </motion.h1>

        <div className={styles.center}>
          <motion.div
            className={styles.left}
            style={{ y: leftY, opacity: leftOpacity }}
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            {profile.role ? (
              <p className={styles.role}>{profile.role}</p>
            ) : null}
            {profile.summary ? (
              <p className={styles.summary}>{profile.summary}</p>
            ) : null}
            <div className={styles.actions}>
              <a href="#contact" className={styles.primary} data-cursor="talk">
                Let&apos;s Collaborate
                <ArrowUpRight size={15} />
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                View Resume
                <ArrowDown size={14} />
              </a>
            </div>
            <p className={styles.follow}>Follow me</p>
            <div className={styles.socials} aria-label="Social links">
              {profile.github ? (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={16} />
                </a>
              ) : null}
              {profile.linkedin ? (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={16} />
                </a>
              ) : null}
              {profile.email ? (
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail size={16} />
                </a>
              ) : null}
            </div>
          </motion.div>

          {hasImage ? (
            <motion.div
              className={styles.portraitEnter}
              initial={reduce ? false : { opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, delay: 0.22, ease }}
            >
              <motion.div
                className={styles.portrait}
                style={{ y: imageY, x: imageMouseX }}
              >
                <motion.div
                  className={styles.portraitInner}
                  style={{ y: imageMouseY }}
                >
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.name}, ${profile.role}`}
                    width={720}
                    height={960}
                    className={styles.photo}
                    priority
                    unoptimized
                    onError={() => setHasImage(false)}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : null}

          {profile.stats.length ? (
            <motion.aside
              className={styles.right}
              style={{ y: rightY }}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease }}
            >
              {profile.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
