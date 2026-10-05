import { nav, profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import OpenPaletteButton from "./OpenPaletteButton";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center gap-4 px-4 sm:px-6">
        <a
          href="#main"
          aria-label={`${profile.name}, back to top`}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line font-mono text-sm font-semibold text-accent"
        >
          {profile.initials}
        </a>
        <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          Available · Immediate joiner
        </span>
        <nav aria-label="Primary" className="ml-2 hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-fg">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <OpenPaletteButton />
          <ThemeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="flex h-9 items-center rounded-lg bg-accent px-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            Resume
          </a>
        </div>
      </div>
      <nav aria-label="Primary mobile" className="flex gap-1 overflow-x-auto border-t border-line px-3 md:hidden">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="shrink-0 px-3 py-2 text-sm text-muted">
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
