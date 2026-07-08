import type { ComponentMeta } from "../../registry/types";

export const radioGroupMeta: ComponentMeta = {
  slug: "radio-group",
  name: "RadioGroup",
  category: "Forms",
  summary: "A single-choice group with roving tabindex and a custom accent dot.",
  description:
    "RadioGroup is a compound component (RadioGroup · RadioGroupItem) following the WAI-ARIA radio-group pattern from Radix Primitives and Base UI. Selection is controllable or uncontrolled via useControllableState, and roving-tabindex keyboard navigation lets the Arrow keys move focus and select the next enabled option in one press.",
  tags: [
    "radio",
    "radio group",
    "radiogroup",
    "choice",
    "single select",
    "option",
    "form",
    "roving tabindex",
  ],
  lineage: ["Radix Primitives", "Base UI"],
  status: "stable",
  a11y: [
    "role=\"radiogroup\" wraps role=\"radio\" items with aria-checked reflecting selection and aria-orientation matching the layout.",
    "Roving tabindex: exactly one item is in the Tab sequence — the checked one, or the first enabled item when nothing is selected.",
    "Arrow keys (Up/Down when vertical, Left/Right when horizontal) plus Home/End move focus and select the next enabled item, wrapping at the ends.",
    "Each item is a real button (Enter / Space select); disabled items are skipped by keyboard and announced.",
    "Keyboard focus shows an accent ring and soft halo on the dot; the fill animation degrades under prefers-reduced-motion.",
  ],
  props: [
    { name: "value", type: "string", description: "Controlled selected value." },
    { name: "defaultValue", type: "string", description: "Initial selected value (uncontrolled)." },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Fires with the newly-selected value.",
    },
    {
      name: "orientation",
      type: '"vertical" | "horizontal"',
      default: '"vertical"',
      description: "Layout and arrow-key axis.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable every item in the group.",
    },
    {
      name: "RadioGroupItem.value",
      type: "string",
      required: true,
      description: "The value this item selects (unique within the group).",
    },
    {
      name: "RadioGroupItem.label",
      type: "ReactNode",
      description: "The visible, accessible label. Falls back to children.",
    },
    {
      name: "RadioGroupItem.disabled",
      type: "boolean",
      default: "false",
      description: "Skip this item in navigation and selection.",
    },
  ],
  code: `import { RadioGroup, RadioGroupItem } from "@alchyx/react";

export function Example() {
  const [plan, setPlan] = React.useState("lab");
  return (
    <RadioGroup value={plan} onValueChange={setPlan}>
      <RadioGroupItem value="lab" label="Lab — the daylight default" />
      <RadioGroupItem value="dark" label="Dark — the low-light workspace" />
      <RadioGroupItem value="ark" label="Ark — the premium skin" />
    </RadioGroup>
  );
}`,
};

export default radioGroupMeta;
