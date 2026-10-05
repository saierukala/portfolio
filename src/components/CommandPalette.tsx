"use client";

import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { profile, nav } from "@/data/profile";
import { useApp } from "./Providers";

export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const { copyEmail } = useApp();

  const run = (fn: () => void) => () => {
    onOpenChange(false);
    // let the dialog close before scrolling/navigating
    setTimeout(fn, 50);
  };
  const go = (href: string) => () => {
    document.querySelector(href)?.scrollIntoView();
    history.replaceState(null, "", href);
  };
  const external = (url: string) => () => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <Command.Dialog open={open} onOpenChange={onOpenChange} label="Command palette">
      <Command.Input placeholder="Type a command or search…" />
      <Command.List>
        <Command.Empty>No results.</Command.Empty>
        <Command.Group heading="Jump to">
          {[{ label: "Top", href: "#main" }, ...nav].map((n) => (
            <Command.Item key={n.href} value={`go ${n.label}`} onSelect={run(go(n.href))}>
              {n.label}
            </Command.Item>
          ))}
        </Command.Group>
        <Command.Group heading="Actions">
          <Command.Item value="open resume pdf" onSelect={run(external(profile.resume))}>
            Open resume
          </Command.Item>
          <Command.Item value="copy email" onSelect={run(copyEmail)}>
            Copy email
          </Command.Item>
          {profile.linkedin && (
            <Command.Item value="open linkedin" onSelect={run(external(profile.linkedin))}>
              Open LinkedIn
            </Command.Item>
          )}
          {profile.github && (
            <Command.Item value="open github" onSelect={run(external(profile.github))}>
              Open GitHub
            </Command.Item>
          )}
          <Command.Item
            value="toggle theme light dark"
            onSelect={run(() => setTheme(resolvedTheme === "light" ? "dark" : "light"))}
          >
            Toggle theme
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
