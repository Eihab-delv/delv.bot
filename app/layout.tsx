import type { Metadata } from "next";
import "./globals.css";
import { META } from "@/lib/constants";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  openGraph: {
    title: META.ogTitle,
    description: META.ogDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ink text-paper antialiased selection:bg-neon-500 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
