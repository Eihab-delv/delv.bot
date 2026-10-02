import type { Metadata } from "next";
import { AkademijaView } from "@/components/views/SimpleViews";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("ar");
export const metadata: Metadata = pageMetadata("ar", { title: c.akademija.title, description: c.akademija.body1, path: "/akademija" });

export default function Page() {
  return <AkademijaView lang="ar" />;
}
