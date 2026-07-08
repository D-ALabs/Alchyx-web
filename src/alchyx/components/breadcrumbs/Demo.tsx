"use client";

import * as React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from ".";
import { DemoStack, DemoControls, DemoChoice, DemoNote } from "../../registry/demo-kit";

/** Keep demo links inert — no navigation on this page. */
const prevent = (event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault();

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="#" onClick={prevent}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#" onClick={prevent}>
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink current>Button</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}

type SeparatorStyle = "slash" | "chevron";
const SEPARATOR_STYLES: SeparatorStyle[] = ["slash", "chevron"];
const SEPARATOR_GLYPH: Record<SeparatorStyle, string> = { slash: "/", chevron: "›" };

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [style, setStyle] = React.useState<SeparatorStyle>("slash");

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice
          label="Separator"
          value={style}
          options={SEPARATOR_STYLES}
          onChange={setStyle}
        />
      </DemoControls>

      <Breadcrumbs separator={SEPARATOR_GLYPH[style]}>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={prevent}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={prevent}>
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink current>Button</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumbs>

      <DemoStack gap={12}>
        <DemoNote>asChild · wraps a router link</DemoNote>
        <Breadcrumbs>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#" onClick={prevent}>
                Docs
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#" onClick={prevent}>
                Primitives
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink current>Slot</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumbs>
      </DemoStack>
    </DemoStack>
  );
}
