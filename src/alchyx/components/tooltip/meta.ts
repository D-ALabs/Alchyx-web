import type { ComponentMeta } from "../../registry/types";

export const tooltipMeta: ComponentMeta = {
  slug: "tooltip",
  name: "Tooltip",
  category: "Overlay",
  summary: "A hover + focus hint that anchors a deep-band bubble to any side.",
  description:
    "Tooltip follows the Radix Primitives / Base UI pattern: it wraps a single trigger, reveals a small deep-band bubble after a delay on hover or keyboard focus, and dismisses on leave, blur, or Escape. The bubble is linked to the trigger with aria-describedby so assistive tech announces it, and it anchors to one side via transforms with no collision flipping.",
  tags: ["tooltip", "hint", "popover", "hover", "overlay", "describedby", "tip"],
  lineage: ["Radix Primitives", "Base UI"],
  status: "stable",
  a11y: [
    "The bubble carries role=\"tooltip\" and is linked to the trigger via aria-describedby (useId), so screen readers announce it on focus.",
    "Opens on both pointer hover and keyboard focus; closes on mouse leave, blur, or Escape.",
    "The trigger keeps its native focus ring; the bubble is pointer-events:none and never traps focus.",
    "Fade / slide honors prefers-reduced-motion — it fades only, with no travel.",
  ],
  props: [
    {
      name: "content",
      type: "React.ReactNode",
      description: "The tip's message, shown in the bubble and wired via aria-describedby.",
      required: true,
    },
    {
      name: "children",
      type: "React.ReactElement",
      description: "The single trigger element. Cloned to attach hover / focus handlers.",
      required: true,
    },
    {
      name: "side",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Which edge of the trigger the bubble anchors to. No collision flipping.",
    },
    {
      name: "delay",
      type: "number",
      default: "200",
      description: "Milliseconds to wait after hover / focus before showing the bubble.",
    },
  ],
  code: `import { Tooltip, Button } from "@alchyx/react";

export function Example() {
  return (
    <Tooltip content="Copied to clipboard" side="top">
      <Button variant="secondary">Copy link</Button>
    </Tooltip>
  );
}`,
};

export default tooltipMeta;
