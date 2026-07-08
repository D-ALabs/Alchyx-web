import type { ComponentMeta } from "../../registry/types";

export const badgeMeta: ComponentMeta = {
  slug: "badge",
  name: "Badge",
  category: "Data Display",
  summary: "A small status label — five tones, an optional dot, two sizes.",
  description:
    "Badge is a compact status label / pill. It folds the GitHub Primer Label tones and the Ant Design Tag/Badge API onto the D-ALabs mono-caps chip: pill radius, uppercase Space Mono, and a subtly tinted background mixed (color-mix) from the tone's own colour at low alpha. Supports asChild so it can render as a link or any element.",
  tags: ["badge", "tag", "label", "chip", "pill", "status", "state", "count", "dot"],
  lineage: ["GitHub Primer", "Ant Design"],
  status: "stable",
  a11y: [
    "Renders inert text by default — the tone is a visual cue, so keep the label meaningful on its own.",
    "The leading dot is decorative and marked aria-hidden; it never carries meaning screen readers would miss.",
    "Every tone mixes its text colour toward --ink so it stays legible across the Lab / Dark / Ark skins.",
    "asChild forwards the child's semantics (e.g. an <a>) and shows a :focus-visible ring when the badge becomes interactive.",
  ],
  props: [
    {
      name: "variant",
      type: '"neutral" | "accent" | "signal" | "caution" | "fault"',
      default: '"neutral"',
      description: "Semantic tone; signal / caution / fault map to the fixed status hues.",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      default: '"md"',
      description: "Compact or default padding and type scale.",
    },
    {
      name: "dot",
      type: "boolean",
      default: "false",
      description: "Show a leading status dot in the badge's tone (decorative).",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render the single child element (merging props + ref) instead of a <span>.",
    },
  ],
  code: `import { Badge } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge variant="signal" dot>Live</Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="caution">Beta</Badge>
      <Badge variant="fault">Deprecated</Badge>
      <Badge>Draft</Badge>
    </div>
  );
}`,
};

export default badgeMeta;
