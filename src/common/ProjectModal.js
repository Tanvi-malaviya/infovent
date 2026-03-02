"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function ProjectModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
            <div className="relative bg-card border border-primary/30 rounded-3xl p-10 max-w-xl w-full shadow-2xl">

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X size={22} />
              </button>

              <h2 className="text-3xl font-bold mb-2">
                Start Your Project 
              </h2>
              <p className="text-foreground/70 mb-6">
                Fill details & our team will contact you shortly.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border bg-background focus:border-primary outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border bg-background focus:border-primary outline-none"
                />

                <select
                  name="service"
                  required
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border bg-background focus:border-primary outline-none"
                >
                  <option value="">Select Service</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Project Details"
                  rows="4"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border bg-background focus:border-primary outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:scale-105 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}