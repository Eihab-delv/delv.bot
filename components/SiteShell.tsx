import TopBanner from "./TopBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IrisChat from "./IrisChat";
import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/site";

/** Everything inside <body>: banner, navbar, page, footer and IRIS. */
export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const c = getContent(lang);
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:rounded-full focus:bg-neon-500 focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        {c.common.skipToContent}
      </a>
      <TopBanner lang={lang} />
      <Navbar
        lang={lang}
        links={c.nav.links}
        cta={c.nav.cta}
        by={c.brand.by}
        brandName={c.brand.name}
        langLabel={c.common.langLabel}
        langAria={c.common.langAria}
        toggleMenu={c.nav.toggleMenu}
      />
      <main id="main" className="relative">
        {children}
      </main>
      <Footer lang={lang} />
      <IrisChat lang={lang} iris={c.iris} />
    </>
  );
}
