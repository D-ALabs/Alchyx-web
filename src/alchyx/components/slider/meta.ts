import type { ComponentMeta } from "../../registry/types";

export const sliderMeta: ComponentMeta = {
  slug: "slider",
  name: "Slider",
  category: "Forms",
  summary: "A single-thumb range slider with click, drag, and full keyboard control.",
  description:
    "Slider follows the Radix Primitives / Base UI slider pattern: the thumb carries role=\"slider\" and the aria-value* trio, while the track supports click and pointer drag. Values are controllable or uncontrolled through useControllableState and are always snapped to step and clamped into [min, max].",
  tags: ["slider", "range", "volume", "value", "track", "thumb", "input", "drag"],
  lineage: ["Radix Primitives", "Base UI"],
  status: "stable",
  a11y: [
    "Thumb exposes role=\"slider\" with aria-valuemin / aria-valuemax / aria-valuenow and aria-orientation.",
    "Full keyboard model: Arrow keys step by `step`, PageUp / PageDown by a larger step, Home / End jump to min / max.",
    "Name the control with aria-label or aria-labelledby; disabled removes the thumb from the tab order and sets aria-disabled.",
    "Accent focus halo on :focus-visible; pointer motion degrades under prefers-reduced-motion.",
  ],
  props: [
    { name: "value", type: "number", description: "Controlled value." },
    { name: "defaultValue", type: "number", default: "min", description: "Initial value (uncontrolled)." },
    { name: "onValueChange", type: "(value: number) => void", description: "Fires with the next snapped, clamped value." },
    { name: "min", type: "number", default: "0", description: "Lower bound." },
    { name: "max", type: "number", default: "100", description: "Upper bound." },
    { name: "step", type: "number", default: "1", description: "Granularity the value snaps to." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable interaction and remove the thumb from the tab order." },
    { name: "aria-label", type: "string", description: "Accessible name for the thumb when no visible label is linked." },
  ],
  code: `import * as React from "react";
import { Slider } from "@alchyx/react";

export function Example() {
  const [volume, setVolume] = React.useState(64);
  return (
    <Slider aria-label="Volume" value={volume} onValueChange={setVolume} />
  );
}`,
};

export default sliderMeta;
