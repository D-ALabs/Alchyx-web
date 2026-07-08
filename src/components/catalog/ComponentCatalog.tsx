"use client";

import * as React from "react";
import { Input } from "@/alchyx/components/input";
import type { ComponentMeta, ComponentCategory } from "@/alchyx/registry/types";
import { CATEGORY_ORDER } from "@/alchyx/registry/types";
import { ComponentCard } from "./ComponentCard";
import "./catalog.css";

type CatFilter = ComponentCategory | "All";

function matches(meta: ComponentMeta, q: string) {
  if (!q) return true;
  const needle = q.toLowerCase();
  const haystack = [
    meta.name,
    meta.slug,
    meta.summary,
    meta.category,
    ...meta.tags,
    ...meta.lineage,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(needle);
}

export function ComponentCatalog({ catalog }: { catalog: ComponentMeta[] }) {
  const [q, setQ] = React.useState("");
  const [category, setCategory] = React.useState<CatFilter>("All");
  const [source, setSource] = React.useState<string>("All");
  const searchRef = React.useRef<HTMLInputElement>(null);

  // "/" focuses the search field (unless already typing in a field).
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      const tag = el?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (el as HTMLElement)?.isContentEditable) return;
      e.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // All source systems, most-common first.
  const sources = React.useMemo(() => {
    const freq = new Map<string, number>();
    for (const m of catalog) for (const l of m.lineage) freq.set(l, (freq.get(l) ?? 0) + 1);
    return [...freq.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map((e) => e[0]);
  }, [catalog]);

  const byQuery = React.useMemo(() => catalog.filter((m) => matches(m, q)), [catalog, q]);

  const catCounts = React.useMemo(() => {
    const map = new Map<CatFilter, number>();
    map.set("All", byQuery.length);
    for (const c of CATEGORY_ORDER) map.set(c, byQuery.filter((m) => m.category === c).length);
    return map;
  }, [byQuery]);

  const visible = React.useMemo(
    () =>
      byQuery
        .filter((m) => category === "All" || m.category === category)
        .filter((m) => source === "All" || m.lineage.includes(source)),
    [byQuery, category, source],
  );

  const groups = React.useMemo(
    () =>
      CATEGORY_ORDER.map((c) => ({ category: c, items: visible.filter((m) => m.category === c) }))
        .filter((g) => g.items.length > 0),
    [visible],
  );

  const catChips: CatFilter[] = ["All", ...CATEGORY_ORDER];
  const activeFilters = (category !== "All" ? 1 : 0) + (source !== "All" ? 1 : 0) + (q ? 1 : 0);

  return (
    <div className="cat">
      <div className="cat__controls">
        <div className="cat__search">
          <Input
            ref={searchRef}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search components, tags, or source systems…"
            leading="⌕"
            trailing={<kbd className="cat__kbd">/</kbd>}
            aria-label="Search components"
          />
        </div>

        <div className="cat__facet">
          <span className="cat__facet-label">Category</span>
          <div className="cat__filters" role="group" aria-label="Filter by category">
            {catChips.map((c) => {
              const count = catCounts.get(c) ?? 0;
              return (
                <button
                  key={c}
                  type="button"
                  className="cat__chip"
                  data-active={category === c || undefined}
                  aria-pressed={category === c}
                  disabled={c !== "All" && count === 0}
                  onClick={() => setCategory(c)}
                >
                  {c}
                  <span className="cat__chip-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="cat__facet">
          <span className="cat__facet-label">Re-skinned from</span>
          <div className="cat__filters" role="group" aria-label="Filter by source system">
            <button
              type="button"
              className="cat__chip cat__chip--source"
              data-active={source === "All" || undefined}
              aria-pressed={source === "All"}
              onClick={() => setSource("All")}
            >
              All sources
            </button>
            {sources.map((s) => (
              <button
                key={s}
                type="button"
                className="cat__chip cat__chip--source"
                data-active={source === s || undefined}
                aria-pressed={source === s}
                onClick={() => setSource(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="cat__status" role="status" aria-live="polite">
        {visible.length} {visible.length === 1 ? "component" : "components"}
        {source !== "All" && (
          <>
            {" "}
            from <span className="cat__status-q">{source}</span>
          </>
        )}
        {q && (
          <>
            {" "}
            matching <span className="cat__status-q">“{q}”</span>
          </>
        )}
        {activeFilters > 0 && (
          <button
            type="button"
            className="cat__reset"
            onClick={() => {
              setQ("");
              setCategory("All");
              setSource("All");
            }}
          >
            Reset
          </button>
        )}
      </div>

      {groups.length === 0 ? (
        <div className="cat__empty">
          <p className="cat__empty-title">No components found</p>
          <p className="cat__empty-sub">
            Try a different term, or{" "}
            <button
              type="button"
              className="cat__empty-reset"
              onClick={() => {
                setQ("");
                setCategory("All");
                setSource("All");
              }}
            >
              reset the filters
            </button>
            .
          </p>
        </div>
      ) : (
        <div className="cat__groups">
          {groups.map((g) => {
            const num = CATEGORY_ORDER.indexOf(g.category) + 1;
            return (
              <section key={g.category} className="cat__group" aria-label={g.category}>
                <div className="cat__group-head">
                  <span className="cat__group-n">{String(num).padStart(2, "0")}</span>
                  <h2 className="cat__group-title">{g.category}</h2>
                  <span className="cat__group-count">
                    {String(g.items.length).padStart(2, "0")} specimens
                  </span>
                </div>
                <div className="cat__grid">
                  {g.items.map((m) => (
                    <ComponentCard key={m.slug} meta={m} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
