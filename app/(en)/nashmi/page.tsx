import type { Metadata } from "next";
import NashmiView from "@/components/views/NashmiView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("en");
export const metadata: Metadata = pageMetadata("en", { title: c.nashmi.page.title, description: c.nashmi.page.body, path: "/nashmi" });

export default function Page() {
  return <NashmiView lang="en" />;
}
