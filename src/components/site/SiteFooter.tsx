import * as React from "react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="foot-word" aria-label="Alchyx home">
              Alchyx
            </Link>
            <p className="foot-lede">
              The best of eight design systems, re-skinned in one color — a single React +
              TypeScript library on the D-ALabs Lab / Dark / Ark language.
            </p>
            <div className="foot-rule" aria-hidden="true" />
          </div>

          <div className="foot-grid">
            <div className="foot-col">
              <h5 className="foot-col__head">Index</h5>
              <Link href="/">Overview</Link>
              <Link href="/foundations">Foundations</Link>
              <Link href="/components">Components</Link>
            </div>
            <div className="foot-col">
              <h5 className="foot-col__head">Sourced from</h5>
              <span className="foot-col__mono">shadcn · Radix · Base UI</span>
              <span className="foot-col__mono">Fluent · Primer</span>
              <span className="foot-col__mono">Paste · Ant · Astryx</span>
            </div>
            <div className="foot-col">
              <h5 className="foot-col__head">D-ALabs</h5>
              <a href="https://d-alabs.vercel.app" target="_blank" rel="noreferrer">
                d-alabs.com
              </a>
              <a href="mailto:contact@d-alabs.com">contact@d-alabs.com</a>
              <span>Hanam, Republic of Korea</span>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="foot-bottom__mono">
            Digital Alchemist Labs · CEO Jeseok Lee · Biz. 547-87-03375
          </span>
          <span className="foot-bottom__mono">© 2026 D-ALabs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
