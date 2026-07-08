import type { ComponentMeta } from "../../registry/types";

export const checkboxMeta: ComponentMeta = {
  slug: "checkbox",
  name: "Checkbox",
  category: "Forms",
  summary: "A custom-styled checkbox with an accent box, spring check, and mixed state.",
  description:
    "Checkbox keeps a real, visually-hidden input[type=checkbox] behind a custom accent box (the Radix Primitives / Base UI approach) so keyboard, focus, and form participation stay native. It is controllable or uncontrolled via useControllableState, springs its check-mark in, and supports an indeterminate / mixed state for select-all trees.",
  tags: ["checkbox", "check", "boolean", "form", "indeterminate", "mixed", "select all", "tick", "control"],
  lineage: ["Radix Primitives", "Base UI", "Ant Design"],
  status: "stable",
  a11y: [
    "Wraps a real <input type=\"checkbox\"> in a <label>, so it is keyboard-operable (Space) and the label text is the accessible name for free.",
    "indeterminate is mirrored onto the input's .indeterminate DOM property, so assistive tech announces the mixed state.",
    "The label region is fully clickable and participates in native forms (name, value, required all pass through).",
    "Visible :focus-visible ring on the box (2px accent outline); the scale-in motion degrades under prefers-reduced-motion.",
  ],
  props: [
    { name: "checked", type: "boolean", description: "Controlled checked state." },
    { name: "defaultChecked", type: "boolean", default: "false", description: "Initial state (uncontrolled)." },
    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Fires with the next value." },
    {
      name: "indeterminate",
      type: "boolean",
      default: "false",
      description: "Show the mixed state (dash) and set the input's .indeterminate.",
    },
    { name: "size", type: '"sm" | "md"', default: '"md"', description: "Box + label scale." },
    { name: "label", type: "ReactNode", description: "Clickable label rendered after the box." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable interaction." },
  ],
  code: `import { Checkbox } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Checkbox defaultChecked label="Email me product updates" />
      <Checkbox indeterminate label="Select all" />
      <Checkbox disabled label="Managed by admin" />
    </div>
  );
}`,
};

export default checkboxMeta;
