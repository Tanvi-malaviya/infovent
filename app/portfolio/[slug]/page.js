"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { Zap, Shield, BarChart, Palette } from "lucide-react";

const projects = {
  "healthcare-platform": {
    title: "Healthcare Platform",
    category: "Web Application",
    image: "/portfolio1.jpg",
    description:
      "A modern healthcare system enabling appointment booking, patient records, and real-time doctor communication.",
  },
  "ecommerce-system": {
    title: "E-Commerce System",
    category: "Ecommerce",
    image: "/portfolio2.jpg",
    description:
      "Full-scale ecommerce platform with AI product recommendations and seamless checkout experience.",
  },
  "fintech-dashboard": {
    title: "Fintech Dashboard",
    category: "Dashboard",
    image: "/portfolio3.jpg",
    description:
      "Advanced analytics dashboard with real-time data visualization for financial institutions.",
  },
  "education-lms": {
    title: "Education LMS",
    category: "SaaS",
    image: "/portfolio4.jpg",
    description:
      "Complete learning management system with live classes, quizzes, and progress tracking.",
  },
};

export default async function PortfolioDetails({ params }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return notFound();

  const features = [
    { icon: Zap, text: "High Performance Optimization" },
    { icon: Palette, text: "Modern Premium UI Design" },
    { icon: Shield, text: "Secure Scalable Architecture" },
    { icon: BarChart, text: "Real-time Analytics System" },
  ];

  return (
    <section className="relative min-h-screen bg-background py-16">

      {/* BG GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 leading-tight">
              {project.title}
            </h1>

            <p className="text-foreground/70 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            src={project.image}
            className="rounded-2xl shadow-xl h-[360px] object-cover"
          />
        </div>

        {/* OVERVIEW + FEATURES */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div>
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-foreground/70 leading-relaxed">
              This project focused on building a scalable, high-performance digital
              product combining modern user experience, secure backend
              architecture, and enterprise-level performance optimization.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>

            <div className="space-y-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="text-primary" size={20} />
                    <span className="text-foreground/70">{f.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Technology Stack</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "Tailwind", "Node.js", "Framer Motion"].map((tech) => (
              <span key={tech} className="px-4 py-2 text-sm rounded-full bg-muted/40 border">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { num: "99%", label: "Client Satisfaction" },
            { num: "4X", label: "Performance Boost" },
            { num: "50K+", label: "Active Users" },
            { num: "24/7", label: "System Uptime" },
          ].map((s, i) => (
            <div key={i} className="p-5 rounded-xl bg-muted/40 text-center">
              <h4 className="text-2xl font-bold text-primary">{s.num}</h4>
              <p className="text-sm text-foreground/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CHALLENGE & SOLUTION */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-3">Challenge</h3>
            <p className="text-foreground/70">
              The client required a scalable, secure system capable of handling
              large data loads while maintaining exceptional UI performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Solution</h3>
            <p className="text-foreground/70">
              We implemented a modular architecture with optimized database
              queries, server-side rendering, and performance-focused UI design.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary to-purple-500 p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-3">
            Ready to Start Your Project?
          </h3>

          <p className="opacity-90 mb-5">
            Let’s build a scalable and premium digital solution tailored to your needs.
          </p>

          <button className="px-7 py-3 bg-white text-black rounded-full font-semibold">
            Start Project
          </button>
        </div>

      </div>
    </section>
  );
}