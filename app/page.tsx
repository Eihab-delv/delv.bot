import Hero from "@/components/Hero";
import EcosystemMarquee from "@/components/EcosystemMarquee";
import LiveLog from "@/components/LiveLog";
import Team from "@/components/Team";
import Protocol from "@/components/Protocol";
import Presence from "@/components/Presence";
import Akademija from "@/components/Akademija";
import AboutSnippet from "@/components/AboutSnippet";
import Newsletter from "@/components/Newsletter";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <EcosystemMarquee />
      <LiveLog />
      <Team />
      <Protocol />
      <Presence />
      <Akademija />
      <AboutSnippet />
      <Newsletter />
    </>
  );
}
