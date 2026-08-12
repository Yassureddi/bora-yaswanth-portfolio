import { experience } from "@/data/experience";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Career</p>
          <h2 className={styles.title}>Professional Experience</h2>
        </Reveal>
        <Reveal>
          <article className={styles.card}>
            <div className={styles.head}>
              <div>
                <h3>{experience.position}</h3>
                <p className={styles.company}>{experience.company}</p>
              </div>
              <p className={styles.duration}>{experience.duration}</p>
            </div>
            <p className={styles.summary}>{experience.summary}</p>
            <ul>
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {experience.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
