"use client";

import * as React from "react";

/** A framed code block with a language tag and a copy button. */
export function CodeBlock({
  code,
  lang = "tsx",
  title,
}: {
  code: string;
  lang?: string;
  title?: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <figure className="code">
      <figcaption className="code__bar">
        <span className="code__lang">{title ?? lang}</span>
        <button type="button" className="code__copy" onClick={copy} aria-live="polite">
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </figcaption>
      <pre className="code__pre">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
