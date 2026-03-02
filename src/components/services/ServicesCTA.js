'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Lock, Check, Star, Clock, Globe } from 'lucide-react';

export default function ServicesCTA() {
  const [activePackage, setActivePackage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and startups looking to establish their digital presence",
      features: [
        "Basic Website Development",
        "Responsive Design",
        "SEO Optimization",
        "3 Months Support",
        "1 Revision Round"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Ideal for growing businesses requiring advanced features and custom functionality",
      features: [
        "Custom Web Application",
        "Advanced Features",
        "Database Integration",
        "6 Months Support",
        "3 Revision Rounds",
        "Performance Optimization"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "solution",
      description: "Comprehensive enterprise solutions with full-scale development and ongoing support",
      features: [
        "Full-Stack Development",
        "Enterprise Architecture",
        "Advanced Security",
        "12 Months Support",
        "Unlimited Revisions",
        "Dedicated Project Manager",
        "24/7 Support"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500",
      popular: false
    }
  ];

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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              backgroundColor: i % 4 === 0 ? 'var(--primary)' : 
                             i % 4 === 1 ? 'var(--accent)' : 
                             i % 4 === 2 ? 'var(--success)' : 'var(--warning)',
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 40, 0],
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360, 720]
            }}
            transition={{
              duration: Math.random() * 30 + 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 15
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
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-primary font-medium">Get Started</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Business</span>?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
              Choose the perfect package for your needs or let us create a custom solution tailored to your specific requirements
            </p>
          </motion.div>

         

          {/* Contact form */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Project</span>
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Have a unique project in mind? Our team is ready to help you bring your vision to life with a custom solution designed specifically for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Fast Response Time</h4>
                    <p className="text-foreground/70">We typically respond to inquiries within 2 hours during business days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Tailored Solutions</h4>
                    <p className="text-foreground/70">Every project gets a customized approach based on your specific requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Confidential Consultation</h4>
                    <p className="text-foreground/70">Your project details are kept completely confidential throughout our discussion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right contact form */}
            <motion.div 
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              
              <h4 className="text-2xl font-bold text-foreground mb-6">Get Your Free Consultation</h4>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="security">Cybersecurity</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className={`w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-success text-white' 
                      : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl'
                  }`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {isSubmitted ? 'Message Sent Successfully!' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Projects Completed", icon: React.createElement(Check, { className: "w-10 h-10 mx-auto" }) },
              { number: "98%", label: "Client Satisfaction", icon: React.createElement(Star, { className: "w-10 h-10 mx-auto" }) },
              { number: "24/7", label: "Support Available", icon: React.createElement(Clock, { className: "w-10 h-10 mx-auto" }) },
              { number: "15+", label: "Countries Served", icon: React.createElement(Globe, { className: "w-10 h-10 mx-auto" }) }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70">
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