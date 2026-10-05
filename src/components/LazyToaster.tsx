"use client";

import dynamic from "next/dynamic";

// Toast UI isn't needed for first paint; load it after hydration.
const ToasterProvider = dynamic(() => import("./ToasterProvider"), { ssr: false });

export default function LazyToaster() {
  return <ToasterProvider />;
}
