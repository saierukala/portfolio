"use client";

import { m, useReducedMotion } from "framer-motion";

/** Card wrapper that lifts 2px on hover. */
export default function Lift({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <m.div className={className} whileHover={reduce ? undefined : { y: -2 }} transition={{ duration: 0.15 }}>
      {children}
    </m.div>
  );
}
