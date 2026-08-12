import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { featuredProjects, personalProjects, type Project } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Projects.module.css";

function ProjectCard({
  project,
  showContribution = false,
}: {
  project: Project;
  showContribution?: boolean;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.tech}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>

      {project.highlights.length > 0 ? (
        <div className={styles.features}>
          <p className={styles.featuresLabel}>{project.highlightLabel}</p>
          <ul className={styles.featureList}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {showContribution && project.contribution ? (
        <div className={styles.contribution}>
          <p className={styles.featuresLabel}>My Contribution</p>
          <p className={styles.contributionText}>{project.contribution}</p>
        </div>
      ) : null}

      <div className={styles.actions}>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAction}
          >
            <ExternalLink size={16} aria-hidden />
            View Project
          </a>
        ) : (
          <span
            className={`${styles.primaryAction} ${styles.disabled}`}
            title="Project link not available"
          >
            <ExternalLink size={16} aria-hidden />
            View Project
          </span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryAction}
          >
            <GitHubIcon size={16} aria-hidden />
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="Professional applications built and maintained as part of real-world product development."
        />

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              showContribution
            />
          ))}
        </div>

        <div className={styles.personalSection}>
          <div className={styles.personalHeader}>
            <p className={styles.personalEyebrow}>Side Work</p>
            <h3 className={styles.personalTitle}>Personal Projects</h3>
            <p className={styles.personalDescription}>
              Independent projects focused on full stack product concepts and
              practical learning.
            </p>
          </div>

          <div className={styles.personalGrid}>
            {personalProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
