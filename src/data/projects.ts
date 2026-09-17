export type Project = {
  title: string
  href: string
  description: string
  image: string
  darkModeImage: string
  githubLink: string
  liveLink: string
  skills: string[]
  descriptionList: string[]
}

export const PROJECTS: Project[] = [
  {
    title: "DSAMRR",
    href: "/projects/dsamrr",
    description:
      "A unified competitive programming leaderboard and proof-of-work tracking platform that verifies developers across platforms and ranks daily solve activity in real time.",
    image: "/assets/dsamrr-light.png",
    darkModeImage: "/assets/dsamrr-dark.png",
    githubLink: "https://github.com/siddupatel-00/dsamrr",
    liveLink: "https://dsamrr.vercel.app",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Turso",
      "Drizzle ORM",
      "NextAuth.js",
      "Vercel",
    ],
    descriptionList: [
      "Automated Bio Verification: Cryptographic token verification to prevent impersonation and validate genuine account ownership",
      "Multi-Platform Scraping & Aggregation: Real-time stats ingestion from LeetCode, Codeforces, GFG, HackerRank, CodeChef, and AtCoder",
      "Real-Time Leaderboard & Streaks: Tracks Today's Grind, solve points, and active daily coding streaks with on-demand syncing",
      "Developer Profiles & 30-Day Activity Heatmaps: Detailed breakdowns by difficulty (Easy/Medium/Hard) and platform distribution",
      "Privacy Controls: Optional Ghost/Anonymous mode to compete on the leaderboard while keeping external handles private",
    ],
  },
  {
    title: "domainyourlink",
    href: "/projects/domainyourlink",
    description:
      "A high-performance, edge-accelerated URL redirection and bio-link management platform that provides permanent short links with real-time analytics.",
    image: "/assets/domainyourlink-light.png",
    darkModeImage: "/assets/domainyourlink-dark.png",
    githubLink: "https://github.com/siddupatel-00/domainyour.link",
    liveLink: "https://domainyourlink.vercel.app",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Turso",
      "Neon Postgres",
      "Drizzle ORM",
    ],
    descriptionList: [
      "Blazing Fast Edge Redirection: Delivers sub-millisecond HTTP 307 server-side redirects powered by distributed edge databases",
      "Permanent Links & Bio Hubs: Generates immortal shortlinks (/u/[code]) and customizable bio pages (/b/[code]) that never break",
      "Asynchronous Analytics Engine: Tracks click metrics and visitor engagement in the background without adding redirect latency",
      "Multi-Tier Role Management: Includes Creator Dashboards, a CEO Executive Command Center, and an Employee Workspace",
      "Hardened Security Architecture: Built with salted PBKDF2 password hashing, strict IDOR ownership checks, and stateless cryptographic OTP",
    ],
  },
  {
    title: "CallVerse",
    href: "/projects/callverse",
    description:
      "A privacy-first, cross-platform WebRTC calling application offering instant peer-to-peer HD video and voice calls with zero data harvesting.",
    image: "/assets/callverse-light.png",
    darkModeImage: "/assets/callverse-dark.png",
    githubLink: "https://github.com/siddupatel-00/crypto-caller",
    liveLink: "https://connectfamily.vercel.app",
    skills: [
      "React",
      "WebRTC",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Socket.IO",
      "Turso",
      "Capacitor",
    ],
    descriptionList: [
      "Peer-to-Peer & E2E Encrypted: Direct browser-to-browser and mobile WebRTC streams with DTLS-SRTP encryption",
      "Privacy-First Identity: No phone numbers required; users connect via unique handles and rotating 24-hour invite codes",
      "Native Android Integration: Built with Capacitor featuring background FCM push notifications and lock-screen call UI",
      "Real-Time Presence & Management: Live online/offline status, friend request system, and contact favorites (Buddies)",
      "Minimalist & Responsive UI: Clean, distraction-free interface optimized across desktop browsers and mobile screens",
    ],
  },
  {
    title: "YouTube Auto-Resolution & Repeater",
    href: "/projects/yt-auto-res",
    description:
      "A lightweight Chrome extension (Manifest V3) that cuts bandwidth by dynamically switching YouTube resolution based on tab focus, with an A-B section repeater.",
    image: "/assets/yt-auto-res-light.png",
    darkModeImage: "/assets/yt-auto-res-dark.png",
    githubLink: "https://github.com/siddupatel-00/YT-Auto-Resolution",
    liveLink: "",
    skills: [
      "JavaScript",
      "Chrome Extensions API",
      "Manifest V3",
      "HTML5 Player API",
      "CSS3",
    ],
    descriptionList: [
      "Instant Focus-Based Quality Switch: Drops resolution to 144p when backgrounded to save data, and instantly restores up to 4K/8K on focus",
      "MSE Buffer Flush: Immediate seek-flushing eliminates YouTube's 30–40s pre-buffer delay for real-time quality changes",
      "A-B Song Section Repeater: Loop specific choruses or segments with live repeat counters and infinite loop support",
      "Custom Playback Speed Engine: Enforces custom speeds (0.25x – 3.0x) with zero interference with YouTube's native menu",
      "Smart Fallback: Automatically selects the closest resolution if the requested quality is unavailable",
    ],
  },
  {
    title: "AuraFit DualSense Pro",
    href: "/projects/aurafit",
    description:
      "A production-grade web dashboard for a dual-action wearable correlating real-time biometrics with ambient environmental air quality.",
    image: "/assets/aurafit-light.png",
    darkModeImage: "/assets/aurafit-dark.png",
    githubLink: "https://github.com/siddupatel-00/SIH-HACKATHON",
    liveLink: "https://aurafitai.vercel.app",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Vite",
      "Web Audio API",
      "Groq API",
    ],
    descriptionList: [
      "Live Environmental Monitoring: Real-time AQI gauge, multi-gas tracking (PM2.5, PM10, CO, NO2), and cumulative inhalation analytics",
      "Instant Haptic Hazard Warnings: Visual alert banner and simulated 170Hz wristband vibration pulses via Web Audio API during hazard spikes",
      "Comprehensive Vitals Hub: WHOOP-style physiological recovery & strain rings, blood pressure trend lines, and sleep hypnograms",
      "Stress-Pollution Correlation Engine: 7-day multi-axis analytics quantifying ambient PM2.5 exposure impact on autonomic strain",
      "Aura AI Coach (Groq Integration): Context-aware health advisor powered by Llama 3.3 70B via Groq API",
      "Vagus Nerve Cooldown Tool: Interactive 4-7-8 guided breathing visualizer with real-time biofeedback simulation",
    ],
  },
  {
    title: "Community Launch Scout",
    href: "/projects/launch-scout",
    description:
      "An autonomous go-to-market intelligence agent that discovers high-traction online communities, checks anti-ban rules, and generates tailored launch posts.",
    image: "/assets/launch-scout-light.png",
    darkModeImage: "/assets/launch-scout-dark.png",
    githubLink: "",
    liveLink: "https://play.modiqo.ai/siddu-launch/community-launch-scout@1.0.0",
    skills: [
      "Node.js",
      "TypeScript",
      "Modiqo Rote Engine",
      "REST APIs",
      "Reddit API",
      "GitHub API",
    ],
    descriptionList: [
      "Real-time discovery across Reddit, Hacker News Algolia API, and GitHub REST API",
      "Rule verification engine checking community promotion policies and flair requirements to prevent bans",
      "Transparent 5-factor scoring model (Fit, Audience, Traction, Promo Safety, Evidence)",
      "Zero-hallucination post draft generator customized to each platform's culture",
      "Parallel DAG execution pipeline running end-to-end research in under 3.5 seconds",
    ],
  },
  {
    title: "YC Job Hunter",
    href: "/projects/yc-job-hunter",
    description:
      "An autonomous startup job intelligence and candidate-matching platform that ingests YC listings via Bright Data and scores job fit using weighted heuristics.",
    image: "/assets/yc-job-hunter-light.png",
    darkModeImage: "/assets/yc-job-hunter-dark.png",
    githubLink: "https://github.com/siddupatel-00/yc-job-finder",
    liveLink: "",
    skills: [
      "Python",
      "Streamlit",
      "Bright Data DCA",
      "Pandas",
      "Requests",
      "Dotenv",
    ],
    descriptionList: [
      "Automated Web Data Collection: Orchestrates asynchronous crawling from Y Combinator's job board using Bright Data Scraper Studio",
      "Multi-Factor Fit Scoring: Computes fit percentages based on skill overlap (45%), title alignment (30%), and context (15%)",
      "Skill Gap Breakdown: Visualizes matched candidate strengths and missing target skills inline on every job card",
      "1-Click Founder Pitch Generator: Generates customized 3-sentence outreach emails tailored to company tech stacks",
      "Market & Salary Intelligence: Interactive visual analytics displaying tech stack frequencies and compensation medians",
    ],
  },
]


