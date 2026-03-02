// 'use client';

// import { useState, useEffect } from 'react';

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const heroTexts = [
//     "Transform Your Business",
//     "Innovate with Technology",
//     "Digital Excellence",
//     "Future-Ready Solutions"
//   ];

//   useEffect(() => {
//     setIsVisible(true);
    
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % heroTexts.length);
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary pt-16 md:pt-20">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating shapes - reduced on mobile for better performance */}
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute rounded-full opacity-15 md:opacity-20 animate-float`}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               width: `${Math.random() * 60 + 15}px`,
//               height: `${Math.random() * 60 + 15}px`,
//               backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--accent)' : 'var(--success)',
//               animationDuration: `${Math.random() * 15 + 8}s`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationIterationCount: 'infinite'
//             }}
//           />
//         ))}
        
//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40 md:opacity-50"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//           {/* Left content */}
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
//             <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full border border-primary/20 mb-4 md:mb-6">
//               <span className="text-primary font-medium text-sm md:text-base">Leading IT Solutions</span>
//             </div>
            
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
//               <span className="block">We Build</span>
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-1 md:mt-2">
//                 {heroTexts[activeIndex]}
//               </span>
//             </h1>
            
//             <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 md:mb-8 max-w-2xl leading-relaxed">
//               Empowering businesses with cutting-edge technology solutions. 
//               Our expert team delivers innovative digital experiences that drive growth and success.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
//               <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl active:translate-y-0">
//                 Get Started
//               </button>
//               <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300 active:translate-y-0">
//                 Learn More
//               </button>
//             </div>
            
//             {/* Stats - responsive grid */}
//             <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
//               <div className="text-center md:text-left">
//                 <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">150+</div>
//                 <div className="text-xs md:text-sm text-foreground/70">Projects Done</div>
//               </div>
//               <div className="text-center md:text-left">
//                 <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">98%</div>
//                 <div className="text-xs md:text-sm text-foreground/70">Client Satisfaction</div>
//               </div>
//               <div className="text-center md:text-left">
//                 <div className="text-2xl md:text-3xl font-bold text-success mb-1 md:mb-2">50+</div>
//                 <div className="text-xs md:text-sm text-foreground/70">Team Experts</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right content - Interactive elements */}
//           <div className="relative mt-8 md:mt-0">
//             <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto aspect-square">
//               {/* Main circle */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-15 md:opacity-20 blur-2xl md:blur-3xl animate-pulse-slow"></div>
              
//               {/* Tech elements grid - responsive */}
//               <div className="relative grid grid-cols-2 gap-3 md:gap-4 h-full">
//                 {/* Code snippet */}
//                 <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up">
//                   <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
//                     <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
//                     <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <pre className="text-xs sm:text-sm md:text-sm text-foreground/70 overflow-x-auto">
//                     <code>{`function solution() {
//   return {
//     innovation: true,
//     quality: "premium",
//     delivery: "fast"
//   };
// }`}</code>
//                   </pre>
//                 </div>
                
//                 {/* Data visualization */}
//                 <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up animation-delay-200">
//                   <h3 className="font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">Growth Metrics</h3>
//                   <div className="space-y-1 md:space-y-2">
//                     {[70, 90, 60, 85].map((height, idx) => (
//                       <div key={idx} className="flex items-end gap-1 h-6 md:h-8">
//                         <div 
//                           className="bg-gradient-to-t from-primary to-accent rounded-t flex-1 animate-grow-height"
//                           style={{ 
//                             height: `${height}%`,
//                             animationDelay: `${idx * 100}ms`
//                           }}
//                         ></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Tech stack */}
//                 <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up animation-delay-400">
//                   <h3 className="font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">Tech Stack</h3>
//                   <div className="flex flex-wrap gap-1.5 md:gap-2">
//                     {['React', 'Node.js', 'AI', 'Cloud'].map((tech, idx) => (
//                       <span 
//                         key={tech}
//                         className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium animate-fade-in"
//                         style={{ animationDelay: `${idx * 200}ms` }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Team visualization */}
//                 <div className="bg-card/70 md:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/40 md:border-border/50 shadow-lg md:shadow-xl animate-slide-up animation-delay-600">
//                   <h3 className="font-semibold text-foreground text-sm md:text-base mb-2 md:mb-3">Our Team</h3>
//                   <div className="flex -space-x-1 md:-space-x-2">
//                     {[...Array(4)].map((_, idx) => (
//                       <div 
//                         key={idx}
//                         className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xs md:text-sm border-2 border-card animate-float"
//                         style={{ 
//                           animationDelay: `${idx * 300}ms`,
//                           marginLeft: idx > 0 ? '0.25rem' : '0'
//                         }}
//                       >
//                         {String.fromCharCode(65 + idx)}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Unique floating orb - responsive */}
//               <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center animate-spin-slow shadow-xl md:shadow-2xl">
//                 <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-card flex items-center justify-center animate-pulse">
//                   <div className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-success to-primary animate-bounce"></div>
//                 </div>
//               </div>
              
//               {/* Floating particles - reduced on mobile */}
//               {[...Array(6)].map((_, i) => (
//                 <div
//                   key={`particle-${i}`}
//                   className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-float"
//                   style={{
//                     top: `${20 + Math.random() * 60}%`,
//                     left: `${20 + Math.random() * 60}%`,
//                     animationDuration: `${Math.random() * 6 + 4}s`,
//                     animationDelay: `${Math.random() * 3}s`
//                   }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Button from '@/src/common/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  // NEW: State to track if we are on the client
  const [mounted, setMounted] = useState(false);
  
  const heroTexts = [
    "Transform Your Business",
    "Innovate with Technology",
    "Digital Excellence",
    "Future-Ready Solutions"
  ];

  useEffect(() => {
    setMounted(true); // Component is now safe to show random values
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % heroTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary pt-20 pb-12 md:pt-24 md:pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Only render random shapes if mounted is true */}
        {mounted && [...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 md:opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--accent)' : 'var(--success)',
              animationDuration: `${Math.random() * 15 + 8}s`,
              animationDelay: `${Math.random() * 3}s`,
              animationIterationCount: 'infinite'
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40 md:opacity-60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className={`transition-all duration-1000 flex flex-col items-center lg:items-start text-center lg:text-left ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-xs md:text-sm tracking-wide uppercase">Leading IT Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-[1.1]">
              <span className="block">We Build</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent py-2">
                {heroTexts[activeIndex]}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
            
           <div className="flex gap-6">
                <Link href={"/contact"}>
                   <Button>Get Started</Button>
                </Link>
               <Link href={"/about"}>
                  <Button variant="secondary">Learn More</Button>
                 </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full border-t border-border/50 pt-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">150+</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold opacity-60">Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold opacity-60">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-success">50+</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold opacity-60">Experts</div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 px-4 sm:px-0">
            <div className="relative w-full aspect-square max-w-[450px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] animate-pulse"></div>
              
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 h-full">
                <div className="bg-card/80 backdrop-blur-md rounded-2xl p-4 border border-border/50 shadow-xl animate-float">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <pre className="text-[10px] sm:text-xs text-primary/80 font-mono">
                    <code>{`function dev() {\n  return "success";\n}`}</code>
                  </pre>
                </div>
                
                <div className="bg-card/80 backdrop-blur-md rounded-2xl p-4 border border-border/50 shadow-xl mt-8">
                  <h3 className="text-xs font-bold mb-3">Growth</h3>
                  <div className="flex items-end gap-1.5 h-12">
                    {[40, 70, 50, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card/80 backdrop-blur-md rounded-2xl p-4 border border-border/50 shadow-xl -mt-4">
                  <h3 className="text-xs font-bold mb-2">Stack</h3>
                  <div className="flex flex-wrap gap-1">
                    {['TS', 'Next', 'AI'].map(t => (
                      <span key={t} className="text-[9px] px-1.5 py-0.5 bg-accent/10 text-accent rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card/80 backdrop-blur-md rounded-2xl p-4 border border-border/50 shadow-xl mt-4">
                  <h3 className="text-xs font-bold mb-2">Team</h3>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-7 h-7 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-[10px] font-bold">U{i}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <span className="text-white text-[10px] font-black uppercase tracking-tighter text-center">New<br/>Tech</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}