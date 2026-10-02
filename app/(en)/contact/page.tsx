import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("en");
export const metadata: Metadata = pageMetadata("en", { title: c.pages.contact.title, description: c.pages.contact.body, path: "/contact" });

export default function Page() {
  return <ContactView lang="en" />;
}
