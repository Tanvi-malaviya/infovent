'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from "@/src/common/Button";

// Custom SVG Icons
const ExpertTeamIcon = ({ size = 26, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const TechnologyIcon = ({ size = 26, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
  </svg>
);

const ClientFocusIcon = ({ size = 26, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const QualityIcon = ({ size = 26, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const TimelyIcon = ({ size = 26, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
  </svg>
);

const SupportIcon = ({ size = 26, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const Support247Icon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6v3h2v-5l-3-3h-8z"/>
  </svg>
);

const AgileIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
  </svg>
);

const InnovationIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-1 3.5v5.25l4.5 2.67-.75 1.23L11 14.5V9.25L8.75 12l-.75-1.23L11 8.5z"/>
  </svg>
);

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [counterValues, setCounterValues] = useState({
    projects: 0,
    satisfaction: 0,
    experts: 0,
    years: 0
  });

  const reasons = [
    {
      title: "Expert Team",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: ExpertTeamIcon,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Cutting-Edge Technology",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: TechnologyIcon,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Client-Centric Approach",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: ClientFocusIcon,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Quality Assurance",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: QualityIcon,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Timely Delivery",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: TimelyIcon,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Ongoing Support",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: SupportIcon,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    }
  ];

  const stats = [
    { value: "250+", label: "Projects Completed", color: "text-blue-500", borderColor: "border-blue-500" },
    { value: "98%", label: "Client Satisfaction", color: "text-green-500", borderColor: "border-green-500" },
    { value: "50+", label: "Team Experts", color: "text-purple-500", borderColor: "border-purple-500" },
    { value: "5+", label: "Years Experience", color: "text-orange-500", borderColor: "border-orange-500" }
  ];

  const highlights = [
    {
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
      icon: Support247Icon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Agile Methodology",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      icon: AgileIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Continuous Innovation",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      icon: InnovationIcon,
      color: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const targets = { projects: 250, satisfaction: 98, experts: 50, years: 5 };
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounterValues({
        projects: Math.round(targets.projects * progress),
        satisfaction: Math.round(targets.satisfaction * progress),
        experts: Math.round(targets.experts * progress),
        years: Math.round(targets.years * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
    
    // Auto-rotate active reason
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reasons.length);
    }, 4000);
    
    return () => {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              backgroundColor: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animated elements */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 mb-4">
            <span className="text-primary font-semibold text-lg">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Infovent</span> Difference
          </h2>
          
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                {stat.label === "Projects Completed" && counterValues.projects + '+'}
                {stat.label === "Client Satisfaction" && counterValues.satisfaction + '%'}
                {stat.label === "Team Experts" && counterValues.experts + '+'}
                {stat.label === "Years Experience" && counterValues.years + '+'}
              </div>
              <div className="text-foreground/70 text-sm font-medium">{stat.label}</div>
              <div className={`absolute inset-0 rounded-2xl border-2 ${stat.borderColor} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isActive = index === activeIndex;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border ${reason.borderColor} hover:shadow-2xl transition-all duration-500 group cursor-pointer ${isActive ? 'ring-2 ring-primary/50 scale-105' : ''}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -10 }}
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon with animation */}
                <motion.div 
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl ${reason.bgColor} mb-6 relative overflow-hidden`}
                  animate={isActive ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={32} className="text-primary relative z-10" />
                  {/* Animated inner glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-30 blur-sm animate-pulse`}></div>
                </motion.div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 group-hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-foreground'}`}>
                  {reason.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover effect elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlights Section */}
        <motion.div 
          className="bg-gradient-to-r from-card/50 to-secondary/50 rounded-3xl p-12 border border-border/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-6 left-6 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-6 right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What Makes Us Different</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                         whileHover={{ scale: 1.1, rotate: 5 }}>
                      <Icon size={32} />
                    </motion.div>
                    
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-foreground/70">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto relative z-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button variant="cta" className="px-10 py-4 text-lg">
      Get Started Today →
    </Button>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button variant="outlineLight" className="px-10 py-4 text-lg">
      Schedule a Call
    </Button>
  </motion.div>

</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}