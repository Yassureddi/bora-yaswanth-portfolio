import { personal } from "@/data/personal";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./StatsStrip.module.css";

export default function StatsStrip() {
  return (
    <section className={styles.strip} aria-label="Key statistics">
      <div className="container">
        <Reveal>
          <div className={styles.row}>
            {personal.heroStats.map((stat) => (
              <article key={stat.label} className={styles.item}>
                <p className={styles.value}>{stat.value}</p>
                <p className={styles.label}>{stat.label}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
