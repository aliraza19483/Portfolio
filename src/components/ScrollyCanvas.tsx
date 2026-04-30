"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

// ─── Social Icons ───────────────────────────────────────────────
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// ─── Stagger animation config ───────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const greetingVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const nameVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const roleVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ─── Particle Background ────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(50, Math.floor(window.innerWidth / 25));
    const w = window.innerWidth;
    const h = window.innerHeight;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.3 + 0.05,
        hue: Math.random() > 0.6 ? 35 : 220, // Gold or blue
      });
    }

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      // Warm radial gradient
      const g1 = ctx.createRadialGradient(w * 0.7, h * 0.3, 0, w * 0.5, h * 0.5, w * 0.7);
      g1.addColorStop(0, "hsla(35, 70%, 30%, 0.08)");
      g1.addColorStop(0.5, "hsla(25, 60%, 20%, 0.04)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Blue accent
      const g2 = ctx.createRadialGradient(w * 0.2, h * 0.7, 0, w * 0.3, h * 0.5, w * 0.5);
      g2.addColorStop(0, "hsla(220, 70%, 25%, 0.06)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 55%, ${p.opacity})`;
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200, 170, 100, ${0.03 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

// ─── Main Hero Component ────────────────────────────────────────
export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  const socialLinks = [
    { href: SITE_CONFIG.github, icon: <GithubIcon />, label: "GitHub" },
    { href: SITE_CONFIG.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
    { href: `mailto:${SITE_CONFIG.email}`, icon: <MailIcon />, label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle canvas background */}
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* ─── Left: Text Content ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              variants={greetingVariants}
              className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: "#c8a455" }}
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={nameVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-3 leading-[0.95]"
            >
              <span className="text-white">Ali </span>
              <span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #c8a455 0%, #e8c97a 40%, #d4a94c 70%, #b8933f 100%)",
                }}
              >
                Raza
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={roleVariants}
              className="text-lg md:text-xl text-white/70 font-medium tracking-wide mb-6"
            >
              {SITE_CONFIG.title}
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="w-12 h-[2px] mb-6"
              style={{ background: "linear-gradient(90deg, #c8a455, transparent)" }}
            />

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-white/50 text-sm md:text-base leading-relaxed max-w-md mb-8 font-light"
            >
              {SITE_CONFIG.tagline}
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03]
                    flex items-center justify-center text-white/40
                    hover:text-[#c8a455] hover:border-[#c8a455]/40 hover:bg-[#c8a455]/5
                    transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              {/* View My Work */}
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  text-sm font-semibold text-black transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #c8a455 0%, #e8c97a 50%, #d4a94c 100%)",
                }}
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowIcon />
                </span>
              </motion.a>

              {/* Download CV */}
              <motion.a
                href={SITE_CONFIG.resumeUrl}
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  text-sm font-semibold text-white/80 border border-white/15
                  bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25
                  hover:text-white transition-all duration-300"
              >
                <DownloadIcon />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ─── Right: Portrait ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind portrait */}
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-20"
                style={{
                  background: "radial-gradient(circle, #c8a455 0%, transparent 70%)",
                }}
              />

              {/* Portrait container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] lg:w-[28rem] lg:h-[34rem]">
                {!imgError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/ali-raza.jpg"
                    alt="Ali Raza - Full Stack & DevOps Engineer"
                    className="w-full h-full object-cover object-top rounded-2xl"
                    onError={() => setImgError(true)}
                    style={{
                      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    }}
                  />
                ) : (
                  /* Fallback silhouette when no photo */
                  <div
                    className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 60%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    }}
                  >
                    <div className="text-center">
                      <span
                        className="text-8xl font-black bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, #c8a455 0%, #e8c97a 50%, #b8933f 100%)",
                        }}
                      >
                        AR
                      </span>
                      <div className="mt-2 w-16 h-[2px] mx-auto" style={{ background: "#c8a455" }} />
                    </div>
                  </div>
                )}

                {/* Decorative corner accents */}
                <div
                  className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl pointer-events-none"
                  style={{ borderColor: "rgba(200, 164, 85, 0.25)" }}
                />
                <div
                  className="absolute bottom-20 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl pointer-events-none"
                  style={{ borderColor: "rgba(200, 164, 85, 0.15)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full" style={{ background: "#c8a455" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
