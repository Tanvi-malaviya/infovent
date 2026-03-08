'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Custom SVG Icons
const IdeaIcon = ({ size = 28, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const StrategyIcon = ({ size = 28, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const DevelopmentIcon = ({ size = 28, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);

const LaunchIcon = ({ size = 28, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const EmailIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function AboutCTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: IdeaIcon,
      title: "Share Your Vision",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500"
    },
    {
      icon: StrategyIcon,
      title: "Strategic Planning",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500"
    },
    {
      icon: DevelopmentIcon,
      title: "Expert Development",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500"
    },
    {
      icon: LaunchIcon,
      title: "Launch & Scale",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

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
    <section className="relative py-20 bg-gradient-to-b from-background to-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--accent)' : 'var(--success)',
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-primary font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Concept</span> to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500"> Success</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div 
            variants={itemVariants} 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  className={`group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                    index === activeStep 
                      ? `ring-2 ring-primary/30 scale-105 ${step.borderColor}`
                      : 'border-border/50 hover:border-primary/30'
                  }`}
                  whileHover={{ y: -10 }}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Step number */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-4`}>
                    <Icon size={28} className="text-primary" />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${index === activeStep ? 'text-primary' : 'text-foreground'}`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-foreground/70">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Business</span>?
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-foreground/70">Free consultation and project assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-foreground/70">Customized solutions for your business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span className="text-foreground/70">Ongoing support and maintenance</span>
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
              
              <h4 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Email Address *</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                    <EmailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pl-12 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                      <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className={`w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-success text-white' 
                      : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? 'Message Sent Successfully!' : 'Send Message' }
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
              { number: "250+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "15+", label: "Countries Served" }
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