"use client";

import MotionReveal from "@/components/MotionReveal/MotionReveal";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

const items = [experience];

export default function Experience() {
  if (!items.length) return null;

  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <MotionReveal>
          <p className="sectionMark">/ Experience</p>
          <h2 className={styles.title}>Experience</h2>
        </MotionReveal>

        <div className={styles.list}>
          {items.map((item) => {
            const current = /present/i.test(item.duration);
            return (
              <MotionReveal key={item.company}>
                <article className={styles.item}>
                  <p className={styles.year}>
                    {item.duration}
                    {current ? (
                      <span className={styles.now} aria-label="Current role" />
                    ) : null}
                  </p>
                  <div>
                    <h3>{item.position}</h3>
                    <p className={styles.company}>{item.company}</p>
                    {item.location ? (
                      <p className={styles.loc}>{item.location}</p>
                    ) : null}
                    {item.summary ? (
                      <p className={styles.summary}>{item.summary}</p>
                    ) : null}
                    {item.responsibilities?.length ? (
                      <ul>
                        {item.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
