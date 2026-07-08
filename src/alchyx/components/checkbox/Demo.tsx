"use client";

import * as React from "react";
import { Checkbox } from ".";
import { DemoStack, DemoRow, DemoNote } from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={18}>
      <Checkbox defaultChecked label="Checked" />
      <Checkbox indeterminate label="Mixed" />
      <Checkbox label="Off" />
    </DemoRow>
  );
}

const PERMISSIONS = ["Read", "Write", "Admin"] as const;

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [items, setItems] = React.useState<boolean[]>([true, false, false]);

  const allChecked = items.every(Boolean);
  const noneChecked = items.every((v) => !v);
  const parentIndeterminate = !allChecked && !noneChecked;

  const setAt = (index: number, next: boolean) =>
    setItems((prev) => prev.map((v, i) => (i === index ? next : v)));

  return (
    <DemoStack gap={28}>
      <DemoStack gap={12}>
        <DemoNote>States</DemoNote>
        <DemoStack gap={14}>
          <Checkbox defaultChecked label="Checked" />
          <Checkbox label="Unchecked" />
          <Checkbox indeterminate label="Indeterminate" />
          <Checkbox disabled defaultChecked label="Disabled (checked)" />
          <Checkbox disabled label="Disabled (unchecked)" />
        </DemoStack>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Sizes</DemoNote>
        <DemoRow gap={20}>
          <Checkbox defaultChecked size="sm" label="Small" />
          <Checkbox defaultChecked size="md" label="Medium" />
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Controlled · select all</DemoNote>
        <DemoStack gap={14}>
          <Checkbox
            checked={allChecked}
            indeterminate={parentIndeterminate}
            onCheckedChange={(next) => setItems(PERMISSIONS.map(() => next))}
            label="All permissions"
          />
          <DemoStack gap={12} style={{ paddingLeft: 30 }}>
            {PERMISSIONS.map((name, i) => (
              <Checkbox
                key={name}
                checked={items[i]}
                onCheckedChange={(next) => setAt(i, next)}
                label={name}
              />
            ))}
          </DemoStack>
        </DemoStack>
      </DemoStack>
    </DemoStack>
  );
}
