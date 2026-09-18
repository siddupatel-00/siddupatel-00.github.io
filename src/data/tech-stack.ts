export type TechStack = {
  key: string
  title: string
  theme?: boolean
  category?: string
  ext?: string
  image?: string
}

export const TECH_STACK: TechStack[] = [
  // Languages & Frameworks
  { key: "python", title: "Python" },
  { key: "nextjs2", title: "Next.js", theme: true },
  { key: "react", title: "React" },
  { key: "typescript", title: "TypeScript" },
  { key: "tailwindcss", title: "Tailwind CSS" },
  { key: "nodejs", title: "Node.js" },

  // Databases & Backend
  { key: "sqlite", title: "SQLite" },
  { key: "neon", title: "Neon Postgres" },
  { key: "turso", title: "Turso (libSQL)" },
  { key: "firebase", title: "Firebase" },

  // Platforms & Deployment
  { key: "git", title: "Git & GitHub" },
  { key: "vercel", title: "Vercel" },
  { key: "render", title: "Render" },
]


