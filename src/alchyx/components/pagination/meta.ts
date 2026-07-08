import type { ComponentMeta } from "../../registry/types";

export const paginationMeta: ComponentMeta = {
  slug: "pagination",
  name: "Pagination",
  category: "Navigation",
  summary: "Controlled page navigator with a windowed strip and ellipsis gaps.",
  description:
    "Pagination is a controlled page navigator: the parent owns the current page and updates it in onPageChange. It renders a Previous control, a windowed strip of numbered pages that collapses long runs into an ellipsis, and a Next control. It consolidates the Ant Design windowing API (first / last / current ± siblingCount) with the Fluent UI accessibility model.",
  tags: [
    "pagination",
    "pager",
    "pages",
    "navigation",
    "next",
    "previous",
    "table",
    "list",
    "results",
  ],
  lineage: ["Ant Design", "Fluent UI"],
  status: "stable",
  a11y: [
    'Renders inside a <nav aria-label="Pagination"> landmark so assistive tech can jump to the pager.',
    'The current page button carries aria-current="page".',
    "Previous / Next are native buttons, disabled at the first and last page, each with an explicit accessible label.",
    'Every page button announces "Go to page N"; ellipsis gaps are aria-hidden and skipped.',
    "Visible :focus-visible ring for keyboard users; honours prefers-reduced-motion.",
  ],
  props: [
    {
      name: "page",
      type: "number",
      description: "The current page, 1-based.",
      required: true,
    },
    {
      name: "count",
      type: "number",
      description: "Total number of pages.",
      required: true,
    },
    {
      name: "onPageChange",
      type: "(page: number) => void",
      description: "Fires with the newly-requested page (already clamped to 1…count).",
      required: true,
    },
    {
      name: "siblingCount",
      type: "number",
      default: "1",
      description: "Page buttons shown on each side of the current page before collapsing to an ellipsis.",
    },
    {
      name: "prevLabel",
      type: "string",
      default: '"Previous page"',
      description: "Accessible label for the Previous control.",
    },
    {
      name: "nextLabel",
      type: "string",
      default: '"Next page"',
      description: "Accessible label for the Next control.",
    },
  ],
  code: `"use client";

import { Pagination } from "@alchyx/react";
import { useState } from "react";

export function Example() {
  const [page, setPage] = useState(1);
  return <Pagination page={page} count={10} onPageChange={setPage} />;
}`,
};

export default paginationMeta;
