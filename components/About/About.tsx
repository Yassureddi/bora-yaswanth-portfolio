import { personal } from "@/data/personal";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <SectionHeading eyebrow="Introduction" title="About Me" />

        <div className={styles.grid}>
          <div className={styles.copy}>
            {personal.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.stats} aria-label="Key statistics">
            {personal.stats.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
