import { experience } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Two teams, three years of shipping.">
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[37px]" aria-hidden />
            <Reveal>
              <p className="font-mono text-xs text-muted">
                {e.dates} · {e.location}
              </p>
              <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.01em]">
                {e.role} <span className="font-normal text-muted">· {e.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
