import type { Metadata } from "next";
import { AkademijaView } from "@/components/views/SimpleViews";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("en");
export const metadata: Metadata = pageMetadata("en", { title: c.akademija.title, description: c.akademija.body1, path: "/akademija" });

export default function Page() {
  return <AkademijaView lang="en" />;
}
