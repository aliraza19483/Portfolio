"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-lg font-bold tracking-tight">
              <span className="text-gradient">{SITE_CONFIG.name}</span>
            </p>
            <p className="text-xs text-white/30 mt-1">
              {SITE_CONFIG.title}
            </p>
          </motion.div>

          {/* Center - Social icons */}
          <div className="flex items-center gap-4">
            {[
              { href: SITE_CONFIG.github, label: "GitHub" },
              { href: SITE_CONFIG.linkedin, label: "LinkedIn" },
              { href: SITE_CONFIG.leetcode, label: "LeetCode" },
              { href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] 
                flex items-center justify-center text-white/30 hover:text-white/70 
                hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300"
                aria-label={link.label}
              >
                <span className="text-xs font-medium">
                  {link.label.charAt(0)}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right - Copyright */}
          <p className="text-xs text-white/20 font-light">
            © {currentYear} {SITE_CONFIG.name}. Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
