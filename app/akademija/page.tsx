import type { Metadata } from "next";
import Akademija from "@/components/Akademija";
import Newsletter from "@/components/Newsletter";
import { PAGES } from "@/lib/constants";

export const metadata: Metadata = { title: PAGES.akademija.title };

export default function AkademijaPage() {
  return (
    <>
      <Akademija showCta={false} />
      <Newsletter />
    </>
  );
}
