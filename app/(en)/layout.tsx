import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { rootMetadata, viewport as rootViewport } from "@/lib/rootMetadata";

export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <body className="min-h-screen bg-ink text-paper antialiased selection:bg-neon-500 selection:text-ink">
        <SiteShell lang="en">{children}</SiteShell>
      </body>
    </html>
  );
}
