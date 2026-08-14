"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (reduce) return;

    const mq = window.matchMedia("(pointer: fine)");
    const apply = () => {
      document.body.classList.toggle("has-cursor", mq.matches);
    };
    apply();
    mq.addEventListener("change", apply);

    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]",
      );
      const next = target?.getAttribute("data-cursor") || "";
      setLabel(next);
      setHover(Boolean(next));
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      document.body.classList.remove("has-cursor");
      mq.removeEventListener("change", apply);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  return (
    <motion.div
      className={`${styles.cursor} ${hover ? styles.hover : ""}`}
      aria-hidden="true"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.25 }}
    >
      <span className={styles.dot} />
      {label ? <span className={styles.label}>{label}</span> : null}
    </motion.div>
  );
}
