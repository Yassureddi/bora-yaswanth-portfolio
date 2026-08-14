export type Service = {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  enabled?: boolean;
  order?: number;
};

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Next.js, TypeScript, responsive web interfaces and reusable components.",
    technologies: ["Next.js", "TypeScript", "HTML5", "CSS Modules"],
    enabled: true,
    order: 1,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Node.js, Express.js and backend business logic.",
    technologies: ["Node.js", "Express.js"],
    enabled: true,
    order: 2,
  },
  {
    id: "api",
    title: "REST API Development",
    description:
      "API design, integration and frontend-backend communication.",
    technologies: ["REST APIs", "API Integration"],
    enabled: true,
    order: 3,
  },
  {
    id: "database",
    title: "Database Integration",
    description: "MongoDB, Mongoose and PostgreSQL.",
    technologies: ["MongoDB", "Mongoose", "PostgreSQL"],
    enabled: true,
    order: 4,
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description: "Docker, Docker Compose, Git, GitHub and Vercel.",
    technologies: ["Docker", "Git", "Vercel"],
    enabled: true,
    order: 5,
  },
  {
    id: "testing",
    title: "Testing & Debugging",
    description:
      "API testing, functional testing, regression testing, Playwright and debugging.",
    technologies: ["Playwright", "API Testing", "Regression Testing"],
    enabled: true,
    order: 6,
  },
];

export const reasons = [
  {
    title: "BUILD WITH PURPOSE",
    description: "I focus on solving real problems with practical software.",
  },
  {
    title: "LEARN CONSTANTLY",
    description: "I continuously improve my development skills.",
  },
  {
    title: "FULL STACK MINDSET",
    description: "I understand frontend, backend, APIs and databases.",
  },
  {
    title: "QUALITY MATTERS",
    description:
      "I care about maintainability, testing and reliable workflows.",
  },
] as const;
