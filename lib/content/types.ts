/** Shapes shared by the English and Arabic dictionaries. */

export type LinkItem = { label: string; href: string };
export type Stat = { value: string; label: string };

export type Capability = {
  slug: string;
  number: string;
  name: string;
  short: string;
  intro: string;
  prompts: string[];
  groups: { title: string; summary?: string; items: string[] }[];
  process: { title: string; label: string; body: string }[];
  highlight?: { eyebrow: string; title: string; body: string; items?: string[]; note?: string };
  closing: { heading: string; body: string; cta: string };
};

export type Insight = { topic: string; title: string; excerpt?: string; readTime?: string; featured?: boolean };

export type Way = { key: string; icon: string; title: string; body: string; points: string[] };

export type Robot = { name: string; role: string; status: string; body: string; features: string[] };

export type Learner = { key: string; icon: string; title: string; who: string; body: string; tools: string[] };

export type IrisTopic = { keywords: string[]; answer: string; link?: LinkItem };
