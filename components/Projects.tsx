"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "GiveCircle",
    description:
      "A charity and donation platform built for ESPRIT university, with a Spring Boot backend, Angular frontend, MySQL, Docker Compose, and Kubernetes deployment support.",
    tags: ["Spring Boot", "Angular", "MySQL", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/ntpersonal/pidev/tree/amine",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    iconGradient: "from-emerald-400 to-cyan-400",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500/20 to-purple-500/20",
    iconGradient: "from-blue-400 to-purple-400",
  },
  {
    title: "SaaS Landing Page",
    description:
      "High-converting marketing landing page with smooth animations, dynamic pricing tables, and integrated payment processing.",
    tags: ["React", "Framer Motion", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconGradient: "from-purple-400 to-pink-400",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Full-stack messaging platform with real-time communication, file sharing, group channels, and end-to-end encryption.",
    tags: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconGradient: "from-cyan-400 to-blue-400",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-purple uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="glow-card group"
            >
              <div className="p-6 lg:p-8 flex flex-col h-full">
                {/* Project icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5`}>
                  <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground bg-accent-purple/10 hover:bg-accent-purple/20 px-4 py-2 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground border border-border hover:border-muted px-4 py-2 rounded-lg transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
