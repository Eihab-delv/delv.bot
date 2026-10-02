import type { Metadata } from "next";
import InsightsView from "@/components/views/InsightsView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("ar");
export const metadata: Metadata = pageMetadata("ar", { title: c.pages.insights.title, description: c.pages.insights.body, path: "/insights" });

export default function Page() {
  return <InsightsView lang="ar" />;
}
