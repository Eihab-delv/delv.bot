import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";
import { pageMetadata } from "@/lib/meta";

export const metadata: Metadata = pageMetadata("en", { path: "/", title: "Nashmi.bot" });

export default function Page() {
  return <HomeView lang="en" />;
}
