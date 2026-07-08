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
