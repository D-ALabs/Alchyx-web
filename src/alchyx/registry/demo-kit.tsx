"use client";

/**
 * demo-kit — tiny, dependency-free scaffolding shared by every component's
 * `Demo.tsx` so specimens look consistent across the catalog. All styling reads
 * Alchyx tokens (see demo-kit.css). Import from "../../registry/demo-kit".
 *
 * Convention: every `Demo.tsx` exports two named client components —
 *   export function Preview()  // compact, non-interactive card snapshot
 *   export function Demo()     // full interactive showcase for the detail page
 */
import * as React from "react";
import { cn } from "../lib/cn";
import "./demo-kit.css";

/** Horizontal, wrapping row of specimens. */
export function DemoRow({
  children,
  gap = 12,
  align = "center",
  className,
  style,
}: {
  children: React.ReactNode;
  gap?: number;
  align?: React.CSSProperties["alignItems"];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("dk-row", className)}
      style={{ gap, alignItems: align, ...style }}
    >
      {children}
    </div>
  );
}

/** Vertical stack of specimens. */
export function DemoStack({
  children,
  gap = 16,
  className,
  style,
}: {
  children: React.ReactNode;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn("dk-stack", className)} style={{ gap, ...style }}>
      {children}
    </div>
  );
}

/** A mono-caps caption (the signature label layer). */
export function DemoNote({ children }: { children: React.ReactNode }) {
  return <span className="dk-note">{children}</span>;
}

/** A labelled control group for the interactive showcase. */
export function DemoField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="dk-field">
      <span className="dk-field__label">{label}</span>
      <div className="dk-field__control">{children}</div>
    </label>
  );
}

/** A container that groups the interactive controls above/below a specimen. */
export function DemoControls({ children }: { children: React.ReactNode }) {
  return <div className="dk-controls">{children}</div>;
}

/**
 * Segmented option picker (mono-caps, like the site skin switcher). Generic over
 * the option union so it stays fully typed in demos.
 */
export function DemoChoice<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label?: string;
  value: T;
  options: readonly T[];
  onChange: (next: T) => void;
}) {
  const control = (
    <div className="dk-seg" role="group" aria-label={label}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className="dk-seg__btn"
          data-active={value === opt || undefined}
          aria-pressed={value === opt}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
  return label ? <DemoField label={label}>{control}</DemoField> : control;
}

/** A labelled boolean toggle for demos (not the shipped Switch component). */
export function DemoToggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className="dk-toggle"
      data-on={checked || undefined}
      onClick={() => onChange(!checked)}
    >
      <span className="dk-toggle__track" aria-hidden="true">
        <span className="dk-toggle__thumb" />
      </span>
      <span className="dk-toggle__label">{label}</span>
    </button>
  );
}
