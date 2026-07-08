import type { ComponentMeta } from "../../registry/types";

export const iconButtonMeta: ComponentMeta = {
  slug: "icon-button",
  name: "IconButton",
  category: "Actions",
  summary: "A square, icon-only action that always carries an accessible name.",
  description:
    "IconButton mirrors Button's primary / secondary / ghost looks in a square box with equal padding and the control radius. Following the GitHub Primer and Fluent UI convention, it *requires* a label: the string is announced to assistive tech via VisuallyHidden and mirrored onto aria-label, so the control is never nameless. Supports asChild (Slot) to render as a link or any element.",
  tags: [
    "icon",
    "icon button",
    "action",
    "toolbar",
    "square",
    "aria-label",
    "accessible name",
    "primary",
    "secondary",
    "ghost",
    "asChild",
  ],
  lineage: ["GitHub Primer", "Fluent UI"],
  status: "stable",
  a11y: [
    "Requires a `label` prop — rendered as VisuallyHidden text and mirrored onto aria-label so the icon-only control always has an accessible name.",
    "The glyph is marked aria-hidden so the name is announced exactly once.",
    "Renders a native <button> with type=\"button\" by default; activatable with Enter and Space.",
    "Visible :focus-visible ring (2px accent outline) for keyboard users.",
    "asChild forwards the child element's role (e.g. a link) and mirrors the disabled state via aria-disabled.",
  ],
  props: [
    {
      name: "label",
      type: "string",
      description: "Accessible name for the icon-only control (VisuallyHidden text + aria-label).",
      required: true,
    },
    {
      name: "variant",
      type: '"primary" | "secondary" | "ghost"',
      default: '"secondary"',
      description: "Visual style, mirroring Button's fills.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Square control size (34 / 44 / 52px).",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Render the single child element (merging props + ref) instead of a <button>.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The icon glyph (decorative — the accessible name comes from `label`).",
      required: true,
    },
  ],
  code: `import { IconButton } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <IconButton label="Search">⌕</IconButton>
      <IconButton label="More options" variant="ghost">⋯</IconButton>
      <IconButton label="Close" variant="primary">✕</IconButton>
    </div>
  );
}`,
};

export default iconButtonMeta;
