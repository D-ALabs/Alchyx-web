"use client";

/**
 * Site theme controller. Drives `data-theme` (lab / dark / ark) and
 * `data-accent` on <html>, persists the choice to localStorage, and exposes it
 * through context so the switcher and any page can read/change it. Everything
 * downstream reads CSS variables, so a change re-tints the whole document.
 */
import * as React from "react";
import { accentsBySkin, type SkinName, type AccentName } from "@alchyx/tokens";

export type Skin = SkinName;
export type Accent = AccentName;

export const SKINS: Skin[] = ["lab", "dark", "ark"];
export const SKIN_LABELS: Record<Skin, { title: string; blurb: string }> = {
  lab: { title: "Lab", blurb: "Paper & ink — the daylight default." },
  dark: { title: "Dark", blurb: "Slate & bone — the low-light workspace." },
  ark: { title: "Ark", blurb: "Abyss & gold — the premium membership skin." },
};

export const STORAGE_SKIN = "alx-skin";
export const STORAGE_ACCENT = "alx-accent";

interface ThemeContextValue {
  skin: Skin;
  accent: Accent;
  accents: Accent[];
  setSkin: (skin: Skin) => void;
  setAccent: (accent: Accent) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>.");
  return ctx;
}

/** Which theme SVG favicon a skin uses (Lab → ink flask; Dark/Ark → bone flask). */
function faviconFor(skin: Skin) {
  return skin === "lab" ? "/favicon-light.svg" : "/favicon-dark.svg";
}

function apply(skin: Skin, accent: Accent) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", skin);
  root.setAttribute("data-accent", accent);

  // Swap the D-ALabs flask favicon with the active skin (mirrors the site's own
  // theme script). public/favicon.ico is the pre-JS baseline.
  let link = document.querySelector<HTMLLinkElement>("link[data-alx-favicon]");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.setAttribute("data-alx-favicon", "");
    document.head.appendChild(link);
  }
  link.href = faviconFor(skin);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start from the SSR default (lab + its default accent) so the first client
  // render matches the server, then hydrate the persisted choice in an effect.
  const [skin, setSkinState] = React.useState<Skin>("lab");
  const [accent, setAccentState] = React.useState<Accent>(accentsBySkin.lab[0]);

  // Read the persisted / already-applied theme after mount (the inline script in
  // <head> has already painted it, so this only syncs React state).
  React.useEffect(() => {
    const root = document.documentElement;
    const storedSkin = localStorage.getItem(STORAGE_SKIN) as Skin | null;
    const domSkin = root.getAttribute("data-theme") as Skin | null;
    const nextSkin = (storedSkin && SKINS.includes(storedSkin) && storedSkin) || domSkin || "lab";

    const storedAccent = localStorage.getItem(STORAGE_ACCENT) as Accent | null;
    const valid = accentsBySkin[nextSkin];
    const nextAccent =
      storedAccent && valid.includes(storedAccent) ? storedAccent : valid[0];

    setSkinState(nextSkin);
    setAccentState(nextAccent);
    apply(nextSkin, nextAccent);
  }, []);

  const setSkin = React.useCallback((next: Skin) => {
    const valid = accentsBySkin[next];
    setSkinState(next);
    setAccentState((prev) => {
      const nextAccent = valid.includes(prev) ? prev : valid[0];
      apply(next, nextAccent);
      localStorage.setItem(STORAGE_SKIN, next);
      localStorage.setItem(STORAGE_ACCENT, nextAccent);
      return nextAccent;
    });
  }, []);

  const setAccent = React.useCallback(
    (next: Accent) => {
      setAccentState(next);
      apply(skin, next);
      localStorage.setItem(STORAGE_ACCENT, next);
    },
    [skin],
  );

  const value = React.useMemo<ThemeContextValue>(
    () => ({ skin, accent, accents: accentsBySkin[skin], setSkin, setAccent }),
    [skin, accent, setSkin, setAccent],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Blocking script injected in <head> to apply the persisted theme before first
 * paint (no flash of the default skin). Kept tiny and self-contained.
 */
export const themeInitScript = `
(function () {
  try {
    var s = localStorage.getItem("${STORAGE_SKIN}");
    var a = localStorage.getItem("${STORAGE_ACCENT}");
    var skins = { lab: 1, dark: 1, ark: 1 };
    var skin = skins[s] ? s : "lab";
    var root = document.documentElement;
    root.setAttribute("data-theme", skin);
    if (a) root.setAttribute("data-accent", a);
    var href = skin === "lab" ? "/favicon-light.svg" : "/favicon-dark.svg";
    var link = document.querySelector("link[data-alx-favicon]");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "icon");
      link.setAttribute("type", "image/svg+xml");
      link.setAttribute("data-alx-favicon", "");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  } catch (e) {}
})();
`;
