"use client";

import { useState } from "react";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./WhatIDo.module.css";

export default function WhatIDo() {
  const [active, setActive] = useState("01");

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className={styles.title}>What I Do</h2>
        </Reveal>
        <Reveal>
          <ul className={styles.list}>
            {services.map((s) => (
              <li
                key={s.id}
                className={active === s.id ? styles.open : undefined}
                onMouseEnter={() => setActive(s.id)}
              >
                <button type="button" onClick={() => setActive(s.id)}>
                  <span>{s.id}</span>
                  <strong>{s.title}</strong>
                </button>
                <p>{s.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
