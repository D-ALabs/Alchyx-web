"use client";

import * as React from "react";
import { Separator, type SeparatorOrientation } from ".";
import {
  DemoRow,
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

const inkSub: React.CSSProperties = { color: "var(--sub)", fontSize: 14 };

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoStack gap={12} style={{ width: "100%", maxWidth: 240 }}>
      <span style={{ ...inkSub, fontSize: 13 }}>Overview</span>
      <Separator />
      <Separator label="OR" />
      <DemoRow gap={10} style={{ height: 18 }}>
        <span style={{ ...inkSub, fontSize: 13 }}>Docs</span>
        <Separator orientation="vertical" />
        <span style={{ ...inkSub, fontSize: 13 }}>API</span>
      </DemoRow>
    </DemoStack>
  );
}

const ORIENTATIONS: SeparatorOrientation[] = ["horizontal", "vertical"];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [orientation, setOrientation] = React.useState<SeparatorOrientation>("horizontal");
  const [decorative, setDecorative] = React.useState(true);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice
          label="Orientation"
          value={orientation}
          options={ORIENTATIONS}
          onChange={setOrientation}
        />
        <DemoToggle label="Decorative" checked={decorative} onChange={setDecorative} />
      </DemoControls>

      {orientation === "horizontal" ? (
        <DemoStack gap={12}>
          <span style={inkSub}>Section one</span>
          <Separator orientation="horizontal" decorative={decorative} />
          <span style={inkSub}>Section two</span>
        </DemoStack>
      ) : (
        <DemoRow gap={16} style={{ height: 40 }}>
          <span style={inkSub}>Docs</span>
          <Separator orientation="vertical" decorative={decorative} />
          <span style={inkSub}>API</span>
          <Separator orientation="vertical" decorative={decorative} />
          <span style={inkSub}>Guides</span>
        </DemoRow>
      )}

      <DemoStack gap={12}>
        <DemoNote>Labelled rule</DemoNote>
        <Separator label="OR" />
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Vertical · between inline items</DemoNote>
        <DemoRow gap={12} style={{ height: 20 }}>
          <span style={inkSub}>Terms</span>
          <Separator orientation="vertical" />
          <span style={inkSub}>Privacy</span>
          <Separator orientation="vertical" />
          <span style={inkSub}>Cookies</span>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
