import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalog, catalogBySlug, catalogSlugs } from "@/alchyx/registry/catalog";
import { Container } from "@/components/site/primitives";
import { ComponentDetail } from "@/components/catalog/ComponentDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return catalogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = catalogBySlug[slug];
  if (!meta) return { title: "Component not found" };
  return {
    title: meta.name,
    description: meta.summary,
    openGraph: { title: `${meta.name} · Alchyx`, description: meta.summary },
  };
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const meta = catalogBySlug[slug];
  if (!meta) notFound();

  const idx = catalog.findIndex((m) => m.slug === slug);
  const prevMeta = catalog[(idx - 1 + catalog.length) % catalog.length];
  const nextMeta = catalog[(idx + 1) % catalog.length];

  return (
    <div className="page">
      <Container size="wide">
        <ComponentDetail
          meta={meta}
          prev={{ slug: prevMeta.slug, name: prevMeta.name }}
          next={{ slug: nextMeta.slug, name: nextMeta.name }}
        />
      </Container>
    </div>
  );
}
