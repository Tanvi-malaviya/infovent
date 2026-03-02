"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 120, label: "Projects Completed" },
  { number: 80, label: "Happy Clients" },
  { number: 5, label: "Years Experience" },
  { number: 99, label: "Success Rate %" },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[900px] h-[900px] bg-primary/20 blur-[180px] rounded-full top-20 left-1/2 -translate-x-1/2 animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative text-center">

        <h2 className="text-5xl font-bold mb-20">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              {/* Glow Ring */}
              <div className="absolute w-44 h-44 rounded-full border border-primary/30 animate-spin-slow" />

              {/* Floating Orb */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-40 h-40 rounded-full bg-card/70 backdrop-blur-xl border border-border shadow-2xl flex flex-col items-center justify-center"
              >
                <h3 className="text-4xl font-bold text-primary">
                  <Counter value={stat.number} />+
                </h3>

                <p className="text-sm mt-2 text-muted-foreground text-center px-4">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}