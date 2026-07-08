import type { ComponentMeta } from "../../registry/types";

export const dialogMeta: ComponentMeta = {
  slug: "dialog",
  name: "Dialog",
  category: "Overlay",
  summary: "A modal overlay that portals, traps focus, and locks scroll.",
  description:
    "Dialog is a modal composite (Dialog · DialogTrigger · DialogContent · DialogTitle · DialogDescription · DialogClose) built on the Alchyx behavior primitives. DialogContent portals to the body, traps Tab focus, locks background scroll, and dismisses on Escape or outside-press — the full Radix / Base UI modal contract.",
  tags: ["modal", "dialog", "overlay", "popup", "focus trap", "portal"],
  lineage: ["Radix Primitives", "Base UI", "Ant Design"],
  status: "stable",
  a11y: [
    "role=\"dialog\" + aria-modal=\"true\", labelled by DialogTitle and described by DialogDescription (ids via useId).",
    "Focus is trapped inside the panel and restored to the trigger on close (useFocusTrap).",
    "Background scroll is locked with scrollbar-width compensation while open (useScrollLock).",
    "Escape and outside-press dismiss the dialog (useDismissable); the trigger exposes aria-expanded / aria-controls.",
  ],
  props: [
    { name: "open", type: "boolean", description: "Controlled open state (on <Dialog>)." },
    { name: "defaultOpen", type: "boolean", default: "false", description: "Initial open state (uncontrolled)." },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Fires with the next open state." },
    { name: "width", type: "number", default: "520", description: "Max panel width in px (on <DialogContent>)." },
    { name: "asChild", type: "boolean", default: "false", description: "On Trigger / Close: render the child element instead of a button." },
  ],
  code: `import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "@alchyx/react";
import { Button } from "@alchyx/react";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Request a demo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a demo</DialogTitle>
          <DialogDescription>We'll reach out within one business day.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
          <DialogClose asChild><Button>Send request</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
};

export default dialogMeta;
