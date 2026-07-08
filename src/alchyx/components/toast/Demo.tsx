"use client";

import * as React from "react";
import { ToastProvider, useToast, type ToastOptions } from ".";
import { Button } from "../button";
import { DemoStack, DemoRow, DemoNote } from "../../registry/demo-kit";

/**
 * Compact, non-interactive snapshot for the catalog card. Provider-free: a single
 * static toast-styled card rendered with plain markup.
 */
export function Preview() {
  return (
    <div className="alx-toast alx-toast--signal" style={{ width: 300 }}>
      <span className="alx-toast__accent" aria-hidden="true" />
      <div className="alx-toast__body">
        <p className="alx-toast__title">Deploy complete</p>
        <p className="alx-toast__desc">alchyx-web shipped to production.</p>
      </div>
      <button type="button" className="alx-toast__close" aria-label="Dismiss notification">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M3.5 3.5l7 7M10.5 3.5l-7 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

/** Inner component — lives under the provider so it can call useToast(). */
function ToastLab() {
  const { toast, dismiss } = useToast();
  const lastId = React.useRef<number | null>(null);

  const push = (opts: ToastOptions) => {
    lastId.current = toast(opts);
  };

  return (
    <DemoStack gap={18}>
      <DemoNote>Trigger notifications — they stack bottom-right and auto-dismiss</DemoNote>

      <DemoRow gap={10}>
        <Button
          size="sm"
          onClick={() =>
            push({ title: "Saved", description: "Your workspace is up to date.", variant: "info" })
          }
        >
          Info
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            push({
              title: "Deploy complete",
              description: "alchyx-web shipped to production.",
              variant: "signal",
            })
          }
        >
          Signal
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            push({
              title: "Approaching quota",
              description: "80% of this month's build minutes are used.",
              variant: "caution",
            })
          }
        >
          Caution
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            push({
              title: "Build failed",
              description: "3 type errors in the registry.",
              variant: "fault",
            })
          }
        >
          Fault
        </Button>
      </DemoRow>

      <DemoRow gap={10}>
        <Button size="sm" variant="ghost" onClick={() => push({ title: "Copied to clipboard" })}>
          Title only
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() =>
            push({
              title: "Sticky note",
              description: "duration: 0 — stays until dismissed.",
              variant: "caution",
              duration: 0,
            })
          }
        >
          No auto-dismiss
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            if (lastId.current !== null) dismiss(lastId.current);
          }}
        >
          Dismiss last
        </Button>
      </DemoRow>
    </DemoStack>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  return (
    <ToastProvider>
      <ToastLab />
    </ToastProvider>
  );
}
