import { profile } from "@/data/profile";
import CopyEmailButton from "./CopyEmailButton";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  const [before, hl, after] = profile.headline.split(/(300\+ people)/);
  return (
    <div className="relative overflow-hidden">
    <div className="hero-glow" aria-hidden />
    <section className="mx-auto grid max-w-page items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-12 lg:pb-24 lg:pt-24">
      <div className="lg:col-span-6">
        <p className="mb-5 flex items-center gap-2 font-mono text-xs text-muted lg:hidden">
          <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Available · Immediate joiner
          </span>
        </p>
        <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[64px] xl:text-[68px]">
          {before}
          <span className="text-accent">{hl}</span>
          {after}
          <span
            className="cursor-blink ml-1 inline-block h-[0.85em] w-[0.1em] translate-y-[0.08em] bg-accent"
            aria-hidden
          />
        </h1>
        <p className="mt-6 font-mono text-sm leading-relaxed text-fg">{profile.subline.join(" · ")}</p>
        <p className="mt-2 font-mono text-sm text-muted">{profile.availability.join(" · ")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex h-11 items-center rounded-lg bg-gradient-accent px-5 text-sm font-medium text-accent-ink shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
          >
            View work
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex h-11 items-center rounded-lg border border-line px-5 text-sm font-medium transition-colors hover:border-muted"
          >
            Download resume
          </a>
          <CopyEmailButton />
        </div>
      </div>
      <div className="lg:col-span-6">
        <HeroDashboard />
      </div>
    </section>
    </div>
  );
}
