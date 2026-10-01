import type { Metadata } from "next";
import LiveLog from "@/components/LiveLog";
import ComingSoon from "@/components/ComingSoon";
import SectionIntro from "@/components/SectionIntro";
import Timeline from "@/components/Timeline";
import { PAGES } from "@/lib/constants";

export const metadata: Metadata = { title: PAGES.newsFeed.title };

export default function NewsFeedPage() {
  const p = PAGES.newsFeed;
  return (
    <>
      <LiveLog showCta={false} />
      <section className="py-16 lg:py-20 bg-ink-soft border-y border-ink-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={p.archiveEyebrow} heading={p.archiveHeading} body={p.archiveBody} />
          <Timeline />
        </div>
      </section>
      <ComingSoon heading={p.emptyHeading} body={p.emptyBody} />
    </>
  );
}
