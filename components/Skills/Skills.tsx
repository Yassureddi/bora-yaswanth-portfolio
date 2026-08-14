import { skillCategories } from "@/data/skills";
import MotionReveal from "@/components/MotionReveal/MotionReveal";
import styles from "./Skills.module.css";

export default function Skills() {
  if (!skillCategories.length) return null;

  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <MotionReveal>
          <p className="sectionMark">/ Skills</p>
          <h2 className={styles.title}>Skills</h2>
        </MotionReveal>

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <MotionReveal key={cat.title} delay={i * 0.04}>
              <div className={styles.group}>
                <h3>{cat.title}</h3>
                <ul>
                  {cat.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
