"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CommonModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative bg-card border border-primary/30 rounded-3xl p-10 max-w-lg w-full shadow-2xl">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X size={22} />
              </button>

              <h2 className="text-3xl font-bold mb-4">
                Let's Start Your Project 🚀
              </h2>

              <p className="text-foreground/70 mb-6">
                Tell us about your idea and we’ll get back to you within 24 hours.
              </p>

              {/* Example Content */}
              <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold">
                Contact Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}