"use client";

import { useApp } from "./Providers";

export default function OpenPaletteButton() {
  const { openPalette } = useApp();
  return (
    <button
      type="button"
      onClick={openPalette}
      aria-label="Open command palette"
      className="hidden h-9 items-center gap-2 rounded-lg border border-line px-2.5 font-mono text-xs text-muted transition-colors hover:text-fg md:flex"
    >
      Press <kbd className="rounded border border-line px-1.5 py-0.5 text-[11px] text-fg">⌘K</kbd>
    </button>
  );
}
