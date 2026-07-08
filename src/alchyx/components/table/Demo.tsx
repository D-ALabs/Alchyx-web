"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from ".";
import { DemoStack, DemoControls, DemoToggle } from "../../registry/demo-kit";

type StatusTone = "signal" | "caution" | "neutral";

const TONE_HUE: Record<StatusTone, string> = {
  signal: "var(--status-signal)",
  caution: "var(--status-caution)",
  neutral: "var(--sub)",
};

/** A plain status span (deliberately not the Badge component) with a tone dot. */
function StatusCell({ tone, children }: { tone: StatusTone; children: React.ReactNode }) {
  const hue = TONE_HUE[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: hue,
      }}
    >
      <span
        aria-hidden="true"
        style={{ width: 6, height: 6, borderRadius: "50%", background: hue }}
      />
      {children}
    </span>
  );
}

interface Row {
  name: string;
  category: string;
  status: string;
  tone: StatusTone;
}

const ROWS: Row[] = [
  { name: "Button", category: "Actions", status: "Stable", tone: "signal" },
  { name: "Input", category: "Forms", status: "Stable", tone: "signal" },
  { name: "Dialog", category: "Overlay", status: "Beta", tone: "caution" },
  { name: "Tabs", category: "Navigation", status: "Stable", tone: "signal" },
  { name: "Skeleton", category: "Feedback", status: "Draft", tone: "neutral" },
];

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <div style={{ width: "100%", maxWidth: 340 }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.slice(0, 3).map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>
                <StatusCell tone={row.tone}>{row.status}</StatusCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [hover, setHover] = React.useState(true);

  return (
    <DemoStack gap={24}>
      <DemoControls>
        <DemoToggle label="Row hover" checked={hover} onChange={setHover} />
      </DemoControls>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow key={row.name} hover={hover}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>
                <StatusCell tone={row.tone}>{row.status}</StatusCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DemoStack>
  );
}
