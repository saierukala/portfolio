import { coreSkills, education, skills } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with.">
      <Reveal className="divide-y divide-line rounded-card border border-line bg-surface">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-3 p-5 sm:grid-cols-[180px_1fr]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => {
                const core = coreSkills.includes(s);
                return (
                  <li
                    key={s}
                    className={`rounded-md border px-2.5 py-1 font-mono text-xs ${
                      core ? "border-accent text-accent" : "border-line text-fg"
                    }`}
                  >
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Reveal>
      <p className="mt-3 font-mono text-[11px] text-muted">Highlighted = core stack.</p>
      <Education />
    </Section>
  );
}

function Education() {
  return (
    <div className="mt-10">
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Education</h3>
      <ul className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
        {education.map((e) => (
          <li key={e.name}>
            {e.name} <span className="font-mono text-xs text-muted">({e.dates})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
