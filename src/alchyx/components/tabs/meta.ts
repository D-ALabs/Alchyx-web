import type { ComponentMeta } from "../../registry/types";

export const tabsMeta: ComponentMeta = {
  slug: "tabs",
  name: "Tabs",
  category: "Navigation",
  summary: "An accessible tabs composite with roving tabindex and arrow-key nav.",
  description:
    "Tabs is a compound component (Tabs · TabsList · TabsTrigger · TabsContent) following the WAI-ARIA tabs pattern. It supports horizontal or vertical orientation, controlled or uncontrolled selection via useControllableState, and roving-tabindex keyboard navigation with automatic activation.",
  tags: ["tabs", "tablist", "segmented", "navigation", "panels", "roving tabindex"],
  lineage: ["Radix Primitives", "Base UI", "Fluent UI"],
  status: "stable",
  a11y: [
    "role=tablist / tab / tabpanel with aria-selected, aria-controls, and aria-labelledby wired via useId.",
    "Roving tabindex: only the active tab is in the Tab sequence; Arrow / Home / End move between tabs.",
    "aria-orientation matches the layout; vertical mode uses Up/Down arrows.",
    "Inactive panels are hidden; the active panel is focusable for keyboard reading.",
  ],
  props: [
    { name: "value", type: "string", description: "Controlled active tab value." },
    { name: "defaultValue", type: "string", description: "Initial active value (uncontrolled)." },
    { name: "onValueChange", type: "(value: string) => void", description: "Fires on selection change." },
    { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout + arrow-key axis." },
  ],
  code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@alchyx/react";

export function Example() {
  return (
    <Tabs defaultValue="overview">
      <TabsList aria-label="Sections">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="specs">Specs</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">The calm, coherent overview.</TabsContent>
      <TabsContent value="specs">Every measured spec.</TabsContent>
    </Tabs>
  );
}`,
};

export default tabsMeta;
