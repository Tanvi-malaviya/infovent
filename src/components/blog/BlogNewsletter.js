"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function BlogNewsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden bg-background">

    

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center p-16 rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl"
      >
        <h2 className="text-5xl font-black mb-6">
          Stay Ahead of the Curve
        </h2>

        <p className="text-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
          Get exclusive insights on enterprise security, AI infrastructure,
          and next-generation digital transformation delivered to your inbox.
        </p>

        {!subscribed ? (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl bg-secondary border border-border w-80 focus:ring-2 focus:ring-primary outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubscribed(true)}
              className="relative px-10 py-4 rounded-xl font-bold text-white bg-primary overflow-hidden group"
            >
              <span className="relative z-10">Subscribe</span>

              {/* Shine animation */}
              <div className="absolute inset-0 animate-shine opacity-40" />
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-success text-xl font-bold"
          >
             You're Subscribed!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}