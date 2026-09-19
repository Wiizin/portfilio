




"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const socials = [
    { name: "GitHub", href: "https://github.com", icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> },
    { name: "LinkedIn", href: "https://linkedin.com", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
    { name: "Fiverr", href: "https://fiverr.com", icon: <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092V16h-1.722v-3.12c0-.678-.294-1.088-.84-1.088h-.86c-.547 0-.84.41-.84 1.092V16h-1.72V11.47h1.72v.553c.35-.437.856-.683 1.47-.683.926 0 1.55.424 1.84 1.119.353-.7.98-1.119 1.83-1.119 1.24 0 1.96.853 1.96 2.182V16h-1.72v-3.12c0-.678-.294-1.088-.84-1.088l.41-.009zM6.934 16H5.212v-1.615c-.348.478-.856.745-1.47.745C2.276 15.13 1 13.776 1 11.755c0-2.02 1.276-3.374 2.742-3.374.614 0 1.122.267 1.47.745V8.51h1.722V16zm-1.722-4.245c0-1.027-.576-1.745-1.38-1.745-.806 0-1.38.718-1.38 1.745s.574 1.745 1.38 1.745c.804 0 1.38-.718 1.38-1.745zM12.12 8.51h1.722V16H12.12v-.615c-.348.478-.856.744-1.47.744-1.466 0-2.742-1.354-2.742-3.374 0-2.02 1.276-3.374 2.742-3.374.614 0 1.122.267 1.47.745V8.51zm0 3.245c0-1.027-.574-1.745-1.38-1.745-.804 0-1.38.718-1.38 1.745s.576 1.745 1.38 1.745c.806 0 1.38-.718 1.38-1.745z" /> },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-purple uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-muted mb-2 capitalize">{field}</label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30 transition-all"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-gradient w-full px-8 py-4 rounded-xl text-white font-semibold disabled:opacity-60"
            >
              <span>{status === "sending" ? "Sending..." : status === "sent" ? "✓ Sent!" : "Send Message"}</span>
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="glow-card p-8 rounded-2xl mb-8">
              <div className="p-1">
                <h3 className="text-xl font-bold text-foreground mb-4">Let&apos;s work together</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s create something amazing together.
                </p>
                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    hello@example.com
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    Remote — Worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
