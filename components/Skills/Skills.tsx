import { skillCategories } from "@/data/skills";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className={styles.title}>Skills</h2>
        </Reveal>
        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 30}>
              <article className={styles.card}>
                <h3>
                  <span>{cat.id}</span>
                  {cat.title}
                </h3>
                <ul>
                  {cat.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
