export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  highlightLabel: string;
  contribution?: string;
  featured?: boolean;
  personal?: boolean;
  mockup: "dashboard" | "salon" | "infra" | "fitness" | "restaurant";
  image?: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
};

export const featuredProjects: Project[] = [
  {
    name: "StoreOS",
    category: "Professional Project",
    description:
      "Business management platform designed to support day-to-day business operations.",
    technologies: ["Next.js", "TypeScript", "Node.js", "REST APIs"],
    highlightLabel: "Modules",
    highlights: [
      "CUSTOMERS",
      "BOOKINGS",
      "POS",
      "STAFF",
      "INVENTORY",
      "PROCUREMENT",
      "MARKETING",
      "FINANCE",
    ],
    contribution:
      "Worked on frontend development, API integration, data workflows, UI improvements, debugging and testing across real-world business workflows.",
    featured: true,
    mockup: "dashboard",
    image: "/projects/storeos.png",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "SalonOS",
    category: "Professional Project",
    description:
      "Comprehensive salon management platform covering business onboarding and operational workflows.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    highlightLabel: "Modules",
    highlights: [
      "ONBOARDING",
      "BOOKINGS",
      "SERVICES",
      "STAFF",
      "CUSTOMERS",
      "INVENTORY",
      "MARKETING",
      "FINANCE",
    ],
    contribution:
      "Worked across multiple modules, implemented and tested workflows, identified and resolved UI and functional issues, and performed regression validation.",
    mockup: "salon",
    image: "/projects/salonos.png",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "Qualinix",
    category: "Professional Project",
    description:
      "Backend-oriented application involving containerized services and development infrastructure.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "RabbitMQ",
    ],
    highlightLabel: "Infrastructure",
    highlights: ["Node.js API", "RabbitMQ", "PostgreSQL", "Docker"],
    contribution:
      "Worked with backend services, PostgreSQL connectivity, Docker environments, RabbitMQ infrastructure, service configuration and troubleshooting.",
    mockup: "infra",
    liveUrl: null,
    githubUrl: null,
  },
];

export const personalProjects: Project[] = [
  {
    name: "KN Raju Fitness",
    category: "Personal Project",
    description:
      "Gym management platform concept covering memberships, payments, member management and supplement inventory.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    highlightLabel: "Features",
    highlights: [
      "Member Management",
      "Membership Plans",
      "Payments",
      "Supplement Store",
      "Admin Dashboard",
    ],
    personal: true,
    mockup: "fitness",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "Gana-Mama",
    category: "Personal Project",
    description:
      "Restaurant website and admin platform concept for menu and order management.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    highlightLabel: "Features",
    highlights: [
      "Customer Website",
      "Menu",
      "Order Management",
      "Admin Portal",
    ],
    personal: true,
    mockup: "restaurant",
    liveUrl: null,
    githubUrl: null,
  },
];
