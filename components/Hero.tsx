"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

function FloatingParticle({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) {
  return (
    <motion.div
      className="particle"
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = [
  { delay: 0, size: 6, x: "10%", y: "20%" },
  { delay: 1, size: 4, x: "80%", y: "10%" },
  { delay: 2, size: 8, x: "70%", y: "60%" },
  { delay: 0.5, size: 5, x: "20%", y: "70%" },
  { delay: 1.5, size: 3, x: "90%", y: "40%" },
  { delay: 3, size: 7, x: "50%", y: "80%" },
  { delay: 0.8, size: 4, x: "30%", y: "30%" },
  { delay: 2.5, size: 6, x: "60%", y: "15%" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      {mounted && particles.map((p, i) => <FloatingParticle key={i} {...p} />)}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted">Available for freelance work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Jery Mohamed Amine</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-muted">
                Full Stack Developer &amp; Portfolio Specialist
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I craft stunning, high-performance web experiences that turn visitors into
              customers. From pixel-perfect portfolios to full-stack applications — I
              bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gradient px-8 py-4 rounded-full text-white font-semibold text-base"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View My Work
                </span>
              </a>
              <a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-4 rounded-full text-foreground font-semibold text-base"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Hire Me on Fiverr
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan opacity-60 blur-md"
              />
              {/* Gradient border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/profile.jpg"
                    alt="Profile photo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              {/* Decorative dots */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent-blue/20 border border-accent-blue/30"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-accent-purple/20 border border-accent-purple/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted/40 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
