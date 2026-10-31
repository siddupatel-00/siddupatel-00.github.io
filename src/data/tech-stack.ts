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
  { key: "tailwindcss", title: "Tailwind CSS" },

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


