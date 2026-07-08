# Alchyx (web) — component authoring brief

You are adding **one** component to the Alchyx component library vendored inside
this Next.js product site. Alchyx is D-ALabs' "Ultimate Design System": one
coherent, accessible React + TypeScript library on the **Lab / Dark / Ark**
design language. Follow this brief **exactly** so every independently-authored
component comes out as one system.

The canonical references already exist in the repo — **read them before you
write**:

- `src/alchyx/components/button/{Button.tsx,button.css,index.ts,meta.ts,Demo.tsx}` — the baseline.
- `src/alchyx/components/input/*` — a form field (label / hint / error, ARIA wiring, adornments).
- `src/alchyx/components/switch/*` — a controllable boolean (useControllableState, role=switch).
- `src/alchyx/components/tabs/*` — a roving-tabindex composite.
- `src/alchyx/components/dialog/*` — a full overlay stack (Portal, focus trap, scroll lock, dismissable).
- `src/alchyx/registry/demo-kit.tsx` — shared demo scaffolding (read its exports).
- `src/alchyx/registry/types.ts` — the `ComponentMeta` contract.

## File layout (exact)

Create the folder `src/alchyx/components/<slug>/` (kebab-case slug) with exactly
five files:

1. `<PascalName>.tsx` — the component(s). Compound components live in one file. **First line `"use client";`**. `import "./<slug>.css";` at the top.
2. `<slug>.css` — the styles. **Filename must equal the slug.**
3. `index.ts` — re-exports the component(s) and every public type.
4. `meta.ts` — the catalog entry (pure data, no React). `export const <camelSlug>Meta: ComponentMeta = {...}` **and** `export default <camelSlug>Meta;`.
5. `Demo.tsx` — `"use client";` exporting two **named** client components: `export function Preview()` (compact, non-interactive snapshot for the catalog card) and `export function Demo()` (full interactive showcase for the detail page).

Do NOT edit any shared/barrel file — the integrator regenerates `src/alchyx/index.ts`,
`src/alchyx/registry/catalog.ts`, and `src/alchyx/registry/demos.tsx` by scanning folders.

## Imports — what you may use

- React: `import * as React from "react";`
- Class combiner: `import { cn } from "../../lib/cn";`
- `asChild` support: `import { Slot } from "../../lib/Slot";`
- Behavior primitives from `../../lib` (already built — do not re-implement): `useControllableState`, `useId`, `useComposedRefs` (from `../../lib/composeRefs`), `Portal`, `VisuallyHidden`, `useDismissable`, `useFocusTrap`, `useScrollLock`, `useIsomorphicLayoutEffect`.
- Typed tokens if needed: `import { ... } from "@alchyx/tokens";`
- In `Demo.tsx` only: demo-kit from `../../registry/demo-kit` (`DemoRow`, `DemoStack`, `DemoNote`, `DemoField`, `DemoControls`, `DemoChoice`, `DemoToggle`) and, for triggers, `Button` from `../button` and/or `Input` from `../input` (these definitely exist). Do NOT import other sibling components (they may not exist yet).

**No other dependencies.** React + react-dom only. No Radix, clsx, framer-motion, or positioning libs.

## TypeScript conventions

- `React.forwardRef` for any component rendering a DOM element, with a named function so the displayName is set: `forwardRef<HTMLXElement, XProps>(function X(...) {...})`.
- Props interface extends the right DOM attributes (`React.ComponentPropsWithoutRef<"el">` / `*HTMLAttributes`) so consumers pass `className`, `id`, `aria-*`, data-attrs, handlers. Merge incoming `className` with `cn(...)`; spread `{...props}` last. If you attach your own `onClick`/`onKeyDown`, destructure it out of props first so the `{...props}` spread does not overwrite your handler — then call the consumer's handler inside yours and bail if `event.defaultPrevented`.
- Offer `asChild?: boolean` (via `Slot`) on single-element trigger/root components where polymorphism helps. When you branch `const Comp = asChild ? Slot : "button"`, type it `const Comp: React.ElementType = asChild ? Slot : "button";` to avoid union-prop friction, and `ref={ref as never}`.
- Controlled/uncontrolled via `useControllableState` — expose the idiomatic pair (`checked`/`defaultChecked`/`onCheckedChange`, `value`/`defaultValue`/`onValueChange`, `open`/`defaultOpen`/`onOpenChange`).
- Generate ARIA ids with `useId`.
- Strict TS, no `any` in public types. This site's tsconfig does not set `noUnusedLocals`, but ESLint runs in `next build` — **no unused imports or vars** (they fail the build).

## Styling — the D-ALabs language

- Class names BEM-ish, all prefixed `alx-<comp>`: root `.alx-<comp>`, parts `.alx-<comp>__part`, variants `.alx-<comp>--variant`. Never collide with other components.
- **Only** use the CSS variables below (plus the three status hexes). Never hardcode any other color; never use pure black/white (paper `#F5F2EA`, ink `#16202E`). Everything reads variables, so it works in all three skins automatically — do not write skin-specific rules.
- Radius vocabulary: controls/inputs `var(--radius-control)` 11px (compact `--radius-control-sm` 10px), cards `var(--radius-card)` 16px, panels/modals `var(--radius-panel)` 18px (biggest `--radius-panel-lg` 22px), pills/toggles/badges `var(--radius-pill)` 100px, avatars/dots `50%`.
- Typography — three roles, no substitutes: `var(--font-display)` (Space Grotesk 600) headings/titles/stat numerals; `var(--font-sans)` (Hanken Grotesk 400) body/labels/button text; `var(--font-mono)` (Space Mono 400) eyebrows/specs/table headers/metadata/badges — **always `text-transform: uppercase` + wide tracking `.1em`–`.2em`.** This mono-caps layer is the signature.
- One accent only: `var(--accent)` fill, `var(--accent-ink)` text on it, `var(--accent-soft)` hover fills/focus halos. Never a second brand hue. Status colors are the only exception.
- Motion is slow/calm. Easings `var(--ease-expo)` (entrances/hover-lift) and `var(--ease-spring)` (toggle knob/press). Hover/border transitions `.2s`–`.3s`. Reuse keyframes `alx-blink`, `alx-shimmer`, `alx-spin`, `alx-revealUp` (already global). **Every** motion must degrade under `@media (prefers-reduced-motion: reduce)`.
- Focus: visible for keyboard users via `:focus-visible` — `outline: 2px solid var(--accent); outline-offset: 2px;` or an accent border / `0 0 0 3px var(--accent-soft)` halo. Never remove focus styling without a replacement.
- Components meant to sit on deep bands (tooltip, toast) use the deep text ramp `--deep-ink`/`--deep-sub`/`--deep-faint` and background `--deep`.

### CSS variable reference (the only colors you may use)

Backgrounds: `--bg` (page), `--surface` (cards), `--surface2` (translucent inset), `--deep`, `--deep2` (near-black bands), `--panel`, `--panel-bd`.
Text: `--ink`, `--ink2`, `--sub`, `--faint`. On deep bands: `--deep-ink`, `--deep-sub`, `--deep-faint`.
Lines: `--bd`, `--bd2`, `--bd-hov`. Inputs: `--input-bd`.
Accent: `--accent`, `--accent-ink`, `--accent-soft`. Inverse fill on deep: `--inv-bg`, `--inv-tx`.
Pills/chips: `--pill-bd`, `--pill-tx`, `--chip-bd`, `--chip-bg`, `--chip-tx`. Avatars: `--av-bg`, `--av-tx`, `--av-bd`. Stat: `--stat`.
Shadows: `--sh-card` (hover lift), `--sh-btn` (accent glow). Grid: `--grid`, `--grid-deep` (use utility classes `.alx-grid` / `.alx-grid-deep`).
Radii/easing/fonts as above.
**Status hexes (the only hardcoded hex allowed):** signal `#13B981`, caution `#D98A2B`, fault `#C25E54` (also `--status-signal` / `--status-caution` / `--status-fault`).

## Accessibility (required)

- Correct semantics/roles and ARIA relationships (`aria-labelledby`, `aria-describedby`, `aria-controls`, `aria-expanded`, `aria-selected`, `aria-checked`, `role="dialog"` + `aria-modal`, etc.) wired with `useId`.
- Full keyboard support for the pattern (Tab, Arrow keys + roving tabindex for composites, Enter/Space activation, Escape to dismiss overlays, Home/End where idiomatic).
- Icon-only controls get an accessible name (`aria-label` or `VisuallyHidden`).
- Respect `prefers-reduced-motion`. Manage focus for overlays (`useFocusTrap`).

## meta.ts template

```ts
import type { ComponentMeta } from "../../registry/types";

export const <camelSlug>Meta: ComponentMeta = {
  slug: "<slug>",
  name: "<Name>",
  category: "<one of: Actions | Forms | Data Display | Feedback | Overlay | Navigation>",
  summary: "<one short line for the catalog card>",
  description: "<1–3 sentences for the detail page — mention the source-system lineage>",
  tags: ["<search terms, synonyms, roles>"],
  lineage: ["<which of the 8 source systems informed the API>"],
  status: "stable",
  a11y: ["<bullet>", "..."],
  props: [
    { name: "<prop>", type: "<TS type as string>", default: "<optional>", description: "<one line>" },
  ],
  code: `<a copy-pasteable TSX usage snippet importing from "@alchyx/react">`,
};

export default <camelSlug>Meta;
```

The eight source systems to draw lineage from: shadcn/ui, Radix Primitives, Base UI,
Meta Astryx, Fluent UI, GitHub Primer, Twilio Paste, Ant Design.

## Demo.tsx template

```tsx
"use client";

import * as React from "react";
import { <Component> } from ".";
import { DemoStack, DemoRow, DemoNote, DemoControls, DemoChoice, DemoToggle } from "../../registry/demo-kit";

export function Preview() {
  // compact, non-interactive: 1–3 specimens, no control panels. Keep it small
  // enough to sit in a ~150px card preview.
  return (/* ... */);
}

export function Demo() {
  // full interactive showcase: variant/size/state controls (DemoChoice / DemoToggle
  // inside DemoControls) plus specimen rows. Use React.useState for controlled demos.
  return (/* ... */);
}
```

## Quality bar

- Production-grade, self-contained, compiles under strict TS, passes ESLint (no unused vars), no console errors.
- Sensible, minimal, well-typed public API; JSDoc on the component and non-obvious props.
- Unique export names (prefix subparts with the component name: `CardTitle`, not `Title`) to avoid barrel collisions.
- The `.tsx` imports its `./<slug>.css`; `index.ts` exports the component(s) + every public type; `meta.ts` has the named + default export; `Demo.tsx` exports `Preview` and `Demo`.
