"use client";

import * as React from "react";
import { Skeleton } from ".";
import { DemoStack, DemoRow, DemoNote, DemoControls, DemoToggle } from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card: a fake profile card. */
export function Preview() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 240,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Skeleton variant="circle" width={44} height={44} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="45%" />
        </div>
      </div>
      <Skeleton variant="rect" height={64} />
    </div>
  );
}

/** Full interactive showcase: a fake card that swaps its skeleton for content. */
export function Demo() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoToggle label="Loaded" checked={loaded} onChange={setLoaded} />
      </DemoControls>

      <DemoStack gap={12}>
        <DemoNote>Card · circle + two text lines + rect</DemoNote>
        <div
          aria-busy={!loaded}
          style={{
            width: "100%",
            maxWidth: 380,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            padding: 20,
            background: "var(--surface)",
            border: "1px solid var(--bd)",
            borderRadius: "var(--radius-card)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {loaded ? (
              <div
                aria-hidden
                style={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "var(--av-bg)",
                  color: "var(--av-tx)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                AL
              </div>
            ) : (
              <Skeleton variant="circle" width={48} height={48} />
            )}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
              {loaded ? (
                <>
                  <strong
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 17,
                      color: "var(--ink)",
                    }}
                  >
                    Ada Lovelace
                  </strong>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--sub)" }}>
                    Research Engineer
                  </span>
                </>
              ) : (
                <>
                  <Skeleton variant="text" width="55%" />
                  <Skeleton variant="text" width="35%" />
                </>
              )}
            </div>
          </div>

          {loaded ? (
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink2)",
              }}
            >
              Prototyping the analytical engine — an interactive notebook for composing
              and running experiments across the Alchyx design language.
            </p>
          ) : (
            <Skeleton variant="rect" height={80} />
          )}
        </div>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Variants</DemoNote>
        <DemoRow gap={24} align="center">
          <Skeleton variant="circle" width={52} height={52} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 180 }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="60%" />
          </div>
          <Skeleton variant="rect" width={132} height={80} />
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
