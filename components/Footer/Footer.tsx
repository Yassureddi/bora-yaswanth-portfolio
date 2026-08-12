import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/data/personal";
import { footerLinks } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>{personal.displayName}</p>
          <p className={styles.role}>{personal.role.toUpperCase()}</p>
        </div>
        <ul className={styles.links}>
          {footerLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.social}>
          <li>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${personal.email}`}>
              <Mail size={14} />
              Email
            </a>
          </li>
          {personal.github ? (
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      <div className={styles.copy}>
        <div className="container">
          <p>© 2026 Bora Yaswanth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
