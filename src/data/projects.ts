export const STATUSES = [
  "live",
  "in-development",
  "prototype",
  "concept",
  "paused",
  "coming-soon",
] as const;

export type Status = (typeof STATUSES)[number];

export const STATUS_LABELS: Record<Status, string> = {
  live: "Live",
  "in-development": "In development",
  prototype: "Prototype",
  concept: "Concept",
  paused: "Paused",
  "coming-soon": "Coming soon",
};

export type Project = {
  number: string;
  slug: string;
  name: string;
  category: string;
  status: Status;
  year: string;
  description: string;
  /** Public destination. Omit until the project has somewhere to go. */
  url?: string;
  /** Label for the action when `url` is set. */
  action?: string;
};

export const projects: Project[] = [
  {
    number: "001",
    slug: "no-charisma",
    name: "No Charisma",
    category: "Identity system",
    status: "live",
    year: "2026",
    description:
      "The house system for an independent idea factory. Built to hold tools, objects, writing and unresolved experiments without becoming polite.",
  },
  {
    number: "002",
    slug: "thoughts-of-a-mad-man",
    name: "Thoughts of a Mad Man",
    category: "Editorial project",
    status: "in-development",
    year: "2026",
    description:
      "A written archive for observations too specific to become content and too persistent to stay private.",
  },
  {
    number: "003",
    slug: "few-small-wines",
    name: "Few Small Wines",
    category: "Brand experiment",
    status: "prototype",
    year: "2026",
    description:
      "A compact identity study for small-run drinking occasions, labels, rituals and the social machinery around them.",
  },
  {
    number: "004",
    slug: "panda-studio",
    name: "Panda Studio",
    category: "Application",
    status: "in-development",
    year: "2026",
    description:
      "A practical tool concept for turning rough creative material into something structured enough to use.",
  },
  {
    number: "005",
    slug: "voice-to-music",
    name: "Voice to Music",
    category: "Application",
    status: "prototype",
    year: "2026",
    description:
      "A browser-based vocal sketchpad for singing a rough idea and hearing it back with harmonised chord accompaniment, built toward a structured track.",
  },
  {
    number: "006",
    slug: "wardrobe-audit",
    name: "Wardrobe Audit",
    category: "AI tool",
    status: "prototype",
    year: "2026",
    description:
      "A style system that reviews a clothing wardrobe, identifies missing pieces and turns taste into a practical shopping brief.",
  },
  {
    number: "007",
    slug: "stoop",
    name: "Stoop",
    category: "Application",
    status: "prototype",
    year: "2026",
    description:
      "A hyperlocal, place-based social app. Residents are verified, and a post's reach ripples outward from the block it was written on.",
  },
];
