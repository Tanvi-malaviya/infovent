'use client';

import { useState, useEffect } from 'react';
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  Briefcase
} from "lucide-react";

// 1. Move data outside to prevent re-creation on every render
const SERVICES = [
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    Icon: Globe, // Capitalized for direct component usage
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Cross-Browser Compatible"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    Icon: Smartphone,
    features: ["iOS & Android", "UI/UX Design", "App Store Deployment", "Maintenance Support"],
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Cloud Solutions",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    Icon: Cloud,
    features: ["Cloud Migration", "Infrastructure", "DevOps", "Security & Compliance"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "AI & Machine Learning",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    Icon: Brain,
    features: ["Predictive Analytics", "NLP", "Computer Vision", "Automation"],
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Cybersecurity",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    Icon: Shield,
    features: ["Security Audit", "Threat Detection", "Data Protection", "Compliance"],
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Consulting",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    Icon: Briefcase,
    features: ["Strategy", "Digital Transformation", "Technical Audit", "Roadmapping"],
    color: "from-indigo-500 to-purple-600"
  }
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 animate-fade-in">
            <span className="text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '200ms'}}>
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-slow">Technology</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '400ms'}}>
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa. 
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            // 2. Destructure the icon here to use it as a component
            const { Icon } = service; 
            
            return (
              <div
                key={service.title} // Use title as a more stable key
                className={`group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4 relative z-10">
                  <div className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${index === activeService ? 'scale-110' : ''}`}>
                    {/* 3. Clean component usage */}
                    <Icon size={40} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient overlays */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

       
        <div className="bg-card rounded-2xl p-8 border border-border/50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-5 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                  backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--accent)' : 'var(--success)',
                  animationDuration: `${Math.random() * 15 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Experts" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                  {stat.number}
                </div>
                <div className="text-foreground/70 animate-fade-in" style={{animationDelay: `${index * 200 + 100}ms`}}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}