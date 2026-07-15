// ─── Site Configuration ───────────────────────────────────────────────────────
export const siteConfig = {
  name: "Khuzaim",
  role: "Developer / Designer",
  email: "khuzaim.dev@gmail.com",
  estYear: "EST. 2020",
  bio: {
    before: "Passionate about creating digital experiences for over 5 years. From visual design and branding to frontend development, I enjoy building products that are both beautiful and functional.",
  },
  navLinks: [
    { label: "/ABOUT", href: "#about" },
    { label: "/WORK", href: "#work" },
    { label: "/THOUGHTS", href: "#thoughts" },
    { label: "/CONTACT", href: "#contact" },
  ],
};

// ─── Experience ───────────────────────────────────────────────────────────────
export type ExperienceEntry = {
  range: string;
  role: string;
  company: string;
  color: string; // placeholder logo color
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    range: "2026 — Present",
    role: "Web Security Intern",
    company: "THE ARZENS",
    color: "#EF4444",
    description:
      "Developing secure web applications by strengthening client- and server-side security and resolving vulnerabilities.",
  },
  {
    range: "2025 — 2026",
    role: "Frontend Developer",
    company: "Home - 😁",
    color: "#3B82F6",
    description:
      "Learning & Building frontend projects, recreating modern interfaces, and improving skills in React, Next.js, and Tailwind CSS.",
  },
  {
    range: "2022 — 2024",
    role: "Graphic Designer",
    company: "Upwork & Synergy Axis",
    color: "#10B981",
    description:
      "Designed social media graphics, branding materials, and marketing assets for clients across a variety of industries.",
  },
];

// ─── Stack ────────────────────────────────────────────────────────────────────
export type StackItem = {
  label: string;
  icon: string; // lucide-react icon name
};

export const stack: StackItem[] = [
  { label: "Framer", icon: "Layers" },
  { label: "Figma", icon: "PenTool" },
  { label: "Adobe", icon: "Aperture" },
  { label: "Blender", icon: "Box" },
  { label: "Notion", icon: "FileText" },
  { label: "OpenAI", icon: "Sparkles" },
  { label: "GitHub", icon: "Github" },
  { label: "Discord", icon: "MessageSquare" },
  { label: "Vercel", icon: "Triangle" },
  { label: "Spotify", icon: "Music" },
];

// ─── Ventures ─────────────────────────────────────────────────────────────────
export type VentureEntry = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export const ventures: VentureEntry[] = [
  {
    icon: "🌀",
    title: "Inspicado",
    description: "See how top products design user flows that convert.",
    href: "#",
  },
  {
    icon: "🎙️",
    title: "Vocorize",
    description: "Open Source Voice Dictation for macOS.",
    href: "#",
  },
  {
    icon: "🌐",
    title: "The Domains Project",
    description: "Community-maintained registry for free subdomains.",
    href: "#",
  },
];

// ─── Writing ──────────────────────────────────────────────────────────────────
export type WritingEntry = {
  date: string;
  title: string;
  minutes: number;
};

export const writing: WritingEntry[] = [
  { date: "01/01/26", title: "Hello world", minutes: 2 },
  { date: "02/05/26", title: "Why I Build Things", minutes: 2 },
  { date: "03/10/26", title: "The First Time I Broke Something", minutes: 2 },
  { date: "04/07/26", title: "The Messy Middle", minutes: 2 },
  { date: "05/12/26", title: "Buttons Are Harder Than They Look", minutes: 3 },
];

// ─── Project Fan (screenshot placeholders) ────────────────────────────────────
export type FanItem = {
  color: string;
  rotation: number; // degrees
  offsetX: number;  // px
};

export const projectScreenshots: FanItem[] = [
  { color: "#4ADE80", rotation: -12, offsetX: -240 },
  { color: "#38BDF8", rotation: -8,  offsetX: -160 },
  { color: "#FB923C", rotation: -4,  offsetX: -80  },
  { color: "#A78BFA", rotation: 0,   offsetX: 0    },
  { color: "#34D399", rotation: 4,   offsetX: 80   },
  { color: "#FACC15", rotation: 8,   offsetX: 160  },
  { color: "#F87171", rotation: 12,  offsetX: 240  },
];

// ─── Photo Fan (polaroid placeholders) ───────────────────────────────────────
export type PolaroidItem = {
  color: string;
  rotation: number;
};

export const photos: PolaroidItem[] = [
  { color: "#86EFAC", rotation: -6 },
  { color: "#93C5FD", rotation: -2 },
  { color: "#FCA5A5", rotation: 3  },
  { color: "#FDE68A", rotation: 7  },
];

// ─── Conversation ─────────────────────────────────────────────────────────────
export type ConversationMessage =
  | { from: "user"; text: string }
  | { from: "reply"; text: string }
  | { from: "reply"; type: "email-card"; email: string; note: string }
  | { from: "reply"; type: "contact-form" }
  | { from: "reply"; type: "action-list"; actions: string[] };


