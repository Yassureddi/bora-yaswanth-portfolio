import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectMockup.module.css";

type ProjectMockupProps = {
  project: Project;
  large?: boolean;
};

export default function ProjectMockup({
  project,
  large = false,
}: ProjectMockupProps) {
  if (project.image) {
    return (
      <div className={`${styles.mockup} ${large ? styles.large : ""}`}>
        <div className={styles.imageFrame}>
          <Image
            src={project.image}
            alt={`${project.name} project visual`}
            width={1200}
            height={675}
            className={styles.image}
            sizes={large ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 40vw"}
            priority={Boolean(project.featured)}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.mockup} ${large ? styles.large : ""} ${styles[project.mockup]}`}
      aria-hidden="true"
    >
      <div className={styles.browser}>
        <div className={styles.chrome}>
          <span />
          <span />
          <span />
          <div className={styles.url}>{project.name.toLowerCase()}.app</div>
        </div>
        <div className={styles.screen}>
          <div className={styles.sidebar}>
            <div className={styles.sideItem} />
            <div className={styles.sideItem} />
            <div className={styles.sideItem} />
            <div className={styles.sideItem} />
          </div>
          <div className={styles.main}>
            <div className={styles.headerBar} />
            <div className={styles.cards}>
              <div className={styles.panel} />
              <div className={styles.panel} />
              <div className={styles.panelWide} />
            </div>
            {project.mockup === "infra" ? (
              <div className={styles.terminal}>
                <span>$ docker compose up</span>
                <span>services healthy</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <p className={styles.caption}>Stylized UI mockup — not a product screenshot</p>
    </div>
  );
}
