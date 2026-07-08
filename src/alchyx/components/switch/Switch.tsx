"use client";

import * as React from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../lib/useControllableState";
import { useId } from "../../lib/useId";
import "./switch.css";

export type SwitchSize = "sm" | "md";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "defaultChecked"> {
  /** Controlled checked state. */
  checked?: boolean;
  /** Initial checked state (uncontrolled). */
  defaultChecked?: boolean;
  /** Fires with the next checked value. */
  onCheckedChange?: (checked: boolean) => void;
  /** Knob + track scale. Default "md". */
  size?: SwitchSize;
  /** Optional inline label rendered after the track. */
  label?: React.ReactNode;
}

/**
 * Switch — a toggle following the Radix / Base UI switch pattern: a real button
 * with role="switch" and aria-checked, controllable or uncontrolled via
 * useControllableState. The knob rides a spring easing.
 */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    checked,
    defaultChecked = false,
    onCheckedChange,
    size = "md",
    label,
    className,
    disabled,
    id,
    onClick,
    ...props
  },
  ref,
) {
  const [on, setOn] = useControllableState<boolean>({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });
  const autoId = useId(id);
  const labelId = `${autoId}-label`;

  const control = (
    <button
      ref={ref}
      type="button"
      role="switch"
      id={autoId}
      aria-checked={on}
      aria-labelledby={label ? labelId : undefined}
      data-state={on ? "checked" : "unchecked"}
      disabled={disabled}
      className={cn("alx-switch", `alx-switch--${size}`, className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setOn((prev) => !prev);
      }}
      {...props}
    >
      <span className="alx-switch__track" aria-hidden="true">
        <span className="alx-switch__thumb" />
      </span>
    </button>
  );

  if (!label) return control;

  return (
    <span className="alx-switch-row">
      {control}
      <span className="alx-switch-row__label" id={labelId}>
        {label}
      </span>
    </span>
  );
});
