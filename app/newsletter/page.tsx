import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import { PAGES } from "@/lib/constants";

export const metadata: Metadata = { title: PAGES.newsletter.title };

export default function NewsletterPage() {
  return <Newsletter />;
}
