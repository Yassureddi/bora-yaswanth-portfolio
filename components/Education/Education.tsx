import { education } from "@/data/education";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className={styles.title}>Academic Background</h2>
        </Reveal>
        <div className={styles.list}>
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 40}>
              <article className={styles.item}>
                <p className={styles.period}>{item.period ?? "—"}</p>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <span>
                    {item.scoreLabel === "CGPA"
                      ? `${item.score} CGPA`
                      : item.score}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
