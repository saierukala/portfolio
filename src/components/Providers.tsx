"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { LazyMotion } from "framer-motion";
import { Command } from "lucide-react";
import { profile } from "@/data/profile";

const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });

type Ctx = { openPalette: () => void; copyEmail: () => void };
const AppContext = createContext<Ctx>({ openPalette: () => {}, copyEmail: () => {} });
export const useApp = () => useContext(AppContext);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [toast, setToast] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const openPalette = useCallback(() => {
    setLoaded(true);
    setOpen(true);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("Copied ✓");
    } catch {
      setToast(profile.email);
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setLoaded(true);
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AppContext.Provider value={{ openPalette, copyEmail }}>
      {children}
      {loaded && <CommandPalette open={open} onOpenChange={setOpen} />}
      <button
        type="button"
        onClick={openPalette}
        aria-label="Open command palette"
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-accent shadow-lg md:hidden"
      >
        <Command size={20} aria-hidden />
      </button>
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2"
      >
        {toast && (
          <div className="rounded-lg border border-line bg-surface px-4 py-2 font-mono text-sm text-accent shadow-lg">
            {toast}
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" themes={["dark", "light"]} enableSystem={false}>
      <LazyMotion features={() => import("./motionFeatures").then((m) => m.default)} strict>
        <AppProvider>{children}</AppProvider>
      </LazyMotion>
    </ThemeProvider>
  );
}
