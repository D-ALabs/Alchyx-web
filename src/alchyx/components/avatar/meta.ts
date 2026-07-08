import type { ComponentMeta } from "../../registry/types";

export const avatarMeta: ComponentMeta = {
  slug: "avatar",
  name: "Avatar",
  category: "Data Display",
  summary: "Circular identity chip with initials fallback, presence dot, and overlap stacking.",
  description:
    "Avatar draws the GitHub Primer / Fluent UI presence anatomy — a circular image that falls back to initials from the name when no source loads or the image errors — plus an optional corner status dot. AvatarGroup overlaps its children into an Ant Design–style stack, collapsing the remainder into a '+N' bubble when max is set.",
  tags: [
    "avatar",
    "profile",
    "user",
    "identity",
    "initials",
    "presence",
    "status",
    "group",
    "stack",
    "picture",
  ],
  lineage: ["GitHub Primer", "Fluent UI", "Ant Design"],
  status: "stable",
  a11y: [
    "Each avatar is role=\"img\" with an aria-label from name; the status dot's label is appended so presence is announced.",
    "The <img> is marked decorative (alt=\"\") since the wrapper already carries the accessible name, avoiding a double announcement.",
    "Initials render from name when src is missing or fails to load (tracked via onError), so an avatar is never blank.",
    "The '+N' overflow avatar is labelled 'N more'; :focus-visible shows a 2px accent ring when made interactive.",
  ],
  props: [
    {
      name: "src",
      type: "string",
      description: "Image URL. When omitted or it fails to load, initials from name show instead.",
    },
    {
      name: "name",
      type: "string",
      required: true,
      description: "Accessible label and source of the initials fallback.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Diameter and type scale.",
    },
    {
      name: "status",
      type: '"signal" | "caution" | "fault"',
      description: "Presence dot rendered in the lower-right corner.",
    },
    {
      name: "statusLabel",
      type: "string",
      description: "Accessible label for the status dot. Defaults to the capitalized status token.",
    },
    {
      name: "max",
      type: "number",
      description: "AvatarGroup: max avatars to show before the remainder collapses into '+N'.",
    },
  ],
  code: `import { Avatar, AvatarGroup } from "@alchyx/react";

export function Example() {
  return (
    <AvatarGroup max={3}>
      <Avatar name="Ada Lovelace" status="signal" />
      <Avatar name="Grace Hopper" />
      <Avatar name="Alan Turing" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Radia Perlman" />
    </AvatarGroup>
  );
}`,
};

export default avatarMeta;
