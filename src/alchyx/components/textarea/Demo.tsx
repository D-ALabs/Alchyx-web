"use client";

import * as React from "react";
import { Textarea, type TextareaSize } from ".";
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
      <Textarea label="Message" placeholder="Tell us about your project…" defaultValue="" rows={3} />
    </div>
  );
}

const SIZES: TextareaSize[] = ["sm", "md", "lg"];

/** Full interactive showcase. */
export function Demo() {
  const [size, setSize] = React.useState<TextareaSize>("md");
  const [invalid, setInvalid] = React.useState(false);
  const [autoResize, setAutoResize] = React.useState(true);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
        <DemoToggle label="Invalid" checked={invalid} onChange={setInvalid} />
        <DemoToggle label="Auto-resize" checked={autoResize} onChange={setAutoResize} />
      </DemoControls>

      <div style={{ width: "100%", maxWidth: 420 }}>
        <Textarea
          label="Message"
          placeholder="Tell us about your project…"
          size={size}
          autoResize={autoResize}
          hint={invalid ? undefined : "A sentence or two is plenty — we'll follow up."}
          error={invalid ? "Please add a short message before sending." : undefined}
        />
      </div>

      <DemoStack gap={12}>
        <DemoNote>Auto-resize · grows as you type</DemoNote>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <Textarea
            label="Release notes"
            autoResize
            defaultValue={"• Faster cold starts\n• New accent tokens\n• Fixed the focus rings"}
          />
        </div>
      </DemoStack>
    </DemoStack>
  );
}
