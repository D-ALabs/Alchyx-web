"use client";

import * as React from "react";
import { Alert, type AlertVariant } from ".";
import { Button } from "../button";
import {
  DemoStack,
  DemoRow,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

const VARIANTS: AlertVariant[] = ["info", "signal", "caution", "fault"];

const TONE_COPY: Record<AlertVariant, { title: string; body: string }> = {
  info: {
    title: "Scheduled maintenance",
    body: "The inference API will restart at 02:00 UTC. Live traffic fails over automatically.",
  },
  signal: {
    title: "Deployment passed",
    body: "All 214 evals are green. The candidate model is promoted to production.",
  },
  caution: {
    title: "Training drift detected",
    body: "The model has moved past its validation window. Re-run evaluation before shipping.",
  },
  fault: {
    title: "Sync failed",
    body: "Could not reach the feature store. Retried 3 times — check the connector credentials.",
  },
};

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <DemoStack gap={10} style={{ width: "100%", maxWidth: 320 }}>
      <Alert variant="signal" title="Deployment passed">
        All 214 evals are green.
      </Alert>
      <Alert variant="caution">Training drift detected on the candidate model.</Alert>
    </DemoStack>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [variant, setVariant] = React.useState<AlertVariant>("info");
  const [showTitle, setShowTitle] = React.useState(true);
  const [open, setOpen] = React.useState(true);

  const copy = TONE_COPY[variant];

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Variant" value={variant} options={VARIANTS} onChange={setVariant} />
        <DemoToggle label="Title" checked={showTitle} onChange={setShowTitle} />
      </DemoControls>

      <Alert variant={variant} title={showTitle ? copy.title : undefined}>
        {copy.body}
      </Alert>

      <DemoStack gap={12}>
        <DemoNote>All tones</DemoNote>
        <DemoStack gap={10}>
          {VARIANTS.map((v) => (
            <Alert key={v} variant={v} title={TONE_COPY[v].title}>
              {TONE_COPY[v].body}
            </Alert>
          ))}
        </DemoStack>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Dismissible</DemoNote>
        {open ? (
          <Alert
            variant="info"
            title="New workspace invite"
            dismissible
            onDismiss={() => setOpen(false)}
          >
            You have been added to the D-ALabs eval team. Review your pending tasks.
          </Alert>
        ) : (
          <DemoRow gap={12}>
            <DemoNote>Alert dismissed.</DemoNote>
            <Button size="sm" variant="secondary" onClick={() => setOpen(true)}>
              Restore alert
            </Button>
          </DemoRow>
        )}
      </DemoStack>
    </DemoStack>
  );
}
