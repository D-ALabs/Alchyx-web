import type { ComponentMeta } from "../../registry/types";

export const cardMeta: ComponentMeta = {
  slug: "card",
  name: "Card",
  category: "Data Display",
  summary: "A surface for grouping content — header, title, description, content, footer.",
  description:
    "Card is a compound surface that groups related content on a --surface panel with the D-ALabs 16px card radius. It borrows the shadcn/ui slot anatomy (CardHeader, CardTitle, CardDescription, CardContent, CardFooter) and the Twilio Paste card ergonomics. Set `interactive` to turn the whole surface into a focusable hover target, and `asChild` to render it as a link.",
  tags: ["card", "surface", "panel", "container", "tile", "compound", "interactive", "asChild"],
  lineage: ["shadcn/ui", "Twilio Paste"],
  status: "stable",
  recipe: "CD-01",
  a11y: [
    "CardTitle renders a real <h3>, giving the card a proper heading in the document outline.",
    "The slot parts add no roles of their own, so the semantics of the content you place inside stay yours.",
    "interactive cards become keyboard-focusable (tabIndex 0) and show a visible :focus-visible ring; use asChild to wrap a real <a>/<button> for correct activation semantics.",
    "The hover lift respects prefers-reduced-motion.",
  ],
  props: [
    {
      name: "interactive",
      type: "boolean",
      default: "false",
      description: "Add a pointer cursor, hover lift + shadow, and a keyboard focus ring.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render the single child element (merging props + ref) instead of a <div>.",
    },
  ],
  code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@alchyx/react";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deploy preview</CardTitle>
        <CardDescription>Pushed to alchyx-web · 2 min ago</CardDescription>
      </CardHeader>
      <CardContent>
        Every push spins up a throwaway URL so reviewers can click through the change before it merges.
      </CardContent>
      <CardFooter>
        <Button size="sm">Visit preview →</Button>
      </CardFooter>
    </Card>
  );
}`,
};

export default cardMeta;
