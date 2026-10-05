"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Renders the final value on the server; counts up from 0 once in view. "~30%", "300+" etc. */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const m = value.match(/^(\D*)(\d+)(.*)$/);

  useIsoLayoutEffect(() => {
    if (m && !reduce && ref.current) ref.current.textContent = `${m[1]}0${m[3]}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!m || reduce || !inView || !ref.current) return;
    const el = ref.current;
    let stop = () => {};
    let cancelled = false;
    import("framer-motion/dom").then(({ animate }) => {
      if (cancelled) return;
      const controls = animate(0, Number(m[2]), {
        duration: 1.2,
        ease: "easeOut",
        onUpdate: (v) => {
          el.textContent = `${m[1]}${Math.round(v)}${m[3]}`;
        },
      });
      stop = () => controls.stop();
    });
    return () => {
      cancelled = true;
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
