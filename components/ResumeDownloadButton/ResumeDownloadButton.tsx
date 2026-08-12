import { Download } from "lucide-react";
import styles from "./ResumeDownloadButton.module.css";

type ResumeDownloadButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

const RESUME_HREF = "/Bora-Yaswanth-Full-Stack-Developer-Resume.pdf";
const RESUME_FILENAME = "Bora-Yaswanth-Full-Stack-Developer-Resume.pdf";

export default function ResumeDownloadButton({
  variant = "secondary",
  className = "",
}: ResumeDownloadButtonProps) {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;

  return (
    <a
      href={RESUME_HREF}
      download={RESUME_FILENAME}
      type="application/pdf"
      className={`${styles.button} ${variantClass} ${className}`.trim()}
      aria-label={`Download resume PDF: ${RESUME_FILENAME}`}
    >
      <Download size={16} className={styles.icon} aria-hidden />
      <span>Download Resume</span>
    </a>
  );
}
