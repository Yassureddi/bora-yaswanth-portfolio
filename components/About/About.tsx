import { personal } from "@/data/personal";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <div>
              <p className="eyebrow">About</p>
              <h2 className={styles.title}>{personal.aboutHeading}</h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className={styles.copy}>
              {personal.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <dl className={styles.meta}>
                {personal.aboutMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
