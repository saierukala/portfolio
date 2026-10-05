import { metrics } from "@/data/profile";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function ImpactStrip() {
  return (
    <section aria-label="Impact" className="border-y border-line">
      <Reveal className="mx-auto grid max-w-page grid-cols-2 gap-x-4 px-4 sm:px-6 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="py-8 lg:py-10">
            <CountUp value={m.value} className="block py-1 font-mono text-4xl font-semibold leading-[1.2] tabular-nums text-gradient sm:text-5xl" />
            <p className="mt-2 text-sm">{m.label}</p>
            <p className="mt-1 font-mono text-xs text-muted">{m.source}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
