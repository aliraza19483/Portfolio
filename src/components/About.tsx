"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/lib/constants";

const highlights = [
  { label: "MERN Stack", icon: "🔥" },
  { label: "DevOps", icon: "☁️" },
  { label: "System Design", icon: "⚡" },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent-blue text-sm font-medium tracking-[0.2em] uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">
            Building the{" "}
            <span className="text-gradient">future</span>, one commit at a time
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/30 via-purple-500/20 to-accent-orange/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-glass-border">
                {!imgError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/ali-raza.jpg"
                    alt="Ali Raza - Full Stack & DevOps Engineer"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback avatar when image is missing */
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-orange/20 flex items-center justify-center">
                    <span className="text-7xl font-bold text-white/20">AR</span>
                  </div>
                )}
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="text-white/60 leading-relaxed text-base md:text-lg space-y-4 font-light">
              {ABOUT_TEXT.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card px-4 py-2 flex items-center gap-2 cursor-default"
                >
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
