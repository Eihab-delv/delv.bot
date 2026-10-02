import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";
import { pageMetadata } from "@/lib/meta";

export const metadata: Metadata = pageMetadata("ar", { path: "/" });

export default function Page() {
  return <HomeView lang="ar" />;
}
