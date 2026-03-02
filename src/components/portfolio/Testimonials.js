"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Startup Founder",
    text: "Amazing team! They delivered our project on time with outstanding quality.",
  },
  {
    name: "Priya Shah",
    role: "Marketing Head",
    text: "Their UI/UX design boosted our conversions by 45%. Highly recommended!",
  },
  {
    name: "Amit Patel",
    role: "CEO",
    text: "Professional, reliable, and extremely skilled developers.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative">
        
        <h2 className="text-5xl font-bold text-center mb-20">
          What Our Clients Say
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          
          {/* Side Preview Cards */}
          {testimonials.map((t, i) =>
            i !== index ? (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="hidden lg:block cursor-pointer opacity-40 hover:opacity-70 transition"
              >
                <div className="p-6 rounded-2xl border bg-card">
                  <p className="text-sm">{t.text.slice(0, 90)}...</p>
                  <h4 className="mt-4 font-semibold">{t.name}</h4>
                </div>
              </div>
            ) : null
          )}

          {/* Main Active Testimonial */}
          <div className="lg:col-span-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.6 }}
                className="relative p-12 rounded-3xl bg-card/70 backdrop-blur-xl border border-border shadow-2xl"
              >
                {/* Big Quote Symbol */}
                <div className="absolute -top-6 left-10 text-7xl text-primary/20 font-bold">
                  "
                </div>

                <p className="text-xl leading-relaxed text-center mb-10">
                  {testimonials[index].text}
                </p>

                <div className="text-center">
                  <h4 className="text-xl font-bold">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-4 mt-14">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="w-20 h-2 bg-border rounded-full cursor-pointer overflow-hidden"
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: index === i ? "100%" : "0%" }}
                transition={{ duration: 0.6 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}