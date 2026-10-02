import type { Metadata } from "next";
import ServiceDetailView from "@/components/views/ServiceDetailView";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/meta";
import { CAPABILITY_SLUGS } from "@/lib/site";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return CAPABILITY_SLUGS.map((slug) => ({ slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }: Params): Metadata {
  const cap = getContent("ar").capabilities.find((x) => x.slug === params.slug);
  return pageMetadata("ar", { title: cap?.name, description: cap?.short, path: `/services/${params.slug}` });
}

export default function Page({ params }: Params) {
  return <ServiceDetailView lang="ar" slug={params.slug} />;
}
