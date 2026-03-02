"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const tags = ["AI", "Cloud", "DevOps", "UI/UX", "Cyber", "SaaS"];

export default function KineticHero() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background"
    >
      {/* 1. LAYERED BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        {/* The Grid - using your theme's pattern */}
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />
        
       
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--primary)_0%,transparent_50%)] opacity-10" />
        
        {/* Moving Beam */}
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Active: 2026
            </motion.div>

           <h1 className="text-7xl md:text-9xl font-black leading-none  pb-3">
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="block tracking-tighter"
              >
                THE NEW
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
               className="bg-gradient-to-r from-primary via-purple-500 to-primary 
bg-[length:200%_auto] bg-clip-text text-transparent italic pb-2"
              >
                STANDARD
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-foreground/50 text-lg max-w-md leading-relaxed border-l-2 border-primary/20 pl-6"
            >
              Decoding the future of IT infrastructure through a lens of performance engineering and radical UI design.
            </motion.p>

         
          </div>

          {/* RIGHT SIDE: THE ORBITAL CORE */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* The Central Node */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative z-20 w-32 h-32 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shadow-[0_0_50px_-12px_var(--primary)]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 animate-pulse flex items-center justify-center text-primary">
                 <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                 </svg>
              </div>
            </motion.div>

            {/* Orbital Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full scale-50" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-75" />
            <div className="absolute inset-0 border border-white/5 rounded-full" />

            {/* The Tags (Animated Path) */}
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: [0, -360] }} // Keeps text upright
                  transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
                  style={{ x: 140 + i * 25 }}
                  className="pointer-events-auto px-4 py-2 bg-secondary/80 backdrop-blur-md border border-border rounded-lg text-xs font-mono font-bold hover:border-primary hover:text-primary transition-colors cursor-pointer"
                >
                  {tag}
                </motion.div>
              </motion.div>
            ))}

            {/* Background Glows for the Orbit */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}