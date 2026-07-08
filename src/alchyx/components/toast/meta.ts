import type { ComponentMeta } from "../../registry/types";

export const toastMeta: ComponentMeta = {
  slug: "toast",
  name: "Toast",
  category: "Overlay",
  summary: "Transient notifications that queue bottom-right and auto-dismiss.",
  description:
    "Toast is an imperative notification system: ToastProvider keeps the queue in state and renders a portalled viewport pinned to the bottom-right, while useToast() returns { toast, dismiss }. It consolidates the Radix Primitives imperative model, the Sonner queue and auto-dismiss ergonomics, and the Fluent UI status ramp — each toast is a live region with a status accent and a slide+fade that degrades under reduced motion.",
  tags: ["toast", "notification", "snackbar", "alert", "queue", "provider", "hook", "overlay"],
  lineage: ["Radix Primitives", "Sonner", "Fluent UI"],
  status: "stable",
  a11y: [
    "Each toast is a role=\"status\" live region (aria-live=\"polite\", aria-atomic) so assistive tech announces it without stealing focus.",
    "The title and description are wired as aria-labelledby / aria-describedby for the toast.",
    "The icon-only close button carries an aria-label and a visible :focus-visible ring.",
    "The enter/exit slide+fade collapses to no motion under prefers-reduced-motion: reduce.",
  ],
  props: [
    {
      name: "title",
      type: "string",
      description: "toast() option — the bold headline line that gets announced.",
      required: true,
    },
    {
      name: "description",
      type: "string",
      description: "toast() option — optional supporting line under the title.",
    },
    {
      name: "variant",
      type: '"info" | "signal" | "caution" | "fault"',
      default: '"info"',
      description: "toast() option — status ramp. info uses the accent; the rest map to status hues.",
    },
    {
      name: "duration",
      type: "number",
      default: "4000",
      description: "toast() option — auto-dismiss delay in ms; 0 (or non-finite) keeps it until dismissed.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "ToastProvider prop — the subtree that can call useToast().",
      required: true,
    },
  ],
  code: `import { ToastProvider, useToast } from "@alchyx/react";

function SaveButton() {
  const { toast } = useToast();
  return (
    <button
      onClick={() =>
        toast({
          title: "Changes saved",
          description: "Your workspace is up to date.",
          variant: "signal",
        })
      }
    >
      Save
    </button>
  );
}

export function App() {
  return (
    <ToastProvider>
      <SaveButton />
    </ToastProvider>
  );
}`,
};

export default toastMeta;
