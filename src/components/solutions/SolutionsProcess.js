"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code, ShieldCheck, Rocket } from "lucide-react";

// Move data outside to prevent re-renders
const STEPS = [
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

export default function SolutionsProcess() {
  return (
    <section className="relative py-16 md:py-28 bg-secondary/30 overflow-hidden">
      {/* Background glow - Reduced size for mobile performance */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 md:w-80 md:h-80 bg-primary/10 blur-3xl rounded-full"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            How Our Solutions Work
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Our proven process ensures efficient delivery, innovation, and
            long-term success for your business.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line: Fixed for mobile (left) and desktop (center) */}
          <div className="absolute left-[11px] md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div key={step.title} className="relative flex items-center justify-between w-full">
                  
                  {/* Desktop Left Side Wrapper */}
                  <div className={`hidden md:flex w-5/12 ${isLeft ? "justify-end" : "pointer-events-none"}`}>
                    {isLeft && <StepCard step={step} Icon={Icon} isLeft={true} />}
                  </div>

                  {/* Timeline Dot: Positioned left on mobile, center on desktop */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <motion.div
                      className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-sm"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>

                  {/* Right Side / Mobile Wrapper */}
                  <div className={`flex w-full md:w-5/12 pl-10 md:pl-0 ${!isLeft ? "justify-start" : "md:pointer-events-none"}`}>
                    {/* On mobile, show all cards here. On desktop, only show odd cards. */}
                    <div className={`${isLeft ? "md:hidden" : "block"} w-full`}>
                      <StepCard step={step} Icon={Icon} isLeft={false} />
                    </div>
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

// Reusable Sub-component for the card to keep code DRY
function StepCard({ step, Icon, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-card/80 backdrop-blur-lg border border-border/40 shadow-md hover:shadow-xl transition-all group">
        <div className="flex items-center gap-4 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon size={22} className="md:w-7 md:h-7" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            {step.title}
          </h3>
        </div>
        <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}