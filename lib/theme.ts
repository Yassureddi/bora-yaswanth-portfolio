export const THEMES = ["forest", "editorial"] as const;

export type ThemeId = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeId = "forest";
export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME_LABELS: Record<ThemeId, string> = {
  forest: "Forest Atelier",
  editorial: "Editorial Mono",
};

export function isThemeId(value: string | null): value is ThemeId {
  return value === "forest" || value === "editorial";
}
