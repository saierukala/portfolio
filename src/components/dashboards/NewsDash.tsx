import { Card, Chip, Frame, Sidebar, Stat } from "./ui";

const articles = [
  { t: "State budget: key allocations explained", c: "Politics", s: "Published", tone: "ok" },
  { t: "Monsoon outlook for the coming week", c: "Weather", s: "Scheduled", tone: "info" },
  { t: "Local league final preview", c: "Sports", s: "Draft", tone: "mute" },
  { t: "New metro stretch opens to commuters", c: "City", s: "Published", tone: "ok" },
  { t: "Farmers market prices this week", c: "Business", s: "Scheduled", tone: "info" },
  { t: "Editorial: water supply plan", c: "Opinion", s: "Draft", tone: "mute" },
  { t: "Festival traffic advisory issued", c: "City", s: "Published", tone: "ok" },
] as const;

export default function NewsDash() {
  return (
    <Frame url="news.company.app/cms/articles">
      <Sidebar brand="Newsroom" items={["Articles", "E-Paper", "Short news", "Media", "Users"]} active={0} />
      <div className="flex min-w-0 flex-1 gap-[1em] p-[1.1em]">
        <div className="flex min-w-0 flex-1 flex-col gap-[0.9em]">
          <div className="flex items-center justify-between">
            <div className="text-[1.3em] font-semibold">Articles</div>
            <div className="flex items-center gap-[0.6em]">
              <Chip tone="warn">Editor</Chip>
              <span className="rounded-[0.5em] bg-gradient-accent px-[1em] py-[0.35em] font-semibold text-accent-ink">+ New</span>
            </div>
          </div>
          <div className="flex gap-[0.8em]">
            <Stat label="Published" value="128" />
            <Stat label="Scheduled" value="6" />
            <Stat label="Drafts" value="14" />
          </div>
          <div className="min-h-0 flex-1 overflow-hidden rounded-[0.7em] border border-line bg-surface">
            {articles.map((a) => (
              <div key={a.t} className="flex items-center gap-[0.8em] border-b border-line px-[1em] py-[0.7em] last:border-0">
                <i className="h-[2.4em] w-[3.2em] shrink-0 rounded-[0.4em] bg-gradient-accent opacity-70" />
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{a.t}</div>
                  <div className="text-[0.85em] text-muted">{a.c}</div>
                </div>
                <Chip tone={a.tone}>{a.s}</Chip>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[17em] shrink-0 flex-col gap-[0.9em]">
          <Card title="E-paper edition">
            <div className="flex gap-[0.5em]">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 space-y-[0.3em] rounded-[0.3em] border border-line bg-bg p-[0.4em]">
                  <i className="block h-[0.6em] rounded bg-fg/60" />
                  <i className="block h-[0.35em] rounded bg-line" />
                  <i className="block h-[0.35em] rounded bg-line" />
                  <i className="block h-[2.4em] rounded bg-line" />
                </div>
              ))}
            </div>
            <div className="mt-[0.6em] text-[0.85em] text-muted">Today · 12 pages · live</div>
          </Card>
          <Card title="Media upload" className="flex-1">
            <div className="flex h-full min-h-[3em] items-center justify-center rounded-[0.5em] border border-dashed border-accent/50 text-[0.9em] text-muted">
              Drop images here
            </div>
          </Card>
        </div>
      </div>
    </Frame>
  );
}
