import Link from "next/link";
import { catalog } from "@/alchyx/registry/catalog";
import { Container, Eyebrow, Stat } from "@/components/site/primitives";
import { Button } from "@/alchyx/components/button";
import { SkinShowcase } from "@/components/home/SkinShowcase";
import { LiveShowcase } from "@/components/home/LiveShowcase";
import { TriSkinShowcase } from "@/components/home/TriSkinShowcase";
import "./home.css";

/** The eight source systems and what Alchyx borrows from each. */
const SOURCES = [
  { name: "shadcn/ui", takes: "The variant + size API" },
  { name: "Radix Primitives", takes: "Headless, accessible behavior" },
  { name: "Base UI", takes: "Controllable state + composition" },
  { name: "Meta Astryx", takes: "Ergonomic component APIs" },
  { name: "Fluent UI", takes: "The status ramp + density" },
  { name: "GitHub Primer", takes: "Field anatomy + data tables" },
  { name: "Twilio Paste", takes: "Form & content patterns" },
  { name: "Ant Design", takes: "Data-dense components" },
];

const FOUNDATIONS = [
  { href: "/foundations#color", n: "01", title: "Color & skins", body: "Lab, Dark, and Ark — three coordinated skins driven entirely by CSS variables." },
  { href: "/foundations#type", n: "02", title: "Typography", body: "Space Grotesk, Hanken Grotesk, and the signature Space Mono caps layer." },
  { href: "/foundations#radius", n: "03", title: "Radius & shape", body: "A tight radius vocabulary — 11px controls, 16px cards, 100px pills." },
  { href: "/foundations#motion", n: "04", title: "Motion", body: "Two calm easings — expo and spring — that always degrade for reduced motion." },
  { href: "/foundations#tokens", n: "05", title: "Design tokens", body: "Every value as a typed token and a CSS custom property that re-tints live." },
  { href: "/foundations#a11y", n: "06", title: "Accessibility", body: "Keyboard, ARIA, and focus baked into every behavior primitive from day one." },
];

export default function HomePage() {
  const categories = new Set(catalog.map((c) => c.category)).size;

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <Container size="wide">
          <div className="hero__copy">
            <Eyebrow index="alchyx">The D-ALabs component index</Eyebrow>
            <h1 className="hero__title">
              Eight design systems. <span className="em">One color.</span>
            </h1>
            <p className="hero__lede">
              Alchyx takes the best component APIs of eight design systems and re-skins them in one
              color — the D-ALabs Lab&nbsp;/&nbsp;Dark&nbsp;/&nbsp;Ark language, one accent at a
              time. Same proven ergonomics. Our palette, everywhere.
            </p>
            <div className="hero__cta">
              <Button asChild size="lg">
                <Link href="/components">
                  Explore the index <span aria-hidden>→</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/foundations">Read the foundations</Link>
              </Button>
            </div>
            <div className="hero__stats">
              <Stat value={`${catalog.length}`} label="Components" />
              <Stat value={`${categories}`} label="Categories" />
              <Stat value="8" label="Sources" />
              <Stat value="3" label="Skins" />
            </div>
          </div>
        </Container>
      </section>

      {/* Sources — the core idea */}
      <section className="section">
        <Container>
          <div className="home-head">
            <Eyebrow index="01">Sourced from eight systems</Eyebrow>
            <h2 className="display-2">We didn&apos;t reinvent the components.</h2>
            <p className="lede home-head__lede">
              Each Alchyx component draws its API from a proven open-source system — then wears the
              D-ALabs color. You get familiar ergonomics with a single, coherent look.
            </p>
          </div>
          <div className="sources">
            {SOURCES.map((s, i) => (
              <div key={s.name} className="source-card">
                <span className="source-card__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="source-card__name">{s.name}</span>
                <span className="source-card__takes">{s.takes}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* One component, three colors */}
      <section className="section">
        <Container size="wide">
          <div className="home-head">
            <Eyebrow index="02">One component, three colors</Eyebrow>
            <h2 className="display-2">The same specimen, re-skinned live.</h2>
            <p className="lede home-head__lede">
              Every component reads CSS variables, so a single markup renders in Lab, Dark, and Ark
              without a rewrite. Here is the identical set of specimens in all three skins.
            </p>
          </div>
          <div className="home-block">
            <TriSkinShowcase />
          </div>
        </Container>
      </section>

      {/* Interactive skins */}
      <section className="section">
        <Container>
          <div className="home-head">
            <Eyebrow index="03">The color, set live</Eyebrow>
            <h2 className="display-2">Switch the skin — the whole page re-tints.</h2>
            <p className="lede home-head__lede">
              One accent at a time, three skins in total. This switch drives the entire document, not
              just this section.
            </p>
          </div>
          <div className="home-block">
            <SkinShowcase />
          </div>
        </Container>
      </section>

      {/* Foundations grid */}
      <section className="section">
        <Container>
          <div className="home-head">
            <Eyebrow index="04">Foundations</Eyebrow>
            <h2 className="display-2">A measured system, not a theme.</h2>
            <p className="lede home-head__lede">
              Color, type, shape, motion, and tokens are specified precisely so every
              independently-authored component comes out as one coherent language.
            </p>
          </div>
          <div className="found-grid">
            {FOUNDATIONS.map((f) => (
              <Link key={f.href} href={f.href} className="found-card">
                <span className="found-card__n">{f.n}</span>
                <span className="found-card__title">{f.title}</span>
                <span className="found-card__body">{f.body}</span>
                <span className="found-card__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Live components */}
      <section className="section">
        <Container>
          <div className="home-head home-head--row">
            <div>
              <Eyebrow index="05">Live specimens</Eyebrow>
              <h2 className="display-2">Components that work in every skin.</h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/components">
                All {catalog.length} components <span aria-hidden>→</span>
              </Link>
            </Button>
          </div>
          <div className="home-block">
            <LiveShowcase />
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="cta">
        <Container size="narrow">
          <div className="cta__panel alx-grid-deep">
            <Eyebrow>Open the index</Eyebrow>
            <h2 className="cta__title">Search every component, in your color.</h2>
            <p className="cta__body">
              Filter by category or source system, and see each component live in Lab, Dark, or Ark.
            </p>
            <div className="cta__actions">
              <Button asChild size="lg" variant="inverse">
                <Link href="/components">
                  Browse the index <span aria-hidden>→</span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
