import type { ComponentMeta } from "../../registry/types";

export const dropdownMenuMeta: ComponentMeta = {
  slug: "dropdown-menu",
  name: "DropdownMenu",
  category: "Navigation",
  summary: "A menu button plus a popup menu of actions, positioned under the trigger.",
  description:
    "DropdownMenu is a compound menu (DropdownMenu · DropdownMenuTrigger · DropdownMenuContent · DropdownMenuItem · DropdownMenuSeparator · DropdownMenuLabel) built on the Alchyx behavior primitives, following the Radix Primitives / Base UI menu contract. The content portals to the body, positions itself under the trigger's start edge, roves focus with the arrow keys, and dismisses on Escape or outside-press.",
  tags: ["menu", "dropdown", "popup", "actions", "context menu", "overflow", "kebab", "popover"],
  lineage: ["Radix Primitives", "Base UI"],
  status: "stable",
  a11y: [
    "Trigger exposes aria-haspopup=\"menu\", aria-expanded, and aria-controls (ids via useId); content is role=\"menu\" labelled by the trigger.",
    "Arrow Up / Down move focus among enabled items (wrapping); Home / End jump to the first / last item.",
    "Enter / Space select the focused item, then close the menu and restore focus to the trigger.",
    "Escape closes and returns focus to the trigger; Tab closes; outside-press dismisses (useDismissable). Disabled items are inert and skipped.",
  ],
  props: [
    { name: "open", type: "boolean", description: "Controlled open state (on <DropdownMenu>)." },
    {
      name: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "Initial open state (uncontrolled).",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Fires with the next open state.",
    },
    {
      name: "onSelect",
      type: "() => void",
      description: "On <DropdownMenuItem>: fires when the item is activated, then the menu closes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "On <DropdownMenuItem>: make the item inert and skip it during arrow navigation.",
    },
    {
      name: "sideOffset",
      type: "number",
      default: "6",
      description: "On <DropdownMenuContent>: gap in px between the trigger and the menu.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "On <DropdownMenuTrigger>: render the child element instead of a <button>.",
    },
  ],
  code: `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
} from "@alchyx/react";
import { Button } from "@alchyx/react";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Actions ▾</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Workspace</DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => console.log("rename")}>Rename</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("duplicate")}>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Archive (soon)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
};

export default dropdownMenuMeta;
