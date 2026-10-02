import type { Lang } from "../site";
import { en, type Content } from "./en";
import { ar } from "./ar";

export type { Content };
export type { Lang };

const DICTS: Record<Lang, Content> = { en, ar };

/** All visitor-facing text for one language. */
export function getContent(lang: Lang): Content {
  return DICTS[lang];
}
