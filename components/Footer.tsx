"use client";

import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt;Dev /&gt;
          </motion.a>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {["GitHub", "LinkedIn", "Fiverr"].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent-purple/50 transition-all text-xs font-medium"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} <span className="gradient-text font-medium">Dev</span>. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
