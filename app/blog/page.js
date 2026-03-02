"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import KineticHero from "@/src/components/blog/KineticHero";
import { POSTS } from "@/src/data/blogdata";
import { useRouter } from "next/navigation";
import { BlogNewsletter } from "@/src/components/blog/BlogNewsletter";


const CATEGORIES = ["All", "Cloud", "Cybersecurity", "AI & Data", "DevOps", "Software"];



export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? POSTS 
    : POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
    {/* BLOG HERO */}
     <KineticHero />

      {/* 2. Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sidebar: Categories */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-6">Explore Topics</h3>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-between group ${
                      activeCategory === cat 
                      ? "bg-primary text-white translate-x-2" 
                      : "hover:bg-secondary text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {cat}
                    <ArrowRight size={14} className={`transition-transform ${activeCategory === cat ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 animate-fade-in">
              <h4 className="font-bold mb-2">Weekly Briefing</h4>
              <p className="text-sm text-foreground/60 mb-4">Get the top 5 IT trends delivered to your inbox every Monday.</p>
              <input type="email" placeholder="email@company.com" className="w-full bg-background border border-border p-2 rounded mb-2 text-sm" />
              <button className="w-full py-2 bg-foreground text-background text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors">Subscribe</button>
            </div>
          </div>
        </aside>

        {/* Post Grid */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <PostCard key={post.id} post={post} index={idx} />
              ))}
            </AnimatePresence>
          </div>
        </main>

      </section>


      <BlogNewsletter />
  
    </div>
  );
}

function PostCard({ post, index }) {
    const router = useRouter();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 ${
        post.featured ? "md:col-span-2 flex flex-col md:flex-row h-full md:h-96" : "h-full flex flex-col"
      }`}
    >
      {/* Image Container */}
      <div className={`${post.featured ? "md:w-1/2 h-64 md:h-full" : "h-64"} overflow-hidden relative`}>
        <motion.img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className={`p-8 flex flex-col justify-between ${post.featured ? "md:w-1/2" : "flex-1"}`}>
        <div>
          <div className="flex items-center gap-4 text-xs text-foreground/40 mb-4 font-mono">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
          </div>
          
          <h2 className={`${post.featured ? "text-3xl" : "text-xl"} font-bold mb-4 leading-tight group-hover:text-primary transition-colors`}>
            {post.title}
          </h2>
          
          <p className="text-foreground/60 text-sm line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold border border-border">
              {post.author.split(' ').map((n) => n[0]).join('')}
            </div>
            <span className="text-xs font-semibold">{post.author}</span>
          </div>
          
         <button
  onClick={() => router.push(`/blog/${post.id}`)}
  className="p-2 rounded-full bg-secondary group-hover:bg-primary group-hover:text-white transition-all"
>
  <ArrowRight size={18} />
</button>
        </div>
      </div>

      {/* Background Animated Shine (only on hover) */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute inset-0 animate-shine" />
      </div>
    </motion.article>
  );
}