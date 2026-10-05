import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/data/profile";
import Chips from "@/components/Chips";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = caseStudies.find((c) => c.slug === params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.problem} ${s.result.metric} ${s.result.label}.`,
    alternates: { canonical: `/work/${s.slug}` },
  };
}

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{children}</h2>
);

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const s = caseStudies.find((c) => c.slug === params.slug);
  if (!s) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-20">
      <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-fg">
        <ArrowLeft size={14} aria-hidden /> All work
      </Link>
      <p className="mt-8 font-mono text-xs text-muted">
        {s.company} · {s.year}
      </p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{s.title}</h1>

      <section className="mt-12 space-y-3">
        <H>Problem</H>
        <p className="text-lg">{s.problem}</p>
      </section>

      <section className="mt-10 space-y-3">
        <H>What I built</H>
        <ul className="space-y-2">
          {[...s.built, ...(s.extra ?? [])].map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <H>Result</H>
        <p>
          <span className="font-mono text-4xl font-semibold text-accent">{s.result.metric}</span>
          <span className="ml-3 text-muted">{s.result.label}</span>
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <H>Stack</H>
        <Chips items={s.stack} />
      </section>
    </article>
  );
}
