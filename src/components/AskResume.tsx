"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { askQuestions } from "@/data/profile";

type Msg = { q: string; a: string };

export default function AskResume() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Msg | null>(null);
  const [shown, setShown] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => () => clearInterval(timer.current), []);

  const ask = (m: Msg) => {
    clearInterval(timer.current);
    setActive(m);
    if (reduce) {
      setShown(m.a.length);
      return;
    }
    setShown(0);
    let n = 0;
    timer.current = setInterval(() => {
      n += 2;
      setShown(n);
      if (n >= m.a.length) clearInterval(timer.current);
    }, 16);
  };

  const typing = active !== null && shown < active.a.length;

  return (
    <div className="flex h-full flex-col rounded-card border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <h3 className="font-mono text-sm">Ask my resume</h3>
        <span className="font-mono text-[11px] text-muted">scripted</span>
      </div>
      <div
        className="min-h-[190px] flex-1 space-y-3 p-5 text-sm"
        role="log"
        aria-live="polite"
        aria-busy={typing}
      >
        {!active && <p className="text-muted">Pick a question below.</p>}
        {active && (
          <>
            <p className="ml-auto w-fit max-w-[85%] rounded-lg border border-line px-3 py-2 font-mono text-xs">
              {active.q}
            </p>
            <p className="leading-relaxed">
              {active.a.slice(0, shown)}
              {typing && <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent" aria-hidden />}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line p-4">
        {askQuestions.map((m) => (
          <button
            key={m.q}
            type="button"
            onClick={() => ask(m)}
            aria-pressed={active?.q === m.q}
            className={`rounded-lg border px-3 py-1.5 text-left text-xs transition-colors ${
              active?.q === m.q ? "border-accent text-accent" : "border-line text-muted hover:text-fg"
            }`}
          >
            {m.q}
          </button>
        ))}
      </div>
      <p className="border-t border-line px-5 py-3 font-mono text-[11px] text-muted">
        Scripted demo — inspired by the HR assistant I shipped.
      </p>
    </div>
  );
}
