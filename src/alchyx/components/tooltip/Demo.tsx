"use client";

import * as React from "react";
import { Tooltip, type TooltipSide } from ".";
import { Button } from "../button";
import { DemoStack, DemoRow, DemoNote, DemoControls, DemoChoice } from "../../registry/demo-kit";

/** Compact snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={10}>
      <Tooltip content="Anchored above" side="top">
        <Button size="sm" variant="secondary">
          Hover me
        </Button>
      </Tooltip>
      <Tooltip content="Anchored below" side="bottom">
        <Button size="sm" variant="ghost">
          Focus me
        </Button>
      </Tooltip>
    </DemoRow>
  );
}

const DELAYS = ["0", "200", "600"] as const;
type DelayKey = (typeof DELAYS)[number];

const SIDES: { side: TooltipSide; label: string; tip: string }[] = [
  { side: "top", label: "Top", tip: "Anchored above the trigger" },
  { side: "bottom", label: "Bottom", tip: "Anchored below the trigger" },
  { side: "left", label: "Left", tip: "Anchored to the left" },
  { side: "right", label: "Right", tip: "Anchored to the right" },
];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [delayKey, setDelayKey] = React.useState<DelayKey>("200");
  const delay = Number(delayKey);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Delay (ms)" value={delayKey} options={DELAYS} onChange={setDelayKey} />
      </DemoControls>

      <DemoNote>Hover, or Tab to a button and hold focus — Escape dismisses</DemoNote>
      <DemoRow gap={14} style={{ padding: "28px 8px" }}>
        {SIDES.map(({ side, label, tip }) => (
          <Tooltip key={side} content={tip} side={side} delay={delay}>
            <Button variant="secondary">{label}</Button>
          </Tooltip>
        ))}
      </DemoRow>
    </DemoStack>
  );
}
