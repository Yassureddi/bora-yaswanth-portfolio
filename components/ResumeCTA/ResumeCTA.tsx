import { Mail, MapPin } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/data/personal";
import ResumeDownloadButton from "@/components/ResumeDownloadButton/ResumeDownloadButton";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./ResumeCTA.module.css";

export default function ResumeCTA() {
  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <Reveal>
          <div className={styles.box}>
            <p className="eyebrow">Next Step</p>
            <h2>{personal.resumeCtaTitle}</h2>
            <p className={styles.text}>{personal.resumeCtaText}</p>
            <div className={styles.actions}>
              <ResumeDownloadButton variant="primary" />
              <a href="#contact" className={styles.secondary}>
                Contact Me
              </a>
            </div>
            <div className={styles.meta}>
              <a href={`mailto:${personal.email}`}>
                <Mail size={15} />
                {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
              {personal.github ? (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={15} />
                  GitHub
                </a>
              ) : null}
              <span>
                <MapPin size={15} />
                {personal.locationShort}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
