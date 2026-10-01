/**
 * delv-group.ts — content for DELV Group (the technology company at delv.group).
 *
 * Source: the DELV Group website (delv-web-demo repo). Keep this file in sync
 * with that site; components never hard-code any of this text.
 */

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (file: string) => `${BASE}/delv-group/${file}`;

// ─────────────────────────────────────────────────────────────────────────────
// Company profile
// ─────────────────────────────────────────────────────────────────────────────
export const DELV_GROUP = {
  slug: "delv-group",
  name: "DELV Group",
  url: "https://www.delv.group",
  email: "contact@delv.com",
  emailHref: "mailto:contact@delv.com",
  location: "Canberra, Australia",
  tagline: "Advisory · Development · Deployment · Managed Operations",
  headline: "AI is already changing your organisation. We make it operational.",
  summary:
    "DELV helps organisations turn AI, software and robotics into secure, governed capability - from strategy and prototyping through deployment and ongoing operation.",
  heroImage: img("about-hero.jpg"),
  ogImage: img("og.jpg"),
  credentials: [
    { label: "Founded", value: "2006" },
    { label: "Sectors", value: "Government & Enterprise" },
    { label: "Recognition", value: "BRW Fast 100" },
    { label: "Approach", value: "Human-centred technology" },
    { label: "Heritage", value: "Automation, IoT & intelligent systems" },
    { label: "Delivery", value: "Secure digital delivery" },
  ],
  experience: [
    { value: "20+", label: "Years in operation" },
    { value: "BRW", label: "Fast 100 recognition" },
    { value: "Gov", label: "Federal & state clients" },
    { value: "End-to-end", label: "Strategy to operation" },
  ],
  purpose: {
    eyebrow: "Our purpose",
    heading: "Making technology more human.",
    body: [
      "DELV exists to connect people through technology — turning complex ideas into systems that deliver real outcomes.",
      "We design technology around the people who use it, manage it and trust it. Across mobility, IoT, automation, AI and robotics, that principle has not changed.",
    ],
  },
  story: {
    eyebrow: "DELV Group",
    heading: "A technology company built for change.",
    body: "For twenty years, DELV has helped government and enterprise organisations build, deploy and manage technology in environments where it genuinely has to work — securely, at scale, with no room for experiments that go nowhere.",
  },
  heritage: [
    {
      eyebrow: "Heritage",
      title: "Enterprise Mobility Pioneer",
      body: "DELV began as one of Australia's leading enterprise mobility and MDM/EMM/UEM specialists — managing thousands of devices for government and enterprise clients.",
    },
    {
      eyebrow: "Recognition",
      title: "BRW Fast 100",
      body: "Recognised as one of Australia's fastest-growing technology companies. A track record of delivery, not just ambition.",
    },
    {
      eyebrow: "Evolution",
      title: "From Managed Services to AI",
      body: "From BlackBerry and device management to platforms, AI and intelligent apps — DELV has continuously evolved to stay at the frontier of what organisations need.",
    },
  ],
  whyDelv: [
    { title: "Strategy first", body: "We identify where AI genuinely creates value for your business — and where it does not. No wasted investment." },
    { title: "We build what we advise", body: "Our advisory team and engineering team are the same team. Strategy leads directly to execution." },
    { title: "Human-centred AI", body: "AI designed around the people who use it. Adoption requires simplicity — we engineer for it from day one." },
    { title: "Governed by design", body: "AI governance, security and policy are built in from the start — not bolted on after the fact." },
    { title: "End-to-end delivery", body: "We advise, design, build, deploy and operate. You get one partner across the full AI journey." },
    { title: "20 years of delivery trust", body: "Two decades of government and enterprise delivery. We know what breaks at scale and build to prevent it." },
  ],
  values: [
    { title: "Customer first", body: "Every decision starts with what creates the most value for the organisations and people we serve." },
    { title: "Act with integrity", body: "Honest about what we can deliver. If something will not work, we say so." },
    { title: "Think big, move fast", body: "Strategic ambition combined with operational practicality." },
    { title: "Be different", body: "We explore emerging technology early, test what is practical, and help clients adopt it when it is ready." },
  ],
  labels: {
    talk: "Talk to DELV →",
    servicesCta: "Explore our services",
    heritageEyebrow: "Our experience",
    heritageHeading: "Twenty years of technology delivery.",
    heritageBody: "Our foundation in enterprise mobility, security and managed services gives DELV unique credibility when it comes to deploying AI in complex, high-stakes environments.",
    valuesEyebrow: "How we work",
    valuesHeading: "Four principles. No exceptions.",
    contact: "Contact DELV →",
    evolutionEyebrow: "Evolution",
    evolutionHeading: "Continuity, not reinvention.",
    servicesEyebrow: "Services",
    servicesHeading: "Four ways DELV can help.",
    servicesBody: "Each pillar can be engaged on its own, or as part of an end-to-end program.",
    whyEyebrow: "Why DELV",
    whyHeading: "Experience that reduces risk.",
    industriesEyebrow: "Industries",
    industriesHeading: "Trusted to deliver in complex environments.",
    valueLabel: "Value",
  },
  future: {
    eyebrow: "Where we are going",
    heading: "The next capability is already in motion.",
    body: "As AI reshapes how organisations work and physical robotics moves from factories into offices, hospitals and government facilities — DELV is already helping clients navigate that transition.",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Evolution timeline (also used as the archive on the Live Log)
// ─────────────────────────────────────────────────────────────────────────────
export const DELV_TIMELINE = [
  { era: "Origin · 2006", title: "Government IT", body: "Founded in Canberra in 2006 on government and enterprise IT. BRW Fast 100 recognised. Human-centred technology as a principle from day one." },
  { era: "Mobility", title: "Mobility & Managed Endpoints", body: "Enterprise mobility and secure managed environments — shifting the focus from devices to people." },
  { era: "Connected", title: "IoT / Intelligent Things", body: "Sensors, connectivity and automation — intelligent environments before AIoT became common language." },
  { era: "Automation", title: "Intelligent Automation", body: "Digital workers and human-in-the-loop process design — the foundation for modern AI agents." },
  { era: "Intelligence", title: "AI Services", body: "Strategy, governance, private AI, agents, RAG, deployment and managed AI operations." },
  { era: "Today", title: "Robotics", body: "Humanoid, quadruped and wheeled platforms — advisory through to pilots, deployment and managed operations." },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Capabilities (shown on /services and /services/[slug])
// ─────────────────────────────────────────────────────────────────────────────
export type Capability = {
  slug: string;
  number: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  prompts: string[];
  groups: { title: string; summary?: string; items: string[] }[];
  process: { title: string; label: string; body: string }[];
  highlight?: { eyebrow: string; title: string; body: string; items?: string[]; note?: string };
  closing: { heading: string; body: string; cta: string };
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "platform-development",
    number: "01",
    name: "Platform Development",
    short: "Apps, SaaS platforms, internal tools and customer portals — increasingly AI-enabled, always built for real-world use.",
    intro: "Strategy, design, engineering and managed operations — one team across the full lifecycle.",
    image: img("card-platform.jpg"),
    prompts: [
      "An idea to validate before building?",
      "Inherited a platform that underperforms?",
      "Need an MVP that scales into a real product?",
    ],
    groups: [
      {
        title: "What we build",
        summary: "From idea to managed platform.",
        items: [
          "Mobile applications", "Web applications", "SaaS platforms", "Startup MVPs",
          "Enterprise systems", "Internal business tools", "Customer portals", "Workflow platforms",
          "AI-enabled software", "Integrations and APIs", "Cloud platforms", "Managed product support",
        ],
      },
    ],
    highlight: {
      eyebrow: "AI app development",
      title: "Intelligent applications. Built for real use.",
      body: "From MVPs to enterprise platforms, we combine human-centred design, AI capability and full-stack development to deliver products that feel effortless.",
    },
    process: [
      { label: "Product strategy", title: "Define", body: "Outcomes, users, scope and commercial model." },
      { label: "UX & prototyping", title: "Design", body: "Human-centred design, validated before we build." },
      { label: "Engineering", title: "Build", body: "Full-stack development, tested and production-ready." },
      { label: "Support & optimise", title: "Operate", body: "Ongoing managed operations and continuous improvement." },
    ],
    closing: {
      heading: "Build the platform your organisation needs next.",
      body: "Tell us about your idea, product or workflow. We'll tell you what's worth building and what to do first.",
      cta: "Start a platform conversation →",
    },
  },
  {
    slug: "ai-services",
    number: "02",
    name: "AI Services",
    short: "From readiness and governance to private AI, agents, automation and managed AI operations.",
    intro: "An AI system embedded in real operations — secure, governed and working alongside people.",
    image: img("card-ai.jpg"),
    prompts: [
      "Show the board what AI could really do?",
      "A manual process your team keeps repeating?",
      "Moving from public AI tools to a managed program?",
      "Understand AI risk before going further?",
    ],
    groups: [
      {
        title: "AI Advisory & Readiness",
        summary: "Map your position, real opportunities and risk — and build a practical roadmap before you commit to an AI program.",
        items: ["AI readiness assessments", "AI opportunity mapping", "Workflow and role analysis", "AI risk reviews", "Vendor, model and tool assessment", "Executive & board briefings"],
      },
      {
        title: "AI Governance & Policy",
        summary: "Adopt AI responsibly — the frameworks, policies and controls to use it safely and consistently.",
        items: ["AI policy development", "AI governance frameworks", "AI usage audits", "Compliance and risk controls", "Workforce training", "Adoption planning"],
      },
      {
        title: "AI Deployment",
        summary: "From proof of concept to production. We deploy private AI environments, agents, RAG systems and AI-enabled workflows — and run them.",
        items: ["Private AI environments", "AI agents & assistants", "RAG / knowledge systems", "Workflow integration", "AI governance controls", "Managed AI operations"],
      },
      {
        title: "AI Agents & Automation",
        summary: "Automate the repetitive, amplify the valuable. Agentic workflows, digital workers and process automation that run in production, not just in demos.",
        items: ["AI agents & agentic workflows", "Digital workers", "Process & workflow automation", "Human-in-the-loop design", "Automation governance"],
      },
    ],
    highlight: {
      eyebrow: "Productised offer",
      title: "AI Readiness Program",
      body: "An 8-week engagement designed to move your organisation from AI confusion to clear execution. Fixed price. Clear scope. Defined outcomes.",
      items: ["Executive AI workshop", "Workflow and systems audit", "AI opportunity mapping", "Use-case prioritisation", "Pilot planning", "AI governance and policy framework", "Implementation roadmap"],
      note: "Contact us for a tailored price",
    },
    process: [
      { label: "AI strategy", title: "Understand", body: "AI readiness assessment, opportunity mapping and governance framework." },
      { label: "Design & plan", title: "Architect", body: "AI system design, agent architecture and human-centred UX planning." },
      { label: "Build & deploy", title: "Engineer", body: "AI app development, agent engineering, integration and production deployment." },
      { label: "Manage & optimise", title: "Operate", body: "Ongoing AI support, performance monitoring, iteration and continuous improvement." },
    ],
    closing: {
      heading: "Make AI operational, not experimental.",
      body: "Tell us where you are with AI. We'll tell you what to do next.",
      cta: "Start an AI conversation →",
    },
  },
  {
    slug: "robotics",
    number: "03",
    name: "Robotics",
    short: "AI-enabled physical systems assessed, piloted and deployed safely into real operating environments.",
    intro: "AI-enabled physical systems, assessed and deployed safely into real operating environments.",
    image: img("card-robotics.jpg"),
    prompts: [
      "Test a robotics use case before full deployment?",
      "Unsure which platform fits your environment?",
      "Need to map safety, compliance and integration first?",
    ],
    groups: [
      {
        title: "What we do",
        summary: "From curiosity to live operations.",
        items: [
          "Robotics readiness assessments", "Use-case identification and prioritisation", "Platform and vendor selection", "Pilot programs",
          "Humanoid robot deployment", "Quadruped robot deployment", "Wheeled robot deployment", "AI integration",
          "Sensor and environment integration", "Safety and compliance frameworks", "Operator training", "Managed robotics support",
        ],
      },
      {
        title: "Humanoid",
        summary: "Built for human environments. Suited to reception, security patrol, inspection and customer-facing roles in government and enterprise facilities.",
        items: [],
      },
      {
        title: "Quadruped",
        summary: "Built for complex terrain. Ideal for infrastructure monitoring, site inspection and remote assessment.",
        items: [],
      },
      {
        title: "Wheeled",
        summary: "Built for structured environments. Suited to logistics, delivery, patrol, asset tracking and repetitive movement tasks.",
        items: [],
      },
      {
        title: "Use cases",
        summary: "Practical applications in business and government today.",
        items: [
          "Facility security and patrol", "Infrastructure and site inspection", "Reception and wayfinding", "Internal logistics and delivery",
          "Remote site monitoring", "Health facility support and logistics", "Campus operations", "Data centre inspection",
          "Emergency services support", "Dangerous environment assessment",
        ],
      },
    ],
    highlight: {
      eyebrow: "Featured offer",
      title: "Robotics Opportunity Assessment",
      body: "A short, structured engagement to identify where robotics could create value before you commit to deployment.",
      items: ["Environment review", "Use-case mapping", "Platform shortlist", "Risk and compliance overview", "Recommended next steps"],
    },
    process: [
      { label: "01", title: "Readiness & Discovery", body: "Environment, safety requirements, use cases and integration landscape." },
      { label: "02", title: "Platform Selection", body: "Assess humanoid, quadruped and wheeled options against your specific requirements." },
      { label: "03", title: "Pilot Program", body: "Deploy in a controlled environment. Measure outcomes. Build the case for broader rollout." },
      { label: "04", title: "Integration & AI", body: "Connect robots to systems, sensors and operational workflows." },
      { label: "05", title: "Deploy & Train", body: "Full deployment with operator training and safety frameworks in place." },
      { label: "06", title: "Ongoing Management", body: "Performance monitoring, support and expanding capability over time." },
    ],
    closing: {
      heading: "The organisations starting now will have the lead.",
      body: "Robotics readiness, use-case identification or a pilot program scoped and ready to run — start the conversation.",
      cta: "Start a robotics conversation →",
    },
  },
  {
    slug: "advisory",
    number: "04",
    name: "Advisory",
    short: "Technology, AI and platform decisions clarified before you invest, build or deploy.",
    intro: "Clarifying major technology decisions before you invest, build or deploy.",
    image: img("card-advisory.jpg"),
    prompts: [
      "Need a roadmap that's practical, not theoretical?",
      "Unsure which platform, vendor or approach fits?",
      "Building the business case for a tech investment?",
      "Need an independent view before a major commitment?",
    ],
    groups: [
      {
        title: "What we cover",
        summary: "Strategic technology partner. Not just a delivery team.",
        items: [
          "Technology audits", "AI readiness & opportunity assessments", "Digital strategy", "Product strategy",
          "Solution architecture", "Technology roadmaps", "Governance frameworks", "Vendor and platform assessment",
          "Transformation planning", "Executive advisory", "Board-level briefings", "Feasibility assessments", "Business case support",
        ],
      },
    ],
    highlight: {
      eyebrow: "Ongoing engagement",
      title: "AI Advisory & Execution Partner",
      body: "We stay with you beyond strategy — helping your team execute, refine and scale AI across the business. Ongoing support. Strategic partnership. Real execution.",
      items: ["AI roadmap execution", "Tool and vendor selection", "Pilot delivery support", "Leadership guidance", "Ongoing optimisation"],
      note: "Retainer · contact us for a tailored price",
    },
    process: [],
    closing: {
      heading: "The right decision made early saves more than time.",
      body: "Tell us what you are trying to decide. We will tell you what we know — and what we would do.",
      cta: "Start an advisory conversation →",
    },
  },
  {
    slug: "48-hour-prototype",
    number: "★",
    name: "48 Hour Prototype",
    short: "Prove an AI or platform idea in two business days — before you commit budget.",
    intro: "A focused two-day engagement that turns a concept into something real — enough to show stakeholders, gather feedback and build momentum before a larger investment.",
    image: img("48hr-team.jpg"),
    prompts: [
      "An idea, but unsure it's worth building?",
      "Need to show stakeholders before budget approval?",
      "Want to test an AI workflow before a full build?",
      "Need something tangible for a board discussion?",
    ],
    groups: [
      {
        title: "What it can include",
        items: [
          "Clickable product prototype", "AI workflow demo", "Internal tool mock-up", "SaaS or MVP concept", "Automation flow",
          "Dashboard concept", "Customer portal prototype", "Robotics or AI use-case storyboard", "Technical feasibility notes", "Recommended next steps",
        ],
      },
      {
        title: "Before → After",
        summary: "From abstract to tangible. From talk to traction.",
        items: [
          "Idea is abstract → Tangible prototype",
          "Hard to explain → Shared understanding",
          "Slow to approve → Faster decision-making",
          "Stakeholders disengaged → Stakeholders aligned",
          "Business case ambiguous → Clearer business case",
          "Build estimates inflated → Reduced build risk",
        ],
      },
      {
        title: "When to use it",
        summary: "Win buy-in. Test an idea. Reduce uncertainty.",
        items: [
          "Internal tool sign-off before development",
          "Testing an AI workflow with a small team",
          "Securing budget for a new platform",
          "Showing the board what an AI initiative could look like",
          "Validating a product concept with customers",
          "Visualising a robotics or automation use case",
        ],
      },
    ],
    process: [
      { label: "Day 1", title: "Briefing and discovery", body: "We understand the idea, the audience and what success looks like. We design the core concept and agree on deliverables." },
      { label: "Day 2", title: "Build and deliver", body: "We produce the prototype. You receive a working, shareable prototype and a short briefing on recommended next steps." },
    ],
    closing: {
      heading: "Ready to test an idea?",
      body: "Tell us what you're trying to build, test or prove. We'll turn it into something tangible in 48 hours.",
      cta: "Prototype your idea →",
    },
  },
];

// Packaged entry-point engagements
export const OFFERS = [
  { title: "48 Hour Prototype", body: "Turn an idea into something tangible in two business days.", href: "/services/48-hour-prototype" },
  { title: "AI Readiness Audit", body: "Understand where you stand before committing to an AI program.", href: "/services/ai-services" },
  { title: "Technology Roadmap Sprint", body: "Create a practical roadmap in days, not months.", href: "/services/advisory" },
  { title: "Robotics Opportunity Assessment", body: "Identify the right robotics use cases for your environment.", href: "/services/robotics" },
  { title: "Platform Feasibility Review", body: "Validate your platform idea before building it.", href: "/services/platform-development" },
  { title: "AI Governance Framework", body: "Adopt AI responsibly. Build the controls your organisation needs.", href: "/services/ai-services" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Industries
// ─────────────────────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { name: "Government & Public Sector", body: "Government is in our roots. We understand the security, compliance, procurement and operational requirements that shape public-sector delivery.", tags: ["Security", "Compliance", "AI Services", "Robotics", "Advisory"] },
  { name: "Enterprise & Corporate", body: "From AI transformation to platform modernisation, we move complex organisations from strategy to operational capability.", tags: ["AI Services", "Platforms", "Advisory", "Managed Operations"] },
  { name: "Financial Services", body: "Regulated environments need technology that's secure, auditable and governed. Our AI, platform and advisory work is built for that reality.", tags: ["AI Governance", "Risk", "Compliance", "Platforms"] },
  { name: "Property & Construction", body: "Platforms, automation, AI and robotics can connect field operations, project management, compliance and site intelligence.", tags: ["Platforms", "Automation", "Robotics", "AI"] },
  { name: "Health & Community", body: "Human-centred technology matters in environments where people, workflows and trust are critical.", tags: ["Human-Centred", "AI", "Robotics", "Platforms"] },
  { name: "Startups & Scaleups", body: "From MVP to managed platform. We help founders and growth teams validate, build and scale production-grade technology.", tags: ["MVP", "48 Hour Prototype", "SaaS", "AI"] },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Insights (article titles from delv.group — full articles not published yet)
// ─────────────────────────────────────────────────────────────────────────────
export const INSIGHTS = [
  {
    topic: "AI Governance",
    title: "Why AI governance is the most important conversation your board is not having.",
    excerpt: "Most organisations have an AI policy. Far fewer have governance. The gap between the two is where risk lives, and where the most valuable conversations belong.",
    readTime: "8 min read",
    featured: true,
  },
  { topic: "Robotics", title: "Robots in the workplace: what leaders need to know before piloting." },
  { topic: "AI Agents", title: "From RPA to AI agents: the automation evolution most organisations are missing." },
  { topic: "AI Deployment", title: "Private AI vs public AI: what regulated organisations need to understand." },
  { topic: "Platforms", title: "The real cost of launching a platform without a managed operations model." },
  { topic: "Human-centred", title: "Human-centred AI: why the best programs start with people, not technology." },
  { topic: "48 Hour Prototype", title: "Why prototypes accelerate better technology decisions." },
  { topic: "Advisory", title: "How to build a technology roadmap that does not become shelfware." },
  { topic: "AI Governance", title: "The AI policy starter pack: ten clauses every organisation should consider." },
  { topic: "Robotics", title: "Choosing between humanoid, quadruped and wheeled robots for your environment." },
] as { topic: string; title: string; excerpt?: string; readTime?: string; featured?: boolean }[];

// Contact form "What are you interested in?" options
export const ENQUIRY_TOPICS = [
  "Platform Development",
  "AI Services",
  "Robotics",
  "Advisory",
  "48 Hour Prototype",
  "Akademija",
  "Press & speaking",
  "General enquiry",
] as const;
