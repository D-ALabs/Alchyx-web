"use client";

import * as React from "react";
import { useTheme, SKINS } from "./ThemeProvider";

/**
 * The signature Lab / Dark / Ark skin switch + per-skin accent switch. Mono-caps
 * segmented controls — the same pattern the reference playground uses.
 */
export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { skin, accent, accents, setSkin, setAccent } = useTheme();

  return (
    <div className="sw" data-compact={compact || undefined}>
      <div className="sw-seg" role="group" aria-label="Skin">
        {SKINS.map((s) => (
          <button
            key={s}
            type="button"
            className="sw-seg__btn"
            data-active={skin === s || undefined}
            aria-pressed={skin === s}
            onClick={() => setSkin(s)}
          >
            {s}
          </button>
        ))}
      </div>
      {!compact && (
        <div className="sw-seg" role="group" aria-label="Accent">
          {accents.map((a) => (
            <button
              key={a}
              type="button"
              className="sw-seg__btn sw-seg__btn--accent"
              data-active={accent === a || undefined}
              aria-pressed={accent === a}
              onClick={() => setAccent(a)}
              title={a}
            >
              <span className="sw-dot" data-accent={a} aria-hidden="true" />
              <span className="sw-seg__txt">{a}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
