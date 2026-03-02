"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import {
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Factory,
  Landmark,
  Building2,
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { name: "Healthcare", icon: HeartPulse },
    { name: "E-Commerce", icon: ShoppingCart },
    { name: "Education", icon: GraduationCap },
    { name: "Manufacturing", icon: Factory },
    { name: "Finance", icon: Landmark },
    { name: "Real Estate", icon: Building2 },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const rotateX = useTransform(mouseY, [0, 800], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1600], [-8, 8]);

  const radius = 230;

  return (
    <section className="py-32 bg-background overflow-hidden relative">

      {/* Floating Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative">

        {/* LEFT SIDE — ULTRA ORBIT */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative flex items-center justify-center h-[600px]"
        >
          {/* Orbit Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[520px] h-[520px] border border-primary/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] border border-primary/30 rounded-full"
          />

          {/* Core Engine */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 border border-primary/40 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.4)]"
          >
            <span className="text-primary font-bold text-center px-6 text-lg">
              Smart Solutions Engine
            </span>
          </motion.div>

          {/* Orbit Cards */}
          {industries.map((item, i) => {
            const Icon = item.icon;
            const angle = (i / industries.length) * (2 * Math.PI);

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={item.name}
                className="absolute"
                initial={{ x, y }}
                animate={{
                  x: [x, -y, -x, y, x],
                  y: [y, x, -y, -x, y],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  className="w-32 h-32 rounded-2xl bg-card/80 backdrop-blur-xl border border-primary/20 flex flex-col items-center justify-center shadow-2xl hover:shadow-primary/40 transition-all"
                >
                  <Icon className="text-primary mb-2" size={34} />
                  <span className="text-sm font-semibold text-foreground">
                    {item.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Transforming Industries With
            <span className="text-primary"> Intelligent IT Solutions</span>
          </h2>

          <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
            We deliver cutting-edge digital solutions that empower organizations
            to innovate, automate workflows, and scale operations across diverse
            industries globally.
          </p>

          {/* Premium Stats */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {[
              ["150+", "Projects Delivered"],
              ["35+", "Industries Served"],
              ["98%", "Client Satisfaction"],
              ["10+ yrs", "Experience"],
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-card border border-primary/20 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-3xl font-bold text-primary">{stat[0]}</h3>
                <p className="text-foreground/70">{stat[1]}</p>
              </motion.div>
            ))}
          </div>

         
        </motion.div>
      </div>
    </section>
  );
}