import { personal } from "@/data/personal";
import { experience } from "@/data/experience";
import { featuredProjects, personalProjects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

function uniqueSkills() {
  const set = new Set<string>();
  for (const category of skillCategories) {
    for (const skill of category.skills) {
      set.add(skill);
    }
  }
  return Array.from(set);
}

function yearsFromExperience() {
  const duration = experience?.duration ?? "";
  const match = duration.match(/(\d+)/);
  const years = match ? Number(match[1]) : 0;
  if (!years || Number.isNaN(years)) return null;
  return years;
}

export function getPortfolioProfile() {
  const projects = [...featuredProjects, ...personalProjects];
  const skills = uniqueSkills();
  const years = yearsFromExperience();
  const location =
    personal.locationShort || personal.location || experience?.location || "";
  const displayName = (personal.lastName || personal.firstName || personal.name)
    .trim()
    .toUpperCase();

  const stats: { value: string; label: string }[] = [];

  if (years) {
    stats.push({
      value: `${years}+`,
      label: "Years Experience",
    });
  }

  if (projects.length) {
    stats.push({
      value: `${projects.length}+`,
      label: "Projects Completed",
    });
  }

  if (skills.length) {
    stats.push({
      value: `${skills.length}+`,
      label: "Technologies",
    });
  }

  if (location) {
    stats.push({
      value: location,
      label: personal.availableForWork
        ? personal.availabilityLabel
        : "Currently Unavailable",
    });
  }

  return {
    name: personal.name,
    displayName,
    honorific: "MR>",
    role: personal.role,
    summary: personal.summary,
    profileImage: personal.profileImage || "",
    location,
    available: Boolean(personal.availableForWork),
    availabilityLabel: personal.availableForWork
      ? "Available for Work"
      : "Currently Unavailable",
    email: personal.email,
    github: personal.github || "",
    linkedin: personal.linkedin || "",
    resumePath: personal.resumePath,
    resumeFilename: personal.resumeFilename,
    phone: personal.phoneDisplay || personal.phone || "",
    phoneRaw: String(personal.phone || "").replace(/\D/g, ""),
    firstName: personal.firstName || "",
    lastName: personal.lastName || "",
    contactEyebrow: personal.contactEyebrow || "Contact & Reach Out",
    contactMessage:
      personal.contactMessage ||
      personal.contactText ||
      "Have questions or want to collaborate? Let's build something meaningful together.",
    stats,
  };
}

export function getEditorialStatement() {
  const role = personal.role || "digital products";
  const headlineRole = /developer/i.test(role)
    ? role.replace(/developer/i, "products")
    : `${role} products`;

  const corpus = [
    personal.summary,
    personal.supporting,
    personal.aboutQuote,
    ...(personal.about ?? []),
  ]
    .filter(Boolean)
    .join(" ");

  const hasDesign = /design/i.test(corpus);
  const hasIntel =
    /intelligence|llm|openai|gemini|\bai\b/i.test(corpus) ||
    skillCategories.some(
      (cat) =>
        /ai/i.test(cat.title) ||
        cat.skills.some((skill) => /openai|gemini|llm|\bai\b/i.test(skill)),
    );
  const hasSystems = /system|reliable|scalable/i.test(corpus);

  const closing = hasIntel
    ? "INTELLIGENCE"
    : hasSystems
      ? "RELIABLE SYSTEMS"
      : (skillCategories[0]?.title || "CRAFT").toUpperCase();

  const mid = hasDesign ? "ENGINEERING, DESIGN" : "ENGINEERING AND CRAFT";

  return [
    `I BUILD ${headlineRole.toUpperCase()}`,
    "THAT BRING TOGETHER",
    mid,
    `AND ${closing}.`,
  ];
}

export function getWatermarkName() {
  const fromDisplay = personal.displayName?.trim();
  if (fromDisplay) return fromDisplay.toUpperCase();

  const fromParts = [personal.firstName, personal.lastName]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(" ");
  if (fromParts) return fromParts.toUpperCase();

  return (personal.name || "").trim().toUpperCase();
}

export function getWhatsAppHref(phoneRaw: string, location: string) {
  if (!phoneRaw) return "";
  const withCountry =
    phoneRaw.length === 10 && /india/i.test(location)
      ? `91${phoneRaw}`
      : phoneRaw;
  return `https://wa.me/${withCountry}`;
}
