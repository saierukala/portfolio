import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";
import Lift from "./Lift";

// Display order: the two recent full-stack + mobile builds first, then the company projects.
const order = ["businesshub", "homefix-mobile", "hrms", "tg-agros-erp", "sri-lakshmi-kalamkari", "swechaa-news-portal"];
const studies = order.map((slug) => caseStudies.find((c) => c.slug === slug)!);

export default function Work() {
  return (
    <Section id="work" eyebrow="Selected work" title="Six products, built end to end.">
      <ul className="grid gap-6 md:grid-cols-2">
        {studies.map((s, i) => (
          <li key={s.slug}>
            <Reveal delay={(i % 2) * 0.06} className="h-full">
              <Lift className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors focus-within:border-accent hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                  {s.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-white">
                      <Image
                        src={s.image}
                        alt={s.gallery?.[0]?.alt ?? s.title}
                        fill
                        sizes="(min-width: 768px) 560px, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                    <div>
                      <p className="font-mono text-xs text-muted">
                        {s.company} · {s.year}
                      </p>
                      <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.01em] sm:text-xl">
                        <Link
                          href={`/work/${s.slug}`}
                          className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                        >
                          {s.title}
                        </Link>
                      </h3>
                      <p className={`mt-2 text-sm text-muted ${s.image ? "line-clamp-2" : ""}`}>{s.problem}</p>
                    </div>
                    {!s.image && (
                      <ul className="space-y-2 text-sm">
                        {s.built.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
                      <div className="min-w-0">
                        <span className="font-mono text-2xl font-semibold text-accent">{s.result.metric}</span>
                        <span className="ml-2 text-xs text-muted">{s.result.label}</span>
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-muted transition-colors group-hover:text-accent"
                        aria-hidden
                      />
                    </div>
                    <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                      {s.stack.slice(0, 5).map((t) => (
                        <li key={t} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Lift>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
