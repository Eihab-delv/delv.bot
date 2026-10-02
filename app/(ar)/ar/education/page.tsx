import type { Metadata } from "next";
import EducationView from "@/components/views/EducationView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("ar");
export const metadata: Metadata = pageMetadata("ar", { title: c.education.page.title, description: c.education.page.body, path: "/education" });

export default function Page() {
  return <EducationView lang="ar" />;
}
