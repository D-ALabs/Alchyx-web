import type { ComponentMeta } from "../../registry/types";

export const statMeta: ComponentMeta = {
  slug: "stat",
  name: "Stat",
  category: "Data Display",
  summary: "A single metric — mono-caps label, big display numeral, trend delta.",
  description:
    "Stat distills the Ant Design Statistic anatomy and the Fluent UI metric tile into the D-ALabs type system: a mono-caps label, a headline figure in the dedicated --stat hue, and an optional delta that the trend prop tints signal / fault / faint. It renders a labelled role=\"group\" so screen readers announce the metric name, value, and change as one unit.",
  tags: ["stat", "statistic", "metric", "kpi", "number", "figure", "trend", "delta", "data display"],
  lineage: ["Ant Design", "Fluent UI"],
  status: "stable",
  a11y: [
    "Renders a role=\"group\" wired to the label via aria-labelledby so the metric name is announced with the figure.",
    "When present, the hint is linked through aria-describedby.",
    "The trend arrow is aria-hidden; a VisuallyHidden phrase (\"Trending up/down\", \"No change\") conveys the direction to screen readers.",
    "Delta color is never the sole signal — the sign and the direction text carry the same meaning.",
    "Supports :focus-visible with an accent ring for consumers that make the block focusable, and honors prefers-reduced-motion.",
  ],
  props: [
    {
      name: "label",
      type: "React.ReactNode",
      description: "Mono-caps caption naming the metric.",
      required: true,
    },
    {
      name: "value",
      type: "string | number",
      description: "The headline figure, rendered as the big display numeral in the --stat hue.",
      required: true,
    },
    {
      name: "delta",
      type: "string",
      description: "Optional change chip beside the value, e.g. \"+12%\".",
    },
    {
      name: "trend",
      type: '"up" | "down" | "flat"',
      description: "Tints the delta signal (green) / fault (red) / faint and shows a direction arrow.",
    },
    {
      name: "hint",
      type: "React.ReactNode",
      description: "Optional small sub text below the value.",
    },
  ],
  code: `import { Stat } from "@alchyx/react";

export function Example() {
  return (
    <div style={{ display: "flex", gap: 40 }}>
      <Stat label="Components" value={31} />
      <Stat label="Skins" value={3} />
      <Stat label="Uptime" value="99.9%" delta="+0.1%" trend="up" />
    </div>
  );
}`,
};

export default statMeta;
