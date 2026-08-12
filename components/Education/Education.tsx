import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <SectionHeading eyebrow="Academics" title="Education" />

        <ol className={styles.timeline}>
          {education.map((item, index) => (
            <li key={item.degree} className={styles.item}>
              <div className={styles.marker} aria-hidden="true">
                <GraduationCap size={16} />
              </div>
              {index < education.length - 1 ? (
                <div className={styles.connector} aria-hidden="true" />
              ) : null}

              <article className={styles.card}>
                <div className={styles.header}>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  {item.period ? (
                    <p className={styles.period}>{item.period}</p>
                  ) : null}
                </div>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.score}>
                  <span>{item.scoreLabel}:</span> {item.score}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
