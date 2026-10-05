import { metrics, modules } from "@/data/profile";
import CountUp from "./CountUp";
import Sparkline from "./Sparkline";

const feed = [
  { t: "Leave approved · Priya S.", when: "2m", c: "bg-emerald-500" },
  { t: "Low stock flagged · Paddy seed", when: "14m", c: "bg-amber-500" },
  { t: "Order #4821 placed", when: "21m", c: "bg-accent" },
];

export default function HeroDashboard() {
  return (
    <div
      className="overflow-hidden rounded-card border border-line bg-surface"
      role="img"
      aria-label="Illustration of an admin dashboard with a module sidebar and four KPI tiles: 300+ daily employees, 500+ orders a month, about 30% faster initial load, 90+ Lighthouse"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 font-mono text-[11px] text-muted">internal-tools / overview</span>
      </div>
      <div className="flex" aria-hidden>
        <ul className="hidden w-36 shrink-0 space-y-1 border-r border-line p-3 sm:block">
          {modules.map((m, i) => (
            <li
              key={m}
              className={`rounded-md px-2.5 py-1.5 font-mono text-xs ${i === 0 ? "bg-accent/10 text-accent" : "text-muted"}`}
            >
              {m}
            </li>
          ))}
        </ul>
        <div className="flex-1 p-3 sm:p-4">
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-line bg-bg/60 p-3">
              <CountUp value={m.value} className="font-mono text-2xl font-semibold tabular-nums text-accent" />
              <p className="mt-1 text-[11px] leading-snug text-muted">{m.label}</p>
              <Sparkline data={m.spark} className="mt-3 h-6 w-full" />
            </div>
          ))}
        </div>
        <ul className="mt-3 space-y-1.5 rounded-lg border border-line bg-bg/60 p-3 font-mono text-[11px] text-muted">
          {feed.map((f) => (
            <li key={f.t} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 truncate">
                <span className={"h-1.5 w-1.5 shrink-0 rounded-full " + f.c} />
                {f.t}
              </span>
              <span className="shrink-0">{f.when}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}
