"use client";

import * as React from "react";
import { Button, type ButtonVariant, type ButtonSize } from ".";
import {
  DemoRow,
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={10}>
      <Button size="sm">
        Request demo <span aria-hidden>→</span>
      </Button>
      <Button size="sm" variant="secondary">
        Our work
      </Button>
      <Button size="sm" variant="ghost">
        Learn more
      </Button>
    </DemoRow>
  );
}

const VARIANTS: ButtonVariant[] = ["primary", "secondary", "ghost", "inverse", "link"];
const SIZES: ButtonSize[] = ["sm", "md", "lg"];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [variant, setVariant] = React.useState<ButtonVariant>("primary");
  const [size, setSize] = React.useState<ButtonSize>("md");
  const [loading, setLoading] = React.useState(false);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Variant" value={variant} options={VARIANTS} onChange={setVariant} />
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
        <DemoToggle label="Loading" checked={loading} onChange={setLoading} />
      </DemoControls>

      <DemoRow gap={12}>
        <Button variant={variant} size={size} loading={loading}>
          Request a demo <span aria-hidden>→</span>
        </Button>
        <Button variant={variant} size={size} loading={loading} disabled>
          Disabled
        </Button>
      </DemoRow>

      <DemoStack gap={12}>
        <DemoNote>All variants</DemoNote>
        <DemoRow gap={10}>
          {VARIANTS.map((v) => (
            <Button key={v} variant={v} size="sm">
              {v}
            </Button>
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>asChild · renders an anchor</DemoNote>
        <DemoRow gap={10}>
          <Button asChild variant="secondary" size="sm">
            <a href="#button" onClick={(e) => e.preventDefault()}>
              Open link <span aria-hidden>→</span>
            </a>
          </Button>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
