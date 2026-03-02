'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Atom, Triangle, Code2, Braces, FileText, Palette,
  Server, Coffee, Database, Layers, Cloud, Container,
  Cpu, Brain, BookOpen, FlaskConical, Users
} from "lucide-react";


export default function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      category: "Frontend Development",
      technologies: [
        { name: "React", level: 95, color: "from-blue-400 to-cyan-400" },
        { name: "Next.js", level: 92, color: "from-gray-800 to-black" },
        { name: "Vue.js", level: 88, color: "from-green-500 to-emerald-500" },
        { name: "Angular", level: 85, color: "from-red-500 to-pink-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-indigo-600" },
        { name: "Tailwind CSS", level: 93, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Node.js", level: 94, color: "from-green-500 to-emerald-500" },
        { name: "Python", level: 89, color: "from-blue-500 to-indigo-500" },
        { name: "Java", level: 87, color: "from-red-500 to-orange-500" },
        { name: "PHP", level: 82, color: "from-indigo-500 to-purple-500" },
        { name: "Go", level: 80, color: "from-cyan-500 to-blue-500" },
        { name: "C#", level: 85, color: "from-purple-600 to-pink-600" }
      ]
    },
    {
      category: "Mobile Development",
      technologies: [
        { name: "React Native", level: 91, color: "from-blue-400 to-cyan-400" },
        { name: "Flutter", level: 88, color: "from-blue-500 to-indigo-500" },
        { name: "Swift", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Kotlin", level: 87, color: "from-purple-500 to-pink-500" },
        { name: "Xamarin", level: 80, color: "from-green-500 to-emerald-500" },
        { name: "Ionic", level: 83, color: "from-blue-600 to-indigo-600" }
      ]
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", level: 92, color: "from-orange-500 to-red-500" },
        { name: "Azure", level: 89, color: "from-blue-500 to-indigo-500" },
        { name: "Google Cloud", level: 88, color: "from-blue-400 to-cyan-400" },
        { name: "Docker", level: 90, color: "from-blue-600 to-indigo-600" },
        { name: "Kubernetes", level: 85, color: "from-blue-700 to-purple-700" },
        { name: "Terraform", level: 83, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      category: "Database & Storage",
      technologies: [
        { name: "MongoDB", level: 91, color: "from-green-500 to-emerald-500" },
        { name: "PostgreSQL", level: 89, color: "from-blue-500 to-indigo-500" },
        { name: "MySQL", level: 92, color: "from-orange-500 to-red-500" },
        { name: "Redis", level: 88, color: "from-red-500 to-pink-500" },
        { name: "Firebase", level: 87, color: "from-orange-400 to-yellow-400" },
        { name: "DynamoDB", level: 85, color: "from-purple-500 to-indigo-500" }
      ]
    },
    {
      category: "AI & Machine Learning",
      technologies: [
        { name: "TensorFlow", level: 88, color: "from-orange-500 to-red-500" },
        { name: "PyTorch", level: 85, color: "from-red-500 to-pink-500" },
        { name: "OpenAI", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "Scikit-learn", level: 87, color: "from-blue-500 to-indigo-500" },
        { name: "Computer Vision", level: 83, color: "from-purple-500 to-pink-500" },
        { name: "NLP", level: 86, color: "from-cyan-500 to-blue-500" }
      ]
    }
  ];
  const techIcons = {
    "React": Atom,
    "Next.js": Triangle,
    "Vue.js": Code2,
    "Angular": Braces,
    "TypeScript": FileText,
    "Tailwind CSS": Palette,
    "Node.js": Server,
    "Python": Cpu,
    "Java": Coffee,
    "PHP": Code2,
    "Go": Layers,
    "C#": Database,
  };

  const innovationIcons = [BookOpen, FlaskConical, Users];



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
    <section className="relative py-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
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
              <span className="text-primary font-medium">Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Cutting-Edge</span> Technologies
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
          </motion.div>

          {/* Category selector */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {techStack.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === index
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'bg-card border border-border text-foreground hover:bg-primary/10 hover:border-primary/30'
                  }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.category}
              </motion.button>
            ))}
          </motion.div>

          {/* Technology grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {techStack[activeCategory].technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                {/* Background effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`absolute inset-0 rounded-2xl ${tech.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>

                {/* Technology header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <div className="text-2xl">
                    {techIcons[tech.name] && (
                      React.createElement(techIcons[tech.name], {
                        className: "w-8 h-8 text-foreground group-hover:text-primary transition-colors"
                      })
                    )}
                  </div>
                </div>

                {/* Skill level */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>Proficiency</span>
                    <span>{tech.level}%</span>
                  </div>
                  <div className="w-full bg-card border border-border rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Experience badge */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                  <span className="text-sm text-foreground/60">
                    {tech.level > 90 ? "Expert Level" :
                      tech.level > 80 ? "Advanced" : "Proficient"}
                  </span>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-3 h-3 rounded-full bg-primary animate-ping"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "50+", label: "Technologies Mastered" },
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Projects Delivered" },
              { number: "99.9%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Innovation section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 bg-gradient-to-r from-card to-secondary rounded-3xl p-12 border border-border/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Staying Ahead of Innovation
              </h3>


              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Continuous Learning",
                    description:
                      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                  },
                  {
                    title: "Research & Development",
                    description:
                      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                  },
                  {
                    title: "Community Engagement",
                    description:
                      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                  },
                ].map((item, index) => {
                  const Icon = innovationIcons[index];

                  return (
                    <motion.div
                      key={index}
                      className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex justify-center mb-4 text-primary">
                        <Icon size={42} />
                      </div>

                      <h4 className="text-xl font-bold text-foreground mb-3">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}