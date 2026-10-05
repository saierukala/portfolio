import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";
import Lift from "./Lift";
import Chips from "./Chips";

// Row 1: large + medium, row 2: medium + large, so the 12-col grid has no gaps.
const order = ["hrms", "sri-lakshmi-kalamkari", "swechaa-news-portal", "tg-agros-erp"];
const bento = order.map((slug) => caseStudies.find((c) => c.slug === slug)!);

export default function Work() {
  return (
    <Section id="work" eyebrow="Selected work" title="Four products, each used by real teams.">
      <div className="grid gap-4 lg:grid-cols-12">
        {bento.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={(i % 2) * 0.06}
            className={s.size === "large" ? "lg:col-span-7" : "lg:col-span-5"}
          >
            <Lift className="h-full">
              <article className="group relative flex h-full flex-col gap-5 rounded-card border border-line bg-surface p-5 transition-colors focus-within:border-accent hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 sm:p-6">
                <div>
                  <p className="font-mono text-xs text-muted">
                    {s.company} · {s.year}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.01em]">
                    <Link
                      href={`/work/${s.slug}`}
                      className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
                    >
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">{s.problem}</p>
                </div>
                <ul className="space-y-1.5 text-sm">
                  {s.built.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
                  <div>
                    <span className="font-mono text-2xl font-semibold text-accent">{s.result.metric}</span>
                    <span className="ml-2 text-xs text-muted">{s.result.label}</span>
                  </div>
                  <ArrowUpRight size={18} className="text-muted" aria-hidden />
                </div>
                <Chips items={s.stack} />
              </article>
            </Lift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
