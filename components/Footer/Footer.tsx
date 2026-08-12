import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/data/personal";
import { footerLinks } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>{personal.displayName}</p>
          <p className={styles.role}>{personal.role}</p>
          <p className={styles.tagline}>{personal.footerTagline}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <ul className={styles.links}>
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={14} aria-hidden />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${personal.email}`}>
                <Mail size={14} aria-hidden />
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
                  <GitHubIcon size={14} aria-hidden />
                  GitHub
                </a>
              </li>
            ) : null}
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.copyright}>
        <div className="container">
          <p>© 2026 Bora Yaswanth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
