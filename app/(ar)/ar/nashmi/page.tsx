import type { Metadata } from "next";
import NashmiView from "@/components/views/NashmiView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("ar");
export const metadata: Metadata = pageMetadata("ar", { title: c.nashmi.page.title, description: c.nashmi.page.body, path: "/nashmi" });

export default function Page() {
  return <NashmiView lang="ar" />;
}
