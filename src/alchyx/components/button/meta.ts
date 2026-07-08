import type { ComponentMeta } from "../../registry/types";

export const buttonMeta: ComponentMeta = {
  slug: "button",
  name: "Button",
  category: "Actions",
  summary: "The workhorse action — one accent, five variants, three sizes.",
  description:
    "Button consolidates the shadcn variant/size API, the Twilio Paste / Meta Astryx ergonomics, and the D-ALabs BT-01…BT-05 recipes. It supports asChild (Radix Slot) so it can render as a link or any element, plus a loading state that marks the control busy and disabled.",
  tags: ["action", "cta", "link", "submit", "loading", "primary", "secondary", "ghost", "asChild"],
  lineage: ["shadcn/ui", "Twilio Paste", "Meta Astryx", "Radix Primitives"],
  status: "stable",
  recipe: "BT-01…BT-05",
  a11y: [
    "Renders a native <button> with type=\"button\" by default; keyboard-activatable with Enter and Space.",
    "loading sets aria-busy and disables the control so it cannot be double-submitted.",
    "Visible :focus-visible ring (2px accent outline) for keyboard users.",
    "asChild forwards the accessible role of the child element (e.g. a link) and mirrors the disabled state via aria-disabled.",
  ],
  props: [
    {
      name: "variant",
      type: '"primary" | "secondary" | "ghost" | "inverse" | "link"',
      default: '"primary"',
      description: "Visual style. `inverse` is tuned for deep / dark bands.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Controls padding and type scale.",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description: "Show a spinner and mark the control busy + disabled.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Stretch to the container width.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render the single child element (merging props + ref) instead of a <button>.",
    },
  ],
  code: `import { Button } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button>Request a demo →</Button>
      <Button variant="secondary">View our work</Button>
      <Button variant="ghost">Learn more</Button>
    </div>
  );
}`,
};

export default buttonMeta;
