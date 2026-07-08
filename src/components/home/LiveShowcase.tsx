"use client";

import * as React from "react";
import Link from "next/link";
import { demos } from "@/alchyx/registry/demos";
import { catalogBySlug } from "@/alchyx/registry/catalog";

/** Curated slugs to feature on the landing page (skips any not yet built). */
const FEATURED = [
  "button",
  "switch",
  "input",
  "tabs",
  "badge",
  "avatar",
  "tag",
  "tooltip",
  "progress",
];

export function LiveShowcase() {
  const items = FEATURED.filter((slug) => demos[slug] && catalogBySlug[slug]).slice(0, 6);

  return (
    <div className="live">
      {items.map((slug) => {
        const Preview = demos[slug].Preview;
        const meta = catalogBySlug[slug];
        return (
          <article key={slug} className="live__tile">
            {/* Decorative preview (pointer-events disabled in CSS) so the
                stretched caption link owns the whole tile's clicks. */}
            <div className="live__stage alx-grid" aria-hidden="true">
              <div className="live__stage-inner">
                <Preview />
              </div>
            </div>
            <div className="live__cap">
              <Link href={`/components/${slug}`} className="live__link">
                {meta.name}
              </Link>
              <span className="live__cat">{meta.category}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
