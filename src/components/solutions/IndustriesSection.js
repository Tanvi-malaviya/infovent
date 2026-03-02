"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
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
  
  // Responsive radius state
  const [radius, setRadius] = useState(230);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setRadius(mobile ? 140 : 230); // Smaller orbit for mobile
    };
    
    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [0, 800], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1600], [-8, 8]);

  return (
    <section className="py-16 md:py-32 bg-background overflow-hidden relative">
      {/* Floating Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full -top-20 -left-20" />
        <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-400/10 blur-[80px] md:blur-[120px] rounded-full bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        
        {/* LEFT SIDE — ULTRA ORBIT (Order 2 on mobile to show text first, or keep Order 1 for visual impact) */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative flex items-center justify-center h-[400px] md:h-[600px] order-2 lg:order-1"
        >
          {/* Orbit Rings - Scaled for mobile */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] border border-primary/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[220px] h-[220px] md:w-[380px] md:h-[380px] border border-primary/30 rounded-full"
          />

          {/* Core Engine - Responsive size */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute z-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 border border-primary/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] md:shadow-[0_0_80px_rgba(59,130,246,0.4)]"
          >
            <span className="text-primary font-bold text-center px-4 md:px-6 text-sm md:text-lg leading-tight">
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
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-xl md:rounded-2xl bg-card/80 backdrop-blur-xl border border-primary/20 flex flex-col items-center justify-center shadow-xl transition-all"
                >
                  <Icon className="text-primary mb-1 md:mb-2 w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-[10px] md:text-sm font-semibold text-foreground text-center px-1">
                    {item.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transforming Industries With
            <span className="text-primary"> Intelligent IT Solutions</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/70 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We deliver cutting-edge digital solutions that empower organizations
            to innovate, automate workflows, and scale operations globally.
          </p>

          {/* Premium Stats - Adjusted grid for mobile */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
            {[
              ["150+", "Projects"],
              ["35+", "Industries"],
              ["98%", "Satisfaction"],
              ["10+ yrs", "Experience"],
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-card border border-primary/10 rounded-xl p-4 md:p-6 shadow-md"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary">{stat[0]}</h3>
                <p className="text-xs md:text-sm text-foreground/70 uppercase tracking-wide">{stat[1]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}