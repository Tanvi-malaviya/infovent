'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const heroTexts = [
    "Transform Your Business",
    "Innovate with Technology",
    "Digital Excellence",
    "Future-Ready Solutions"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % heroTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary pt-16 md:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes - reduced on mobile for better performance */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-15 md:opacity-20 animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 15}px`,
              height: `${Math.random() * 60 + 15}px`,
              backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--accent)' : 'var(--success)',
              animationDuration: `${Math.random() * 15 + 8}s`,
              animationDelay: `${Math.random() * 3}s`,
              animationIterationCount: 'infinite'
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40 md:opacity-50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full border border-primary/20 mb-4 md:mb-6">
              <span className="text-primary font-medium text-sm md:text-base">Leading IT Solutions</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              <span className="block">We Build</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-1 md:mt-2">
                {heroTexts[activeIndex]}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 md:mb-8 max-w-2xl leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. 
              Our expert team delivers innovative digital experiences that drive growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl active:translate-y-0">
                Get Started
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300 active:translate-y-0">
                Learn More
              </button>
            </div>
            
            {/* Stats - responsive grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">150+</div>
                <div className="text-xs md:text-sm text-foreground/70">Projects Done</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">98%</div>
                <div className="text-xs md:text-sm text-foreground/70">Client Satisfaction</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-success mb-1 md:mb-2">50+</div>
                <div className="text-xs md:text-sm text-foreground/70">Team Experts</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Interactive elements */}
          <div className="relative mt-8 md:mt-0">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto aspect-square">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-15 md:opacity-20 blur-2xl md:blur-3xl animate-pulse-slow"></div>
              
              {/* Tech elements grid - responsive */}
              <div className="relative grid grid-cols-2 gap-3 md:gap-4 h-full">
                {/* Code snippet */}
                <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-xs sm:text-sm md:text-sm text-foreground/70 overflow-x-auto">
                    <code>{`function solution() {
  return {
    innovation: true,
    quality: "premium",
    delivery: "fast"
  };
}`}</code>
                  </pre>
                </div>
                
                {/* Data visualization */}
                <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up animation-delay-200">
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">Growth Metrics</h3>
                  <div className="space-y-1 md:space-y-2">
                    {[70, 90, 60, 85].map((height, idx) => (
                      <div key={idx} className="flex items-end gap-1 h-6 md:h-8">
                        <div 
                          className="bg-gradient-to-t from-primary to-accent rounded-t flex-1 animate-grow-height"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${idx * 100}ms`
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tech stack */}
                <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up animation-delay-400">
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {['React', 'Node.js', 'AI', 'Cloud'].map((tech, idx) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium animate-fade-in"
                        style={{ animationDelay: `${idx * 200}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Team visualization */}
                <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up animation-delay-600">
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">Our Team</h3>
                  <div className="flex -space-x-1 md:-space-x-2">
                    {[...Array(4)].map((_, idx) => (
                      <div 
                        key={idx}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xs md:text-sm border-2 border-card animate-float"
                        style={{ 
                          animationDelay: `${idx * 300}ms`,
                          marginLeft: idx > 0 ? '0.25rem' : '0'
                        }}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Unique floating orb - responsive */}
              <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center animate-spin-slow shadow-xl md:shadow-2xl">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-card flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-success to-primary animate-bounce"></div>
                </div>
              </div>
              
              {/* Floating particles - reduced on mobile */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-float"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDuration: `${Math.random() * 6 + 4}s`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}