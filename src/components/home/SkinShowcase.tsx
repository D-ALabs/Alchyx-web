"use client";

import * as React from "react";
import { useTheme, SKINS, SKIN_LABELS } from "@/components/site/ThemeProvider";
import { accentsBySkin } from "@alchyx/tokens";

/** The three swatches previewed inside each skin card (measured from tokens). */
const SKIN_SWATCHES: Record<string, { bg: string; surface: string; ink: string; accent: string }> = {
  lab: { bg: "#F5F2EA", surface: "#FCFBF7", ink: "#16202E", accent: "#16202E" },
  dark: { bg: "#0D1522", surface: "#131D2D", ink: "#EDE8DC", accent: "#EEEAE0" },
  ark: { bg: "#081426", surface: "#0E1D34", ink: "#F4EEE0", accent: "#D9AE63" },
};

const ACCENT_HEX: Record<string, string> = {
  monochrome: "#16202E",
  paper: "#EEEAE0",
  gold: "#D9AE63",
  mint: "#13B981",
  blue: "#3B6FE0",
  amber: "#D98A2B",
  ivory: "#E9E1CC",
  bronze: "#C98C49",
};

export function SkinShowcase() {
  const { skin, accent, setSkin, setAccent } = useTheme();

  return (
    <div className="skins">
      <div className="skins__grid">
        {SKINS.map((s) => {
          const sw = SKIN_SWATCHES[s];
          const active = skin === s;
          return (
            <button
              key={s}
              type="button"
              className="skin-card"
              data-active={active || undefined}
              aria-pressed={active}
              onClick={() => setSkin(s)}
              style={{ ["--card-bg" as string]: sw.bg, ["--card-surface" as string]: sw.surface, ["--card-ink" as string]: sw.ink }}
            >
              <div className="skin-card__demo">
                <div className="skin-card__bar">
                  <span className="skin-card__dot" style={{ background: sw.accent }} />
                  <span className="skin-card__line" />
                </div>
                <div className="skin-card__panel">
                  <span className="skin-card__heading" />
                  <span className="skin-card__pill" style={{ background: sw.accent, color: sw.bg }}>
                    {s}
                  </span>
                </div>
              </div>
              <div className="skin-card__meta">
                <span className="skin-card__name">
                  {SKIN_LABELS[s].title}
                  {active && <span className="skin-card__active" aria-hidden="true"> ● live</span>}
                </span>
                <span className="skin-card__blurb">{SKIN_LABELS[s].blurb}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="skins__accents">
        <span className="skins__accents-label">{skin} accents</span>
        <div className="skins__accent-row" role="group" aria-label="Accent">
          {accentsBySkin[skin].map((a) => (
            <button
              key={a}
              type="button"
              className="skins__accent"
              data-active={accent === a || undefined}
              aria-pressed={accent === a}
              onClick={() => setAccent(a)}
              title={a}
            >
              <span className="skins__accent-dot" style={{ background: ACCENT_HEX[a] }} />
              <span className="skins__accent-name">{a}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
