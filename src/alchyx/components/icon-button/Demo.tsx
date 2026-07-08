"use client";

import * as React from "react";
import { IconButton, type IconButtonVariant, type IconButtonSize } from ".";
import {
  DemoRow,
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

const VARIANTS: IconButtonVariant[] = ["primary", "secondary", "ghost"];
const SIZES: IconButtonSize[] = ["sm", "md", "lg"];

/** A few unicode glyphs so demos need no icon dependency. */
const ICONS = [
  { label: "Search", glyph: "⌕" },
  { label: "More options", glyph: "⋯" },
  { label: "Close", glyph: "✕" },
  { label: "Open external link", glyph: "↗" },
] as const;

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={8}>
      <IconButton label="Search" variant="primary">
        ⌕
      </IconButton>
      <IconButton label="More options">⋯</IconButton>
      <IconButton label="Close" variant="ghost">
        ✕
      </IconButton>
    </DemoRow>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [variant, setVariant] = React.useState<IconButtonVariant>("secondary");
  const [size, setSize] = React.useState<IconButtonSize>("md");
  const [disabled, setDisabled] = React.useState(false);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Variant" value={variant} options={VARIANTS} onChange={setVariant} />
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
        <DemoToggle label="Disabled" checked={disabled} onChange={setDisabled} />
      </DemoControls>

      <DemoRow gap={10}>
        {ICONS.map((icon) => (
          <IconButton
            key={icon.label}
            label={icon.label}
            variant={variant}
            size={size}
            disabled={disabled}
          >
            {icon.glyph}
          </IconButton>
        ))}
      </DemoRow>

      <DemoStack gap={12}>
        <DemoNote>All variants</DemoNote>
        <DemoRow gap={10}>
          {VARIANTS.map((v) => (
            <IconButton key={v} label={`Search (${v})`} variant={v}>
              ⌕
            </IconButton>
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>All sizes</DemoNote>
        <DemoRow gap={10}>
          {SIZES.map((s) => (
            <IconButton key={s} label={`More options (${s})`} size={s}>
              ⋯
            </IconButton>
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>asChild · renders an anchor</DemoNote>
        <DemoRow gap={10}>
          <IconButton asChild label="Open external link" variant="secondary">
            <a href="#icon-button" onClick={(e) => e.preventDefault()}>
              <span aria-hidden="true">↗</span>
            </a>
          </IconButton>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
