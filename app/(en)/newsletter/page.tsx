import type { Metadata } from "next";
import { NewsletterView } from "@/components/views/SimpleViews";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("en");
export const metadata: Metadata = pageMetadata("en", { title: c.newsletter.title, description: c.newsletter.body, path: "/newsletter" });

export default function Page() {
  return <NewsletterView lang="en" />;
}
