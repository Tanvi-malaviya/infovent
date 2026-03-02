"use client";

import React, { useRef } from "react";
import { POSTS } from "@/src/data/blogdata";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
} from "lucide-react";

export default function BlogDetails({ params }) {
  const { id } = React.use(params);
  const post = POSTS.find((p) => p.id === Number(id));
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.4]);

  if (!post) return notFound();

  return (
    <div
      ref={containerRef}
      className="relative bg-background text-foreground overflow-hidden"
    >
      {/* ===== SCROLL PROGRESS BAR ===== */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-50"
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern-grid">
        <motion.img
          src={post.image}
          alt={post.title}
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background" />

        {/* Floating Animated Orbs */}
        <div className="absolute w-[600px] h-[600px] bg-primary/20 blur-[180px] rounded-full animate-float top-[-200px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-accent/20 blur-[160px] rounded-full animate-pulse-slow bottom-[-100px] right-[-100px]" />

        <div className="relative z-10 text-center max-w-5xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{once: true}}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight"
          >
            {post.title}
          </motion.h1>

          <div className="flex justify-center gap-8 mt-10 text-xs font-mono opacity-70">
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <User size={14} /> {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="relative max-w-4xl mx-auto px-6 py-32">

        {/* DROP CAP INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{once: true}}
          className="text-xl leading-relaxed text-foreground/80 first-letter:text-6xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left"
        >
          In today’s evolving digital landscape, enterprise security is no
          longer just about firewalls and compliance. It’s about resilience,
          anticipation, and proactive architecture that adapts to constant
          transformation.
        </motion.p>

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{once: true}}
          className="mt-16 space-y-12 text-lg text-foreground/80 leading-relaxed"
        >
          <p>
            {post.content}
          </p>

          <h2 className="text-3xl font-black mt-20">
            The Next Era of Cyber Infrastructure
          </h2>

          <p>
            Organizations that invest early in quantum-resistant encryption,
            zero-trust frameworks, and AI-driven anomaly detection will define
            the next technological frontier.
          </p>

          {/* Highlight Quote */}
          <blockquote className="border-l-4 border-primary pl-8 italic text-primary text-2xl mt-16">
            “Security is no longer a defensive strategy — it is the foundation
            of digital innovation.”
          </blockquote>

          <p>
            As enterprise ecosystems expand across cloud, edge, and hybrid
            infrastructures, traditional perimeter-based protection models
            collapse under scale. Adaptive intelligence becomes critical.
          </p>
        </motion.div>

        {/* BIG CTA BAND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{once: true}}
          className="mt-32 p-16 rounded-3xl bg-gradient-to-r from-primary to-accent text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-pattern-dots" />

          <h3 className="text-4xl font-black mb-6">
            Ready to Build Future-Proof Security?
          </h3>
          <p className="opacity-90 mb-10">
            Let’s architect resilient systems designed for tomorrow’s
            challenges.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:scale-105 transition-transform">
            Schedule Consultation
          </button>
        </motion.div>

        {/* RELATED POSTS */}
        <div className="mt-40">
          <h3 className="text-3xl font-black mb-16 text-center">
            Related Insights
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {POSTS.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="p-8">
                  <h4 className="font-black text-xl mb-4">
                    {item.title}
                  </h4>
                  <Link
                    href={`/blog/${item.id}`}
                    className="text-primary font-bold text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}