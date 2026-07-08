"use client";

import * as React from "react";
import { Progress } from ".";
import { Button } from "../button";
import { DemoStack, DemoRow, DemoNote } from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoStack gap={14} style={{ width: 220 }}>
      <Progress value={68} label="Coverage" />
      <Progress size="sm" indeterminate />
    </DemoStack>
  );
}

const clamp = (n: number) => Math.min(100, Math.max(0, n));

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [value, setValue] = React.useState(40);

  return (
    <DemoStack gap={28}>
      <DemoStack gap={14}>
        <Progress value={value} label="Uploading dataset" />
        <DemoRow gap={10}>
          <Button
            variant="secondary"
            size="sm"
            aria-label="Decrease by 10"
            onClick={() => setValue((v) => clamp(v - 10))}
          >
            <span aria-hidden>−</span> 10
          </Button>
          <Button
            variant="secondary"
            size="sm"
            aria-label="Increase by 10"
            onClick={() => setValue((v) => clamp(v + 10))}
          >
            <span aria-hidden>+</span> 10
          </Button>
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Indeterminate</DemoNote>
        <Progress indeterminate label="Syncing" />
      </DemoStack>

      <DemoStack gap={16}>
        <DemoNote>Sizes</DemoNote>
        <Progress size="sm" value={72} />
        <Progress size="md" value={72} />
      </DemoStack>
    </DemoStack>
  );
}
