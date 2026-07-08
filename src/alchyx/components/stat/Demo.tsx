"use client";

import * as React from "react";
import { Stat, type StatTrend } from ".";
import {
  DemoStack,
  DemoRow,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={28} align="flex-start">
      <Stat label="Components" value={31} />
      <Stat label="Uptime" value="99.9%" delta="+0.1%" trend="up" />
    </DemoRow>
  );
}

const TRENDS: StatTrend[] = ["up", "down", "flat"];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [trend, setTrend] = React.useState<StatTrend>("up");
  const [showDelta, setShowDelta] = React.useState(true);
  const [showHint, setShowHint] = React.useState(true);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Trend" value={trend} options={TRENDS} onChange={setTrend} />
        <DemoToggle label="Delta" checked={showDelta} onChange={setShowDelta} />
        <DemoToggle label="Hint" checked={showHint} onChange={setShowHint} />
      </DemoControls>

      <DemoRow gap={40} align="flex-start">
        <Stat label="Components" value={31} />
        <Stat label="Skins" value={3} />
        <Stat
          label="Uptime"
          value="99.9%"
          delta={showDelta ? "+0.1%" : undefined}
          trend={showDelta ? trend : undefined}
          hint={showHint ? "Rolling 90-day average" : undefined}
        />
      </DemoRow>

      <DemoStack gap={12}>
        <DemoNote>Trend signals</DemoNote>
        <DemoRow gap={40} align="flex-start">
          <Stat label="Signups" value="1,204" delta="+12%" trend="up" />
          <Stat label="Churn" value="0.8%" delta="-3%" trend="down" />
          <Stat label="Latency" value="42ms" delta="0%" trend="flat" />
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
