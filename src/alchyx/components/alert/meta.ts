import type { ComponentMeta } from "../../registry/types";

export const alertMeta: ComponentMeta = {
  slug: "alert",
  name: "Alert",
  category: "Feedback",
  summary: "A tone-tinted callout — info, signal, caution, fault — with an optional dismiss.",
  description:
    "Alert is an inline callout / banner. It consolidates the Twilio Paste Callout tones, the GitHub Primer Flash anatomy, and the Ant Design Alert API (title + body + dismissible) on the D-ALabs status language: a tone-tinted surface with a left status bar and default glyph, all mixed from the tone's own colour via color-mix. Urgent tones (caution, fault) announce assertively with role=\"alert\"; info and signal use role=\"status\".",
  tags: [
    "alert",
    "callout",
    "banner",
    "notice",
    "flash",
    "notification",
    "info",
    "success",
    "warning",
    "error",
    "dismissible",
    "feedback",
  ],
  lineage: ["Twilio Paste", "GitHub Primer", "Ant Design"],
  status: "stable",
  a11y: [
    "role=\"alert\" (assertive live region) for caution and fault; role=\"status\" (polite) for info and signal.",
    "When a title is set it is wired to the region via aria-labelledby so screen readers announce it first.",
    "The decorative tone icon is aria-hidden so it is not read out.",
    "The close button is a real <button type=\"button\"> with an aria-label (default \"Dismiss\") and a visible :focus-visible ring.",
  ],
  props: [
    {
      name: "variant",
      type: '"info" | "signal" | "caution" | "fault"',
      default: '"info"',
      description: "Status tone driving the tint, status bar, default icon, and live-region politeness.",
    },
    {
      name: "title",
      type: "React.ReactNode",
      description: "Optional bold headline rendered above the body.",
    },
    {
      name: "icon",
      type: "React.ReactNode",
      description: "Leading glyph. Omit for the tone's default; pass null to hide; pass a node to override.",
    },
    {
      name: "dismissible",
      type: "boolean",
      default: "false",
      description: "Render a trailing close button that calls onDismiss.",
    },
    {
      name: "onDismiss",
      type: "() => void",
      description: "Fired when the close button is activated.",
    },
    {
      name: "dismissLabel",
      type: "string",
      default: '"Dismiss"',
      description: "Accessible label for the close button.",
    },
  ],
  code: `import { Alert } from "@alchyx/react";

export function Example() {
  return (
    <Alert variant="caution" title="Training drift detected">
      The model has moved past its validation window. Re-run evaluation before shipping.
    </Alert>
  );
}`,
};

export default alertMeta;
