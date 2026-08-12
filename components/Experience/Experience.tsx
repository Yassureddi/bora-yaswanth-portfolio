import { MapPin, Building2, Clock } from "lucide-react";
import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
        />

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />

          <article className={styles.card}>
            <div className={styles.marker} aria-hidden="true" />

            <div className={styles.cardInner}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.position}>{experience.position}</h3>
                  <p className={styles.company}>
                    <Building2 size={16} aria-hidden />
                    {experience.company}
                  </p>
                </div>
                <div className={styles.meta}>
                  <p>
                    <Clock size={15} aria-hidden />
                    <span>{experience.duration}</span>
                  </p>
                  <p>
                    <MapPin size={15} aria-hidden />
                    <span>{experience.location}</span>
                  </p>
                </div>
              </div>

              <ul className={styles.list}>
                {experience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
