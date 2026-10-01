import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND, META, PAGES, SITE_URL } from "@/lib/constants";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IrisChat from "@/components/IrisChat";

export const metadata: Metadata = {
  // Origin only — asset paths below already include the /delv.bot base path
  metadataBase: new URL(new URL(SITE_URL).origin),
  title: {
    default: META.title,
    template: META.titleTemplate,
  },
  description: META.description,
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: META.ogTitle,
    description: META.ogDescription,
    images: [{ url: META.ogImage, width: 1200, height: 630, alt: META.ogTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.ogTitle,
    description: META.ogDescription,
    images: [META.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#06060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ink text-paper antialiased selection:bg-neon-500 selection:text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-neon-500 focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          {PAGES.skipToContent}
        </a>
        <TopBanner />
        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <IrisChat />
      </body>
    </html>
  );
}
