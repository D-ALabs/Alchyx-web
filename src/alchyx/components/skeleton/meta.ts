import type { ComponentMeta } from "../../registry/types";

export const skeletonMeta: ComponentMeta = {
  slug: "skeleton",
  name: "Skeleton",
  category: "Feedback",
  summary: "A shimmering placeholder that holds a content's shape while it loads.",
  description:
    "Skeleton stands in for content that is still loading, cutting layout shift and perceived latency. It follows the Ant Design Skeleton composition model — snap a circle, a couple of text lines, and a rect together to mirror the incoming layout — with the Fluent UI shimmer treatment: a calm, accent-free gradient that pauses under reduced-motion. It is aria-hidden so assistive tech announces the resolved content, not the placeholder.",
  tags: ["loading", "placeholder", "shimmer", "loader", "ghost", "pulse", "lazy", "content", "spinner"],
  lineage: ["Ant Design", "Fluent UI"],
  status: "stable",
  a11y: [
    "aria-hidden by default so screen readers skip the placeholder and announce the real content once it resolves.",
    "Purely presentational — renders no text and traps no focus; pair it with an aria-busy / aria-live region on the loading container to announce the state change.",
    "Motion is a background-position shimmer only (no layout thrash) and it stops completely under prefers-reduced-motion, leaving a static block.",
  ],
  props: [
    {
      name: "variant",
      type: '"text" | "circle" | "rect"',
      default: '"text"',
      description: "Placeholder shape: a pill-rounded text line, a circular avatar/dot, or a rounded rect block.",
    },
    {
      name: "width",
      type: "string | number",
      description: "Explicit width. A number is treated as pixels, a string is used verbatim (e.g. \"60%\"). Falls back to the variant default.",
    },
    {
      name: "height",
      type: "string | number",
      description: "Explicit height. text scales with font-size and circle holds a 1:1 ratio when this is omitted.",
    },
  ],
  code: `import { Skeleton } from "@alchyx/react";

export function CardSkeleton() {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
      <Skeleton variant="circle" width={48} height={48} />
      <div style={{ flex: 1, display: "grid", gap: 8 }}>
        <Skeleton variant="text" width="55%" />
        <Skeleton variant="text" width="35%" />
      </div>
    </div>
  );
}`,
};

export default skeletonMeta;
