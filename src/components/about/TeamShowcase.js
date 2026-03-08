'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, BookOpen, Target } from "lucide-react";

export default function TeamShowcase() {
  const [activeMember, setActiveMember] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder-avatar.jpg",
      experience: "10+ years",
      expertise: ["Leadership", "Strategy", "Innovation"],
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder-avatar.jpg",
      experience: "8+ years",
      expertise: ["AI/ML", "Cloud Architecture", "DevOps"],
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/placeholder-avatar.jpg",
      experience: "7+ years",
      expertise: ["UX/UI Design", "User Research", "Brand Identity"],
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      social: { linkedin: "#", dribbble: "#" }
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/placeholder-avatar.jpg",
      experience: "9+ years",
      expertise: ["Full-Stack Development", "Mobile Apps", "System Architecture"],
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      image: "/placeholder-avatar.jpg",
      experience: "6+ years",
      expertise: ["Agile Methodology", "Client Relations", "Project Delivery"],
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "James Wilson",
      role: "Security Director",
      image: "/placeholder-avatar.jpg",
      experience: "12+ years",
      expertise: ["Cybersecurity", "Compliance", "Risk Management"],
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
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
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-5 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-5 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse animation-delay-3000"></div>
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
              <span className="text-primary font-medium">Meet Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">People</span> Behind Infovent
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
          </motion.div>

          {/* Team grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className={`group relative bg-card rounded-2xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === activeMember ? 'ring-2 ring-primary/30 scale-105' : ''
                }`}
                whileHover={{ y: -10 }}
                onClick={() => setActiveMember(index)}
              >
                {/* Member image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mx-auto overflow-hidden">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-success rounded-full border-4 border-card"></div>
                </div>

                {/* Member info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/60 mb-3">{member.experience} experience</p>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bio preview */}
                <p className="text-foreground/70 text-sm text-center line-clamp-2">
                  {member.bio}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured member detail */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-card to-secondary rounded-3xl p-8 md:p-12 border border-border/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Featured member image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-6xl font-bold overflow-hidden">
                    {teamMembers[activeMember].name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-success rounded-full border-4 border-card flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Featured member details */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {teamMembers[activeMember].name}
                </h3>
                <p className="text-primary text-xl font-medium mb-4">
                  {teamMembers[activeMember].role}
                </p>
                <p className="text-foreground/70 mb-6">
                  {teamMembers[activeMember].bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[activeMember].expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

             
              </div>
            </div>
          </motion.div>

         
        {/* Team culture */}
<motion.div 
  variants={itemVariants}
  className="mt-16 grid md:grid-cols-3 gap-8"
>
  {[
    {
      title: "Collaborative Culture",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      icon: Handshake
    },
    {
      title: "Continuous Learning",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      icon: BookOpen
    },
    {
      title: "Client First",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      icon: Target
    }
  ].map((culture, index) => {
    const Icon = culture.icon;
    return (
      <motion.div
        key={index}
        className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        <div className="flex justify-center mb-4">
          <Icon size={48} className="text-primary" />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3">
          {culture.title}
        </h3>

        <p className="text-foreground/70">
          {culture.description}
        </p>
      </motion.div>
    );
  })}
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}