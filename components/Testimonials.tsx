"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    text: "Absolutely blown away by the quality. The portfolio website exceeded all expectations — modern design, smooth animations, and blazing fast performance.",
    stars: 5,
    avatar: "SJ",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Michael Chen",
    role: "Founder at DesignLab",
    text: "A fantastic experience. They delivered a stunning landing page that increased our conversions by 40%. Professional, responsive, and incredibly talented.",
    stars: 5,
    avatar: "MC",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at CloudSync",
    text: "The full-stack app they built is rock solid. Clean code, great docs, and they went above and beyond. Will definitely hire again!",
    stars: 5,
    avatar: "ER",
    gradient: "from-cyan-500 to-blue-500",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "star" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-purple uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card"
            >
              <div className="p-8 flex flex-col h-full">
                <svg className="w-8 h-8 text-accent-purple/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-muted text-sm leading-relaxed flex-grow mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground">{t.name}</h4>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                  <StarRating count={t.stars} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
