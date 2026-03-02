"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Cpu,
  Rocket,
} from "lucide-react";

export default function SolutionsShowcase() {
  const [active, setActive] = useState(0);

  const solutions = [
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

  const ActiveIcon = solutions[active].icon;

  return (
    <section className="py-32 bg-background relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full -top-40 -left-40" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative">

        {/* LEFT — SOLUTION LIST */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold mb-12">
            Our Core <span className="text-primary">Solutions</span>
          </h2>

          {solutions.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.03 }}
                className={`cursor-pointer p-6 rounded-xl border transition-all
                ${
                  active === i
                    ? "border-primary bg-primary/10 shadow-lg"
                    : "border-border bg-card/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon
                    className={`${
                      active === i ? "text-primary" : "text-foreground/50"
                    }`}
                    size={28}
                  />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT — ACTIVE PANEL */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-12 rounded-3xl bg-card/60 backdrop-blur-xl border border-primary/20 shadow-2xl"
        >
          {/* Icon */}
          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 mb-8">
            <ActiveIcon size={40} className="text-primary" />
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold mb-6">
            {solutions[active].title}
          </h3>

          {/* Description */}
          <p className="text-lg text-foreground/70 leading-relaxed">
            {solutions[active].desc}
          </p>

          {/* Animated Glow Line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </div>
    </section>
  );
}