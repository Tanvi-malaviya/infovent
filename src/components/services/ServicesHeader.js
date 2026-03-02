'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ServicesHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Web Development",
    "Mobile Solutions", 
    "Cloud Services",
    "AI & Machine Learning",
    "Cybersecurity",
    "Digital Transformation"
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              backgroundColor: i % 5 === 0 ? 'var(--primary)' : 
                             i % 5 === 1 ? 'var(--accent)' : 
                             i % 5 === 2 ? 'var(--success)' : 
                             i % 5 === 3 ? 'var(--warning)' : 'var(--info)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 40, 0],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-70"></div>
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
            className="inline-block px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8"
          >
            <span className="text-primary font-semibold text-lg">Our Services</span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8"
          >
            <span className="block">Premium</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
              <span className="relative inline-block">
                <motion.span
                  key={activeTextIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block text-foreground"
                >
                  {rotatingTexts[activeTextIndex]}
                </motion.span>
              </span>
            </span>
            <span className="block mt-2">Solutions</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive technology services designed to transform your business and drive sustainable growth. 
            From concept to deployment, we deliver excellence at every stage.
          </motion.p>

          {/* Service categories preview */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16 max-w-5xl mx-auto"
          >
            {[
              "Web Development", "Mobile Apps", "Cloud Solutions", 
              "AI & ML", "Cybersecurity", "Consulting"
            ].map((service, index) => (
              <motion.span
                key={service}
                className="px-6 py-3 bg-card/60 backdrop-blur-sm rounded-full border border-border/30 text-foreground/80 font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats preview */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "50+", label: "Expert Team" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 text-sm md:text-base">
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