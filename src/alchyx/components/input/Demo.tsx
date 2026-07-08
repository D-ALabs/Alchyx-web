"use client";

import * as React from "react";
import { Input, type InputSize } from ".";
import {
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

/** Compact snapshot for the catalog card. */
export function Preview() {
  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <Input label="Work email" placeholder="you@studio.com" leading="@" defaultValue="" />
    </div>
  );
}

const SIZES: InputSize[] = ["sm", "md", "lg"];

/** Full interactive showcase. */
export function Demo() {
  const [size, setSize] = React.useState<InputSize>("md");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
        <DemoToggle label="Invalid" checked={invalid} onChange={setInvalid} />
        <DemoToggle label="Disabled" checked={disabled} onChange={setDisabled} />
      </DemoControls>

      <div style={{ width: "100%", maxWidth: 380 }}>
        <Input
          label="Work email"
          placeholder="you@studio.com"
          size={size}
          disabled={disabled}
          leading="@"
          hint={invalid ? undefined : "We'll only use this for the demo invite."}
          error={invalid ? "Enter a valid work email address." : undefined}
        />
      </div>

      <DemoStack gap={12}>
        <DemoNote>With trailing adornment</DemoNote>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Input placeholder="Search components" leading="⌕" trailing="⌘K" size={size} />
        </div>
      </DemoStack>
    </DemoStack>
  );
}
