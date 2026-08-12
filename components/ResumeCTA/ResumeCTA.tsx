import { personal } from "@/data/personal";
import ResumeDownloadButton from "@/components/ResumeDownloadButton/ResumeDownloadButton";
import styles from "./ResumeCTA.module.css";

export default function ResumeCTA() {
  return (
    <section className={`section ${styles.cta}`} aria-labelledby="resume-cta-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 id="resume-cta-title" className={styles.title}>
            {personal.resumeCtaTitle}
          </h2>
          <p className={styles.text}>{personal.resumeCtaText}</p>
        </div>

        <div className={styles.actions}>
          <ResumeDownloadButton variant="primary" />
          <a href="#contact" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
