"use client";

import * as React from "react";
import { Select, type SelectSize, type SelectOption } from ".";
import {
  DemoStack,
  DemoNote,
  DemoControls,
  DemoChoice,
  DemoToggle,
} from "../../registry/demo-kit";

const ROLES: SelectOption[] = [
  { label: "Design engineer", value: "design-eng" },
  { label: "Product designer", value: "product" },
  { label: "Frontend engineer", value: "frontend" },
  { label: "Design systems lead", value: "ds-lead" },
  { label: "Researcher", value: "research" },
];

/** Compact snapshot for the catalog card. */
export function Preview() {
  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <Select label="Role" options={ROLES} defaultValue="design-eng" />
    </div>
  );
}

const SIZES: SelectSize[] = ["sm", "md", "lg"];

/** Full interactive showcase for the detail page. */
export function Demo() {
  const [size, setSize] = React.useState<SelectSize>("md");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <DemoStack gap={28}>
      <DemoControls>
        <DemoChoice label="Size" value={size} options={SIZES} onChange={setSize} />
        <DemoToggle label="Invalid" checked={invalid} onChange={setInvalid} />
        <DemoToggle label="Disabled" checked={disabled} onChange={setDisabled} />
      </DemoControls>

      <div style={{ width: "100%", maxWidth: 380 }}>
        <Select
          label="Your role"
          placeholder="Select a role…"
          options={ROLES}
          size={size}
          invalid={invalid}
          disabled={disabled}
          hint={invalid ? undefined : "We'll tailor the walkthrough to your role."}
          error={invalid ? "Please choose a role to continue." : undefined}
        />
      </div>

      <DemoStack gap={12}>
        <DemoNote>Options as children</DemoNote>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Select label="Deploy target" size={size} defaultValue="preview">
            <optgroup label="Ephemeral">
              <option value="preview">Preview</option>
              <option value="branch">Branch</option>
            </optgroup>
            <optgroup label="Persistent">
              <option value="staging">Staging</option>
              <option value="production">Production</option>
            </optgroup>
          </Select>
        </div>
      </DemoStack>

      <DemoStack gap={12}>
        <DemoNote>Invalid, with placeholder</DemoNote>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Select
            label="Timezone"
            placeholder="Select a timezone…"
            size={size}
            invalid
            error="A timezone is required."
            options={[
              { label: "UTC", value: "utc" },
              { label: "Pacific (PT)", value: "pt" },
              { label: "Eastern (ET)", value: "et" },
              { label: "Central European (CET)", value: "cet" },
            ]}
          />
        </div>
      </DemoStack>
    </DemoStack>
  );
}
