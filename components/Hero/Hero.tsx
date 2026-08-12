import { Mail, MapPin } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/data/personal";
import ResumeDownloadButton from "@/components/ResumeDownloadButton/ResumeDownloadButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-name">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h1 id="hero-name" className={styles.name}>
            {personal.displayName}
          </h1>
          <p className={styles.role}>{personal.role.toUpperCase()}</p>

          <p className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            {personal.availability}
          </p>

          <p className={styles.headline}>{personal.headline}</p>
          <p className={styles.summary}>{personal.summary}</p>

          <p className={styles.location}>
            <MapPin size={15} aria-hidden />
            <span>{personal.location}</span>
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <ResumeDownloadButton variant="secondary" />
          </div>

          <div className={styles.socials} aria-label="Social links">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={18} aria-hidden />
              <span>LinkedIn</span>
            </a>
            {personal.github ? (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub profile"
              >
                <GitHubIcon size={18} aria-hidden />
                <span>GitHub</span>
              </a>
            ) : null}
            <a
              href={`mailto:${personal.email}`}
              className={styles.socialLink}
              aria-label={`Email ${personal.email}`}
            >
              <Mail size={18} aria-hidden />
              <span>Email</span>
            </a>
          </div>

          <a href="#contact" className={styles.contactLink}>
            Contact Me
          </a>
        </div>

        <aside className={styles.visual} aria-hidden="true">
          <div className={styles.codePanel}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.fileName}>developer.ts</span>
            </div>
            <pre className={styles.code}>
              <code>
                <span className={styles.keyword}>const</span>{" "}
                <span className={styles.variable}>developer</span> = {"{"}
                {"\n"}
                {"  "}
                <span className={styles.property}>name</span>:{" "}
                <span className={styles.string}>&quot;Bora Yaswanth&quot;</span>,
                {"\n"}
                {"  "}
                <span className={styles.property}>role</span>:{" "}
                <span className={styles.string}>
                  &quot;Full Stack Developer&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className={styles.property}>experience</span>:{" "}
                <span className={styles.string}>&quot;1+ Year&quot;</span>,
                {"\n"}
                {"  "}
                <span className={styles.property}>location</span>:{" "}
                <span className={styles.string}>&quot;India&quot;</span>,
                {"\n"}
                {"  "}
                <span className={styles.property}>focus</span>:{" "}
                <span className={styles.string}>
                  &quot;Web Applications&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className={styles.property}>stack</span>: [
                {"\n"}
                {"    "}
                <span className={styles.string}>&quot;Next.js&quot;</span>,
                {"\n"}
                {"    "}
                <span className={styles.string}>&quot;TypeScript&quot;</span>,
                {"\n"}
                {"    "}
                <span className={styles.string}>&quot;Node.js&quot;</span>,
                {"\n"}
                {"    "}
                <span className={styles.string}>&quot;MongoDB&quot;</span>,
                {"\n"}
                {"    "}
                <span className={styles.string}>&quot;PostgreSQL&quot;</span>,
                {"\n"}
                {"    "}
                <span className={styles.string}>&quot;Docker&quot;</span>
                {"\n"}
                {"  "}]{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </aside>
      </div>
    </section>
  );
}
