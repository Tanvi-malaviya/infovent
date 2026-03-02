"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectModal from "@/src/common/ProjectModal";

export default function FinalCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-16 bg-background overflow-hidden">

      <div className="absolute w-[800px] h-[800px] bg-primary/20 blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto text-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative p-16 rounded-3xl bg-card/60 backdrop-blur-xl border border-primary/30 shadow-2xl overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-2xl"
          />

          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Partner with us to build innovative digital solutions that drive growth.
          </p>

          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 text-lg font-semibold rounded-xl bg-primary text-white shadow-xl flex items-center gap-3 mx-auto"
          >
            Start Your Project <ArrowRight />
          </motion.button>
        </motion.div>
      </div>

      <ProjectModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}