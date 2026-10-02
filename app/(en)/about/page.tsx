import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("en");
export const metadata: Metadata = pageMetadata("en", { title: c.pages.about.title, description: c.pages.about.body, path: "/about" });

export default function Page() {
  return <AboutView lang="en" />;
}
