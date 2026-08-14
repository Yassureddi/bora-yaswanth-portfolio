"use client";

import { THEME_LABELS, THEMES } from "@/lib/theme";
import { useTheme } from "./ThemeProvider";
import styles from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher({
  tone = "light",
  compact = false,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`${styles.wrap} ${tone === "dark" ? styles.onDark : ""}`}
      role="group"
      aria-label="Portfolio theme"
    >
      {THEMES.map((id) => (
        <button
          key={id}
          type="button"
          className={`${styles.btn} ${theme === id ? styles.active : ""}`}
          onClick={() => setTheme(id)}
          aria-pressed={theme === id}
          title={THEME_LABELS[id]}
        >
          {compact ? (id === "forest" ? "Forest" : "Mono") : THEME_LABELS[id]}
        </button>
      ))}
    </div>
  );
}
