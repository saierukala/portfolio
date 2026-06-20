"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl">A collection of my recent work, focusing on scalable architecture and seamless user experiences.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover group relative flex flex-col p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800/70 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                  {project.company && (
                    <p className="mt-1 text-sm text-cyan-300/80">{project.company} / {project.duration}</p>
                  )}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label={`${project.title} GitHub`}>
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label={`${project.title} live project`}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{project.description}</p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-zinc-300">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-zinc-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-200"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
