"use client";

import * as React from "react";
import { Avatar, AvatarGroup, type AvatarSize, type AvatarStatus } from ".";
import {
  DemoStack,
  DemoRow,
  DemoNote,
  DemoControls,
  DemoChoice,
} from "../../registry/demo-kit";

const SIZES: AvatarSize[] = ["sm", "md", "lg", "xl"];
const STATUSES = ["none", "signal", "caution", "fault"] as const;
const PEOPLE = [
  "Ada Lovelace",
  "Grace Hopper",
  "Alan Turing",
  "Katherine Johnson",
  "Radia Perlman",
  "Barbara Liskov",
];

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoRow gap={16}>
      <Avatar name="Ada Lovelace" status="signal" />
      <AvatarGroup max={3}>
        {PEOPLE.slice(0, 5).map((p) => (
          <Avatar key={p} name={p} />
        ))}
      </AvatarGroup>
    </DemoRow>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [size, setSize] = React.useState<AvatarSize>("md");
  const [status, setStatus] = React.useState<(typeof STATUSES)[number]>("signal");
  const statusProp: AvatarStatus | undefined = status === "none" ? undefined : status;

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
        <DemoChoice label="Status" value={status} options={STATUSES} onChange={setStatus} />
      </DemoControls>

      <DemoRow gap={20}>
        <Avatar name="Ada Lovelace" size={size} status={statusProp} />
        <Avatar name="Grace Hopper" size={size} status={statusProp} />
      </DemoRow>

      <DemoStack gap={12}>
        <DemoNote>Sizes</DemoNote>
        <DemoRow gap={16}>
          {SIZES.map((s) => (
            <Avatar key={s} name="Alan Turing" size={s} />
          ))}
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Initials fallback · no image</DemoNote>
        <DemoRow gap={16}>
          <Avatar name="Katherine Johnson" />
          <Avatar name="Radia Perlman" />
          <Avatar name="Barbara Liskov" />
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Status</DemoNote>
        <DemoRow gap={16}>
          <Avatar name="Signal" status="signal" />
          <Avatar name="Caution" status="caution" />
          <Avatar name="Fault" status="fault" />
        </DemoRow>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Group · max 4</DemoNote>
        <AvatarGroup max={4} size={size}>
          {PEOPLE.map((p) => (
            <Avatar key={p} name={p} />
          ))}
        </AvatarGroup>
      </DemoStack>
    </DemoStack>
  );
}
