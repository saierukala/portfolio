import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Github, Play } from "lucide-react";
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
  // Mobile-app case studies: show phone screenshots in their own tall grid.
  const phoneGrid = (s.gallery?.filter((g) => g.phone).length ?? 0) >= 3;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-20">
      <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-fg">
        <ArrowLeft size={14} aria-hidden /> All work
      </Link>
      <p className="mt-8 font-mono text-xs text-muted">
        {s.company} · {s.year}
      </p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{s.title}</h1>

      {(s.demoUrl || s.repoUrl) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {s.demoUrl && (
            <a
              href={s.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              <Play size={16} aria-hidden /> Watch the full demo
            </a>
          )}
          {s.repoUrl && (
            <a
              href={s.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-sm font-medium transition-colors hover:border-accent"
            >
              <Github size={16} aria-hidden /> Source on GitHub
            </a>
          )}
        </div>
      )}

      {s.gallery?.[0] && !s.gallery[0].phone && (
        <figure className="mt-10 overflow-hidden rounded-card border border-line bg-white">
          <Image
            src={s.gallery[0].src}
            alt={s.gallery[0].alt}
            width={1280}
            height={800}
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="h-auto w-full"
          />
        </figure>
      )}

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

      {s.videos && s.videos.length > 0 && (
        <section className="mt-10 space-y-4">
          <H>Watch it work</H>
          <div className="grid gap-6 sm:grid-cols-2">
            {s.videos.map((v) => (
              <figure key={v.src} className="space-y-2">
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  muted
                  playsInline
                  preload="none"
                  className="aspect-video w-full rounded-xl border border-line bg-surface"
                  aria-label={v.title}
                />
                <figcaption>
                  <p className="text-sm font-medium">{v.title}</p>
                  <p className="text-xs text-muted">{v.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {s.gallery && s.gallery.length > 0 && (
        <section className="mt-10 space-y-4">
          <H>Screenshots</H>
          <div className="grid gap-6 sm:grid-cols-2">
            {(phoneGrid ? s.gallery.filter((g) => !g.phone) : s.gallery).map((g) => (
              <figure key={g.src} className="space-y-2">
                <a
                  href={g.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block overflow-hidden rounded-xl border border-line bg-white transition-colors hover:border-accent ${
                    g.phone ? "relative aspect-[16/10] w-full !bg-surface" : ""
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.phone ? 390 : 1280}
                    height={g.phone ? 844 : 800}
                    sizes="(min-width: 768px) 360px, 100vw"
                    className={g.phone ? "h-full w-full object-contain py-3" : "h-auto w-full"}
                  />
                </a>
                <figcaption className="text-xs text-muted">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
          {phoneGrid && (
            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
              {s.gallery
                .filter((g) => g.phone)
                .map((g) => (
                  <figure key={g.src} className="space-y-2">
                    <a
                      href={g.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent"
                    >
                      <Image
                        src={g.src}
                        alt={g.alt}
                        width={360}
                        height={779}
                        sizes="(min-width: 640px) 170px, 50vw"
                        className="h-auto w-full"
                      />
                    </a>
                    <figcaption className="text-xs text-muted">{g.caption}</figcaption>
                  </figure>
                ))}
            </div>
          )}
        </section>
      )}

      <section className="mt-10 space-y-3">
        <H>Stack</H>
        <Chips items={s.stack} />
      </section>
    </article>
  );
}
