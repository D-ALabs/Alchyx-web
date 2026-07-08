"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from ".";
import { DemoStack, DemoNote } from "../../registry/demo-kit";

/** Compact snapshot for the catalog card. */
export function Preview() {
  return (
    <div style={{ width: "100%" }}>
      <Tabs defaultValue="lab">
        <TabsList aria-label="Skins">
          <TabsTrigger value="lab">Lab</TabsTrigger>
          <TabsTrigger value="dark">Dark</TabsTrigger>
          <TabsTrigger value="ark">Ark</TabsTrigger>
        </TabsList>
        <TabsContent value="lab">Paper &amp; ink — the daylight default.</TabsContent>
        <TabsContent value="dark">Slate &amp; bone — the low-light workspace.</TabsContent>
        <TabsContent value="ark">Abyss &amp; gold — the premium skin.</TabsContent>
      </Tabs>
    </div>
  );
}

/** Full interactive showcase. */
export function Demo() {
  return (
    <DemoStack gap={30}>
      <div style={{ width: "100%" }}>
        <Tabs defaultValue="overview">
          <TabsList aria-label="Component sections">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
            <TabsTrigger value="a11y">A11y</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              Soon
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            Tabs organise peer content into a single, calm surface. Only one panel is visible at a
            time and the active tab carries the accent indicator.
          </TabsContent>
          <TabsContent value="anatomy">
            A tablist of triggers plus one tabpanel per value. The active trigger owns the tab
            sequence via roving tabindex.
          </TabsContent>
          <TabsContent value="a11y">
            Arrow keys move focus and activate; Home / End jump to the ends. Everything is wired
            with aria-controls / aria-labelledby.
          </TabsContent>
        </Tabs>
      </div>

      <DemoStack gap={12}>
        <DemoNote>Vertical orientation</DemoNote>
        <div style={{ width: "100%" }}>
          <Tabs defaultValue="tokens" orientation="vertical">
            <TabsList aria-label="Foundations">
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="type">Type</TabsTrigger>
              <TabsTrigger value="motion">Motion</TabsTrigger>
            </TabsList>
            <TabsContent value="tokens">CSS variables that re-tint the whole tree.</TabsContent>
            <TabsContent value="type">Display · Sans · Mono — the pairing is the brand.</TabsContent>
            <TabsContent value="motion">Slow, calm easings — expo &amp; spring.</TabsContent>
          </Tabs>
        </div>
      </DemoStack>
    </DemoStack>
  );
}
