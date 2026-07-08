import type { ComponentMeta } from "../../registry/types";

export const accordionMeta: ComponentMeta = {
  slug: "accordion",
  name: "Accordion",
  category: "Navigation",
  summary: "A disclosure list — single or multiple panels, a rotating chevron, keyboard nav.",
  description:
    "Accordion is a disclosure composite in the Radix Primitives / Base UI shape, with Ant Design's single and multiple accordion modes. Each item pairs a heading-wrapped trigger with a labelled region; single mode can be collapsible, and the whole set is controllable or uncontrolled via value / defaultValue / onValueChange.",
  tags: [
    "accordion",
    "disclosure",
    "collapse",
    "expander",
    "faq",
    "details",
    "summary",
    "navigation",
    "single",
    "multiple",
  ],
  lineage: ["Radix Primitives", "Base UI", "Ant Design"],
  status: "stable",
  a11y: [
    "Each trigger is a native <button> inside a heading element, exposing aria-expanded and aria-controls pointing at its region.",
    'Content is role="region" labelled by its trigger and hidden from the accessibility tree while collapsed.',
    "Enter and Space toggle the focused item; ArrowUp / ArrowDown (plus Home / End) move focus between headers.",
    "Visible :focus-visible ring for keyboard users and a reveal that degrades under prefers-reduced-motion.",
  ],
  props: [
    {
      name: "type",
      type: '"single" | "multiple"',
      default: '"single"',
      description: "Whether one item or many can be open at once.",
    },
    {
      name: "collapsible",
      type: "boolean",
      default: "false",
      description: "In single mode, allow closing the open item so none is open.",
    },
    {
      name: "value",
      type: "string | string[]",
      description: "Controlled open value(s) — a string in single mode, a string[] in multiple.",
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      description: "Initially open value(s) when uncontrolled.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void | (value: string[]) => void",
      description: "Fires with the next open value(s), matching the current type.",
    },
  ],
  code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@alchyx/react";

export function Example() {
  return (
    <Accordion type="single" collapsible defaultValue="what">
      <AccordionItem value="what">
        <AccordionTrigger>What is Alchyx?</AccordionTrigger>
        <AccordionContent>
          One coherent, accessible React + TypeScript design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="theming">
        <AccordionTrigger>How does theming work?</AccordionTrigger>
        <AccordionContent>
          Every component reads CSS variables, so one attribute re-tints the tree.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
};

export default accordionMeta;
