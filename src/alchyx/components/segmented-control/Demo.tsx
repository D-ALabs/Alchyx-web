"use client";

import * as React from "react";
import { SegmentedControl, SegmentedControlItem, type SegmentedControlSize } from ".";
import { DemoStack, DemoRow, DemoNote, DemoControls, DemoToggle } from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <SegmentedControl defaultValue="grid" size="sm" aria-label="View">
      <SegmentedControlItem value="grid">Grid</SegmentedControlItem>
      <SegmentedControlItem value="list">List</SegmentedControlItem>
      <SegmentedControlItem value="board">Board</SegmentedControlItem>
    </SegmentedControl>
  );
}

const VIEWS: { value: string; label: string; glyph: string }[] = [
  { value: "grid", label: "Grid", glyph: "▦" },
  { value: "list", label: "List", glyph: "≣" },
  { value: "board", label: "Board", glyph: "▤" },
];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [view, setView] = React.useState("grid");
  const [disabled, setDisabled] = React.useState(false);

  const active = VIEWS.find((v) => v.value === view)?.label ?? view;

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoToggle label="Disable “Board”" checked={disabled} onChange={setDisabled} />
      </DemoControls>

      <DemoStack gap={12}>
        <DemoNote>Controlled view switcher · showing {active}</DemoNote>
        <SegmentedControl value={view} onValueChange={setView} aria-label="Project view">
          {VIEWS.map((v) => (
            <SegmentedControlItem
              key={v.value}
              value={v.value}
              disabled={disabled && v.value === "board"}
            >
              <span aria-hidden>{v.glyph}</span>
              {v.label}
            </SegmentedControlItem>
          ))}
        </SegmentedControl>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Sizes · sm and md</DemoNote>
        <DemoRow gap={16}>
          {(["sm", "md"] as SegmentedControlSize[]).map((size) => (
            <SegmentedControl key={size} defaultValue="day" size={size} aria-label={`Range (${size})`}>
              <SegmentedControlItem value="day">Day</SegmentedControlItem>
              <SegmentedControlItem value="week">Week</SegmentedControlItem>
              <SegmentedControlItem value="month">Month</SegmentedControlItem>
            </SegmentedControl>
          ))}
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
