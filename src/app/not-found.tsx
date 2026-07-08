import Link from "next/link";
import { Container, Eyebrow } from "@/components/site/primitives";
import { Button } from "@/alchyx/components/button";

export default function NotFound() {
  return (
    <div className="page">
      <Container size="narrow">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 22,
            padding: "clamp(48px, 10vw, 120px) 0",
          }}
        >
          <Eyebrow index="404">Off the map</Eyebrow>
          <h1 className="display-1">This surface doesn&apos;t exist.</h1>
          <p className="lede" style={{ maxWidth: "48ch" }}>
            The page you&apos;re after isn&apos;t part of the Alchyx index. Head back to the overview,
            or jump straight into the searchable component catalog.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Button asChild size="lg">
              <Link href="/components">
                Browse components <span aria-hidden>→</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/">Back to overview</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
