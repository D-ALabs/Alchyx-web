"use client";

import * as React from "react";
import { Badge, type BadgeVariant, type BadgeSize } from ".";
import {
  DemoRow,
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

const VARIANTS: BadgeVariant[] = ["neutral", "accent", "signal", "caution", "fault"];
const SIZES: BadgeSize[] = ["sm", "md"];
const LABELS: Record<BadgeVariant, string> = {
  neutral: "Draft",
  accent: "New",
  signal: "Live",
  caution: "Beta",
  fault: "Error",
};

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={8}>
      <Badge variant="signal" dot>
        Live
      </Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="caution">Beta</Badge>
    </DemoRow>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [variant, setVariant] = React.useState<BadgeVariant>("signal");
  const [size, setSize] = React.useState<BadgeSize>("md");
  const [dot, setDot] = React.useState(true);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Variant" value={variant} options={VARIANTS} onChange={setVariant} />
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
        <DemoToggle label="Dot" checked={dot} onChange={setDot} />
      </DemoControls>

      <DemoRow gap={12}>
        <Badge variant={variant} size={size} dot={dot}>
          {LABELS[variant]}
        </Badge>
      </DemoRow>

      <DemoStack gap={12}>
        <DemoNote>All tones</DemoNote>
        <DemoRow gap={8}>
          {VARIANTS.map((v) => (
            <Badge key={v} variant={v}>
              {LABELS[v]}
            </Badge>
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>With status dot</DemoNote>
        <DemoRow gap={8}>
          {VARIANTS.map((v) => (
            <Badge key={v} variant={v} dot>
              {LABELS[v]}
            </Badge>
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Sizes</DemoNote>
        <DemoRow gap={8}>
          {SIZES.map((s) => (
            <Badge key={s} variant="accent" size={s}>
              {s}
            </Badge>
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>asChild · renders an anchor</DemoNote>
        <DemoRow gap={8}>
          <Badge asChild variant="accent">
            <a href="#badge" onClick={(e) => e.preventDefault()}>
              Changelog
            </a>
          </Badge>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
