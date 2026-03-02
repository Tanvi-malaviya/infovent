"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Cpu,
  Rocket,
} from "lucide-react";

const SOLUTIONS = [
  {
    title: "Web Development",
    icon: Code2,
    desc: "We build fast, scalable web applications designed for performance, SEO, and long-term business growth.",
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
    desc: "High-quality cross-platform apps with seamless UX and enterprise-grade security.",
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    desc: "Secure, scalable cloud architecture with optimized deployment pipelines.",
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    desc: "Advanced security systems to protect data, infrastructure, and user privacy.",
  },
  {
    title: "AI Automation",
    icon: Cpu,
    desc: "Smart AI solutions to automate operations and improve business efficiency.",
  },
  {
    title: "Digital Transformation",
    icon: Rocket,
    desc: "Complete digital modernization strategies to future-proof your business.",
  },
];

export default function SolutionsShowcase() {
  const [active, setActive] = useState(0);
  const ActiveIcon = SOLUTIONS[active].icon;

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow - Scaled for mobile */}
      <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 blur-[80px] md:blur-[140px] rounded-full -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/10 blur-[80px] md:blur-[140px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center lg:text-left">
          Our Core <span className="text-primary">Solutions</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT — SOLUTION LIST */}
          <div className="flex flex-col gap-3 md:gap-4 order-2 lg:order-1">
            {SOLUTIONS.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;

              return (
                <motion.div
                  key={item.title}
                  onClick={() => setActive(i)}
                  whileHover={{ x: 5 }}
                  className={`cursor-pointer p-4 md:p-6 rounded-xl border transition-all duration-300
                  ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-lg"
                      : "border-border bg-card/50 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      className={`${isActive ? "text-primary" : "text-foreground/50"}`}
                      size={24}
                    />
                    <h3 className={`font-semibold text-base md:text-lg transition-colors ${isActive ? "text-foreground" : "text-foreground/70"}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Mobile Only Description: Shows inside the card for better UX on small screens */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <p className="mt-4 text-sm text-foreground/70 leading-relaxed border-t border-primary/20 pt-4">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT — ACTIVE PANEL (Hidden on Mobile, shown on Large) */}
          <div className="hidden lg:block sticky top-32 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative p-10 xl:p-12 rounded-3xl bg-card/60 backdrop-blur-xl border border-primary/20 shadow-2xl overflow-hidden"
              >
                {/* Icon */}
                <div className="w-16 h-16 xl:w-20 xl:h-20 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 mb-8">
                  <ActiveIcon size={36} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  {SOLUTIONS[active].title}
                </h3>

                {/* Description */}
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {SOLUTIONS[active].desc}
                </p>

                {/* Animated Glow Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[3px] bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}