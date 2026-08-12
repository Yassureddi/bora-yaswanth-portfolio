import { Download } from "lucide-react";
import { personal } from "@/data/personal";
import styles from "./ResumeDownloadButton.module.css";

type Props = { variant?: "primary" | "secondary"; className?: string };

export default function ResumeDownloadButton({
  variant = "primary",
  className = "",
}: Props) {
  return (
    <a
      href={personal.resumePath}
      download={personal.resumeFilename}
      className={`${styles.btn} ${styles[variant]} ${className}`.trim()}
      aria-label={`Download resume: ${personal.resumeFilename}`}
    >
      <Download size={16} aria-hidden />
      Download Resume
    </a>
  );
}
