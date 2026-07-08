"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from ".";
import { DemoStack, DemoNote } from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <div style={{ width: "100%" }}>
      <RadioGroup defaultValue="dark" aria-label="Skin">
        <RadioGroupItem value="lab" label="Lab" />
        <RadioGroupItem value="dark" label="Dark" />
        <RadioGroupItem value="ark" label="Ark" />
      </RadioGroup>
    </div>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [plan, setPlan] = React.useState("lab");

  return (
    <DemoStack gap={30}>
      <DemoStack gap={12}>
        <DemoNote>Pick a plan · controlled — {plan}</DemoNote>
        <RadioGroup value={plan} onValueChange={setPlan} aria-label="Plan">
          <RadioGroupItem value="lab" label="Lab — the daylight default" />
          <RadioGroupItem value="dark" label="Dark — the low-light workspace" />
          <RadioGroupItem value="ark" label="Ark — the premium skin" />
          <RadioGroupItem value="soon" label="Nova — coming soon" disabled />
        </RadioGroup>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Horizontal orientation</DemoNote>
        <RadioGroup defaultValue="md" orientation="horizontal" aria-label="Density">
          <RadioGroupItem value="sm" label="Compact" />
          <RadioGroupItem value="md" label="Cozy" />
          <RadioGroupItem value="lg" label="Roomy" />
        </RadioGroup>
      </DemoStack>
    </DemoStack>
  );
}
