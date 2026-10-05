import { aiCards, aiWorkflow } from "@/data/profile";
import Section from "./Section";
import Reveal from "./Reveal";
import Chips from "./Chips";
import AskResume from "./AskResume";

export default function AISection() {
  return (
    <Section id="ai" eyebrow="AI in production" title="I don't just use AI to code — I ship it.">
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="grid gap-4 lg:col-span-6">
          {aiCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <article className="h-full rounded-card border border-line bg-surface p-6">
                <p className="font-mono text-xs text-muted">{c.where}</p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.01em]">{c.title}</h3>
                <p className="mt-2 mb-4 text-sm text-muted">{c.body}</p>
                <Chips items={c.stack} />
              </article>
            </Reveal>
          ))}
          <p className="font-mono text-sm text-muted">{aiWorkflow}</p>
        </div>
        <Reveal className="lg:col-span-6">
          <AskResume />
        </Reveal>
      </div>
    </Section>
  );
}
