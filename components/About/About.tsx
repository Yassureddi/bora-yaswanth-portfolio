import { personal } from "@/data/personal";
import MotionReveal from "@/components/MotionReveal/MotionReveal";
import { getEditorialStatement } from "@/lib/portfolio";
import styles from "./About.module.css";

export default function About() {
  const statement = getEditorialStatement();
  if (!statement.length && !personal.about?.length) return null;

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <MotionReveal>
          <p className="sectionMark">/ Introduction</p>
          <h2 className={styles.quote}>
            {statement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </MotionReveal>
        {personal.about?.length ? (
          <MotionReveal delay={0.08}>
            <div className={styles.copy}>
              <p className={styles.lead}>Professional Summary</p>
              {personal.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </MotionReveal>
        ) : null}
        {personal.aboutMeta?.length ? (
          <MotionReveal delay={0.12}>
            <dl className={styles.meta}>
              {personal.aboutMeta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </MotionReveal>
        ) : null}
      </div>
    </section>
  );
}
