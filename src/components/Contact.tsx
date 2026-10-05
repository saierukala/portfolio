import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import CopyEmailButton from "./CopyEmailButton";
import LazyContactForm from "./LazyContactForm";

const ghost =
  "inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-sm font-medium transition-colors hover:border-muted";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Contact</p>
        <h2
          id="contact-h"
          className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl"
        >
          {profile.contactLine}
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            <Mail size={16} aria-hidden />
            {profile.email}
          </a>
          <CopyEmailButton className="border border-line" />
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={ghost}>
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={ghost}>
              GitHub
            </a>
          )}
          <a href={profile.resume} download className={ghost}>
            <Download size={16} aria-hidden />
            Resume PDF
          </a>
        </div>
        <div className="mt-12 border-t border-line pt-10">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Or send a message</h3>
          <LazyContactForm />
        </div>
      </Reveal>
    </section>
  );
}
