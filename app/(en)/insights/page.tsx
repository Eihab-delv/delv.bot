import type { Metadata } from "next";
import InsightsView from "@/components/views/InsightsView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("en");
export const metadata: Metadata = pageMetadata("en", { title: c.pages.insights.title, description: c.pages.insights.body, path: "/insights" });

export default function Page() {
  return <InsightsView lang="en" />;
}
