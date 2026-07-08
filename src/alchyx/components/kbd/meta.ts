import type { ComponentMeta } from "../../registry/types";

export const kbdMeta: ComponentMeta = {
  slug: "kbd",
  name: "Kbd",
  category: "Data Display",
  summary: "A printed keyboard key for documenting shortcuts.",
  description:
    "Kbd renders a semantic <kbd> element styled as a physical keycap — mono caps on a translucent inset well with a hairline border and a subtle inset shadow. Modeled on GitHub Primer's Kbd. Compose multi-key shortcuts by placing several keys side by side with a separator.",
  tags: ["keyboard", "key", "shortcut", "hotkey", "keycap", "kbd", "command", "combo"],
  lineage: ["GitHub Primer"],
  status: "stable",
  a11y: [
    "Renders a native <kbd> element — the semantic HTML for keyboard / user input — so assistive tech announces it as entered text.",
    "Presentational and not focusable by default; a :focus-visible accent ring is provided for cases where it is made focusable.",
    "Pair symbol keys (⌘, ⇧, ↵) with a readable label in surrounding prose so the shortcut is clear to screen-reader users.",
  ],
  props: [
    {
      name: "size",
      type: '"sm" | "md"',
      default: '"md"',
      description: "Cap size — `sm` sits inline in prose, `md` stands alone in shortcut rows.",
    },
  ],
  code: `import { Kbd } from "@alchyx/react";

export function Example() {
  return (
    <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
      Press <Kbd>⌘</Kbd> <span aria-hidden>+</span> <Kbd>K</Kbd> to open the command menu.
    </p>
  );
}`,
};

export default kbdMeta;
