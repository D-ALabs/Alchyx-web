"use client";

import * as React from "react";
import { Spinner, type SpinnerSize } from ".";
import { DemoRow, DemoStack, DemoNote, DemoControls, DemoChoice } from "../../registry/demo-kit";

const SIZES: SpinnerSize[] = ["sm", "md", "lg"];

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={18}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </DemoRow>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [size, setSize] = React.useState<SpinnerSize>("md");

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
      </DemoControls>

      <DemoRow gap={20}>
        <Spinner size={size} />
      </DemoRow>

      <DemoStack gap={12}>
        <DemoNote>All sizes</DemoNote>
        <DemoRow gap={20}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Inline with a label</DemoNote>
        <DemoRow gap={10}>
          <Spinner size="sm" label="Saving" />
          <span
            style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink2)" }}
          >
            Saving…
          </span>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
