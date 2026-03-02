'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
   <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
  
  {/* Soft background blobs */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-primary/10 blur-3xl"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 200 + 150}px`,
          height: `${Math.random() * 200 + 150}px`,
        }}
        animate={{ y: [0, -40, 0] }}
        transition={{
          duration: Math.random() * 12 + 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      className="text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      
      {/* Badge */}
      <motion.div
        variants={itemVariants}
        className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
      >
        <span className="text-primary font-medium">Ready to Get Started?</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold text-foreground mb-6"
      >
        Transform Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
          Business Today
        </span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
      >
        Join hundreds of satisfied clients who have transformed their operations
        with our cutting-edge technology solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Start Your Project
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all"
        >
          Schedule a Call
        </motion.button>
      </motion.div>

      {/* Email Card */}
      <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 border border-border shadow-xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest tech insights and industry trends.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />

            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-bold shadow-md hover:shadow-xl"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[
          { number: "250+", label: "Projects Completed" },
          { number: "98%", label: "Client Satisfaction" },
          { number: "50+", label: "Expert Team" },
          { number: "24/7", label: "Support" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  </div>
</section>
  );
}