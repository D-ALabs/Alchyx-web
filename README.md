# Alchyx — product site

The product & documentation site for **Alchyx**, the D-ALabs component index — the
best of eight design systems re-skinned in one color, as a single React +
TypeScript component library on the **Lab / Dark / Ark** design language.

Built with **Next.js 16 (App Router)** + **React 19**, self-hosted fonts via
`next/font`, and the Alchyx design tokens as CSS custom properties.

## What's here

- **`/`** — the overview: the design language, the three skins + one-accent rule,
  the foundations, and a live specimen strip. The skin/accent switch in the nav
  re-tints the entire document.
- **`/foundations`** — the design-system introduction: color & skins, typography,
  radius & shape, motion, elevation, design tokens, and accessibility.
- **`/components`** — a searchable, filterable index of every component. Search by
  name, tag, or source system; filter by category.
- **`/components/[slug]`** — each component's detail page: a live preview in the
  active skin, usage code, a props table, and its accessibility contract.

## Architecture

```
src/
  alchyx/                     # the vendored design system (the "library")
    lib/                      # dependency-free behavior primitives (cn, Slot, hooks…)
    tokens/                   # typed design tokens
    styles/                   # token CSS foundation (tokens, reset, keyframes, utilities)
    theme/                    # AlchyxProvider (library theming primitive)
    components/<slug>/        # each component: Component.tsx, <slug>.css, index.ts,
                              #   meta.ts (catalog data), Demo.tsx (Preview + Demo)
    registry/                 # types + demo-kit, plus AUTO-GENERATED catalog/demos/barrel
  components/                 # site chrome (nav, footer, theme switch, catalog, home, …)
  app/                        # routes
docs/component-authoring.md   # the contract every component is authored to
scripts/gen-registry.mjs      # regenerates the registry barrels by scanning folders
```

Components are authored to a single contract (`docs/component-authoring.md`) so
each independently-authored piece comes out as one system. The catalog is
data-driven: `scripts/gen-registry.mjs` scans `src/alchyx/components/*` and
regenerates `src/alchyx/index.ts`, `src/alchyx/registry/catalog.ts`, and
`src/alchyx/registry/demos.tsx`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (typecheck + lint + static generation)
node scripts/gen-registry.mjs   # after adding/removing a component folder
```

## The design language

Three skins via `data-theme` (`lab` paper & ink · `dark` slate & bone · `ark`
abyss & gold), tuned by one `data-accent` at a time. Everything reads CSS
variables, so switching either attribute re-tints the whole tree. The signature
is a Space Mono caps layer for eyebrows, specs, and metadata.

© D-ALabs — Built for the curious. MIT licensed.
