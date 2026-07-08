"use client";

import * as React from "react";
import { Tag, type TagVariant, type TagSize } from ".";
import { Button } from "../button";
import {
  DemoRow,
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
} from "../../registry/demo-kit";

/** A small category color dot used as a leading adornment. */
function Dot({ color }: { color: string }) {
  return (
    <span
      style={{ display: "block", width: 7, height: 7, borderRadius: "50%", background: color }}
    />
  );
}

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={8}>
      <Tag size="sm" leading={<Dot color="var(--status-signal)" />}>
        Live
      </Tag>
      <Tag size="sm" variant="accent">
        React
      </Tag>
      <Tag size="sm">Design</Tag>
    </DemoRow>
  );
}

const VARIANTS: TagVariant[] = ["neutral", "accent"];
const SIZES: TagSize[] = ["sm", "md"];
const ALL_FILTERS = ["Design", "Engineering", "Research", "Accessibility", "Motion"];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [variant, setVariant] = React.useState<TagVariant>("neutral");
  const [size, setSize] = React.useState<TagSize>("md");
  const [filters, setFilters] = React.useState<string[]>(ALL_FILTERS);

  const remove = (name: string) =>
    setFilters((prev) => prev.filter((f) => f !== name));

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Variant" value={variant} options={VARIANTS} onChange={setVariant} />
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
      </DemoControls>

      <DemoStack gap={12}>
        <DemoNote>Removable filters</DemoNote>
        <DemoRow gap={8} align="center">
          {filters.length > 0 ? (
            filters.map((f) => (
              <Tag key={f} variant={variant} size={size} onRemove={() => remove(f)}>
                {f}
              </Tag>
            ))
          ) : (
            <DemoNote>All filters cleared</DemoNote>
          )}
          {filters.length < ALL_FILTERS.length && (
            <Button variant="ghost" size="sm" onClick={() => setFilters(ALL_FILTERS)}>
              Reset
            </Button>
          )}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Non-removable · with leading dot</DemoNote>
        <DemoRow gap={8}>
          <Tag size={size} leading={<Dot color="var(--status-signal)" />}>
            Stable
          </Tag>
          <Tag size={size} variant="accent" leading={<Dot color="var(--accent)" />}>
            Beta
          </Tag>
          <Tag size={size} leading={<Dot color="var(--status-caution)" />}>
            Draft
          </Tag>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
