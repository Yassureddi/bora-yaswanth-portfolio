export type Project = {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  highlightLabel: string;
  contribution?: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
};

export const featuredProjects: Project[] = [
  {
    name: "StoreOS",
    description:
      "Business management platform designed to support day-to-day business operations.",
    technologies: ["Next.js", "TypeScript", "Node.js", "REST APIs"],
    highlightLabel: "Modules",
    highlights: [
      "Customers",
      "Bookings / Orders",
      "POS",
      "Staff",
      "Inventory",
      "Procurement",
      "Marketing",
      "Finance",
    ],
    contribution:
      "Worked on frontend development, API integration, data workflows, UI improvements, debugging and testing.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "SalonOS",
    description:
      "Comprehensive salon management platform for managing business operations.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    highlightLabel: "Modules",
    highlights: [
      "Onboarding",
      "Dashboard",
      "Bookings",
      "Services",
      "Staff Management",
      "Customers",
      "Product & Inventory",
      "Asset Management",
      "Marketing",
      "Finance",
      "Settings",
    ],
    contribution:
      "Worked across multiple modules, implemented and tested workflows, identified bugs, fixed UI and functional issues, and performed regression validation.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "Qualinix",
    description:
      "Backend-oriented application infrastructure involving containerized services.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "RabbitMQ",
    ],
    highlightLabel: "Focus Areas",
    highlights: [
      "Backend services",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
      "Service configuration",
    ],
    contribution:
      "Worked with backend services, PostgreSQL connectivity, Docker environments, RabbitMQ infrastructure and service troubleshooting.",
    liveUrl: null,
    githubUrl: null,
  },
];

export const personalProjects: Project[] = [
  {
    name: "KN Raju Fitness",
    description: "Gym management platform.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    highlightLabel: "Features",
    highlights: [
      "Member Management",
      "Membership Plans",
      "Membership Renewal",
      "Payment Management",
      "Supplement Store",
      "Inventory Management",
      "Admin Dashboard",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "Gana-Mama",
    description: "Restaurant website and management concept.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    highlightLabel: "Features",
    highlights: [
      "Customer Website",
      "Menu",
      "Order Management",
      "Admin Portal",
      "Menu Management",
    ],
    liveUrl: null,
    githubUrl: null,
  },
];
