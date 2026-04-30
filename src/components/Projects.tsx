"use client";

import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-purple-400 text-sm font-medium tracking-[0.2em] uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">
            Things I&apos;ve{" "}
            <span className="text-gradient">built</span>
          </h2>
          <p className="text-white/40 mt-4 text-lg font-light max-w-xl">
            Real-world applications solving real problems — from client platforms to infrastructure tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS_DATA)[number];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={project.link}
      target={project.link !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="group block glass-card p-6 lg:p-8 relative overflow-hidden cursor-pointer h-full"
    >
      {/* Hover glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 
        group-hover:opacity-10 blur-xl transition-opacity duration-700 rounded-2xl`}
      />

      {/* Gradient top line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-white/40 text-sm mt-1">{project.subtitle}</p>
          </div>
          <span className="text-white/20 text-xs font-light">{project.period}</span>
        </div>

        {/* Problem */}
        <div className="mb-4">
          <p className="text-xs text-white/30 uppercase tracking-wider mb-1.5">Problem</p>
          <p className="text-white/50 text-sm leading-relaxed font-light">{project.problem}</p>
        </div>

        {/* Impact */}
        <div className="mb-6">
          <p className="text-xs text-white/30 uppercase tracking-wider mb-1.5">Impact</p>
          <p className="text-white/60 text-sm leading-relaxed font-light">{project.impact}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-[10px] font-medium rounded-md border 
              border-white/[0.06] bg-white/[0.03] text-white/50 
              group-hover:border-white/10 group-hover:text-white/70 transition-all duration-300`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Arrow */}
        {project.link !== "#" && (
          <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
            <motion.div
              className="text-white/20 group-hover:text-white/60 transition-colors duration-300"
              whileHover={{ x: 3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.div>
          </div>
        )}
      </div>
    </motion.a>
  );
}
