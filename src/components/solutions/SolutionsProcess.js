"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code, ShieldCheck, Rocket } from "lucide-react";

export default function SolutionsProcess() {
  const steps = [
    {
      title: "Requirement Analysis",
      desc: "We deeply understand your business challenges and project goals.",
      icon: Search,
    },
    {
      title: "Strategy & Planning",
      desc: "We design scalable solution architecture and roadmap.",
      icon: Lightbulb,
    },
    {
      title: "Development",
      desc: "Our experts build secure and high-performance solutions.",
      icon: Code,
    },
    {
      title: "Testing & Security",
      desc: "Rigorous testing ensures quality, reliability, and protection.",
      icon: ShieldCheck,
    },
    {
      title: "Deployment & Support",
      desc: "Smooth launch with continuous monitoring and support.",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative py-28 bg-secondary/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-primary/10 blur-3xl rounded-full"
          animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 blur-3xl rounded-full"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How Our Solutions Work
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our proven process ensures efficient delivery, innovation, and
            long-term success for your business.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          <div className="space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`flex items-center w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full md:w-5/12"
                  >
                    {/* Card */}
                    <div className="p-8 rounded-3xl bg-card/80 backdrop-blur-lg border border-border/40 shadow-lg hover:shadow-xl transition">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon size={26} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-foreground/70">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className="w-6 h-6 bg-primary rounded-full border-4 border-background"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}