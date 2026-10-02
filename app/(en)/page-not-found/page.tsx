import type { Metadata } from "next";
import { NotFoundView } from "@/components/views/SimpleViews";

// Copied to out/404.html after the build (scripts/postbuild.mjs) so GitHub
// Pages shows a branded 404. Not meant to be visited directly.
export const metadata: Metadata = { title: "404", robots: { index: false, follow: false } };

export default function Page() {
  return <NotFoundView lang="en" />;
}
