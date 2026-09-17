export type TechStack = {
  key: string
  title: string
  theme?: boolean
  category?: string
  ext?: string
  image?: string
}

export const TECH_STACK: TechStack[] = [
  // Languages & Core
  { key: "python", title: "Python", category: "Languages" },
  { key: "html", title: "HTML5", category: "Languages" },
  { key: "css", title: "CSS3", category: "Languages" },

  // AI & Developer Tools
  { key: "antigravity", title: "Antigravity", ext: "png", category: "AI & Tools" },
  { key: "claude", title: "Claude", category: "AI & Tools" },
  { key: "codex", title: "Codex", category: "AI & Tools" },
  { key: "manus", title: "Manus", theme: true, category: "AI & Tools" },
  { key: "opencode", title: "OpenCode", theme: true, category: "AI & Tools" },
  { key: "cursor", title: "Cursor", theme: true, category: "AI & Tools" },
  { key: "gemini", title: "Gemini", category: "AI & Tools" },
  { key: "vscode", title: "VS Code", category: "AI & Tools" },

  // Databases & Cloud
  { key: "sqlite", title: "SQLite", category: "Databases & Cloud" },
  { key: "neon", title: "Neon Postgres", category: "Databases & Cloud" },
  { key: "turso", title: "Turso (libSQL)", category: "Databases & Cloud" },
  { key: "firebase", title: "Firebase", category: "Databases & Cloud" },

  // Platforms & Deployment
  { key: "git", title: "Git & GitHub", category: "Platforms" },
  { key: "vercel", title: "Vercel", category: "Platforms" },
  { key: "render", title: "Render", category: "Platforms" },
  { key: "bravo", title: "Brevo (Mails)", category: "Platforms" },
]


