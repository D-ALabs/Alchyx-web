import * as React from "react";
import { cn } from "@/alchyx/lib/cn";

/** Centered max-width page container. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return <div className={cn("container", `container--${size}`, className)}>{children}</div>;
}

/** The signature mono-caps eyebrow, optionally bracketed with an index. */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("eyebrow", className)}>
      {index != null && <span className="eyebrow__bracket">[</span>}
      {index != null && <span className="eyebrow__index">{index}</span>}
      {index != null && <span className="eyebrow__dash">—</span>}
      <span>{children}</span>
      {index != null && <span className="eyebrow__bracket">]</span>}
    </div>
  );
}

/** Section header: eyebrow + display heading + optional lede / trailing count. */
export function SectionHead({
  index,
  eyebrow,
  title,
  lede,
  count,
  as = "h2",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  count?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Heading = as;
  return (
    <div className={cn("sec-head", className)}>
      <div className="sec-head__main">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <Heading className={as === "h1" ? "display-1" : "display-2"}>{title}</Heading>
        {lede && <p className="sec-head__lede">{lede}</p>}
      </div>
      {count && <span className="sec-head__count">{count}</span>}
    </div>
  );
}

/** A large mono/display statistic. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-block">
      <div className="stat-block__value">{value}</div>
      <div className="stat-block__label">{label}</div>
    </div>
  );
}
