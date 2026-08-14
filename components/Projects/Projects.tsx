"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import {
  featuredProjects,
  personalProjects,
  type Project,
} from "@/data/projects";
import styles from "./Projects.module.css";

const spring = { type: "spring" as const, stiffness: 260, damping: 28 };

function projectId(project: Project, index: number) {
  return `${project.name}-${index}`;
}

function ProjectCard({
  project,
  index,
  expanded,
  onHover,
  onLeave,
  onTap,
}: {
  project: Project;
  index: number;
  expanded: boolean;
  onHover: () => void;
  onLeave: () => void;
  onTap: () => void;
}) {
  const reduce = useReducedMotion();
  const number = String(index + 1).padStart(2, "0");
  const live = project.liveUrl || null;
  const github = project.githubUrl || null;
  const href = live || github;

  return (
    <motion.article
      className={`${styles.card} ${expanded ? styles.open : ""}`}
      data-cursor="view"
      layout
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{
        width: expanded ? "var(--card-open)" : "var(--card-closed)",
      }}
      transition={reduce ? { duration: 0.2 } : spring}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onTap}
      tabIndex={0}
      aria-expanded={expanded}
    >
      {project.image ? (
        <motion.div
          className={styles.media}
          animate={{
            opacity: expanded ? 1 : 0.25,
            scale: expanded ? 1 : 1.08,
          }}
          transition={spring}
        >
          <Image
            src={project.image}
            alt=""
            width={800}
            height={1000}
            className={styles.image}
          />
        </motion.div>
      ) : (
        <div className={styles.placeholder} aria-hidden="true" />
      )}

      <div className={styles.collapsed} aria-hidden={expanded}>
        <span className={styles.num}>{number}</span>
        <p className={styles.verticalName}>{project.name}</p>
        <ArrowUpRight size={16} className={styles.arrow} />
      </div>

      <AnimatePresence>
        {expanded ? (
          <motion.div
            className={styles.expanded}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22 }}
          >
            <span className={styles.numLight}>{number}</span>
            <div className={styles.copy}>
              <p className={styles.cat}>{project.category}</p>
              <h3>{project.name}</h3>
              {project.description ? (
                <p className={styles.desc}>{project.description}</p>
              ) : null}
              {project.technologies?.length ? (
                <div className={styles.tags}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              ) : null}
              <div className={styles.actions}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span>Case study</span>
                )}
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitHubIcon size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Projects() {
  const projects = [...featuredProjects, ...personalProjects];
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [coarse, setCoarse] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!coarse) return;
    const onDoc = (e: MouseEvent | TouchEvent) => {
      if (!stripRef.current?.contains(e.target as Node)) {
        setHoveredProject(null);
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
    };
  }, [coarse]);

  if (!projects.length) return null;

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className={styles.heading}>
        <p className={styles.bgWord} aria-hidden="true">
          Portfolio
        </p>
        <h2 className={styles.title}>/ Selected Work</h2>
      </div>

      <div ref={stripRef} className={styles.strip}>
        {projects.map((project, index) => {
          const id = projectId(project, index);
          const expanded = hoveredProject === id;

          return (
            <ProjectCard
              key={id}
              project={project}
              index={index}
              expanded={expanded}
              onHover={() => {
                if (!coarse) setHoveredProject(id);
              }}
              onLeave={() => {
                if (!coarse) setHoveredProject(null);
              }}
              onTap={() => {
                if (!coarse) return;
                setHoveredProject((current) => (current === id ? null : id));
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
