import type { ComponentMeta } from "../../registry/types";

export const progressMeta: ComponentMeta = {
  slug: "progress",
  name: "Progress",
  category: "Feedback",
  summary: "A linear progress bar — determinate fill or an indeterminate sweep.",
  description:
    "Progress consolidates the Radix Primitives value / max model, the Fluent UI determinate vs. indeterminate split, and Ant Design's labelled percentage. It renders role=\"progressbar\" with aria-valuemin / valuemax / valuenow wired up, an accent fill on a surface2 pill track, and an indeterminate sweep that pauses under reduced-motion.",
  tags: ["progress", "progressbar", "loading", "bar", "determinate", "indeterminate", "percentage", "feedback"],
  lineage: ["Radix Primitives", "Fluent UI", "Ant Design"],
  status: "stable",
  a11y: [
    "Renders role=\"progressbar\" with aria-valuemin=0, aria-valuemax, and aria-valuenow reflecting the clamped value.",
    "aria-valuenow is omitted while indeterminate so assistive tech announces an unbounded busy state.",
    "aria-valuetext exposes the human-readable percentage; a supplied label is linked via aria-labelledby.",
    "The indeterminate sweep pauses under prefers-reduced-motion and the fill's width transition is disabled.",
  ],
  props: [
    { name: "value", type: "number", default: "0", description: "Current value on the 0…max scale (ignored while indeterminate)." },
    { name: "max", type: "number", default: "100", description: "Upper bound of the scale." },
    { name: "indeterminate", type: "boolean", default: "false", description: "Animate an unbounded sweep instead of a measured fill." },
    { name: "size", type: '"sm" | "md"', default: '"md"', description: "Bar thickness." },
    { name: "label", type: "ReactNode", description: "Optional caption rendered above the bar with a live percentage." },
  ],
  code: `import { Progress } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Progress value={68} label="Uploading dataset" />
      <Progress indeterminate label="Syncing" />
    </div>
  );
}`,
};

export default progressMeta;
