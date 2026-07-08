"use client";

import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from ".";
import {
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

type AccordionType = "single" | "multiple";

const FAQ: { value: string; q: string; a: string }[] = [
  {
    value: "what",
    q: "What is Alchyx?",
    a: "Alchyx is D-ALabs' ultimate design system — one coherent, accessible React + TypeScript library built on the Lab / Dark / Ark design language.",
  },
  {
    value: "theming",
    q: "How does theming work?",
    a: "Every component reads CSS variables, so flipping one data-theme attribute on the root re-tints the entire tree — no per-skin overrides required.",
  },
  {
    value: "a11y",
    q: "Is it accessible out of the box?",
    a: "Yes. Each component follows the matching WAI-ARIA pattern with full keyboard support, focus management, and prefers-reduced-motion handling.",
  },
];

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <Accordion type="single" collapsible defaultValue="ship" style={{ maxWidth: 320 }}>
      <AccordionItem value="ship">
        <AccordionTrigger>Free shipping?</AccordionTrigger>
        <AccordionContent>Yes — on every order over $50.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Returns policy</AccordionTrigger>
        <AccordionContent>30-day, no-questions returns.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>Need help?</AccordionTrigger>
        <AccordionContent>Our team replies within a day.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [type, setType] = React.useState<AccordionType>("single");
  const [collapsible, setCollapsible] = React.useState(true);

  const items = FAQ.map(({ value, q, a }) => (
    <AccordionItem key={value} value={value}>
      <AccordionTrigger>{q}</AccordionTrigger>
      <AccordionContent>{a}</AccordionContent>
    </AccordionItem>
  ));

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice
          label="Type"
          value={type}
          options={["single", "multiple"] as const}
          onChange={setType}
        />
        {type === "single" ? (
          <DemoToggle label="Collapsible" checked={collapsible} onChange={setCollapsible} />
        ) : null}
      </DemoControls>

      <DemoStack gap={12}>
        <DemoNote>FAQ · {type === "single" ? "one panel at a time" : "many panels at once"}</DemoNote>
        {type === "single" ? (
          <Accordion type="single" collapsible={collapsible} defaultValue="what">
            {items}
          </Accordion>
        ) : (
          <Accordion type="multiple" defaultValue={["what", "a11y"]}>
            {items}
          </Accordion>
        )}
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Multiple · two panels open, one disabled</DemoNote>
        <Accordion type="multiple" defaultValue={["shipping", "returns"]}>
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping &amp; delivery</AccordionTrigger>
            <AccordionContent>Free standard shipping on orders over $50, worldwide.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger>Returns &amp; refunds</AccordionTrigger>
            <AccordionContent>Send anything back within 30 days for a full refund.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="warranty" disabled>
            <AccordionTrigger>Warranty (coming soon)</AccordionTrigger>
            <AccordionContent>Extended warranty details will land here shortly.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoStack>
    </DemoStack>
  );
}
