'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom SVG Icons for premium design
const InnovationIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ExcellenceIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const IntegrityIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
  </svg>
);

const CollaborationIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const GrowthIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

const ImpactIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
  </svg>
);

const MissionIcon = ({ size = 40, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
  </svg>
);

const VisionIcon = ({ size = 40, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export default function CompanyValues() {
  const [activeValue, setActiveValue] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace emerging technologies to create solutions that shape the future. Innovation isn't just what we do - it's who we are.",
      icon: InnovationIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500",
      stats: "50+ R&D Projects",
      detail: "Our dedicated research team explores cutting-edge technologies and methodologies to stay ahead of industry trends.",
      metrics: [
        { label: "Patents Filed", value: "12+" },
        { label: "Research Hours", value: "10K+" }
      ]
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from code quality to client communication. Excellence is our minimum requirement, not our maximum goal.",
      icon: ExcellenceIcon,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500",
      stats: "99.9% Uptime",
      detail: "Our rigorous quality assurance processes ensure reliable, high-performance solutions that exceed expectations.",
      metrics: [
        { label: "Quality Score", value: "99.9%" },
        { label: "Client Reviews", value: "4.9★" }
      ]
    },
    {
      title: "Integrity",
      description: "We build trust through transparent communication, ethical practices, and honest relationships with our clients, partners, and team members.",
      icon: IntegrityIcon,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500",
      stats: "100% Transparency",
      detail: "Open communication and ethical business practices form the foundation of every relationship we build.",
      metrics: [
        { label: "Ethics Score", value: "100%" },
        { label: "Compliance", value: "100%" }
      ]
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions emerge when diverse perspectives work together. Our collaborative approach ensures we leverage collective expertise.",
      icon: CollaborationIcon,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500",
      stats: "50+ Partnerships",
      detail: "Strategic partnerships with industry leaders amplify our capabilities and deliver comprehensive solutions.",
      metrics: [
        { label: "Team Members", value: "50+" },
        { label: "Partners", value: "25+" }
      ]
    },
    {
      title: "Growth",
      description: "We're committed to continuous improvement - for our clients' businesses, our team members, and our own capabilities. Growth is a journey, not a destination.",
      icon: GrowthIcon,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500",
      stats: "200% Growth",
      detail: "Our commitment to learning and adaptation drives sustainable growth for all stakeholders involved.",
      metrics: [
        { label: "Revenue Growth", value: "200%" },
        { label: "Skill Development", value: "150%" }
      ]
    },
    {
      title: "Impact",
      description: "We measure success by the positive change we create in businesses and communities. Every solution we build should make a meaningful difference.",
      icon: ImpactIcon,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500",
      stats: "1000+ Lives Impacted",
      detail: "Our technology solutions create real-world impact that transforms businesses and improves lives.",
      metrics: [
        { label: "Clients Served", value: "250+" },
        { label: "Countries", value: "15+" }
      ]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % values.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
    <section className="relative py-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              backgroundColor: i % 4 === 0 ? '#3b82f6' : i % 4 === 1 ? '#10b981' : i % 4 === 2 ? '#8b5cf6' : '#f59e0b',
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Premium header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 mb-8 backdrop-blur-sm">
              <span className="text-primary font-semibold text-lg">Our Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Defines</span> Us
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              The fundamental principles that guide every decision, innovation, and relationship we build
            </p>
          </motion.div>

          {/* Premium values showcase */}
          <motion.div 
            variants={itemVariants} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              const isActive = index === activeValue;
              const isHovered = index === hoveredValue;
              
              return (
                <motion.div
                  key={index}
                  className={`group relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    isActive 
                      ? `ring-4 ring-primary/30 scale-105 ${value.borderColor}`
                      : 'border-border/50 hover:border-primary/30'
                  }`}
                  whileHover={{ y: -12, scale: 1.02 }}
                  onClick={() => setActiveValue(index)}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  {/* Premium background effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                  <div className={`absolute inset-0 rounded-3xl ${value.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>
                  
                  {/* Icon with premium animation */}
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl ${value.bgColor} flex items-center justify-center mb-6 relative overflow-hidden`}
                    animate={isActive || isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={32} className={`text-primary relative z-10 ${isHovered ? 'scale-110' : ''} transition-transform duration-300`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-20 blur-sm`}></div>
                  </motion.div>

                  {/* Content with premium typography */}
                  <h3 className={`text-2xl font-bold mb-4 ${isActive ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="text-sm font-semibold text-primary mb-4">
                    {value.stats}
                  </div>
                  
                  {/* Premium metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {value.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-2 bg-card/50 rounded-lg border border-border/30">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-foreground/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors"></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Premium mission & vision section */}
          <motion.div 
            variants={itemVariants} 
            className="grid md:grid-cols-2 gap-10 mb-20"
          >
            {/* Mission */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-10 border border-primary/20 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <MissionIcon size={48} className="mb-6 text-primary" />
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  To empower businesses with transformative technology solutions that drive innovation, 
                  efficiency, and sustainable growth through expert guidance and cutting-edge implementation.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Innovation', 'Excellence', 'Client Success'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-gradient-to-br from-success/10 to-green-500/10 rounded-3xl p-10 border border-green-500/20 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500/5 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <VisionIcon size={48} className="mb-6 text-green-600" />
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  To be the global leader in technology innovation, recognized for our commitment 
                  to excellence, ethical practices, and transformative impact across industries worldwide.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium backdrop-blur-sm">
                    Global Leadership
                  </span>
                  <span className="px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium backdrop-blur-sm">
                    Innovation
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        
        </motion.div>
      </div>
    </section>
  );
}