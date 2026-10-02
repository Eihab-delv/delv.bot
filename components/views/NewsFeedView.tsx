import LiveLog from "../LiveLog";
import ComingSoon from "../ComingSoon";
import SectionIntro from "../SectionIntro";
import Timeline from "../Timeline";
import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/site";

export default function NewsFeedView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const p = c.pages.newsFeed;
  return (
    <>
      <LiveLog lang={lang} showCta={false} />
      <section className="py-16 lg:py-20 bg-ink-soft border-y border-ink-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionIntro eyebrow={p.buildEyebrow} heading={p.buildHeading} />
            <Timeline items={p.build} liveFirst />
          </div>
          <div>
            <SectionIntro eyebrow={p.archiveEyebrow} heading={p.archiveHeading} body={p.archiveBody} />
            <Timeline items={c.delv.timeline} />
          </div>
        </div>
      </section>
      <ComingSoon lang={lang} heading={p.emptyHeading} body={p.emptyBody} />
    </>
  );
}
