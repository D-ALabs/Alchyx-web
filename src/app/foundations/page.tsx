import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/site/primitives";
import { ThemeSwitcher } from "@/components/site/ThemeSwitcher";
import { MotionLab } from "@/components/foundations/MotionLab";
import { Button } from "@/alchyx/components/button";
import "./foundations.css";

export const metadata: Metadata = {
  title: "Foundations",
  description:
    "The Alchyx design language: three skins, one accent, the mono-caps signature, plus the color, typography, radius, motion, and token vocabularies that hold the system together.",
};

const SURFACES = [
  { v: "--bg", label: "Page", role: "The base canvas" },
  { v: "--surface", label: "Surface", role: "Cards, panels, wells" },
  { v: "--surface2", label: "Surface 2", role: "Translucent insets, inputs" },
  { v: "--deep", label: "Deep", role: "Near-black bands" },
  { v: "--deep2", label: "Deep 2", role: "Deepest band" },
  { v: "--panel", label: "Panel", role: "Overlay / modal fill" },
];
const TEXT = [
  { v: "--ink", label: "Ink", role: "Primary text" },
  { v: "--ink2", label: "Ink 2", role: "Strong text" },
  { v: "--sub", label: "Sub", role: "Secondary / body" },
  { v: "--faint", label: "Faint", role: "Mono labels, meta" },
];
const LINES = [
  { v: "--bd", label: "Border", role: "Default hairline" },
  { v: "--bd2", label: "Border 2", role: "Fainter divider" },
  { v: "--bd-hov", label: "Border hover", role: "Emphasis / hover" },
];
const STATUS = [
  { hex: "#13B981", label: "Signal", role: "Live · pass" },
  { hex: "#D98A2B", label: "Caution", role: "Training · drift" },
  { hex: "#C25E54", label: "Fault", role: "Error" },
];

const TYPE_ROLES = [
  {
    role: "Display",
    font: "var(--font-display)",
    meta: "Space Grotesk · 600",
    use: "Headings, card titles, stat numerals",
    sample: "One accent, three skins.",
    cls: "type-spec__sample--display",
  },
  {
    role: "Sans",
    font: "var(--font-sans)",
    meta: "Hanken Grotesk · 400",
    use: "Body copy, labels, button text",
    sample: "Every surface reads a CSS variable, so a single attribute re-tints the whole tree.",
    cls: "type-spec__sample--sans",
  },
  {
    role: "Mono",
    font: "var(--font-mono)",
    meta: "Space Mono · 400 · uppercase",
    use: "Eyebrows, specs, metadata — the signature",
    sample: "[ 04 — DESIGN TOKENS ]",
    cls: "type-spec__sample--mono",
  },
];

const TYPE_SCALE = [
  { id: "T-01", name: "Display", size: "clamp(1.9–3.2rem)", tr: "-.03em", lh: "1.03" },
  { id: "T-02", name: "Section head", size: "clamp(1.7–2.4rem)", tr: "-.025em", lh: "1.08" },
  { id: "T-03", name: "Card title", size: "1.5rem", tr: "-.02em", lh: "1.1" },
  { id: "T-04", name: "Body", size: "17px", tr: "0", lh: "1.65" },
  { id: "T-05", name: "Mono label", size: "12px", tr: ".2em", lh: "—" },
  { id: "T-06", name: "Stat numeral", size: "clamp(2.2–3.2rem)", tr: "-.04em", lh: "1" },
];

const RADII = [
  { v: "--radius-control-sm", label: "Control sm", px: "10px" },
  { v: "--radius-control", label: "Control", px: "11px" },
  { v: "--radius-card", label: "Card", px: "16px" },
  { v: "--radius-panel", label: "Panel", px: "18px" },
  { v: "--radius-panel-lg", label: "Panel lg", px: "22px" },
  { v: "--radius-pill", label: "Pill", px: "100px" },
];

const TOKENS = [
  { group: "Backgrounds", items: ["--bg", "--surface", "--surface2", "--deep", "--deep2", "--panel"] },
  { group: "Text", items: ["--ink", "--ink2", "--sub", "--faint", "--deep-ink", "--deep-sub"] },
  { group: "Lines", items: ["--bd", "--bd2", "--bd-hov", "--input-bd"] },
  { group: "Accent", items: ["--accent", "--accent-ink", "--accent-soft"] },
  { group: "Radii", items: ["--radius-control", "--radius-card", "--radius-panel", "--radius-pill"] },
  { group: "Motion", items: ["--ease-expo", "--ease-spring"] },
  { group: "Type", items: ["--font-display", "--font-sans", "--font-mono"] },
  { group: "Shadow", items: ["--sh-card", "--sh-btn"] },
];

const A11Y = [
  "Every interactive component ships full keyboard support — Tab, arrow keys with roving tabindex, Enter / Space activation, and Escape to dismiss overlays.",
  "ARIA roles and relationships (aria-labelledby, aria-controls, aria-expanded, aria-selected, aria-modal…) are wired with generated ids.",
  "Focus is always visible for keyboard users via :focus-visible, and it is trapped + restored around modal overlays.",
  "All colour pairings avoid pure black and white and hold contrast across Lab, Dark, and Ark.",
  "Every animation degrades gracefully under prefers-reduced-motion.",
];

const SECTIONS = [
  { id: "color", label: "Color" },
  { id: "type", label: "Type" },
  { id: "radius", label: "Radius" },
  { id: "motion", label: "Motion" },
  { id: "elevation", label: "Elevation" },
  { id: "tokens", label: "Tokens" },
  { id: "a11y", label: "A11y" },
];

function Swatch({ v, label, role, dark }: { v: string; label: string; role: string; dark?: boolean }) {
  return (
    <div className="swatch">
      <div className="swatch__chip" style={{ background: `var(${v})` }} data-dark={dark || undefined} />
      <div className="swatch__meta">
        <span className="swatch__label">{label}</span>
        <code className="swatch__var">{v}</code>
        <span className="swatch__role">{role}</span>
      </div>
    </div>
  );
}

export default function FoundationsPage() {
  return (
    <div className="page fnd">
      <Container>
        {/* Intro */}
        <header className="fnd__intro">
          <Eyebrow index="00">The design language</Eyebrow>
          <h1 className="display-1">Lab · Dark · Ark.</h1>
          <p className="lede fnd__intro-lede">
            The color our components are re-skinned in. Alchyx is a single design language rendered
            in three coordinated skins, tuned by one accent at a time, and marked throughout by a
            Space&nbsp;Mono caps layer. Everything below reads CSS variables — change the skin and the
            whole page re-tints.
          </p>
          <div className="fnd__intro-switch">
            <ThemeSwitcher />
          </div>
        </header>

        {/* Sub-nav */}
        <nav className="fnd__nav" aria-label="Foundations sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="fnd__nav-link">
              {s.label}
            </a>
          ))}
        </nav>

        {/* Color */}
        <section id="color" className="fnd__section">
          <Eyebrow index="01">Color &amp; skins</Eyebrow>
          <h2 className="display-2 fnd__h">A semantic ramp, not a palette.</h2>
          <p className="prose fnd__p">
            Components never name a hex. They reference roles — surface, ink, border, accent — so the
            same markup holds together across all three skins. <strong>Lab</strong> is paper &amp;
            ink, <strong>Dark</strong> is slate &amp; bone, <strong>Ark</strong> is abyss &amp; gold.
          </p>

          <h3 className="fnd__subhead">Surfaces</h3>
          <div className="swatch-grid">
            {SURFACES.map((s) => (
              <Swatch key={s.v} {...s} dark />
            ))}
          </div>

          <h3 className="fnd__subhead">Text</h3>
          <div className="swatch-grid">
            {TEXT.map((s) => (
              <Swatch key={s.v} {...s} />
            ))}
          </div>

          <h3 className="fnd__subhead">Lines</h3>
          <div className="swatch-grid">
            {LINES.map((s) => (
              <Swatch key={s.v} {...s} />
            ))}
          </div>

          <h3 className="fnd__subhead">Accent &amp; status</h3>
          <div className="swatch-grid">
            <div className="swatch">
              <div className="swatch__chip" style={{ background: "var(--accent)" }} />
              <div className="swatch__meta">
                <span className="swatch__label">Accent</span>
                <code className="swatch__var">--accent</code>
                <span className="swatch__role">The single brand hue — set per skin</span>
              </div>
            </div>
            {STATUS.map((s) => (
              <div className="swatch" key={s.label}>
                <div className="swatch__chip" style={{ background: s.hex }} />
                <div className="swatch__meta">
                  <span className="swatch__label">{s.label}</span>
                  <code className="swatch__var">{s.hex}</code>
                  <span className="swatch__role">{s.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Type */}
        <section id="type" className="fnd__section">
          <Eyebrow index="02">Typography</Eyebrow>
          <h2 className="display-2 fnd__h">Three roles. The pairing is the brand.</h2>
          <p className="prose fnd__p">
            Display for structure, Sans for reading, and a Mono caps layer for eyebrows, specs, and
            metadata — always uppercase with wide tracking. That mono layer is the signature.
          </p>

          <div className="type-specs">
            {TYPE_ROLES.map((t) => (
              <div key={t.role} className="type-spec">
                <div className="type-spec__head">
                  <span className="type-spec__role">{t.role}</span>
                  <span className="type-spec__meta">{t.meta}</span>
                </div>
                <p className={`type-spec__sample ${t.cls}`} style={{ fontFamily: t.font }}>
                  {t.sample}
                </p>
                <span className="type-spec__use">{t.use}</span>
              </div>
            ))}
          </div>

          <h3 className="fnd__subhead">Type scale · T-01 … T-06</h3>
          <div className="fnd__table-wrap">
            <table className="fnd__table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Role</th>
                  <th>Size</th>
                  <th>Tracking</th>
                  <th>Leading</th>
                </tr>
              </thead>
              <tbody>
                {TYPE_SCALE.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <code className="fnd__mono">{r.id}</code>
                    </td>
                    <td>{r.name}</td>
                    <td>
                      <code className="fnd__mono">{r.size}</code>
                    </td>
                    <td>
                      <code className="fnd__mono">{r.tr}</code>
                    </td>
                    <td>
                      <code className="fnd__mono">{r.lh}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Radius */}
        <section id="radius" className="fnd__section">
          <Eyebrow index="03">Radius &amp; shape</Eyebrow>
          <h2 className="display-2 fnd__h">A tight, deliberate radius vocabulary.</h2>
          <p className="prose fnd__p">
            Six radii cover the whole system — don&apos;t invent new ones. Controls are 11px, cards
            16px, panels 18px, and pills fully round.
          </p>
          <div className="radius-grid">
            {RADII.map((r) => (
              <div key={r.v} className="radius-item">
                <div className="radius-item__box" style={{ borderRadius: `var(${r.v})` }} />
                <span className="radius-item__label">{r.label}</span>
                <code className="radius-item__px">{r.px}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Motion */}
        <section id="motion" className="fnd__section">
          <Eyebrow index="04">Motion</Eyebrow>
          <h2 className="display-2 fnd__h">Slow, calm, and always optional.</h2>
          <p className="prose fnd__p">
            Two easings carry every transition — <strong>expo</strong> for entrances and hover-lift,{" "}
            <strong>spring</strong> for toggles and press. Hover and border transitions sit around
            0.2–0.3s, and every motion degrades under reduced-motion.
          </p>
          <MotionLab />
        </section>

        {/* Elevation */}
        <section id="elevation" className="fnd__section">
          <Eyebrow index="05">Elevation &amp; texture</Eyebrow>
          <h2 className="display-2 fnd__h">Soft lift, blueprint grid, film grain.</h2>
          <div className="elev-grid">
            <div className="elev-card" style={{ boxShadow: "var(--sh-card)" }}>
              <span className="elev-card__label">Card lift</span>
              <code className="elev-card__var">--sh-card</code>
            </div>
            <div className="elev-card" style={{ boxShadow: "var(--sh-btn)" }}>
              <span className="elev-card__label">Button glow</span>
              <code className="elev-card__var">--sh-btn</code>
            </div>
            <div className="elev-card alx-grid">
              <span className="elev-card__label">Blueprint grid</span>
              <code className="elev-card__var">.alx-grid</code>
            </div>
          </div>
        </section>

        {/* Tokens */}
        <section id="tokens" className="fnd__section">
          <Eyebrow index="06">Design tokens</Eyebrow>
          <h2 className="display-2 fnd__h">Every value, one source of truth.</h2>
          <p className="prose fnd__p">
            The language ships as CSS custom properties and typed JS tokens. Read a variable in CSS
            (<code className="fnd__mono">var(--surface)</code>) or import the typed token in JS — a{" "}
            <code className="fnd__mono">data-theme</code> swap re-tints everything at runtime.
          </p>
          <div className="token-groups">
            {TOKENS.map((g) => (
              <div key={g.group} className="token-group">
                <span className="token-group__head">{g.group}</span>
                <div className="token-group__list">
                  {g.items.map((t) => (
                    <div key={t} className="token-row">
                      <span
                        className="token-row__chip"
                        style={
                          t.startsWith("--font") || t.startsWith("--ease")
                            ? { background: "var(--surface2)" }
                            : t.startsWith("--radius")
                              ? { background: "var(--accent-soft)" }
                              : { background: `var(${t})` }
                        }
                      />
                      <code className="token-row__name">{t}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* A11y */}
        <section id="a11y" className="fnd__section">
          <Eyebrow index="07">Accessibility</Eyebrow>
          <h2 className="display-2 fnd__h">Accessible by construction.</h2>
          <ul className="fnd__a11y">
            {A11Y.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <div className="fnd__cta">
            <Button asChild size="lg">
              <Link href="/components">
                See it across every component <span aria-hidden>→</span>
              </Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
