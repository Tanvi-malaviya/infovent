'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      quote: "Infovent transformed our digital infrastructure completely. Their team delivered exceptional results on time and within budget. Highly recommended!",
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      position: "CTO, StartupHub",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      quote: "Working with Infovent was a game-changer for our startup. Their expertise in cloud solutions helped us scale rapidly and securely.",
      company: "StartupHub"
    },
    {
      name: "Emily Rodriguez",
      position: "Director, Global Solutions",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      quote: "The mobile app development team at Infovent exceeded our expectations. The app has received outstanding user feedback and engagement.",
      company: "Global Solutions"
    },
    {
      name: "David Kim",
      position: "Founder, InnovateLab",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      quote: "Their AI and machine learning solutions have given us a competitive edge in our industry. Professional, reliable, and innovative.",
      company: "InnovateLab"
    },
    {
      name: "Lisa Thompson",
      position: "IT Manager, Enterprise Inc",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      quote: "Infovent's cybersecurity solutions protected our critical data and ensured compliance with industry regulations. Outstanding service!",
      company: "Enterprise Inc"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-secondary">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 animate-fade-in">
            <span className="text-primary font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '200ms'}}>
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '400ms'}}>
            Hear from our satisfied clients about their experience working with Infovent.
          </p>
        </div>
      </div>

      {/* Testimonials carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main testimonial card */}
        <div className={`relative bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl transition-all duration-700 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: '600ms' }}>
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
          
          {/* Stars rating */}
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <svg 
                key={i} 
                className="w-6 h-6 text-yellow-400 fill-current animate-fade-in" 
                style={{ animationDelay: `${i * 100}ms` }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          
          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl text-foreground text-center mb-8 font-light leading-relaxed relative z-10">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          
          {/* Client info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl overflow-hidden">
              {testimonials[currentIndex].name.charAt(0)}
            </div>
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-foreground">{testimonials[currentIndex].name}</div>
              <div className="text-foreground/70">{testimonials[currentIndex].position}</div>
              <div className="text-primary font-medium mt-1">{testimonials[currentIndex].company}</div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border/50 hover:bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Additional testimonial cards (smaller view) */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border/50 transition-all duration-300 cursor-pointer hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg ${
                currentIndex === index ? 'ring-2 ring-primary/20 border-primary/50' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.position}</div>
                </div>
              </div>
              <p className="text-foreground/80 text-sm line-clamp-3">"{testimonial.quote}"</p>
              <div className="flex mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-accent/5 rounded-full blur-xl animate-pulse animation-delay-3000"></div>
    </section>
  );
}