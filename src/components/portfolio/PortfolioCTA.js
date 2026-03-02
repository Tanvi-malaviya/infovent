"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "@/src/common/ProjectModal";
export default function PortfolioCTA() {
    const [open, setOpen] = useState(false);
  return (
    <section className="relative py-36 bg-background overflow-hidden">

      {/* Animated Gradient Beam */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[900px] h-[900px] bg-gradient-to-r from-primary/30 via-purple-500/30 to-blue-500/30 blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="max-w-5xl mx-auto px-6 relative">

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-16 rounded-[40px] bg-card/60 backdrop-blur-2xl border border-border shadow-2xl text-center overflow-hidden"
        >
          {/* Light Sweep Effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700">
            <div className="absolute w-40 h-[500px] bg-white/20 blur-2xl rotate-12 -left-40 animate-[shine_4s_linear_infinite]" />
          </div>

          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Have an Idea in Mind?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let’s transform your vision into a powerful digital experience that
            drives growth, engagement, and success.
          </p>

          {/* Magnetic CTA Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
             onClick={() => setOpen(true)}
            className="relative px-10 py-5 rounded-full bg-primary text-white text-lg font-semibold shadow-xl overflow-hidden group"
          >
            <span className="relative z-10">Start Your Project</span>

            {/* Glow Pulse */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Accent Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-40 h-40 bg-primary/30 blur-3xl rounded-full top-10 left-20"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute w-52 h-52 bg-purple-500/30 blur-3xl rounded-full bottom-10 right-20"
      />


       <ProjectModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}