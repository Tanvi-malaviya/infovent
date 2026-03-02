"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectModal from "@/src/common/ProjectModal";
import Link from "next/link";

export default function FinalCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-12 md:py-24 bg-background overflow-hidden">
      
      {/* Background Glow - Scaled down for mobile to prevent overflow */}
      <div className="absolute w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/20 blur-[80px] md:blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] bg-card/60 backdrop-blur-xl border border-primary/20 shadow-2xl overflow-hidden"
        >
          {/* Animated Shine Effect - Slowed down for better UX */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl pointer-events-none"
          />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
            Ready to Transform Your <span className="text-primary">Business?</span>
          </h2>

          <p className="text-base md:text-xl text-foreground/70 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with us to build innovative digital solutions that drive growth and future-proof your operations.
          </p>

          <Link  href={"/contact"}>
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 text-base md:text-lg font-semibold rounded-xl bg-primary text-white shadow-[0_10px_30px_-10px_rgba(var(--primary-rgb),0.5)] flex items-center justify-center gap-3 mx-auto transition-shadow"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </motion.button>
          </Link>
        </motion.div>
      </div>

      <ProjectModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}