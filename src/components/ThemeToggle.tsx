"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  // Both icons render; CSS shows the right one, so there's no hydration flicker.
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(document.documentElement.classList.contains("light") ? "dark" : "light")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:text-fg"
    >
      <Sun size={16} aria-hidden className="hidden light:block" />
      <Moon size={16} aria-hidden className="block light:hidden" />
    </button>
  );
}
