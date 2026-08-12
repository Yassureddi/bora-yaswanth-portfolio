import Image from "next/image";
import {
  featuredProjects,
  personalProjects,
  type Project,
} from "@/data/projects";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Projects.module.css";

function Visual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={`${project.name} project visual`}
          width={1200}
          height={700}
          className={styles.image}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    );
  }

  if (project.mockup === "infra") {
    return (
      <div className={styles.media}>
        <div className={styles.infra}>
          <span>Node.js API</span>
          <em>↓</em>
          <span>RabbitMQ</span>
          <em>↓</em>
          <span>PostgreSQL</span>
          <div>
            <b>Docker</b>
            <b>Compose</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.media}>
      <div className={styles.mock}>
        <div className={styles.mockBar}>
          <i />
          <i />
          <i />
        </div>
        <div className={styles.mockBody}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

function Card({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article className={`${styles.card} ${large ? styles.large : ""}`}>
      <Visual project={project} />
      <div className={styles.body}>
        <p className={styles.badge}>{project.category}</p>
        <h3>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
          {project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className={styles.modules}>
          {project.highlights.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {project.contribution ? (
          <p className={styles.contrib}>{project.contribution}</p>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects() {
  const [first, ...rest] = featuredProjects;

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Work</p>
          <h2 className={styles.title}>Featured Projects</h2>
        </Reveal>

        <div className={styles.featured}>
          <Reveal>
            <Card project={first} large />
          </Reveal>
          <div className={styles.side}>
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={i * 40}>
                <Card project={p} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className={styles.personal}>
          <Reveal>
            <p className="eyebrow">Side Work</p>
            <h3 className={styles.sub}>Personal Projects</h3>
          </Reveal>
          <div className={styles.personalGrid}>
            {personalProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 40}>
                <Card project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
