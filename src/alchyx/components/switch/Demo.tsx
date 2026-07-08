"use client";

import * as React from "react";
import { Switch } from ".";
import { DemoStack, DemoRow, DemoNote } from "../../registry/demo-kit";

/** Compact snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={16}>
      <Switch defaultChecked size="sm" />
      <Switch defaultChecked />
      <Switch size="sm" />
    </DemoRow>
  );
}

/** Full interactive showcase. */
export function Demo() {
  const [notifications, setNotifications] = React.useState(true);

  return (
    <DemoStack gap={28}>
      <DemoStack gap={16}>
        <Switch
          checked={notifications}
          onCheckedChange={setNotifications}
          label={`Notifications ${notifications ? "on" : "off"}`}
        />
        <Switch defaultChecked label="Sync across devices" />
        <Switch label="Beta features" />
        <Switch disabled label="Managed by admin (disabled)" />
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Sizes</DemoNote>
        <DemoRow gap={18}>
          <Switch defaultChecked size="sm" />
          <Switch defaultChecked size="md" />
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
