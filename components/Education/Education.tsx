import { education } from "@/data/education";
import MotionReveal from "@/components/MotionReveal/MotionReveal";
import styles from "./Education.module.css";

export default function Education() {
  if (!education.length) return null;

  return (
    <section id="education" className={`section ${styles.section}`}>
      <div className="container">
        <MotionReveal>
          <p className="sectionMark">/ Education</p>
          <h2 className={styles.title}>Education</h2>
        </MotionReveal>

        <div className={styles.list}>
          {education.map((item, i) => (
            <MotionReveal key={item.degree} delay={i * 0.04}>
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
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
