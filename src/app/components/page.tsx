import type { Metadata } from "next";
import { catalog } from "@/alchyx/registry/catalog";
import { Container, SectionHead } from "@/components/site/primitives";
import { ComponentCatalog } from "@/components/catalog/ComponentCatalog";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Search and browse every Alchyx component — actions, forms, data display, navigation, overlays, and feedback — each on the Lab / Dark / Ark design language.",
};

export default function ComponentsPage() {
  const count = catalog.length;
  return (
    <div className="page">
      <Container>
        <SectionHead
          as="h1"
          index="§"
          eyebrow="The index"
          title="Every component, re-skinned."
          lede="The best of eight design systems, unified into one library and re-skinned in the D-ALabs color. Search by name or tag, filter by category or the source system it came from, then open any component to see it live in the active skin."
          count={`${count} specimens`}
        />
        <div style={{ marginTop: 40 }}>
          <ComponentCatalog catalog={catalog} />
        </div>
      </Container>
    </div>
  );
}
