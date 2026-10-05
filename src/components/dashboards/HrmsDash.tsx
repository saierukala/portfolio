import { Avatar, Card, Chip, Frame, Sidebar, Stat } from "./ui";

const rows = [
  { n: "Ravi Kumar", d: "Engineering", t: "09:02", s: "Present", tone: "ok" },
  { n: "Priya Sharma", d: "Design", t: "09:41", s: "Late", tone: "warn" },
  { n: "Anil Reddy", d: "Finance", t: "—", s: "On leave", tone: "info" },
  { n: "Meena Iyer", d: "HR", t: "08:55", s: "Present", tone: "ok" },
  { n: "Sandeep Rao", d: "Sales", t: "09:10", s: "Present", tone: "ok" },
  { n: "Divya Nair", d: "Support", t: "09:33", s: "Late", tone: "warn" },
  { n: "Karthik Menon", d: "Engineering", t: "08:48", s: "Present", tone: "ok" },
  { n: "Latha Devi", d: "Operations", t: "—", s: "On leave", tone: "info" },
] as const;

export default function HrmsDash() {
  return (
    <Frame url="hrms.company.app/attendance">
      <Sidebar brand="HRMS" items={["Employees", "Attendance", "Leave", "Team", "Projects", "Help Desk"]} active={1} />
      <div className="flex min-w-0 flex-1 gap-[1em] p-[1.1em]">
        <div className="flex min-w-0 flex-1 flex-col gap-[0.9em]">
          <div className="flex items-center justify-between">
            <div className="text-[1.3em] font-semibold">Attendance · Today</div>
            <span className="rounded-[0.5em] border border-line px-[0.9em] py-[0.3em] text-muted">Search employee…</span>
          </div>
          <div className="flex gap-[0.8em]">
            <Stat label="Present" value="284" hint="+3.2% vs. yesterday" />
            <Stat label="Late" value="12" />
            <Stat label="On leave" value="9" />
          </div>
          <div className="min-h-0 flex-1 overflow-hidden rounded-[0.7em] border border-line bg-surface">
            {rows.map((r) => (
              <div key={r.n} className="flex items-center gap-[0.8em] border-b border-line px-[1em] py-[0.65em] last:border-0">
                <Avatar name={r.n} />
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{r.n}</div>
                  <div className="text-[0.85em] text-muted">{r.d}</div>
                </div>
                <span className="font-mono text-muted">{r.t}</span>
                <Chip tone={r.tone}>{r.s}</Chip>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[18em] shrink-0 flex-col gap-[0.9em]">
          <Card title="Leave approvals">
            {["Anil Reddy · 3 days", "Kavya N. · 1 day"].map((x, i) => (
              <div key={x} className="mb-[0.7em] last:mb-0">
                <div className="font-medium">{x}</div>
                <div className="mt-[0.4em] flex items-center gap-[0.4em]">
                  <i className="h-[0.7em] w-[0.7em] rounded-full bg-emerald-500" />
                  <i className="h-[2px] w-[1.6em] bg-line" />
                  <i className={`h-[0.7em] w-[0.7em] rounded-full ${i === 0 ? "bg-emerald-500" : "bg-amber-500"}`} />
                  <i className="h-[2px] w-[1.6em] bg-line" />
                  <i className="h-[0.7em] w-[0.7em] rounded-full bg-line" />
                  <span className="ml-[0.4em] text-[0.85em] text-muted">{i === 0 ? "HR review" : "Manager"}</span>
                </div>
              </div>
            ))}
          </Card>
          <Card title="HR Assistant" className="flex-1">
            <div className="ml-auto w-fit max-w-[90%] rounded-[0.7em] bg-accent/15 px-[0.8em] py-[0.5em] text-accent">
              How many leaves do I have left?
            </div>
            <div className="mt-[0.6em] w-fit max-w-[95%] rounded-[0.7em] border border-line bg-bg px-[0.8em] py-[0.5em]">
              You have 11 days of annual leave remaining.
            </div>
          </Card>
        </div>
      </div>
    </Frame>
  );
}
