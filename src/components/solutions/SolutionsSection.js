"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Shield, Cpu, Database, Smartphone } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Web Development",
      desc: "Scalable, modern web applications built with cutting-edge technologies.",
      icon: Code,
    },
    {
      title: "Cloud Solutions",
      desc: "Secure and high-performance cloud infrastructure for growing businesses.",
      icon: Cloud,
    },
    {
      title: "Cyber Security",
      desc: "Enterprise-level protection to safeguard your digital assets.",
      icon: Shield,
    },
    {
      title: "AI Automation",
      desc: "Smart AI solutions that improve efficiency and productivity.",
      icon: Cpu,
    },
    {
      title: "Database Systems",
      desc: "Robust and optimized data management architectures.",
      icon: Database,
    },
    {
      title: "Mobile Apps",
      desc: "User-friendly, high-performance mobile applications.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-background to-secondary overflow-hidden">
      {/* Soft animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Smart IT Solutions
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Innovative technology services designed to solve complex business
            challenges and accelerate digital transformation.
          </p>
        </motion.div>

        {/* Unique staggered layout */}
        <div className="grid md:grid-cols-3 gap-10">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl bg-card/70 backdrop-blur-xl border border-border/40 overflow-hidden"
              >
                {/* Glow animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                  <Icon size={28} />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {solution.desc}
                </p>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/40 transition" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}