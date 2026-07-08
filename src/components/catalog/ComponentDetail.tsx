"use client";

import * as React from "react";
import Link from "next/link";
import type { ComponentMeta } from "@/alchyx/registry/types";
import { demos } from "@/alchyx/registry/demos";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ThemeSwitcher } from "@/components/site/ThemeSwitcher";
import { Eyebrow } from "@/components/site/primitives";
import "./detail.css";

interface NavLink {
  slug: string;
  name: string;
}

export function ComponentDetail({
  meta,
  prev,
  next,
}: {
  meta: ComponentMeta;
  prev: NavLink;
  next: NavLink;
}) {
  const mod = demos[meta.slug];
  const Demo = mod?.Demo;

  return (
    <article className="det">
      <Link href="/components" className="det__back">
        ← All components
      </Link>

      <header className="det__head">
        <div className="det__head-main">
          <Eyebrow index={meta.recipe ?? undefined}>{meta.category}</Eyebrow>
          <h1 className="det__title display-1">{meta.name}</h1>
          <p className="det__desc lede">{meta.description}</p>
        </div>
        <aside className="det__facts">
          <div className="det__fact">
            <span className="det__fact-label">Status</span>
            <span className="det__status" data-status={meta.status}>
              {meta.status}
            </span>
          </div>
          <div className="det__fact">
            <span className="det__fact-label">Re-skinned from</span>
            <div className="det__chips">
              {meta.lineage.map((l) => (
                <span key={l} className="det__chip">
                  {l}
                </span>
              ))}
            </div>
          </div>
          {meta.tags.length > 0 && (
            <div className="det__fact">
              <span className="det__fact-label">Tags</span>
              <div className="det__tags">
                {meta.tags.slice(0, 8).map((t) => (
                  <span key={t} className="det__tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </header>

      <section className="det__section" aria-label="Live preview">
        <div className="det__section-head">
          <Eyebrow>Live preview</Eyebrow>
          <div className="det__preview-tools">
            <span className="det__preview-hint">Reflects the active skin</span>
            <ThemeSwitcher compact />
          </div>
        </div>
        <div className="det__stage alx-grid">
          <div className="det__stage-inner">
            {Demo ? <Demo /> : <span className="det__nopreview">No live demo available.</span>}
          </div>
        </div>
      </section>

      <section className="det__section" aria-label="Usage">
        <Eyebrow>Usage</Eyebrow>
        <div className="det__usage">
          <CodeBlock code={meta.code} lang="tsx" />
        </div>
      </section>

      {meta.props.length > 0 && (
        <section className="det__section" aria-label="Props">
          <Eyebrow>Props</Eyebrow>
          <div className="det__table-wrap">
            <table className="det__table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {meta.props.map((p) => (
                  <tr key={p.name}>
                    <td>
                      <code className="det__prop">{p.name}</code>
                      {p.required && <span className="det__req">required</span>}
                    </td>
                    <td>
                      <code className="det__type">{p.type}</code>
                    </td>
                    <td>{p.default ? <code className="det__default">{p.default}</code> : <span className="det__dash">—</span>}</td>
                    <td className="det__pdesc">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {meta.a11y.length > 0 && (
        <section className="det__section" aria-label="Accessibility">
          <Eyebrow>Accessibility</Eyebrow>
          <ul className="det__a11y">
            {meta.a11y.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      <nav className="det__pager" aria-label="Component pagination">
        <Link href={`/components/${prev.slug}`} className="det__pager-link det__pager-link--prev">
          <span className="det__pager-dir">← Previous</span>
          <span className="det__pager-name">{prev.name}</span>
        </Link>
        <Link href={`/components/${next.slug}`} className="det__pager-link det__pager-link--next">
          <span className="det__pager-dir">Next →</span>
          <span className="det__pager-name">{next.name}</span>
        </Link>
      </nav>
    </article>
  );
}
