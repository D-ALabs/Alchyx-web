import type { ComponentMeta } from "../../registry/types";

export const switchMeta: ComponentMeta = {
  slug: "switch",
  name: "Switch",
  category: "Forms",
  summary: "A controllable on/off toggle with a spring knob and role=switch.",
  description:
    "Switch follows the Radix / Base UI switch pattern: a real button with role=\"switch\" and aria-checked, controllable or uncontrolled through useControllableState. The knob rides the Alchyx spring easing and turns accent when on.",
  tags: ["toggle", "switch", "on off", "boolean", "checked", "setting"],
  lineage: ["Radix Primitives", "Base UI", "Ant Design"],
  status: "stable",
  a11y: [
    "Renders a native button with role=\"switch\" and aria-checked reflecting state.",
    "Keyboard-operable (Enter / Space) as a real button; disabled state is announced.",
    "When a label is supplied it is linked via aria-labelledby.",
    "Focus ring appears on the track for :focus-visible; motion degrades under reduced-motion.",
  ],
  props: [
    { name: "checked", type: "boolean", description: "Controlled checked state." },
    { name: "defaultChecked", type: "boolean", default: "false", description: "Initial state (uncontrolled)." },
    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Fires with the next value." },
    { name: "size", type: '"sm" | "md"', default: '"md"', description: "Knob + track scale." },
    { name: "label", type: "ReactNode", description: "Optional inline label after the track." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable interaction." },
  ],
  code: `import { Switch } from "@alchyx/react";

export function Example() {
  return <Switch defaultChecked label="Enable reduced motion" />;
}`,
};

export default switchMeta;
