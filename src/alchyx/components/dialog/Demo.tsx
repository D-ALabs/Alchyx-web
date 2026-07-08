"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from ".";
import { Button } from "../button";
import { Input } from "../input";
import { DemoRow, DemoNote, DemoStack } from "../../registry/demo-kit";

/** Compact snapshot for the catalog card. */
export function Preview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Open dialog</Button>
      </DialogTrigger>
      <DialogContent width={460}>
        <DialogHeader>
          <DialogTitle>Request a demo</DialogTitle>
          <DialogDescription>We&apos;ll reach out within one business day.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" size="sm">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/** Full interactive showcase. */
export function Demo() {
  return (
    <DemoStack gap={20}>
      <DemoNote>Trigger the modal — Tab is trapped, Escape closes</DemoNote>
      <DemoRow gap={12}>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Request a demo</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request a demo</DialogTitle>
              <DialogDescription>
                Tell us where to send the invite and we&apos;ll reach out within one business day.
              </DialogDescription>
            </DialogHeader>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Input label="Name" placeholder="Ada Lovelace" />
              <Input label="Work email" placeholder="you@studio.com" leading="@" />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Send request</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Delete workspace</Button>
          </DialogTrigger>
          <DialogContent width={440}>
            <DialogHeader>
              <DialogTitle>Delete workspace?</DialogTitle>
              <DialogDescription>
                This permanently removes the workspace and all of its specimens. This cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Keep it</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Delete</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoRow>
    </DemoStack>
  );
}
