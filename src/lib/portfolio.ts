/**
 * Central portfolio content. Edit this file to update the whole site.
 *
 * ⚠ Data integrity rules:
 * - Never fabricate links, screenshots, stats, or experience details.
 * - Empty strings mean "not provided yet" — the UI renders placeholders
 *   or hides the link until a real value is set here.
 */

export const site = {
  name: "Fayzur Rahman",
  /** Split for the hero accent treatment: first words + highlighted last word */
  nameParts: { first: "Fayzur", accent: "Rahman" },
  role: "Full-Stack Web Developer",
  location: "",
  /**
   * TODO: Add your real links. Until then the UI shows clearly-marked
   * placeholders — they are NOT live URLs.
   */
  links: {
    // TODO: e.g. "https://github.com/your-username"
    github: "",
    // TODO: e.g. "https://www.linkedin.com/in/your-username"
    linkedin: "",
    // TODO: e.g. "you@example.com"
    email: "",
  },
  /** Set true when you are actually open to new roles — drives the hero availability badge. */
  availableForWork: false,
  heroDescription:
    "I build modern, responsive web applications end to end — clean, accessible interfaces on the frontend and practical APIs and data layers on the backend, with Next.js, TypeScript, and Node.js.",
} as const;

export type SkillGroup = {
  label: string;
  icon: "code" | "server" | "wrench";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    icon: "code",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    label: "Tools & Workflow",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export type Project = {
  title: string;
  subtitle?: string;
  /** One honest line. Keep it minimal — expand only with verified feature info. */
  description: string;
  /** TODO: fill with the real stack of each project (checked against the repo before publishing). */
  tech: string[];
  // TODO: real repository URL
  github?: string;
  // TODO: real deployed URL
  live?: string;
  /** Monogram-style decorative tile placeholder (no fake screenshots). */
  initials: string;
};

export const projects: Project[] = [
  {
    title: "BazarDor",
    subtitle: "Bazar & Inventory Management",
    description: "Bazar tracking and inventory management application for recording and organizing day-to-day shopping data.",
    tech: [],
    initials: "BD",
  },
  {
    title: "Bangla Sangbad",
    subtitle: "News App",
    description: "Bangla news reading application.",
    tech: [],
    initials: "BS",
  },
  {
    title: "Fit Log",
    subtitle: "Fitness Tracker",
    description: "Fitness logging application for tracking workouts and progress.",
    tech: [],
    initials: "FL",
  },
  {
    title: "DevStack Builder",
    subtitle: "Developer Tool",
    description: "Tool for assembling developer project stacks.",
    tech: [],
    initials: "DS",
  },
  {
    title: "E-commerce",
    subtitle: "Online Store",
    description: "E-commerce shopping application.",
    tech: [],
    initials: "EC",
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  points: string[];
};

/**
 * TODO: Add your internship details here — role, organization, rough dates,
 * and 1–3 bullet points you actually did. Nothing is rendered except real data.
 */
export const experience: ExperienceItem[] = [];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
