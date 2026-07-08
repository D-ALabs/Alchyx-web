import type { ComponentMeta } from "../../registry/types";

export const selectMeta: ComponentMeta = {
  slug: "select",
  name: "Select",
  category: "Forms",
  summary: "A styled native select with label, hint, error, and a custom chevron.",
  description:
    "Select wraps a real native <select> in the GitHub Primer / Twilio Paste field anatomy (label · control · hint/error) and overlays a custom chevron adornment. Driving the platform control means the OS-native option list, keyboard interaction, and typeahead are accessible for free — provide options as <option> children or via the options prop, with an optional placeholder.",
  tags: [
    "select",
    "dropdown",
    "combobox",
    "form",
    "field",
    "native",
    "options",
    "placeholder",
    "chevron",
  ],
  lineage: ["GitHub Primer", "Twilio Paste"],
  status: "stable",
  a11y: [
    "Renders a real native <select>, so keyboard navigation, typeahead, and the OS-native option list work with every assistive technology.",
    "Label is associated with the control via htmlFor / id (generated with useId).",
    "hint and error are exposed through aria-describedby; error also sets aria-invalid.",
    "Accent focus ring on :focus-within, plus a fault-tinted ring in the invalid state.",
    "The chevron is aria-hidden with pointer-events:none, so it never intercepts clicks or pollutes the accessible name.",
    "The placeholder is a disabled, hidden option, so it can never be re-selected or submitted.",
  ],
  props: [
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Padding + type scale." },
    { name: "label", type: "ReactNode", description: "Field label rendered above the control." },
    { name: "hint", type: "ReactNode", description: "Helper text, referenced by aria-describedby." },
    { name: "error", type: "ReactNode", description: "Error text; also marks the field invalid." },
    { name: "invalid", type: "boolean", default: "false", description: "Force the invalid styling + aria-invalid." },
    {
      name: "options",
      type: "SelectOption[]",
      description: "Options as data ({ label, value, disabled? }). Ignored when children are supplied.",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Disabled, hidden first option selected by default while the value is empty.",
    },
  ],
  code: `import { Select } from "@alchyx/react";

export function Example() {
  return (
    <Select
      label="Team size"
      placeholder="Select team size…"
      hint="Helps us tailor the demo."
      options={[
        { label: "Just me", value: "1" },
        { label: "2–10", value: "2-10" },
        { label: "11–50", value: "11-50" },
        { label: "51+", value: "51" },
      ]}
    />
  );
}`,
};

export default selectMeta;
