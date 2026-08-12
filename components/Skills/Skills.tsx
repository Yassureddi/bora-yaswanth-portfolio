import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="Technologies and practices I use to design, build, and ship reliable web applications."
        />

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <article key={category.title} className={styles.card}>
              <h3 className={styles.title}>{category.title}</h3>
              <ul className={styles.list}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
