"use client";

import * as React from "react";
import { Pagination } from ".";
import { DemoStack, DemoNote, DemoControls, DemoChoice } from "../../registry/demo-kit";

/** Compact snapshot for the catalog card. */
export function Preview() {
  const [page, setPage] = React.useState(3);
  return (
    <Pagination
      page={page}
      count={8}
      siblingCount={0}
      onPageChange={setPage}
      aria-label="Pagination preview"
    />
  );
}

const SIBLINGS = ["0", "1", "2"] as const;
type SiblingChoice = (typeof SIBLINGS)[number];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [page, setPage] = React.useState(1);
  const [siblings, setSiblings] = React.useState<SiblingChoice>("1");
  const count = 10;

  const [widePage, setWidePage] = React.useState(12);
  const wideCount = 24;

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice
          label="Sibling count"
          value={siblings}
          options={SIBLINGS}
          onChange={setSiblings}
        />
      </DemoControls>

      <DemoStack gap={12}>
        <Pagination
          page={page}
          count={count}
          siblingCount={Number(siblings)}
          onPageChange={setPage}
        />
        <DemoNote>
          Page {page} of {count}
        </DemoNote>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Wide range · ellipsis on both sides</DemoNote>
        <Pagination page={widePage} count={wideCount} onPageChange={setWidePage} />
      </DemoStack>
    </DemoStack>
  );
}
