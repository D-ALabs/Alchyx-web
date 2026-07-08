import type { ComponentMeta } from "../../registry/types";

export const textareaMeta: ComponentMeta = {
  slug: "textarea",
  name: "Textarea",
  category: "Forms",
  summary: "A multiline text field with label, hint, error, and optional auto-resize.",
  description:
    "Textarea mirrors Input's field anatomy (label · control · help/error) from Twilio Paste and shadcn/ui, rendering a real <textarea> wired with aria-invalid and aria-describedby via useId. Its autoResize mode grows the control to fit its content, measuring scrollHeight on input and on mount.",
  tags: ["textarea", "multiline", "form", "message", "comment", "label", "error", "validation", "autoresize"],
  lineage: ["Twilio Paste", "shadcn/ui"],
  status: "stable",
  a11y: [
    "Label is associated with the control via htmlFor / id (generated with useId).",
    "hint and error are exposed through aria-describedby; error also sets aria-invalid.",
    "Accent focus ring on :focus-within, plus a fault-tinted ring in the invalid state.",
    "autoResize is a purely visual affordance — it never changes the control's semantics or value.",
  ],
  props: [
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Padding + type scale." },
    { name: "label", type: "ReactNode", description: "Field label rendered above the control." },
    { name: "hint", type: "ReactNode", description: "Helper text, referenced by aria-describedby." },
    { name: "error", type: "ReactNode", description: "Error text; also marks the field invalid." },
    { name: "invalid", type: "boolean", default: "false", description: "Force the invalid styling + aria-invalid." },
    {
      name: "autoResize",
      type: "boolean",
      default: "false",
      description: "Grow the textarea to fit its content instead of scrolling.",
    },
  ],
  code: `import { Textarea } from "@alchyx/react";

export function Example() {
  return (
    <Textarea
      label="Message"
      placeholder="Tell us about your project…"
      hint="A sentence or two is plenty — we'll follow up."
      autoResize
    />
  );
}`,
};

export default textareaMeta;
