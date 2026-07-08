import type { ComponentMeta } from "../../registry/types";

export const breadcrumbsMeta: ComponentMeta = {
  slug: "breadcrumbs",
  name: "Breadcrumbs",
  category: "Navigation",
  summary: "A navigation trail to the current page — links plus a mono separator.",
  description:
    "Breadcrumbs renders a nav landmark (aria-label=\"Breadcrumb\") around an ordered list, composed from BreadcrumbItem, BreadcrumbLink, and BreadcrumbSeparator. It follows the GitHub Primer, Ant Design, and Twilio Paste APIs: the current crumb carries aria-current=\"page\", separators are hidden from assistive tech, and BreadcrumbLink supports asChild so it can wrap a router link.",
  tags: [
    "breadcrumb",
    "breadcrumbs",
    "trail",
    "navigation",
    "nav",
    "path",
    "hierarchy",
    "wayfinding",
    "aria-current",
    "asChild",
  ],
  lineage: ["GitHub Primer", "Ant Design", "Twilio Paste"],
  status: "stable",
  a11y: [
    "Root renders a <nav> landmark labelled \"Breadcrumb\" wrapping an ordered <ol> list.",
    "The current crumb uses aria-current=\"page\" and renders as static text rather than a link.",
    "Separators are aria-hidden decorative glyphs so the trail reads cleanly to screen readers.",
    "Links show a visible :focus-visible ring (2px accent outline) for keyboard users.",
  ],
  props: [
    {
      name: "separator",
      type: "React.ReactNode",
      default: '"/"',
      description: "Glyph rendered by each BreadcrumbSeparator that has no children of its own.",
    },
    {
      name: "current",
      type: "boolean",
      default: "false",
      description: "On BreadcrumbLink: render the current page as static aria-current=\"page\" text.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "On BreadcrumbLink: render the child element (e.g. a router link) instead of an <a>.",
    },
  ],
  code: `import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@alchyx/react";

export function Example() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink current>Button</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}`,
};

export default breadcrumbsMeta;
