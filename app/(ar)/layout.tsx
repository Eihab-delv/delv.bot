import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { rootMetadata, viewport as rootViewport } from "@/lib/rootMetadata";

export const metadata = rootMetadata("ar");
export const viewport = rootViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-ink text-paper antialiased selection:bg-neon-500 selection:text-ink">
        <SiteShell lang="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
