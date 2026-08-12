import { reasons } from "@/data/services";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./WhyWorkWithMe.module.css";

export default function WhyWorkWithMe() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Principles</p>
          <h2 className={styles.title}>Why Work With Me</h2>
        </Reveal>
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 30}>
              <article className={styles.card}>
                <span>0{i + 1}</span>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
