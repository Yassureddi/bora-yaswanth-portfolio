"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import styles from "./Services.module.css";

const spring = { type: "spring" as const, stiffness: 260, damping: 30 };

export default function Services() {
  const list = [...services]
    .filter((s) => s.enabled !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const [openId, setOpenId] = useState<string | null>(null);
  const [coarse, setCoarse] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!list.length) return null;

  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <p className={styles.mark}>/ Service</p>
        <div className={styles.list}>
          {list.map((service, index) => {
            const id = service.id;
            const open = openId === id;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={id}
                className={`${styles.row} ${open ? styles.open : ""}`}
                data-cursor="explore"
                layout
                transition={reduce ? { duration: 0.2 } : spring}
                onMouseEnter={() => {
                  if (!coarse) setOpenId(id);
                }}
                onMouseLeave={() => {
                  if (!coarse) setOpenId(null);
                }}
                onFocus={() => {
                  if (!coarse) setOpenId(id);
                }}
                onBlur={() => {
                  if (!coarse) setOpenId(null);
                }}
                onClick={() => {
                  if (!coarse) return;
                  setOpenId((current) => (current === id ? null : id));
                }}
                tabIndex={0}
                aria-expanded={open}
              >
                <div className={styles.head}>
                  <span className={styles.num}>{number}</span>
                  <h3>{service.title}</h3>
                  {open ? (
                    <X size={18} className={styles.icon} aria-hidden="true" />
                  ) : (
                    <ArrowUpRight
                      size={20}
                      className={styles.icon}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {open && service.description ? (
                    <motion.div
                      className={styles.detail}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={reduce ? { duration: 0.15 } : spring}
                    >
                      <p>{service.description}</p>
                      {service.technologies?.length ? (
                        <div className={styles.tags}>
                          {service.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                      ) : null}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
