import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("en");
export const metadata: Metadata = pageMetadata("en", { title: c.pages.services.title, description: c.pages.services.body, path: "/services" });

export default function Page() {
  return <ServicesView lang="en" />;
}
