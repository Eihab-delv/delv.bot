import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("ar");
export const metadata: Metadata = pageMetadata("ar", { title: c.pages.services.title, description: c.pages.services.body, path: "/services" });

export default function Page() {
  return <ServicesView lang="ar" />;
}
