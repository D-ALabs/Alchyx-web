import type { ComponentMeta } from "../../registry/types";

export const tagMeta: ComponentMeta = {
  slug: "tag",
  name: "Tag",
  category: "Data Display",
  summary: "A compact, removable chip for filters, categories, and selections.",
  description:
    "Tag consolidates the Ant Design closable Tag API with the Twilio Paste Chip dismiss ergonomics on the D-ALabs pill language. Supply onRemove to render a trailing close button with an accessible name, and leading for a status dot or icon.",
  tags: ["chip", "token", "pill", "filter", "label", "badge", "removable", "closable", "dismiss"],
  lineage: ["Ant Design", "Twilio Paste"],
  status: "stable",
  a11y: [
    "The remove affordance is a real <button> that is keyboard-activatable with Enter and Space.",
    "The remove button carries an accessible name (defaults to `Remove <label>`, overridable via removeLabel).",
    "Clicking remove stops propagation so a selectable tag's own onClick does not also fire.",
    "Visible :focus-visible ring (2px accent) on the remove button and on the tag when made focusable.",
    "Leading adornments are marked aria-hidden so decorative icons or dots are not announced.",
  ],
  props: [
    {
      name: "variant",
      type: '"neutral" | "accent"',
      default: '"neutral"',
      description: "Visual style. `accent` tints the chip with the single brand accent.",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      default: '"md"',
      description: "Controls padding and type scale.",
    },
    {
      name: "onRemove",
      type: "(event: React.MouseEvent<HTMLButtonElement>) => void",
      description: "When provided, renders a trailing close button that fires this on dismiss.",
    },
    {
      name: "leading",
      type: "React.ReactNode",
      description: "Decorative adornment rendered before the label (e.g. a status dot or icon).",
    },
    {
      name: "removeLabel",
      type: "string",
      default: '"Remove <label>"',
      description: "Accessible name for the remove button. Falls back to `Remove <label>`.",
    },
  ],
  code: `import { Tag } from "@alchyx/react";

export function Example() {
  const [tags, setTags] = React.useState(["Design", "Research", "Motion"]);
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {tags.map((t) => (
        <Tag key={t} onRemove={() => setTags((prev) => prev.filter((x) => x !== t))}>
          {t}
        </Tag>
      ))}
      <Tag variant="accent">Live</Tag>
    </div>
  );
}`,
};

export default tagMeta;
