import Hero from "../Hero";
import EcosystemMarquee from "../EcosystemMarquee";
import LiveLog from "../LiveLog";
import Team from "../Team";
import Protocol from "../Protocol";
import Akademija from "../Akademija";
import FounderSnippet from "../FounderSnippet";
import Newsletter from "../Newsletter";
import CtaBand from "../CtaBand";
import JsonLd from "../JsonLd";
import { NashmiIntro, WaysGrid, EducationSpotlight, ImpactStats, HowItWorks } from "../nashmi/Sections";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export default function HomeView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  return (
    <>
      <JsonLd lang={lang} />
      <Hero lang={lang} />
      <EcosystemMarquee lang={lang} />
      <NashmiIntro lang={lang} />
      <WaysGrid lang={lang} />
      <EducationSpotlight lang={lang} />
      <ImpactStats lang={lang} />
      <HowItWorks lang={lang} />
      <LiveLog lang={lang} />
      <Team lang={lang} />
      <Protocol lang={lang} />
      <Akademija lang={lang} />
      <FounderSnippet lang={lang} />
      <Newsletter content={c.newsletter} />
      <CtaBand
        heading={c.nashmi.pilot.heading}
        body={c.nashmi.pilot.body}
        cta={{ label: c.nashmi.pilot.cta.label, href: localize(lang, c.nashmi.pilot.cta.href) }}
      />
    </>
  );
}
