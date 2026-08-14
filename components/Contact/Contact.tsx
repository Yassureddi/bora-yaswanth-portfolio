"use client";

import { ArrowUpRight, Mail, MapPin, Phone, User } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getPortfolioProfile, getWhatsAppHref } from "@/lib/portfolio";
import styles from "./Contact.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const profile = getPortfolioProfile();
  const reduce = useReducedMotion();
  const whatsapp = getWhatsAppHref(profile.phoneRaw, profile.location);

  const cards = [
    profile.name
      ? { icon: User, label: "Profile", value: profile.name }
      : null,
    profile.phone
      ? {
          icon: Phone,
          label: "Direct line / WhatsApp",
          value: profile.phone,
          href: whatsapp || `tel:${profile.phoneRaw}`,
        }
      : null,
    profile.email
      ? {
          icon: Mail,
          label: "Email",
          value: profile.email,
          href: `mailto:${profile.email}`,
        }
      : null,
    profile.location
      ? { icon: MapPin, label: "Location", value: profile.location }
      : null,
  ].filter(Boolean) as {
    icon: typeof User;
    label: string;
    value: string;
    href?: string;
  }[];

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.panel}
          initial={reduce ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className={styles.copy}>
            <motion.p
              className={styles.eyebrow}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {profile.contactEyebrow}
            </motion.p>
            <motion.h2
              className={styles.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.6 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className={styles.message}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
            >
              {profile.contactMessage}
            </motion.p>
            <motion.div
              className={styles.actions}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36 }}
            >
              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                  data-cursor="talk"
                >
                  Chat on WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
              {profile.email ? (
                <a href={`mailto:${profile.email}`} className={styles.secondary}>
                  Send Email
                </a>
              ) : null}
            </motion.div>
          </div>

          {cards.length ? (
            <div className={styles.cards}>
              {cards.map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <>
                    <Icon size={16} />
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                  </>
                );
                return (
                  <motion.div
                    key={card.label}
                    className={styles.card}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.28 + i * 0.08, duration: 0.45 }}
                    whileHover={reduce ? undefined : { y: -4 }}
                  >
                    {card.href ? <a href={card.href}>{inner}</a> : inner}
                  </motion.div>
                );
              })}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
