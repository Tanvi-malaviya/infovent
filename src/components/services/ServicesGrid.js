'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building2,
  Factory,
} from 'lucide-react';
import Link from 'next/link';

/* ---------------- ICONS ---------------- */

const WebDevIcon = ({ size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
  </svg>
);

const MobileIcon = ({ size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
  </svg>
);

const CloudIcon = ({ size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
  </svg>
);

const AIIcon = ({ size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const SecurityIcon = ({ size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

const ConsultingIcon = ({ size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
  </svg>
);

/* ---------------- COMPONENT ---------------- */

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      slug: 'web-development',
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
      icon: WebDevIcon,
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Cross Browser'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500',
    },
    {
      slug: 'mobile-applications',
      title: 'Mobile Applications',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      icon: MobileIcon,
      features: ['iOS & Android', 'UI/UX Design', 'App Store Launch', 'Maintenance'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500',
    },
    {
      slug: 'cloud-solutions',
      title: 'Cloud Solutions',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      icon: CloudIcon,
      features: ['Cloud Migration', 'Infrastructure', 'DevOps', 'Security'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500',
    },
    {
      slug: 'ai-machine-learning',
      title: 'AI & Machine Learning',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      icon: AIIcon,
      features: ['Predictive AI', 'NLP', 'Vision AI', 'Automation'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      icon: SecurityIcon,
      features: ['Security Audit', 'Threat Detection', 'Data Protection', 'Compliance'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500',
    },
    {
      slug: 'it-consulting',
      title: 'IT Consulting',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      icon: ConsultingIcon,
      features: ['Strategy', 'Transformation', 'Audit', 'Roadmap'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500',
    },
  ];

  const industries = [
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Finance', icon: Landmark },
    { name: 'E-commerce', icon: ShoppingCart },
    { name: 'Education', icon: GraduationCap },
    { name: 'Real Estate', icon: Building2 },
    { name: 'Manufacturing', icon: Factory },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Technology Solutions That <span className="text-primary">Scale</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            We design, build and scale digital products that create real impact.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.slug}
                onMouseEnter={() => setActiveService(index)}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 bg-card/80 border-2 transition-all ${
                  isActive ? service.borderColor : 'border-border/50'
                }`}
              >
                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/60">• {f}</li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/services/${service.slug}`}>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-white"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* INDUSTRIES */}
        <div className="bg-card/50 rounded-3xl p-12 border border-border/50">
          <h3 className="text-3xl font-bold text-center mb-10">Industries We Serve</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center p-4 rounded-xl bg-card border border-border/30 hover:border-primary transition"
              >
                <Icon className="text-primary mb-2" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}