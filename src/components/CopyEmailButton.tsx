"use client";

import { Copy } from "lucide-react";
import { useApp } from "./Providers";

export default function CopyEmailButton({ label = "Copy email", className = "" }: { label?: string; className?: string }) {
  const { copyEmail } = useApp();
  return (
    <button
      type="button"
      onClick={copyEmail}
      className={`inline-flex h-10 items-center gap-2 rounded-lg px-3 font-mono text-xs text-muted transition-colors hover:text-fg ${className}`}
    >
      <Copy size={14} aria-hidden />
      {label}
    </button>
  );
}
