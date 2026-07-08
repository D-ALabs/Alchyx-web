/**
 * The catalog contract shared by every component's `meta.ts` and by the site
 * pages that render the searchable index + component detail views. This module
 * is pure data (no React) so it is safe to import from Server Components,
 * `generateStaticParams`, and `generateMetadata`.
 */

export type ComponentCategory =
  | "Actions"
  | "Forms"
  | "Data Display"
  | "Feedback"
  | "Overlay"
  | "Navigation";

export const CATEGORY_ORDER: ComponentCategory[] = [
  "Actions",
  "Forms",
  "Data Display",
  "Navigation",
  "Overlay",
  "Feedback",
];

/** One row of a component's prop table. */
export interface PropRow {
  /** Prop name, e.g. `variant`. */
  name: string;
  /** Type signature, e.g. `"primary" | "secondary"`. */
  type: string;
  /** Default value, if any. */
  default?: string;
  /** One-line description of the prop. */
  description: string;
  /** Whether the prop is required. */
  required?: boolean;
}

/**
 * Everything the catalog + detail pages need to present a component — minus the
 * live demo, which lives beside it in `Demo.tsx` (a client component keyed by
 * `slug` in the demo registry).
 */
export interface ComponentMeta {
  /** URL + registry key, kebab-case. Matches the component folder name. */
  slug: string;
  /** Display name, PascalCase, e.g. `Button`. */
  name: string;
  /** Which shelf of the catalog it belongs to. */
  category: ComponentCategory;
  /** One short line shown on catalog cards. */
  summary: string;
  /** 1–3 sentences shown on the detail page. */
  description: string;
  /** Free-text search terms (roles, synonyms, aliases). */
  tags: string[];
  /** Which of the eight source systems informed the API. */
  lineage: string[];
  /** Maturity badge. */
  status: "stable" | "beta";
  /** Accessibility guarantees, as bullet points. */
  a11y: string[];
  /** Public props of the primary component. */
  props: PropRow[];
  /** A copy-pasteable usage snippet (TSX source, as a string). */
  code: string;
  /** Optional recipe code(s) referenced from the D-ALabs spec, e.g. "BT-01". */
  recipe?: string;
}
