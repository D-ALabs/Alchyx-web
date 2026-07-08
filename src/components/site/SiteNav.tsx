"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

const LINKS = [
  { href: "/", label: "Overview" },
  { href: "/foundations", label: "Foundations" },
  { href: "/components", label: "Components" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteNav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label="Alchyx — a D-ALabs design system, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dalabs-logo.png" alt="D-ALabs" className="nav-brand__logo" />
          <span className="nav-brand__word">Alchyx</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              data-active={isActive(pathname, l.href) || undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          <div className="nav-switcher">
            <ThemeSwitcher />
          </div>
          <a
            href="https://github.com/D-ALabs/Alchyx"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
            aria-label="Alchyx on GitHub"
          >
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <button
            type="button"
            className="nav-burger"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="nav-mobile" id="nav-mobile" data-open={open || undefined}>
        <nav className="nav-mobile__links" aria-label="Primary (mobile)">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-mobile__link"
              data-active={isActive(pathname, l.href) || undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-mobile__switch">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
