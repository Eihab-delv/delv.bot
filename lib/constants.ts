/**
 * constants.ts — single source of truth for ALL user-facing text.
 *
 * Rule: nothing in this app should hard-code a string the user reads on screen.
 * Buttons, nav, headings, copy, even tooltips — they all live here.
 *
 * Rebrand: ayde.bot (Ajdin Brković / MonetizeAd) → delv.bot (Sam Smair / Delv).
 */

// ─────────────────────────────────────────────────────────────────────────────
// Brand & person
// ─────────────────────────────────────────────────────────────────────────────
export const BRAND = {
  name: "delv.bot",
  shortName: "delv",
  legalName: "Delv",
  domain: "delv.bot",
  tagline: "Founder & CEO · Delv",
  builtBy: "Built with AI. Powered by ownership.",
  copyright: "© 2026 Sam Smair. All rights reserved.",
} as const;

export const CEO = {
  firstName: "Sam",
  lastName: "Smair",
  fullName: "Sam Smair",
  initials: "SS",
  title: "Founder & CEO",
  email: "sam.smair@delv.com",
  emailHref: "mailto:sam.smair@delv.com",
  location: "Sam Smair · Global",
  photoUrl: "/sam-profile.png",
  photoUrl2: "/sam-hero.jpeg",
  bioShort:
    "Founder & CEO of Delv. Building companies, AI teams, and ownership models across 15+ countries.",
  bioLong:
    "Founder & CEO of Delv. Building companies, systems, and AI teams across 15+ countries.",
  buildingSince: "Building in public since 2007",
  followers: "6,800+ followers on LinkedIn · Building in public since 2007",
  quote: "Most people use marketing as a cost centre. I built it as an ownership model.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Top banner / status pill
// ─────────────────────────────────────────────────────────────────────────────
export const TOP_BANNER = {
  liveLabel: "Live",
  text: "projects ongoing · €... today",
  href: "/reports",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────
export const NAV = {
  brandLabel: "Sam Smair",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Projects", href: "/projects" },
    { label: "Reports", href: "/reports" },
    { label: "Blog", href: "/blog" },
    { label: "Live Log", href: "/news-feed" },
    { label: "Companies", href: "/companies" },
  ],
  languageToggle: { en: "EN", alt: "BA" },
  subscribeLabel: "Subscribe",
  subscribeHref: "/newsletter",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Founder & CEO · Delv",
  headingLine1: "I didn't wait",
  headingLine2: "for permission.",
  headingLine3: "I just built.",
  body: "Everyone keeps asking for the program. The masterclass. The academy. Here's the truth: I don't have time to teach. I'm too busy building. 50 businesses over the coming years, all under one roof. So instead of packaging what I know into slides and selling courses, I built something better: an AI team that runs the operation alongside me. You won't get a course from me. What you'll get is a front-row seat to the entire build. Every decision, every system, every lesson. Live.",
  socialProof: "6,800+ followers on LinkedIn · Building in public since 2007",
  ctaPrimary: { label: "Follow the Journey →", href: "/news-feed" },
  ctaSecondary: { label: "Read on LinkedIn", href: "https://linkedin.com" },
  stats: [
    { value: "20+", label: "Companies" },
    { value: "1,500+", label: "People" },
    { value: "18", label: "Years" },
    { value: "15+", label: "Countries" },
  ],
  shieldStatus: {
    agentsActive: "9 agents active",
    irisStatus: "IRIS: shielding",
    companies: "20+ companies",
    errors: "0 errors",
    protected: "Protected by IRIS",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Hero assets (image paths separated so they're easy to swap)
// ─────────────────────────────────────────────────────────────────────────────
export const HERO_ASSETS = {
  // Drop a 4:5 portrait render here. Megatron-style war mech, violet glow.
  // Until the file exists, Hero.tsx falls back to the SVG <RobotSilhouette />.
  robotImage: "/robot-hero.png",
  robotAlt: "Delv AI war machine — autonomous operations",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// IRIS chat widget (popover + greeting messages)
// ─────────────────────────────────────────────────────────────────────────────
export const IRIS = {
  name: "IRIS",
  badge: "AI",
  role: "Chief of Staff",
  tagline: `I handle everything so ${CEO.firstName} can focus on building. Ask me anything.`,
  chatPrompt: "Chat with me",
  chatBubbleLabel: "CHAT",
  inputPlaceholder: "Type a message...",
  sendLabel: "Send",
  closeLabel: "Close chat",
  openLabel: "Open IRIS chat",
  greeting: `Hey! I'm IRIS, ${CEO.firstName}'s Chief of Staff. Ask me anything about Delv or how we're building.`,
  thinkingLabel: "IRIS is thinking…",
  cannedResponses: [
    `That's a great question. ${CEO.firstName} is currently focused on building the next generation of AI-powered ownership models at Delv. Want to know what we're shipping this week?`,
    `${CEO.firstName} believes in building in public and sharing the journey transparently. Every decision, every lesson, live.`,
    `IRIS here — I handle operations so ${CEO.firstName} can focus on strategy and building. Ask me anything specific about how we work.`,
    `We're running multiple companies across different markets right now. Each one designed to solve a real problem with AI in the loop.`,
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Ecosystem strip (logo marquee)
// ─────────────────────────────────────────────────────────────────────────────
export const ECOSYSTEM = {
  sectionEyebrow: "The Ecosystem",
  companies: [
    { name: "Delv Capital", href: "https://delv.com" },
    { name: "DelvLead", href: "https://delvlead.com" },
    { name: "DelvPlug", href: "https://delvplug.com" },
    { name: "Delv360", href: "https://delv360.com" },
    { name: "DelvShop", href: "https://delvshop.com" },
    { name: "DelvSearch", href: "https://delvsearch.com" },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Live Log
// ─────────────────────────────────────────────────────────────────────────────
export const LIVE_LOG = {
  eyebrow: "Live Log",
  heading: "Building in public.",
  subheading: "A real-time record of wins, fails, and lessons. Unfiltered.",
  monitorTitle: "buildos://activity monitor",
  liveLabel: "LIVE",
  initState: "Initializing...",
  initSubstate: "0 agents active · 0 OS platforms",
  lastUpdate: "last update: 0 seconds ago",
  liveState: "24 agents active · 3 OS platforms · 0 errors",
  cta: { label: "Enter the Log →", href: "/news-feed" },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Team section
// ─────────────────────────────────────────────────────────────────────────────
export const TEAM = {
  eyebrow: "The Team",
  heading: "I didn't build this alone.",
  body: "I don't have a team of employees. I have a team of AI agents: each one built for a specific job, trained on how I think, and running 24/7 while I'm focused on the next deal. This is how one person runs what should take fifty.",
  cta: { label: "Meet the team →", href: "/team" },
  summaryHeading: "24 AI agents. 3 OS platforms. Running 24/7.",
  summaryBody:
    "9 direct agents (IRIS, AXIS, REEL, VOICE, NOVA, COPY, Aria, Spark, Rex) + 15 OS agents across buildOS (7 dev agents), ProductionOS (VEGA, QUILL, LENS, INK), and SOVP (PULSE, REMIX, GATE, HYPE). All led by IRIS: Chief of Staff.",
  stats: [
    { value: "24", label: "Agents" },
    { value: "3", label: "OS" },
    { value: "24/7", label: "Online" },
    { value: "0", label: "Employees" },
  ],
  agents: [
    { initial: "I", name: "IRIS", role: "Chief of Staff" },
    { initial: "A", name: "AXIS", role: "Content Writer" },
    { initial: "R", name: "REEL", role: "Video Producer" },
    { initial: "V", name: "VOICE", role: "Audio & Voice" },
    { initial: "N", name: "NOVA", role: "Visual Identity" },
    { initial: "C", name: "COPY", role: "Copywriter" },
  ],
  moreAgentsBadge: "+18",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// IRIS Protocol section
// ─────────────────────────────────────────────────────────────────────────────
export const PROTOCOL = {
  eyebrow: "How it works",
  heading: "The IRIS Protocol",
  subheading: `The unique relationship between ${CEO.firstName} and IRIS: how autonomous AI coordinates 20+ companies while keeping humans in control of what matters.`,
  iris: {
    role: "Chief of Staff",
    name: "IRIS",
    typeLabel: "((AI))",
    points: [
      `Communicates directly with ${CEO.firstName}`,
      "Autonomous, develops herself",
      "Talks to everyone in the company",
      "Sets tasks & coordinates all teams",
      `Creates tasks for ${CEO.firstName} when blocked`,
      `Thinks identically to ${CEO.firstName}`,
    ],
    footnote: "24/7 operational. No days off. Learns from every decision.",
  },
  founder: {
    role: "Founder",
    name: CEO.firstName,
    typeLabel: "((Human))",
    points: [
      "Sets vision & strategy",
      "Receives optimizations from IRIS",
      "Approves critical decisions",
      "Handles key relationships",
      "Available for qualified contacts",
      "Guides the ecosystem",
    ],
    footnote: "Focused on deals, strategy & key people.",
  },
  pillars: [
    {
      icon: "💬",
      title: "Slack & Direct Talk",
      bullets: [
        "Connected to **every company** via Slack",
        "Monitors all channels **24/7**",
        `Direct line to ${CEO.firstName} via **DM & task queue**`,
        "Creates tasks automatically when issues arise",
      ],
      footer: "Always listening",
    },
    {
      icon: "🎯",
      title: "Problem Detection",
      bullets: [
        "Spots **revenue drops** before they escalate",
        "Flags **campaign anomalies** in real-time",
        "Identifies **hotspots** across all companies",
        "Reports with context and **recommended fixes**",
      ],
      footer: "Active monitoring",
    },
    {
      icon: "↻",
      title: "Optimization Loop",
      bullets: [
        `Suggests **optimizations** to ${CEO.firstName}`,
        "When blocked, creates **tasks for approval**",
        `${CEO.firstName} provides **strategic direction**`,
        "System adapts & **continues autonomously**",
      ],
      footer: "Continuous improvement",
    },
  ],
  connectionMap: {
    title: "Live Connection Map",
    hubLabel: "IRIS",
    spokes: ["Delv Capital", "DelvLead", "DelvPlug", "Delv360", "DelvShop", "DelvSearch"],
    caption: `All communication and task creation flows through IRIS. Problems are identified, optimizations are suggested, and ${CEO.firstName} stays in control through a single command center.`,
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Ecosystem / global presence
// ─────────────────────────────────────────────────────────────────────────────
export const PRESENCE = {
  eyebrow: "Presence",
  heading: "The Ecosystem",
  body: "20+ companies. 15+ countries. Built from the ground up. Operating globally across Europe, North America, Middle East, and Southeast Asia.",
  legend: { office: "Office", remote: "Remote / Partners" },
  stats: [
    { value: "15+", label: "Countries" },
    { value: "20+", label: "Cities" },
    { value: "20+", label: "Companies" },
    { value: "4", label: "Continents" },
  ],
  footnote: "Building in public since 2007 · 15 countries · 1,500+ people impacted",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Akademija (early access course)
// ─────────────────────────────────────────────────────────────────────────────
export const AKADEMIJA = {
  eyebrow: "Early Access",
  heading: "Akademija",
  body1:
    "AI is changing how people work. Not just in tech, not just online. Accountants, managers, cleaners, shop owners, freelancers. Everyone. Akademija teaches you how to use AI to save time, cut costs, and get more done. No matter what you do for a living.",
  body2:
    "Don't wait until everyone else figures it out. The earlier you start, the bigger your advantage. Practical lessons you can use the same day.",
  pillars: [
    {
      icon: "📘",
      title: "For Everyone",
      body: "Whether you run a business, work in an office, or manage a household. AI can help you do it faster.",
    },
    {
      icon: "🤖",
      title: "Practical Skills",
      body: "No theory, no jargon. You learn tools and techniques you can start using today, in your actual work.",
    },
    {
      icon: "📊",
      title: "Save Hours Every Week",
      body: "Emails, reports, scheduling, research, content. AI handles the repetitive stuff so you focus on what matters.",
    },
    {
      icon: "🎯",
      title: "Stay Ahead",
      body: "The world is changing fast. People who learn AI now will have a serious edge over those who wait.",
    },
  ],
  cta: { label: "Join Akademija →", href: "/akademija?ref=homepage" },
  ctaNote: "Get notified when enrollment opens",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Newsletter
// ─────────────────────────────────────────────────────────────────────────────
export const NEWSLETTER = {
  eyebrow: "Every Friday",
  heading: "Live Log Weekly",
  body: "One email per week. What I'm building, what's working, what's not. No fluff.",
  bullets: [
    "What shipped this week",
    "Honest breakdowns of what didn't work",
    "Systems, frameworks, and playbooks",
  ],
  inputPlaceholder: "you@email.com",
  submitLabel: "Subscribe Free",
  microcopy: "Join founders following the log. No fluff. Unsubscribe anytime.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// About snippet (homepage)
// ─────────────────────────────────────────────────────────────────────────────
export const ABOUT_SNIPPET = {
  eyebrow: "About",
  heading: "Built from nothing.",
  headingHighlight: "Owned from day one.",
  paragraphs: [
    "For 18 years, I've operated at the intersection of performance marketing, lead generation, and business scaling: starting from early affiliate arbitrage and evolving into running a network of 20+ companies across marketing, SaaS, real estate, and e-commerce.",
    "Today, the Delv ecosystem runs 20+ companies with 1,500+ people. Operating globally across 15+ countries and 3 continents. No VC funding, no Silicon Valley network: just a clear view of how marketing actually works when you treat it as an ownership model.",
    "Instead of packaging what I know into courses, I built an AI team of 9 agents that runs the operation alongside me: handling everything I can't get to. You won't find a course here. What you'll find is a front-row seat to the entire build, live.",
  ],
  attribution: `- ${CEO.firstName} ${CEO.lastName}`,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────
export const FOOTER = {
  brand: CEO.fullName,
  brandSub: "Founder & CEO of Delv. Building companies, systems, and AI teams across 15+ countries.",
  brandSince: "Building in public since 2007",
  columns: [
    {
      heading: "Navigate",
      links: [
        { label: "Team", href: "/team" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "Live Log", href: "/news-feed" },
        { label: "Companies", href: "/companies" },
        { label: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      heading: "The Ecosystem",
      links: [
        { label: "Delv Capital", href: "/companies/delv-capital" },
        { label: "DelvSearch", href: "/companies/delvsearch" },
        { label: "DelvLead", href: "/companies/delvlead" },
        { label: "DelvPlug", href: "/companies/delvplug" },
        { label: "Delv360", href: "/companies/delv360" },
        { label: "DelvShop", href: "/companies/delvshop" },
        { label: "DelvFinity", href: "/companies/delvfinity" },
        { label: "DelvCrew", href: "/companies/delvcrew" },
      ],
    },
  ],
  copyright: BRAND.copyright,
  builtBy: BRAND.builtBy,
  newsletterTeaser: "Live Log Weekly: wins, fails & lessons. Every Friday.",
  newsletterCta: "Subscribe",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SEO / page metadata
// ─────────────────────────────────────────────────────────────────────────────
export const META = {
  title: `${CEO.fullName} | ${CEO.title}`,
  description: `${CEO.title} of Delv. Building companies, AI teams, and ownership models across 15+ countries.`,
  ogTitle: `${CEO.fullName} | ${CEO.title}`,
  ogDescription: `${CEO.title} of Delv. Building companies, AI teams, and ownership models across 15+ countries.`,
} as const;
