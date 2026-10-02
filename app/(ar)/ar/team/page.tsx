import type { Metadata } from "next";
import TeamView from "@/components/views/TeamView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("ar");
export const metadata: Metadata = pageMetadata("ar", { title: c.pages.team.title, description: c.pages.team.body, path: "/team" });

export default function Page() {
  return <TeamView lang="ar" />;
}
