/**
 * constants.ts — single source of truth for ALL user-facing text.
 *
 * Rule: nothing in this app should hard-code a string the user reads on screen.
 * Buttons, nav, headings, copy, even tooltips — they all live here.
 */

// Prefix for static assets — empty locally, /delv.bot on GitHub Pages.
// next/image with unoptimized:true passes src through as-is, so we must
// manually prepend basePath to all image paths here.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";


// ─────────────────────────────────────────────────────────────────────────────
// Key numbers — change them HERE and every section updates.
// ─────────────────────────────────────────────────────────────────────────────
export const STATS = {
  companies: "20+",
  people: "1,500+",
  years: "20+",
  countries: "15+",
  cities: "20+",
  continents: "3", // Europe, North America, Asia (Middle East + Southeast Asia)
  agentsTotal: "24",
  agentsDirect: "9",
  osPlatforms: "3",
  sinceYear: "2006",
} as const;

// Site URL used for SEO (canonical links, sitemap, Open Graph). Override with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://eihab-delv.github.io/delv.bot").replace(/\/$/, "");

// ─────────────────────────────────────────────────────────────────────────────
// Brand & founder
// ─────────────────────────────────────────────────────────────────────────────
export const BRAND = {
  name: "DELV Group",
  shortName: "DELV",
  domain: "delv.group",
  url: "https://www.delv.group",
  email: "contact@delv.com",
  emailHref: "mailto:contact@delv.com",
  location: "Canberra, Australia",
  tagline: "Advisory · Development · Deployment · Managed Operations",
  description:
    "DELV helps organisations turn AI, software and robotics into secure, governed capability - from strategy and prototyping through deployment and ongoing operation.",
  builtBy: "Human-centred technology since 2006.",
  copyright: `© ${new Date().getFullYear()} DELV Group. All rights reserved.`,
} as const;

export const CEO = {
  firstName: "Sam",
  lastName: "Smair",
  fullName: "Sam Smair",
  initials: "SS",
  title: "Founder & CEO",
  email: "sam.smair@delv.com",
  emailHref: "mailto:sam.smair@delv.com",
  location: "Founder & CEO · DELV Group",
  photoUrl: `${BASE}/sam-profile.png`,
  photoUrl2: `${BASE}/sam-hero.jpeg`,
  // TODO: replace with Sam's real LinkedIn profile URL
  linkedinUrl: "https://www.linkedin.com",
  linkedinFollowers: "6,800+",
  quote: "Most people use marketing as a cost centre. I built it as an ownership model.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Top banner / status pill
// ─────────────────────────────────────────────────────────────────────────────
export const TOP_BANNER = {
  liveLabel: "Live",
  text: `${STATS.agentsTotal} AI agents online · ${STATS.companies} companies · ${STATS.countries} countries`,
  href: "/news-feed",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────
export const NAV = {
  brandLabel: "DELV",
  brandSub: "Group",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Insights", href: "/insights" },
    { label: "Live Log", href: "/news-feed" },
    { label: "Contact", href: "/contact" },
  ],
  languageToggle: { en: "EN", alt: "BA" },
  ctaLabel: "Talk to DELV",
  ctaHref: "/contact",
  subscribeHref: "/newsletter",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Hero (home page — Sam's story; numbers come from STATS so they match DELV)
// ─────────────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: `${CEO.title} · ${BRAND.name}`,
  headingLine1: "I didn't wait",
  headingLine2: "for permission.",
  headingLine3: "I just built.",
  body: "Everyone keeps asking for the program. The masterclass. The academy. Here's the truth: I don't have time to teach. I'm too busy building. 50 businesses over the coming years, all under one roof. So instead of packaging what I know into slides and selling courses, I built something better: an AI team that runs the operation alongside me. You won't get a course from me. What you'll get is a front-row seat to the entire build. Every decision, every system, every lesson. Live.",
  socialProof: `${CEO.linkedinFollowers} followers on LinkedIn · Building since ${STATS.sinceYear}`,
  ctaPrimary: { label: "Follow the Journey →", href: "/news-feed" },
  ctaSecondary: { label: "Read on LinkedIn", href: CEO.linkedinUrl },
  stats: [
    { value: STATS.companies, label: "Companies" },
    { value: STATS.people, label: "People" },
    { value: STATS.years, label: "Years" },
    { value: STATS.countries, label: "Countries" },
  ],
  shieldStatus: {
    agentsActive: `${STATS.agentsTotal} agents active`,
    irisStatus: "IRIS: shielding",
    companies: `${STATS.companies} companies`,
    errors: "0 errors",
    protected: "Protected by IRIS",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Home strip under the hero (scrolling DELV Group services)
// ─────────────────────────────────────────────────────────────────────────────
export const ECOSYSTEM = {
  sectionEyebrow: BRAND.name,
  items: [
    { name: "Platform Development", href: "/services/platform-development" },
    { name: "AI Services", href: "/services/ai-services" },
    { name: "Robotics", href: "/services/robotics" },
    { name: "Advisory", href: "/services/advisory" },
    { name: "48 Hour Prototype", href: "/services/48-hour-prototype" },
    { name: "Managed Operations", href: "/services" },
  ],
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
  greeting: `Hey! I'm IRIS, ${CEO.firstName}'s Chief of Staff at DELV. Ask me anything about DELV or how we're building.`,
  thinkingLabel: "IRIS is thinking…",
  suggestionsLabel: "Try asking",
  suggestions: ["What does DELV do?", "Tell me about the AI team", "What's the 48 Hour Prototype?", "How do I get in touch?"],
  // Keyword-matched answers. First topic whose keywords appear in the message wins;
  // otherwise a cannedResponse is picked at random. (No AI backend yet.)
  topics: [
    {
      keywords: ["48", "prototype", "two days", "2 days"],
      answer: "The 48 Hour Prototype turns an idea into something tangible in two business days: day 1 is discovery and concept, day 2 we build and hand you a working, shareable prototype plus next steps.",
      link: { label: "See the 48 Hour Prototype", href: "/services/48-hour-prototype" },
    },
    {
      keywords: ["robot", "humanoid", "quadruped", "wheeled"],
      answer: "DELV assesses, pilots and deploys humanoid, quadruped and wheeled robots, platform-agnostic, chosen against your requirements. Most clients start with a Robotics Opportunity Assessment.",
      link: { label: "Robotics", href: "/services/robotics" },
    },
    {
      keywords: ["governance", "policy", "risk", "compliance"],
      answer: "Governance is built in from day one: AI policy, governance frameworks, usage audits and risk controls. There's also an 8-week AI Readiness Program with a governance framework included.",
      link: { label: "AI Services", href: "/services/ai-services" },
    },
    {
      keywords: ["ai service", "agentic", "automation", "rag", "private ai", "readiness"],
      answer: "DELV covers the full AI lifecycle: readiness and advisory, governance, deployment (private AI, agents, RAG) and managed AI operations.",
      link: { label: "AI Services", href: "/services/ai-services" },
    },
    {
      keywords: ["apps", "an app", "mobile app", "web app", "platform", "saas", "mvp", "software", "portal"],
      answer: "One team builds apps, SaaS platforms, MVPs, internal tools and customer portals, then keeps running them. Define, design, build, operate: no handover gap.",
      link: { label: "Platform Development", href: "/services/platform-development" },
    },
    {
      keywords: ["advis", "roadmap", "strategy", "audit", "feasib"],
      answer: "Advisory clarifies big technology decisions before you invest: audits, roadmaps, architecture, vendor assessments and board briefings. Sometimes the most valuable advice is what not to build.",
      link: { label: "Advisory", href: "/services/advisory" },
    },
    {
      keywords: ["industr", "government", "sector", "health", "finance", "property", "startup"],
      answer: "DELV works across government & public sector, enterprise, financial services, property & construction, health & community, and startups & scaleups.",
      link: { label: "Industries", href: "/services#industries" },
    },
    {
      keywords: ["team", "agents", "iris", "who are you", "employees"],
      answer: `I lead a team of ${STATS.agentsTotal} AI agents across ${STATS.osPlatforms} OS platforms: ${STATS.agentsDirect} direct agents plus buildOS, ProductionOS and SOVP, working 24/7 alongside the DELV team.`,
      link: { label: "Meet the team", href: "/team" },
    },
    {
      keywords: ["akademija", "course", "learn", "academy", "training"],
      answer: "Akademija teaches anyone (not just tech people) how to use AI to save time and cut costs, with practical lessons you can use the same day. Enrollment opens soon.",
      link: { label: "Akademija", href: "/akademija" },
    },
    {
      keywords: ["contact", "email", "call", "meet", "talk", "reach", "hire", "price", "cost"],
      answer: "The fastest route is the contact form: a senior DELV team member replies within one business day.",
      link: { label: "Contact", href: "/contact" },
    },
    {
      keywords: ["newsletter", "subscribe", "weekly", "updates"],
      answer: "Live Log Weekly lands every Friday: what shipped, what didn't work, and the systems behind it. No fluff.",
      link: { label: "Subscribe", href: "/newsletter" },
    },
    {
      keywords: ["sam", "founder", "ceo", "smair"],
      answer: `${CEO.fullName} is DELV's ${CEO.title}. He sets the vision and strategy, and I handle operations so he can focus on key decisions and relationships.`,
      link: { label: "About DELV", href: "/about" },
    },
    {
      keywords: ["delv", "history", "founded", "story", "what do you do", "what does", "about"],
      answer: `DELV Group has helped government and enterprise build, deploy and run technology since ${STATS.sinceYear}: platform development, AI services, robotics and advisory. Founded in Canberra, BRW Fast 100 recognised.`,
      link: { label: "About DELV", href: "/about" },
    },
  ] as { keywords: string[]; answer: string; link?: { label: string; href: string } }[],
  cannedResponses: [
    "Good question. The quickest way to a precise answer is a short conversation with the DELV team. Want me to point you to the contact form?",
    "DELV advises, designs, builds, deploys and operates: one partner across the full journey. Ask me about a specific service and I'll go deeper.",
    "IRIS here. I can tell you about our services, industries, the AI team or the 48 Hour Prototype. What are you working on?",
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
  liveState: `${STATS.agentsTotal} agents active · ${STATS.osPlatforms} OS platforms · 0 errors`,
  cta: { label: "Enter the Log →", href: "/news-feed" },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Team section
// ─────────────────────────────────────────────────────────────────────────────
export const TEAM = {
  eyebrow: "The Team",
  heading: "I didn't build this alone.",
  body: "Alongside the DELV team, I run a team of AI agents: each one built for a specific job, trained on how I think, and running 24/7 while I'm focused on the next deal. This is how a small team runs what should take fifty.",
  cta: { label: "Meet the team →", href: "/team" },
  summaryHeading: `${STATS.agentsTotal} AI agents. ${STATS.osPlatforms} OS platforms. Running 24/7.`,
  summaryBody:
    `${STATS.agentsDirect} direct agents (IRIS, AXIS, REEL, VOICE, NOVA, COPY, Aria, Spark, Rex) + 15 OS agents across buildOS (7 dev agents), ProductionOS (VEGA, QUILL, LENS, INK), and SOVP (PULSE, REMIX, GATE, HYPE). All led by IRIS: Chief of Staff.`,
  stats: [
    { value: STATS.agentsTotal, label: "Agents" },
    { value: STATS.osPlatforms, label: "OS" },
    { value: "24/7", label: "Online" },
    { value: "1", label: "Chief of Staff" },
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
  // Full roster for the /team page. Only add a role once it's confirmed.
  roster: [
    {
      group: "Direct agents",
      agents: [
        { name: "IRIS", role: "Chief of Staff" },
        { name: "AXIS", role: "Content Writer" },
        { name: "REEL", role: "Video Producer" },
        { name: "VOICE", role: "Audio & Voice" },
        { name: "NOVA", role: "Visual Identity" },
        { name: "COPY", role: "Copywriter" },
        { name: "Aria" },
        { name: "Spark" },
        { name: "Rex" },
      ],
    },
    { group: "buildOS", note: "7 dev agents", agents: [] },
    {
      group: "ProductionOS",
      agents: [{ name: "VEGA" }, { name: "QUILL" }, { name: "LENS" }, { name: "INK" }],
    },
    {
      group: "SOVP",
      agents: [{ name: "PULSE" }, { name: "REMIX" }, { name: "GATE" }, { name: "HYPE" }],
    },
  ] as { group: string; note?: string; agents: { name: string; role?: string }[] }[],
  roleTbd: "Role coming soon",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// IRIS Protocol section
// ─────────────────────────────────────────────────────────────────────────────
export const PROTOCOL = {
  eyebrow: "How it works",
  heading: "The IRIS Protocol",
  subheading: `The unique relationship between ${CEO.firstName} and IRIS: how autonomous AI coordinates ${STATS.companies} companies while keeping humans in control of what matters.`,
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
    spokes: ["Platform Development", "AI Services", "Robotics", "Advisory", "48 Hour Prototype"],
    caption: `All communication and task creation flows through IRIS. Problems are identified, optimizations are suggested, and ${CEO.firstName} stays in control through a single command center.`,
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Global presence
// ─────────────────────────────────────────────────────────────────────────────
export const PRESENCE = {
  eyebrow: "Presence",
  heading: "The Ecosystem",
  body: `${STATS.companies} companies. ${STATS.countries} countries. Built from the ground up. Operating globally across Europe, North America, Middle East, and Southeast Asia.`,
  legend: { office: "Office", remote: "Remote / Partners" },
  stats: [
    { value: STATS.countries, label: "Countries" },
    { value: STATS.cities, label: "Cities" },
    { value: STATS.companies, label: "Companies" },
    { value: STATS.continents, label: "Continents" },
  ],
  footnote: `Building since ${STATS.sinceYear} · ${STATS.countries} countries · ${STATS.people} people impacted`,
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
  cta: { label: "Join Akademija →", href: "/akademija" },
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
// About snippet (home + about page founder section — Sam's voice)
// ─────────────────────────────────────────────────────────────────────────────
export const ABOUT_SNIPPET = {
  eyebrow: "About",
  heading: "Built from nothing.",
  headingHighlight: "Owned from day one.",
  paragraphs: [
    `For ${STATS.years} years, I've operated at the intersection of technology, performance marketing, lead generation, and business scaling: evolving into running a network of ${STATS.companies} companies across technology, marketing, SaaS, real estate, and e-commerce.`,
    `Today, the ${BRAND.name} ecosystem runs ${STATS.companies} companies with ${STATS.people} people. Operating globally across ${STATS.countries} countries and ${STATS.continents} continents. No VC funding, no Silicon Valley network: just a clear view of how technology and marketing actually work when you treat them as an ownership model.`,
    `Instead of packaging what I know into courses, I built an AI team of ${STATS.agentsTotal} agents, led by IRIS, that runs the operation alongside me and the DELV team: handling everything I can't get to. What you'll find here is a front-row seat to the entire build, live.`,
  ],
  attribution: `- ${CEO.fullName}, ${CEO.title}`,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────
export const FOOTER = {
  brand: BRAND.name,
  brandSub: BRAND.description,
  brandSince: `Founded ${STATS.sinceYear} · ${BRAND.location}`,
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Insights", href: "/insights" },
        { label: "Live Log", href: "/news-feed" },
        { label: "Akademija", href: "/akademija" },
        { label: "Newsletter", href: "/newsletter" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Platform Development", href: "/services/platform-development" },
        { label: "AI Services", href: "/services/ai-services" },
        { label: "Robotics", href: "/services/robotics" },
        { label: "Advisory", href: "/services/advisory" },
        { label: "48 Hour Prototype", href: "/services/48-hour-prototype" },
        { label: "Industries", href: "/services#industries" },
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
  title: `${BRAND.name} | AI, Platforms, Robotics & Advisory`,
  titleTemplate: `%s | ${BRAND.name}`,
  description: BRAND.description,
  ogTitle: `${BRAND.name} | AI is already changing your organisation. We make it operational.`,
  ogDescription: BRAND.description,
  // 1200×630 social preview (DELV Group's own share image)
  ogImage: `${BASE}/delv-group/og.jpg`,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Inner pages
// ─────────────────────────────────────────────────────────────────────────────
export const PAGES = {
  about: {
    title: "About",
    founderEyebrow: "Leadership",
  },
  team: {
    title: "Team",
    eyebrow: "The Team",
    heading: "Meet the agents.",
    body: `${STATS.agentsTotal} AI agents across ${STATS.osPlatforms} OS platforms, all coordinated by IRIS.`,
  },
  services: {
    title: "Services",
    eyebrow: "Services",
    heading: "One team across the full lifecycle.",
    body: "Platforms, AI, robotics and advisory: delivered end to end, from the first prototype to managed operations.",
    capabilitiesEyebrow: "Four pillars",
    capabilitiesHeading: "Engage one service, or the whole journey.",
    capabilitiesBody: "Each pillar can be engaged on its own, or as part of an end-to-end program.",
    offersEyebrow: "Entry-point offers",
    offersHeading: "Structured engagements designed for clarity.",
    offersBody: "Each offer is time-boxed, deliverable-driven and designed to inform a bigger decision.",
    industriesEyebrow: "Industries",
    industriesHeading: "We've worked in your environment before.",
    industriesBody: "Government, enterprise, regulated sectors. We understand the constraints (procurement, security, compliance) and we deliver within them.",
    exploreLabel: "Explore →",
    offerLabel: "Offer",
    sectorLabel: "Sector",
    backLabel: "← All services",
    howWeWork: "How we work",
    processHeading: "How an engagement works.",
    ctaHeading: "Start somewhere. We'll take you the rest of the way.",
    ctaBody: "Engage one service or the full lifecycle — DELV scales to where you are and where you need to get to.",
    ctaLabel: "Contact us →",
    startHere: "Sound familiar?",
    ctaHref: "/contact",
  },
  insights: {
    title: "Insights",
    eyebrow: "Insights",
    heading: "Practical thinking from real delivery.",
    body: "AI governance, agents, robotics, platforms and advisory: what we've learned building and running technology for twenty years.",
    allTopics: "All topics",
    featuredLabel: "Featured",
    soonLabel: "Coming soon",
    footerHeading: "The thinking and the doing are the same team.",
    footerBody: "Every piece of thinking here is backed by twenty years of delivery. Get new articles first in Live Log Weekly.",
  },
  newsFeed: {
    title: "Live Log",
    archiveEyebrow: "From the archive",
    archiveHeading: "How we got here.",
    archiveBody: "Twenty years of DELV, one chapter at a time. Each capability still powers the work today.",
    emptyHeading: "Live entries are coming.",
    emptyBody: "Every win, fail and lesson will be posted here as it happens.",
  },
  contact: {
    title: "Contact",
    eyebrow: "Get in touch",
    heading: "Start a conversation.",
    body: "Tell us what you're working on. A senior DELV team member responds within one business day.",
    firstName: "First name",
    lastName: "Last name",
    email: "Work email",
    organisation: "Organisation",
    topic: "What are you interested in?",
    topicPlaceholder: "Select an option",
    message: "Tell us what you are working on",
    submit: "Send message →",
    sentHeading: "Your email app should now be open.",
    sentBody: "Send the drafted email and we'll be in touch within one business day. Nothing opened? Email us directly:",
    directHeading: "Prefer email?",
    founderLabel: CEO.title,
    companyLabel: BRAND.name,
    subjectPrefix: "Enquiry",
  },
  akademija: { title: "Akademija" },
  newsletter: { title: "Newsletter" },
  notFound: {
    title: "Page not found",
    eyebrow: "404",
    heading: "Nothing here yet.",
    body: "This page doesn't exist, or it hasn't been built yet.",
    cta: { label: "Back to home", href: "/" },
  },
  comingSoonCta: { label: "Subscribe to Live Log Weekly →", href: "/newsletter" },
  skipToContent: "Skip to content",
} as const;
