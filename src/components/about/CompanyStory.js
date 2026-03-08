'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RocketIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
  </svg>
);

const TrophyIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 2V6H10V8H5L3 20H5L6 14H18L19 20H21L19 8H16V6H19V2H7Z"/>
  </svg>
);

const UsersIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM12 22C12 22 10 18 10 15C10 12.5 11.5 10.5 14 10.5C16.5 10.5 18 12.5 18 15C18 18 16 22 16 22H8Z"/>
  </svg>
);

const CloudIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"/>
  </svg>
);

const BrainIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 4C8.5 4 5.5 6 4 9C5.5 12 8.5 14 12 14C15.5 14 18.5 12 20 9C18.5 6 15.5 4 12 4ZM12 16C9.5 16 7.5 18 7.5 20.5C7.5 21.33 8.17 22 9 22H15C15.83 22 16.5 21.33 16.5 20.5C16.5 18 14.5 16 12 16Z"/>
  </svg>
);

const GlobeIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 12.9 10 14H8C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14C16 11.79 14.21 10 12 10V6Z"/>
  </svg>
);

export default function CompanyStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const milestones = [
    {
      year: "2014",
      title: "The Beginning",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
      icon: RocketIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500"
    },
    {
      year: "2016",
      title: "First Major Breakthrough",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
      icon: TrophyIcon,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500"
    },
    {
      year: "2018",
      title: "Team Expansion",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
      icon: UsersIcon,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500"
    },
    {
      year: "2020",
      title: "Digital Transformation Era",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
      icon: CloudIcon,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500"
    },
    {
      year: "2022",
      title: "AI & Innovation Hub",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
      icon: BrainIcon,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500"
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
      icon: GlobeIcon,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % milestones.length);
    }, 4000);
    
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--accent)' : 'var(--success)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-primary font-medium">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Infovent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Story</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - here's how we've grown and evolved
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <motion.div variants={itemVariants} className="relative mb-16">
            {/* Timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-success opacity-30 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = index === activeIndex;
                const isHovered = index === hoveredIndex;
                
                return (
                  <motion.div
                    key={milestone.year}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Content card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        className={`bg-card rounded-2xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                          isActive 
                            ? `ring-2 ring-primary/30 scale-105 ${milestone.borderColor}`
                            : 'border-border/50 hover:border-primary/30'
                        }`}
                        animate={isActive ? { y: -5 } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Background glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                        
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${milestone.bgColor} mb-4 ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                          <Icon size={24} className="text-primary" />
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                          {milestone.title}
                        </h3>
                        <p className="text-foreground/70">
                          {milestone.description}
                        </p>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors"></div>
                      </motion.div>
                    </div>
                    
                    {/* Year marker with animation */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                          isActive || isHovered
                            ? `bg-gradient-to-r ${milestone.color} scale-125 ring-4 ring-white/50`
                            : 'bg-gradient-to-r from-border to-border/80'
                        } transition-all duration-300`}
                        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {milestone.year}
                      </motion.div>
                    </div>
                    
                    {/* Empty space for symmetry */}
                    <div className="w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Current focus section */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-card to-secondary rounded-3xl p-12 border border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Today & Tomorrow
                </h3>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Innovation', 'Excellence', 'Integrity', 'Growth'].map((value, index) => (
                    <motion.span
                      key={value}
                      className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}