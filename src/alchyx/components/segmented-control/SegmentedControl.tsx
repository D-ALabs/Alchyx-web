"use client";

import * as React from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../lib/useControllableState";
import "./segmented-control.css";

export type SegmentedControlSize = "sm" | "md";

interface SegmentedControlContextValue {
  /** The currently selected item value. */
  value: string;
  /** Commit a new selection. */
  setValue: (value: string) => void;
  /** The value that owns the single roving tab stop. */
  focusable: string;
  /** Move the roving tab stop (used on arrow navigation + selection). */
  setFocused: (value: string) => void;
  /** Register an item value + its disabled state so the group can pick a fallback
   * tab stop that always lands on an enabled item. */
  register: (value: string, disabled: boolean) => () => void;
}

const SegmentedControlContext = React.createContext<SegmentedControlContextValue | null>(null);

function useSegmentedControlContext(part: string): SegmentedControlContextValue {
  const ctx = React.useContext(SegmentedControlContext);
  if (!ctx) throw new Error(`<${part}> must be used inside <SegmentedControl>.`);
  return ctx;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Controlled selected value. */
  value?: string;
  /** Initial selected value (uncontrolled). */
  defaultValue?: string;
  /** Fires with the newly-selected value. */
  onValueChange?: (value: string) => void;
  /** Padding + type scale of the segments. Default "md". */
  size?: SegmentedControlSize;
}

/**
 * SegmentedControl — a single-select, mutually-exclusive control (a view / skin
 * switcher) built on the WAI-ARIA radiogroup pattern, à la Fluent UI, Ant Design,
 * and Meta Astryx. Compose `<SegmentedControl><SegmentedControlItem/>…`. The root
 * is `role="radiogroup"`; each item is `role="radio"` with `aria-checked`. A
 * roving tabindex plus Arrow / Home / End keys move focus (manual activation);
 * Enter / Space or click commit the selection. The active segment gets an accent
 * fill on a pill track.
 */
export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControl(
    { value, defaultValue, onValueChange, size = "md", className, children, ...props },
    ref,
  ) {
    const [active, setActive] = useControllableState<string>({
      value,
      defaultValue: defaultValue ?? "",
      onChange: onValueChange,
    });

    const [order, setOrder] = React.useState<string[]>([]);
    const [disabledValues, setDisabledValues] = React.useState<Set<string>>(() => new Set());
    const [focused, setFocused] = React.useState<string | null>(null);

    const register = React.useCallback((v: string, disabled: boolean) => {
      setOrder((prev) => (prev.includes(v) ? prev : [...prev, v]));
      setDisabledValues((prev) => {
        if (prev.has(v) === disabled) return prev;
        const next = new Set(prev);
        if (disabled) next.add(v);
        else next.delete(v);
        return next;
      });
      return () => {
        setOrder((prev) => prev.filter((x) => x !== v));
        setDisabledValues((prev) => {
          if (!prev.has(v)) return prev;
          const next = new Set(prev);
          next.delete(v);
          return next;
        });
      };
    }, []);

    // The single tab stop follows the last focused item, else the selected item,
    // else the first item — but always skips disabled items, so a disabled active
    // item can never make the group keyboard-unreachable.
    const isEnabled = (v: string) => order.includes(v) && !disabledValues.has(v);
    const firstEnabled = order.find((v) => !disabledValues.has(v)) ?? "";
    const focusable =
      focused && isEnabled(focused) ? focused : isEnabled(active) ? active : firstEnabled;

    const ctx = React.useMemo<SegmentedControlContextValue>(
      () => ({ value: active, setValue: setActive, focusable, setFocused, register }),
      [active, setActive, focusable, register],
    );

    return (
      <SegmentedControlContext.Provider value={ctx}>
        <div
          ref={ref}
          role="radiogroup"
          data-size={size}
          className={cn("alx-seg", `alx-seg--${size}`, className)}
          {...props}
        >
          {children}
        </div>
      </SegmentedControlContext.Provider>
    );
  },
);

export interface SegmentedControlItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The value this segment selects. */
  value: string;
}

/**
 * SegmentedControlItem — one selectable segment. Renders a `role="radio"` button
 * whose `aria-checked` mirrors the group selection. Must be a child of
 * `<SegmentedControl>`.
 */
export const SegmentedControlItem = React.forwardRef<HTMLButtonElement, SegmentedControlItemProps>(
  function SegmentedControlItem(
    { value, className, disabled, onClick, onKeyDown, children, ...props },
    ref,
  ) {
    const { value: active, setValue, focusable, setFocused, register } =
      useSegmentedControlContext("SegmentedControlItem");
    const selected = active === value;

    React.useEffect(() => register(value, !!disabled), [register, value, disabled]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;

      const group = event.currentTarget.closest('[role="radiogroup"]');
      if (!group) return;
      const items = Array.from(
        group.querySelectorAll<HTMLButtonElement>('[role="radio"]:not([disabled])'),
      );
      const idx = items.indexOf(event.currentTarget);
      if (idx === -1) return;

      let target = -1;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          target = (idx + 1) % items.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          target = (idx - 1 + items.length) % items.length;
          break;
        case "Home":
          target = 0;
          break;
        case "End":
          target = items.length - 1;
          break;
        default:
          return;
      }

      // Manual activation: arrows move focus + the roving tab stop only. Enter,
      // Space, and click (below) commit the selection.
      event.preventDefault();
      const el = items[target];
      setFocused(el.dataset.value ?? "");
      el.focus();
    };

    return (
      <button
        ref={ref}
        type="button"
        role="radio"
        aria-checked={selected}
        data-value={value}
        data-state={selected ? "active" : "inactive"}
        disabled={disabled}
        tabIndex={focusable === value ? 0 : -1}
        className={cn("alx-seg__item", className)}
        onClick={(event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          setValue(value);
          setFocused(value);
        }}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </button>
    );
  },
);
