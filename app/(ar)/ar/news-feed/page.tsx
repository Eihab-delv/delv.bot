import type { Metadata } from "next";
import NewsFeedView from "@/components/views/NewsFeedView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";

const c = getContent("ar");
export const metadata: Metadata = pageMetadata("ar", { title: c.pages.newsFeed.title, description: c.liveLog.subheading, path: "/news-feed" });

export default function Page() {
  return <NewsFeedView lang="ar" />;
}
