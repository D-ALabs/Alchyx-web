import type { ComponentMeta } from "../../registry/types";

export const separatorMeta: ComponentMeta = {
  slug: "separator",
  name: "Separator",
  category: "Data Display",
  summary: "A 1px rule between content — horizontal, vertical, or labelled 'OR'.",
  description:
    "Separator draws a hairline divider between content or groups of controls. It follows the Radix Primitives contract — decorative by default (hidden from assistive tech), or a semantic role=separator with aria-orientation when the rule carries meaning — and adds the Twilio Paste labelled-rule affordance for centred 'OR'-style dividers.",
  tags: ["divider", "separator", "rule", "hr", "line", "or", "horizontal", "vertical", "hairline"],
  lineage: ["Radix Primitives", "Twilio Paste"],
  status: "stable",
  a11y: [
    "Decorative by default: role=\"none\" + aria-hidden so it is skipped by screen readers.",
    "Set decorative={false} to expose a role=\"separator\" with a matching aria-orientation.",
    "The centred label is a visual affordance; keep the separator decorative when the label (e.g. 'OR') is not meaningful to assistive tech.",
    "Draws a 1px --bd rule that adapts across every skin and honours prefers-reduced-motion.",
  ],
  props: [
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      description: "Line direction. Vertical rules stretch to the flex row height.",
    },
    {
      name: "decorative",
      type: "boolean",
      default: "true",
      description: "When true the rule is purely visual and hidden from assistive tech.",
    },
    {
      name: "label",
      type: "React.ReactNode",
      description: "Optional content centred between two rules (horizontal only), e.g. 'OR'.",
    },
  ],
  code: `import { Separator } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Separator />
      <Separator label="OR" />
      <div style={{ display: "flex", alignItems: "center", gap: 12, height: 20 }}>
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>API</span>
      </div>
    </div>
  );
}`,
};

export default separatorMeta;
