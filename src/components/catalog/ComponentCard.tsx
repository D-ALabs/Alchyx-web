"use client";

import * as React from "react";
import Link from "next/link";
import type { ComponentMeta } from "@/alchyx/registry/types";
import { demos } from "@/alchyx/registry/demos";

/**
 * A catalog card: a framed live Preview plus the component's name, category, and
 * summary. The title is a stretched link that covers the card, while the preview
 * sits above it so its own controls stay interactive.
 */
export function ComponentCard({ meta }: { meta: ComponentMeta }) {
  const mod = demos[meta.slug];
  const Preview = mod?.Preview;

  return (
    <article className="cc" data-status={meta.status}>
      <div className="cc__preview alx-grid" aria-hidden={Preview ? undefined : true}>
        <div className="cc__preview-inner">
          {Preview ? <Preview /> : <span className="cc__nopreview">No preview</span>}
        </div>
      </div>
      <div className="cc__body">
        <div className="cc__meta">
          <span className="cc__cat">{meta.category}</span>
          {meta.status === "beta" && <span className="cc__badge">Beta</span>}
        </div>
        <h3 className="cc__name">
          <Link href={`/components/${meta.slug}`} className="cc__link">
            {meta.name}
          </Link>
        </h3>
        <p className="cc__summary">{meta.summary}</p>
        {meta.lineage[0] && (
          <span className="cc__source">
            <span className="cc__source-label">re-skinned from</span> {meta.lineage[0]}
          </span>
        )}
        <span className="cc__cta" aria-hidden="true">
          View component <span className="cc__arrow">→</span>
        </span>
      </div>
    </article>
  );
}
