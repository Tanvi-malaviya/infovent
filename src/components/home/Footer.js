'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ================= ICONS ================= */

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
  </svg>
);

/* ================= FOOTER ================= */

export default function Footer() {
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');

  // Set year on mount to avoid hydration mismatch from dynamic Date()
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-secondary to-background border-t border-border">
      <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid - Fixed whitespaces */}
        <div className="py-12 sm:py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Infovent</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Leading IT solutions provider delivering innovative technology services worldwide.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Solutions", "About Us", "Portfolio", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML", "Cybersecurity", "IT Consulting"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Contact Us</h3>
            <div className="space-y-5 text-foreground/70">
              <div>
                <p>+1 (555) 123-4567</p>
                <p className="text-sm text-foreground/50">Mon-Fri 9AM-6PM</p>
              </div>
              <div>
                <p>info@infovent.com</p>
                <p className="text-sm text-foreground/50">24/7 Support</p>
              </div>
              <div>
                <p>123 Tech Street</p>
                <p className="text-sm text-foreground/50">Ahmedabad, Gujarat 380001</p>
              </div>

              {/* Newsletter */}
              <div className="pt-4">
                <h4 className="font-semibold text-foreground mb-3">Newsletter</h4>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full sm:flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="mt-3 sm:mt-0 px-4 py-2 bg-primary text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-primary/90 transition"
                  >
                    →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-center md:text-left">
              © {year || '2026'} Infovent. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-foreground/60">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="hover:text-primary transition">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll To Top - Fixed whitespaces */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition z-50"
      >
        ↑
      </button>
    </footer>
  );
}