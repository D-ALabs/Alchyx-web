import type { ComponentMeta } from "../../registry/types";

export const spinnerMeta: ComponentMeta = {
  slug: "spinner",
  name: "Spinner",
  category: "Feedback",
  summary: "An indeterminate loading ring — three sizes, announced politely.",
  description:
    "Spinner is an indeterminate loading indicator: an accent ring with a transparent top segment spun on the global alx-spin keyframe. It folds the Fluent UI Spinner sizing and the Twilio Paste role=\"status\" live-region pattern onto the D-ALabs accent language, and slows its rotation under reduced-motion.",
  tags: ["spinner", "loading", "loader", "busy", "progress", "indeterminate", "status", "activity"],
  lineage: ["Fluent UI", "Twilio Paste"],
  status: "stable",
  a11y: [
    "Renders role=\"status\" with aria-live=\"polite\" so screen readers announce that content is loading without stealing focus.",
    "The label (default \"Loading\") is exposed through a visually-hidden node, giving the spinner an accessible name without adding visible copy.",
    "The rotating ring is decorative and marked aria-hidden.",
    "Rotation slows under prefers-reduced-motion: reduce rather than stopping, so the busy state stays legible.",
  ],
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Diameter and stroke width of the ring.",
    },
    {
      name: "label",
      type: "string",
      default: '"Loading"',
      description: "Screen-reader text, rendered visually hidden inside the live region.",
    },
  ],
  code: `import { Spinner } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <Spinner size="sm" label="Saving" />
        Saving…
      </span>
    </div>
  );
}`,
};

export default spinnerMeta;
