"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", color: "from-blue-400 to-cyan-400" },
  { name: "Next.js", color: "from-gray-300 to-white" },
  { name: "Vue.js", color: "from-green-400 to-emerald-400" },
  { name: "JavaScript", color: "from-yellow-400 to-amber-400" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-sky-400" },
  { name: "Node.js", color: "from-green-500 to-lime-400" },
  { name: "TypeScript", color: "from-blue-500 to-blue-300" },
  { name: "MongoDB", color: "from-green-600 to-green-400" },
  { name: "PostgreSQL", color: "from-blue-600 to-indigo-400" },
  { name: "Git", color: "from-orange-500 to-red-400" },
  { name: "Figma", color: "from-purple-500 to-pink-400" },
  { name: "REST API", color: "from-teal-400 to-emerald-300" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-purple uppercase tracking-widest">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="glow-card p-8 rounded-2xl">
              <div className="p-1">
                <p className="text-muted leading-relaxed text-base md:text-lg mb-6">
                  I&apos;m a passionate Full Stack Developer with a keen eye for design and
                  a love for creating seamless digital experiences. With years of experience
                  building modern web applications, I specialize in crafting beautiful,
                  performant, and user-friendly interfaces.
                </p>
                <p className="text-muted leading-relaxed text-base md:text-lg mb-6">
                  Whether it&apos;s a stunning portfolio website, a complex SaaS platform, or
                  a dynamic landing page — I bring creativity and technical expertise to every
                  project. I&apos;m dedicated to writing clean, maintainable code and delivering
                  results that exceed expectations.
                </p>
                <div className="flex gap-8 pt-4 border-t border-border">
                  <div>
                    <h4 className="text-3xl font-bold gradient-text">50+</h4>
                    <p className="text-sm text-muted mt-1">Projects Done</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold gradient-text">30+</h4>
                    <p className="text-sm text-muted mt-1">Happy Clients</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold gradient-text">3+</h4>
                    <p className="text-sm text-muted mt-1">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              My Tech Stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group relative flex items-center justify-center px-3 py-3 rounded-xl border border-border bg-card hover:bg-card-hover transition-all duration-300 cursor-default"
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors relative z-10">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
