"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cloud, Zap, Lock } from 'lucide-react';
import { useTheme } from '@/src/components/ThemeProvider';

export default function SolutionsHero() {
  const [currentText, setCurrentText] = useState(0);
  const { theme } = useTheme();

  const rotatingTexts = [
    "Enterprise Solutions",
    "Cloud Infrastructure",
    "AI & Analytics",
    "Cybersecurity",
    "Digital Transformation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Theme-based colors
  const bgGradient = theme === 'dark' 
    ? 'from-gray-900 via-blue-950/20 to-purple-950/20' 
    : 'from-white via-blue-50 to-cyan-50';
  
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  
  const blobColors = theme === 'dark' 
    ? { left: 'bg-blue-500/20', right: 'bg-purple-500/20' }
    : { left: 'bg-cyan-200', right: 'bg-blue-200' };
  
  const badgeColors = theme === 'dark' 
    ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50' 
    : 'bg-blue-100 text-blue-600';
  
  const floatingTagColors = theme === 'dark' 
    ? 'bg-gray-800/70 backdrop-blur-md border border-gray-700 text-gray-200' 
    : 'bg-white/70 backdrop-blur-md border border-gray-200 text-gray-800';
  
  const iconColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-500';
  
  const statCardColors = theme === 'dark' 
    ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-blue-500/50' 
    : 'bg-white/70 backdrop-blur-md border border-gray-200 hover:border-blue-300';
  
  const statNumberColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
  
  const primaryButtonColors = theme === 'dark' 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500' 
    : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600';
  
  const secondaryButtonColors = theme === 'dark' 
    ? 'bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500' 
    : 'bg-white border border-gray-300 text-gray-800 hover:border-gray-400';

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary ${textColor} pt-16`}>

    
      {/* Floating tags with theme support */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: Zap, text: "AI Powered" },
          { icon: Cloud, text: "Cloud Native" },
          { icon: Shield, text: "Secure" },
          { icon: Lock, text: "Enterprise" }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              variants={floatingVariants}
              animate="animate"
              className={`absolute hidden md:flex items-center gap-2 px-5 py-2 ${floatingTagColors} rounded-full shadow-lg text-sm font-medium`}
              style={{
                top: `${20 + i * 18}%`,
                left: i % 2 === 0 ? "8%" : "85%",
              }}
            >
              <Icon className={`w-4 h-4 ${iconColor}`} />
              {item.text}
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Theme-adaptive Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-block px-6 py-2 ${badgeColors} rounded-full font-semibold mb-6`}
        >
          Premium IT Solutions
        </motion.div>

        {/* Heading with theme support */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Transform Your Business With
          <span className={`block mt-4 ${theme === 'dark' 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' 
            : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'}`}>
            {rotatingTexts[currentText]}
          </span>
        </motion.h1>

        {/* Subtext with theme support */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`mt-6 text-lg md:text-xl ${subTextColor} max-w-3xl mx-auto`}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </motion.p>

        {/* Stats with theme support */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "99.9%", label: "Uptime" },
            { number: "100+", label: "Experts" },
            { number: "24/7", label: "Support" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 ${statCardColors} rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className={`text-3xl font-bold ${statNumberColor}`}>{stat.number}</div>
              <div className={`${subTextColor} mt-1`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

    

      </div>
    </section>
  );
}