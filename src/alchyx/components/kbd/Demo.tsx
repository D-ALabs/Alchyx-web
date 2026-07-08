"use client";

import * as React from "react";
import { Kbd, type KbdSize } from ".";
import { DemoRow, DemoStack, DemoNote, DemoControls, DemoChoice } from "../../registry/demo-kit";

const SIZES: KbdSize[] = ["sm", "md"];

const sepStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 13,
  color: "var(--faint)",
};

const proseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "var(--sub)",
};

/** A dimmed mono separator between keys in a combo. */
function Sep({ children }: { children: React.ReactNode }) {
  return (
    <span aria-hidden style={sepStyle}>
      {children}
    </span>
  );
}

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={8}>
      <Kbd size="sm">⌘</Kbd>
      <Sep>+</Sep>
      <Kbd size="sm">K</Kbd>
    </DemoRow>
  );
}

const KEYS = ["⌘", "⇧", "↵", "Esc", "Tab", "/", "?"];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [size, setSize] = React.useState<KbdSize>("md");

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
      </DemoControls>

      <DemoStack gap={12}>
        <DemoNote>Single keys</DemoNote>
        <DemoRow gap={8}>
          {KEYS.map((k) => (
            <Kbd key={k} size={size}>
              {k}
            </Kbd>
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Shortcut combo</DemoNote>
        <DemoRow gap={8}>
          <Kbd size={size}>⌘</Kbd>
          <Sep>+</Sep>
          <Kbd size={size}>K</Kbd>
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>In context</DemoNote>
        <DemoRow gap={8}>
          <span style={proseStyle}>
            Press <Kbd size="sm">/</Kbd> to search
          </span>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
