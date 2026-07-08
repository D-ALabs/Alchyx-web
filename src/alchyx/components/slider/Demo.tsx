"use client";

import * as React from "react";
import { Slider } from ".";
import { DemoStack, DemoRow, DemoNote } from "../../registry/demo-kit";

const valueStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 18,
  color: "var(--ink)",
};

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <div style={{ width: "100%", maxWidth: 190 }}>
      <DemoStack gap={18}>
        <Slider aria-label="Volume" defaultValue={70} />
        <Slider aria-label="Balance" defaultValue={35} step={5} />
      </DemoStack>
    </div>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [volume, setVolume] = React.useState(64);
  const [amount, setAmount] = React.useState(40);

  return (
    <DemoStack gap={30}>
      <DemoStack gap={12}>
        <DemoRow gap={12} align="baseline" style={{ justifyContent: "space-between", width: "100%" }}>
          <DemoNote>Volume</DemoNote>
          <span style={valueStyle}>{volume}</span>
        </DemoRow>
        <Slider aria-label="Volume" value={volume} onValueChange={setVolume} />
      </DemoStack>

      <DemoStack gap={12}>
        <DemoRow gap={12} align="baseline" style={{ justifyContent: "space-between", width: "100%" }}>
          <DemoNote>Stepped · step 10</DemoNote>
          <span style={valueStyle}>{amount}</span>
        </DemoRow>
        <Slider aria-label="Amount" value={amount} onValueChange={setAmount} step={10} />
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Disabled</DemoNote>
        <Slider aria-label="Locked value" defaultValue={30} disabled />
      </DemoStack>
    </DemoStack>
  );
}
