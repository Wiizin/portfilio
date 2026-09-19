"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseEffect() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring-based follow
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });

  // Trail (slower follow)
  const trailX = useSpring(mouseX, { stiffness: 50, damping: 30, mass: 1 });
  const trailY = useSpring(mouseY, { stiffness: 50, damping: 30, mass: 1 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button")
    ) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseMove, handleMouseOver]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      {/* Main glow - follows cursor closely */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            isHovering
              ? "w-16 h-16 bg-accent-purple/20 border border-accent-purple/40"
              : "w-8 h-8 bg-white/10 border border-white/20"
          }`}
        />
      </motion.div>

      {/* Large ambient glow - follows cursor slowly */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="absolute"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-accent-blue/[0.07] to-accent-purple/[0.07] blur-3xl" />
      </motion.div>

      {/* Tiny dot - precise cursor position */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="absolute"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-purple" />
      </motion.div>
    </div>
  );
}
