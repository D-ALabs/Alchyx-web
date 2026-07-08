"use client";

import * as React from "react";
import { Button } from "@/alchyx/components/button";
import { Badge } from "@/alchyx/components/badge";
import { Switch } from "@/alchyx/components/switch";
import { Input } from "@/alchyx/components/input";

const SKINS = [
  { id: "lab", name: "Lab", note: "paper & ink" },
  { id: "dark", name: "Dark", note: "slate & bone" },
  { id: "ark", name: "Ark", note: "abyss & gold" },
] as const;

/**
 * The same specimens rendered in all three skins side by side. Each panel forces
 * its own `data-theme` + `.alx-root` so the shared components re-tint to that
 * skin's color — the literal "one component, our three colors" idea.
 */
export function TriSkinShowcase() {
  return (
    <div className="triskin">
      {SKINS.map((s) => (
        <div key={s.id} className="triskin__panel alx-root alx-grid" data-theme={s.id}>
          <div className="triskin__head">
            <span className="triskin__name">{s.name}</span>
            <span className="triskin__note">{s.note}</span>
          </div>
          <div className="triskin__specimens">
            <div className="triskin__row">
              <Button size="sm">
                Get started <span aria-hidden>→</span>
              </Button>
              <Button size="sm" variant="secondary">
                Docs
              </Button>
            </div>
            <div className="triskin__row">
              <Badge variant="accent">Accent</Badge>
              <Badge variant="signal" dot>
                Live
              </Badge>
              <Switch defaultChecked size="sm" />
            </div>
            <Input size="sm" placeholder="you@studio.com" leading="@" />
          </div>
        </div>
      ))}
    </div>
  );
}
