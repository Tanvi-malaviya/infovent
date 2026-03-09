"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function BlogNewsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
   <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 md:pb-20 overflow-hidden bg-background">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-10 md:px-16 py-10 sm:py-12 md:py-16 rounded-2xl md:rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
          Stay Ahead of the Curve
        </h2>

        <p className="text-foreground/70 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor.
        </p>

        {!subscribed ? (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-secondary border border-border w-full sm:w-80 md:w-96 focus:ring-2 focus:ring-primary outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubscribed(true)}
              className="relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-white bg-primary overflow-hidden group"
            >
              <span className="relative z-10">Subscribe</span>

              <div className="absolute inset-0 animate-shine opacity-40" />
            </motion.button>

          </div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-success text-lg sm:text-xl font-bold"
          >
            You're Subscribed!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}