import type { ComponentMeta } from "../../registry/types";

export const segmentedControlMeta: ComponentMeta = {
  slug: "segmented-control",
  name: "SegmentedControl",
  category: "Actions",
  summary: "A single-select segment switcher — one accent-filled pill on a track.",
  description:
    "SegmentedControl is a compound, mutually-exclusive picker (a view / skin switcher) built on the WAI-ARIA radiogroup pattern, following Fluent UI, Ant Design, and Meta Astryx. The root is role=\"radiogroup\" and each item is role=\"radio\" with aria-checked; a roving tabindex plus Arrow / Home / End keys move focus while Enter / Space commit the choice. Controllable via value / defaultValue / onValueChange.",
  tags: [
    "segmented",
    "segmented control",
    "toggle group",
    "single select",
    "radiogroup",
    "view switcher",
    "skin switcher",
    "tabs",
    "choice",
  ],
  lineage: ["Fluent UI", "Ant Design", "Meta Astryx"],
  status: "stable",
  a11y: [
    "Root renders role=\"radiogroup\"; each segment is a role=\"radio\" button with aria-checked reflecting the selection.",
    "Roving tabindex keeps a single tab stop; Arrow Left/Right/Up/Down and Home/End move focus, skipping disabled segments.",
    "Enter, Space, or click commit the selection (manual activation) so a view is never loaded merely by arrowing past it.",
    "Visible :focus-visible ring (2px accent outline) for keyboard users; motion degrades under prefers-reduced-motion.",
    "Pass aria-label (or aria-labelledby) on the root to name the group.",
  ],
  props: [
    {
      name: "value",
      type: "string",
      description: "Controlled selected value.",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "Initial selected value when uncontrolled.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Fires with the newly-selected value.",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      default: '"md"',
      description: "Padding and type scale of the segments.",
    },
  ],
  code: `import { SegmentedControl, SegmentedControlItem } from "@alchyx/react";
import { useState } from "react";

export function Example() {
  const [view, setView] = useState("grid");
  return (
    <SegmentedControl value={view} onValueChange={setView} aria-label="View">
      <SegmentedControlItem value="grid">Grid</SegmentedControlItem>
      <SegmentedControlItem value="list">List</SegmentedControlItem>
      <SegmentedControlItem value="board">Board</SegmentedControlItem>
    </SegmentedControl>
  );
}`,
};

export default segmentedControlMeta;
