import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EcosystemMarquee from "@/components/EcosystemMarquee";
import LiveLog from "@/components/LiveLog";
import Team from "@/components/Team";
import Protocol from "@/components/Protocol";
import Presence from "@/components/Presence";
import Akademija from "@/components/Akademija";
import AboutSnippet from "@/components/AboutSnippet";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import IrisChat from "@/components/IrisChat";

export default function Home() {
  return (
    <main className="relative">
      <TopBanner />
      <Navbar />
      <Hero />
      <EcosystemMarquee />
      <LiveLog />
      <Team />
      <Protocol />
      <Presence />
      <Akademija />
      <AboutSnippet />
      <Newsletter />
      <Footer />
      <IrisChat />
    </main>
  );
}
