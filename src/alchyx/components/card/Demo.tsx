"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from ".";
import { Button } from "../button";
import { DemoStack, DemoRow, DemoNote, DemoControls, DemoToggle } from "../../registry/demo-kit";

/** Compact, non-interactive snapshot for the catalog card. */
export function Preview() {
  return (
    <Card style={{ width: 248 }}>
      <CardHeader>
        <CardTitle>Deploy preview</CardTitle>
        <CardDescription>Pushed 2 min ago</CardDescription>
      </CardHeader>
      <CardContent>A throwaway URL for every push.</CardContent>
    </Card>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [interactive, setInteractive] = React.useState(false);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoToggle label="Interactive" checked={interactive} onChange={setInteractive} />
      </DemoControls>

      <DemoRow gap={20} align="stretch">
        <Card interactive={interactive} style={{ maxWidth: 340 }}>
          <CardHeader>
            <CardTitle>Deploy preview</CardTitle>
            <CardDescription>Pushed to alchyx-web · 2 min ago</CardDescription>
          </CardHeader>
          <CardContent>
            Every push spins up a throwaway URL so reviewers can click through the change before it
            merges into the trunk.
          </CardContent>
          <CardFooter>
            <Button size="sm">
              Visit preview <span aria-hidden>→</span>
            </Button>
            <Button size="sm" variant="ghost">
              Dismiss
            </Button>
          </CardFooter>
        </Card>
      </DemoRow>

      <DemoStack gap={12}>
        <DemoNote>Interactive · asChild renders a link — hover to lift</DemoNote>
        <DemoRow gap={20} align="stretch">
          <Card interactive asChild style={{ maxWidth: 340 }}>
            <a href="#card" onClick={(e) => e.preventDefault()}>
              <CardHeader>
                <CardTitle>Alchyx tokens</CardTitle>
                <CardDescription>The Lab / Dark / Ark skins in one variable set.</CardDescription>
              </CardHeader>
              <CardContent>
                Open the token reference to see every color, radius, and easing.
              </CardContent>
              <CardFooter>
                <span aria-hidden>Read the docs →</span>
              </CardFooter>
            </a>
          </Card>
        </DemoRow>
      </DemoStack>
    </DemoStack>
  );
}
