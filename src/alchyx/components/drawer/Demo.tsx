"use client";

import * as React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from ".";
import { Button } from "../button";
import { DemoRow, DemoNote, DemoStack } from "../../registry/demo-kit";

/** Compact snapshot for the catalog card. */
export function Preview() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm">Open panel</Button>
      </DrawerTrigger>
      <DrawerContent side="right" size={360}>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>Refine the specimens shown in the catalog.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost" size="sm">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

/** Full interactive showcase. */
export function Demo() {
  return (
    <DemoStack gap={20}>
      <DemoNote>Slides in from an edge — Tab is trapped, Escape closes</DemoNote>
      <DemoRow gap={12}>
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Open right drawer</Button>
          </DrawerTrigger>
          <DrawerContent side="right" size={420}>
            <DrawerHeader>
              <DrawerTitle>Filters</DrawerTitle>
              <DrawerDescription>
                Refine the specimens shown in the catalog. Changes apply when you close the panel.
              </DrawerDescription>
            </DrawerHeader>
            <p style={{ color: "var(--sub)", lineHeight: 1.6, margin: 0 }}>
              A right-anchored sheet is the workhorse layout for filters, details, and settings that
              sit beside the primary content without leaving the page.
            </p>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button>Apply</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open left drawer</Button>
          </DrawerTrigger>
          <DrawerContent side="left" size={320}>
            <DrawerHeader>
              <DrawerTitle>Navigation</DrawerTitle>
              <DrawerDescription>Jump to a section of the workspace.</DrawerDescription>
            </DrawerHeader>
            <p style={{ color: "var(--sub)", lineHeight: 1.6, margin: 0 }}>
              A left-anchored sheet reads as navigation — the same primitive stack, mirrored to the
              opposite edge.
            </p>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="ghost">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DemoRow>
    </DemoStack>
  );
}
