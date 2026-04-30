"use client";

import { motion } from "framer-motion";
import { EDUCATION_DATA, ACHIEVEMENTS, SITE_CONFIG } from "@/lib/constants";

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-[0.2em] uppercase">
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">
            My{" "}
            <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-sm">
                🎓
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card-hover p-5 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-accent-blue border-2 border-bg hidden lg:block" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-white/90">{edu.institution}</h4>
                      <p className="text-sm text-white/50 mt-1">{edu.degree}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs text-white/30">{edu.period}</span>
                      <p className="text-sm text-accent-blue font-medium mt-1">{edu.score}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-sm">
                🏆
              </span>
              Achievements & Leadership
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card-hover p-4 flex items-start gap-3"
                >
                  <span className="text-accent-orange/60 mt-0.5">▸</span>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>

            {/* Experience summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 glass-card p-5 border-accent-blue/10"
            >
              <h4 className="font-semibold text-white/80 mb-3 flex items-center gap-2">
                <span>💼</span> Experience
              </h4>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Built and delivered 2+ production web applications as a freelance developer.
                Specialized in React.js frontends with optimized performance and responsive design.
                Experienced in end-to-end project delivery from client requirement gathering to deployment.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href={SITE_CONFIG.resumeUrl}
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 rounded-xl font-medium text-white overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-accent rounded-xl" />
            <div className="absolute inset-0 bg-gradient-accent-hover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-accent rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

            <span className="relative z-10 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
