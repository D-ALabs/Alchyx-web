"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from ".";
import { Button } from "../button";
import { DemoStack, DemoRow, DemoNote } from "../../registry/demo-kit";

/**
 * Compact, non-interactive snapshot for the catalog card — a statically-open
 * menu surface (reuses the menu parts without the portal / trigger).
 */
export function Preview() {
  return (
    <DropdownMenu>
      <div className="alx-menu" role="menu" aria-label="Actions" style={{ minWidth: 180 }}>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Rename</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Delete</DropdownMenuItem>
      </div>
    </DropdownMenu>
  );
}

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [lastAction, setLastAction] = React.useState<string>("—");

  return (
    <DemoStack gap={20}>
      <DemoNote>Open the menu — ↑ ↓ move, Enter selects, Esc closes</DemoNote>

      <DemoRow gap={16}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              Actions <span aria-hidden>▾</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Workspace</DropdownMenuLabel>
            <DropdownMenuItem onSelect={() => setLastAction("Rename")}>Rename</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setLastAction("Duplicate")}>
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setLastAction("Share")}>Share…</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled onSelect={() => setLastAction("Archive")}>
              Archive (soon)
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setLastAction("Delete")}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoRow>

      <DemoNote>Last action · {lastAction}</DemoNote>
    </DemoStack>
  );
}
