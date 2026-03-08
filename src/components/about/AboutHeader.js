'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Innovation",
    "Excellence", 
    "Growth",
    "Technology"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveTextIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary pt-16 md:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 120 + 40}px`,
              height: `${Math.random() * 120 + 40}px`,
              backgroundColor: i % 4 === 0 ? 'var(--primary)' : 
                             i % 4 === 1 ? 'var(--accent)' : 
                             i % 4 === 2 ? 'var(--success)' : 'var(--warning)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-60"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
          >
            <span className="text-primary font-medium">About Infovent</span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            <span className="block">Building the Future</span>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
              Through
              <span className="relative inline-block mx-3">
                <motion.span
                  key={activeTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary"
                >
                  {rotatingTexts[activeTextIndex]}
                </motion.span>
              </span>
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
          </motion.p>

          {/* Stats preview */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "10+", label: "Years Experience" },
              { number: "250+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

      
        </motion.div>
      </div>
    </section>
  );
}