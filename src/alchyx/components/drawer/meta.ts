import type { ComponentMeta } from "../../registry/types";

export const drawerMeta: ComponentMeta = {
  slug: "drawer",
  name: "Drawer",
  category: "Overlay",
  summary: "A modal side sheet that slides in from any edge.",
  description:
    "Drawer is a modal side-sheet composite (Drawer · DrawerTrigger · DrawerContent · DrawerHeader · DrawerTitle · DrawerDescription · DrawerFooter · DrawerClose) built on the same Alchyx overlay primitives as Dialog. DrawerContent portals to the body, traps Tab focus, locks background scroll, and dismisses on Escape or outside-press — but anchors to an edge and slides in from left, right, top, or bottom (the Ant Design Drawer / Base UI pattern).",
  tags: ["drawer", "sheet", "side sheet", "panel", "overlay", "modal", "portal", "focus trap"],
  lineage: ["Ant Design", "Base UI", "Radix Primitives"],
  status: "stable",
  a11y: [
    'role="dialog" + aria-modal="true", labelled by DrawerTitle and described by DrawerDescription (ids via useId).',
    "Focus is trapped inside the sheet and restored to the trigger on close (useFocusTrap).",
    "Background scroll is locked with scrollbar-width compensation while open (useScrollLock).",
    "Escape and outside-press dismiss the drawer (useDismissable); the trigger exposes aria-expanded / aria-controls.",
    "Slide-in animation is direction-aware and collapses to a short fade under prefers-reduced-motion.",
  ],
  props: [
    { name: "open", type: "boolean", description: "Controlled open state (on <Drawer>)." },
    { name: "defaultOpen", type: "boolean", default: "false", description: "Initial open state (uncontrolled)." },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Fires with the next open state." },
    {
      name: "side",
      type: '"left" | "right" | "top" | "bottom"',
      default: '"right"',
      description: "Which edge the sheet slides in from (on <DrawerContent>).",
    },
    {
      name: "size",
      type: "number",
      default: "380",
      description: "Sheet thickness in px — width for left/right, height for top/bottom (on <DrawerContent>).",
    },
    { name: "asChild", type: "boolean", default: "false", description: "On Trigger / Close: render the child element instead of a button." },
  ],
  code: `import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from "@alchyx/react";
import { Button } from "@alchyx/react";

export function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open panel</Button>
      </DrawerTrigger>
      <DrawerContent side="right" size={420}>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>Refine the specimens shown in the catalog.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild><Button variant="ghost">Cancel</Button></DrawerClose>
          <DrawerClose asChild><Button>Apply</Button></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
};

export default drawerMeta;
