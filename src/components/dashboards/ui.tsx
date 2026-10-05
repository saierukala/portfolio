import type { ReactNode } from "react";

/*
 * Dashboard mockups are drawn in em units so they scale with the card width:
 * `.dash` (globals.css) sets font-size from the container width (cqw).
 */

export function Frame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="dash-wrap h-full w-full overflow-hidden rounded-xl border border-line bg-bg">
      <div className="dash flex h-full w-full flex-col">
        <div className="flex h-[3em] shrink-0 items-center gap-[0.6em] border-b border-line bg-surface px-[1.1em]">
          <i className="h-[0.8em] w-[0.8em] rounded-full bg-line" />
          <i className="h-[0.8em] w-[0.8em] rounded-full bg-line" />
          <i className="h-[0.8em] w-[0.8em] rounded-full bg-line" />
          <span className="ml-[1em] flex-1 truncate rounded-[0.5em] border border-line bg-bg px-[1em] py-[0.3em] font-mono text-[1em] text-muted">
            {url}
          </span>
        </div>
        <div className="flex min-h-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

export function Sidebar({ brand, items, active }: { brand: string; items: string[]; active: number }) {
  return (
    <div className="flex w-[12em] shrink-0 flex-col gap-[0.4em] border-r border-line bg-surface p-[1em]">
      <div className="mb-[0.8em] flex items-center gap-[0.6em] text-[1.15em] font-semibold">
        <i className="h-[1.6em] w-[1.6em] rounded-[0.5em] bg-gradient-accent" />
        {brand}
      </div>
      {items.map((it, i) => (
        <div
          key={it}
          className={`rounded-[0.5em] px-[0.8em] py-[0.55em] ${
            i === active ? "bg-accent/15 font-medium text-accent" : "text-muted"
          }`}
        >
          {it}
        </div>
      ))}
    </div>
  );
}

const tones = {
  ok: "bg-emerald-500/15 text-emerald-700",
  warn: "bg-amber-500/15 text-amber-700",
  bad: "bg-rose-500/15 text-rose-700",
  info: "bg-accent/15 text-accent",
  mute: "bg-line text-muted",
};

export function Chip({ tone = "mute", children }: { tone?: keyof typeof tones; children: ReactNode }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-[0.8em] py-[0.2em] text-[0.9em] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Avatar({ name }: { name: string }) {
  return (
    <span className="flex h-[2em] w-[2em] shrink-0 items-center justify-center rounded-full bg-gradient-accent text-[0.8em] font-semibold text-accent-ink">
      {name
        .split(" ")
        .map((p) => p[0])
        .join("")}
    </span>
  );
}

export function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="flex-1 rounded-[0.7em] border border-line bg-surface p-[0.9em]">
      <div className="text-[0.9em] text-muted">{label}</div>
      <div className="font-mono text-[1.9em] font-semibold leading-[1.2] text-fg">{value}</div>
      {hint && <div className="text-[0.85em] text-accent">{hint}</div>}
    </div>
  );
}

export function Card({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[0.7em] border border-line bg-surface p-[1em] ${className}`}>
      <div className="mb-[0.7em] font-mono text-[0.85em] uppercase tracking-wider text-muted">{title}</div>
      {children}
    </div>
  );
}
