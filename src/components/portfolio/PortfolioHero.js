"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Hexagon, Zap, Briefcase, Bot } from "lucide-react";
import { useEffect } from "react";

// Project data for the unique nodes
const projects = [
  { id: 1, title: "Fintech App", icon: Zap, x: [0, 100, 50, 0], y: [0, -50, 50, 0], delay: 0 },
  { id: 2, title: "E-Com Platform", icon: Briefcase, x: [0, -80, 20, 0], y: [0, 70, -30, 0], delay: 1 },
  { id: 3, title: "AI Analytics", icon: Bot, x: [0, 60, -60, 0], y: [0, 90, 20, 0], delay: 2 },
  { id: 4, title: "Cloud Security", icon: Hexagon, x: [0, -120, -40, 0], y: [0, -30, 80, 0], delay: 3 },
];

export default function PortfolioHero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: [1000, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
    });
  }, [controls]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-4 sm:px-6 py-20 sm:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" className="fill-primary/40" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#dotPattern)" />

          <motion.path
            d="M -100 200 Q 150 50, 400 300 T 800 100 T 1200 400"
            stroke="var(--primary)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="10 10"
            animate={controls}
          />

          <motion.path
            d="M 100 800 Q 350 600, 600 850 T 1000 700 T 1400 900"
            stroke="var(--primary)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="15 5"
            animate={controls}
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6 sm:space-y-8 relative z-10 text-center lg:text-left">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Innovation-Driven Digital Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Architecting{" "}
            <span className="text-primary relative">
              Future
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 rounded-full"></span>
            </span>{" "}
            Digital Landscapes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          </motion.p>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center min-h-[350px] sm:min-h-[420px] lg:min-h-[500px]">

          {/* Glow */}
          <div className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/10 blur-[120px] rounded-full" />

          <div className="relative w-[300px] sm:w-[360px] lg:w-[420px] h-[300px] sm:h-[360px] lg:h-[420px]">

            {projects.map((proj) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  key={proj.id}
                  className="absolute w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
                  animate={{ x: proj.x, y: proj.y }}
                  transition={{
                    duration: 12 + proj.id * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    top: proj.id <= 2 ? "0%" : "60%",
                    left: proj.id % 2 === 0 ? "60%" : "0%",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-full h-full rounded-full bg-card/40 backdrop-blur-2xl border border-primary/20 shadow-xl flex flex-col items-center justify-center p-3 sm:p-4 lg:p-5 text-center"
                  >
                    <div className="p-2 sm:p-3 rounded-full bg-primary/10 border border-primary/20 mb-2 sm:mb-3">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
                    </div>

                    <h3 className="font-bold text-xs sm:text-sm lg:text-base">
                      {proj.title}
                    </h3>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-background border-2 border-primary">
              <div className="absolute inset-1 rounded-full bg-primary animate-pulse" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}