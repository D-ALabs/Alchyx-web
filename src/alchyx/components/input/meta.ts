import type { ComponentMeta } from "../../registry/types";

export const inputMeta: ComponentMeta = {
  slug: "input",
  name: "Input",
  category: "Forms",
  summary: "A text field with label, hint, error, and adornments — fully ARIA-wired.",
  description:
    "Input consolidates the Twilio Paste / GitHub Primer field anatomy (label · control · help/error) with shadcn ergonomics. It renders a real <input>; the label, hint, and error are wired with htmlFor, aria-describedby, and aria-invalid via useId, and it accepts leading/trailing adornments.",
  tags: ["text field", "form", "textbox", "label", "error", "validation", "search", "adornment"],
  lineage: ["Twilio Paste", "GitHub Primer", "shadcn/ui"],
  status: "stable",
  a11y: [
    "Label is associated with the control via htmlFor / id (generated with useId).",
    "hint and error are exposed through aria-describedby; error also sets aria-invalid.",
    "Accent focus ring on :focus-within, plus a fault-tinted ring in the invalid state.",
    "Adornments are decorative (leading is aria-hidden) so they never pollute the accessible name.",
  ],
  props: [
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Padding + type scale." },
    { name: "label", type: "ReactNode", description: "Field label rendered above the control." },
    { name: "hint", type: "ReactNode", description: "Helper text, referenced by aria-describedby." },
    { name: "error", type: "ReactNode", description: "Error text; also marks the field invalid." },
    { name: "invalid", type: "boolean", default: "false", description: "Force the invalid styling + aria-invalid." },
    { name: "leading", type: "ReactNode", description: "Adornment inside the control, before the input." },
    { name: "trailing", type: "ReactNode", description: "Adornment inside the control, after the input." },
  ],
  code: `import { Input } from "@alchyx/react";

export function Example() {
  return (
    <Input
      label="Work email"
      placeholder="you@studio.com"
      hint="We'll only use this for the demo invite."
      leading="@"
    />
  );
}`,
};

export default inputMeta;
