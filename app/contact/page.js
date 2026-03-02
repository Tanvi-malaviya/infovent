"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Background parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="bg-background text-foreground selection:bg-primary/30">
      
      {/* ================= 1. KINETIC HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8 bg-primary/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Direct Connection Available
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase italic">
              Digital <br />
              <span className="text-primary animate-pulse-slow">Nexus</span>
            </h1>
            
            <p className="mt-8 text-xl text-foreground/60 max-w-md border-l-4 border-primary pl-6 leading-relaxed">
              Engineering high-integrity systems. If your project demands 
              absolute security and radical performance, we should talk.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
             <div className="relative z-10 w-full aspect-square border-2 border-border rounded-[4rem] overflow-hidden rotate-3 flex items-center justify-center bg-card shadow-2xl">
                <div className="absolute inset-0 bg-pattern-lines opacity-10" />
                <div className="text-center p-12 -rotate-3">
                   <Lock size={80} className="text-primary mx-auto mb-6 animate-bounce-delay" />
                   <h3 className="text-2xl font-black mb-2">Secure Channel</h3>
                   <p className="text-sm opacity-50 font-mono italic">ENCRYPTION: AES-256-GCM</p>
                </div>
             </div>
             {/* Decorative Frame */}
             <div className="absolute inset-0 border-2 border-primary/20 rounded-[4rem] -rotate-3 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </section>

      {/* ================= 2. SPLIT CONTACT INTERFACE ================= */}
      <section className="py-24 px-6 border-y border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Information Nodes */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">Access Points</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Neural Inbox", val: "ops@tech.co", color: "bg-blue-500/10 text-blue-500" },
                  { icon: Phone, label: "Direct Line", val: "+91 98765 43210", color: "bg-emerald-500/10 text-emerald-500" },
                  { icon: MapPin, label: "Base Ops", val: "Ahmedabad, IN", color: "bg-purple-500/10 text-purple-500" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border group transition-all cursor-pointer hover:border-primary"
                  >
                    <div className={`p-4 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">{item.label}</p>
                      <p className="font-bold text-lg leading-none">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] border-2 border-dashed border-primary/20 bg-primary/5">
                <ShieldCheck size={40} className="text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2 italic">Data Sovereignty</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Badhu data local servers par process thay che. Ame tamari privacy ane security ne prioritze kariye chiye.
                </p>
            </div>
          </div>

          {/* Right Side: The Glass Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-card border-2 border-border rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              
              {!submitted ? (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-4">Codename / Name</label>
                      <input required className="w-full bg-secondary/50 border border-border px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Enter name..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-4">Frequency / Email</label>
                      <input required type="email" className="w-full bg-secondary/50 border border-border px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Enter email..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-4">Operational Briefing</label>
                    <textarea rows="5" className="w-full bg-secondary/50 border border-border px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="Project details..."></textarea>
                  </div>

                  <button className="w-full group relative py-6 bg-primary text-white font-black uppercase tracking-[0.3em] rounded-2xl overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Initialize Handshake <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </form>
              ) : (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="py-20 text-center">
                  <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Transmission Received</h3>
                  <p className="opacity-60">Amari team tamne 24 kalak ma contact karse.</p>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= 3. BENTO GRID FEATURES ================= */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic">Protocol Standards</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Zap />, title: "Instant Response", desc: "Response under 120 minutes." },
            { icon: <Lock />, title: "NDA First", desc: "Automated NDA signing available." },
            { icon: <Globe />, title: "Global Sync", desc: "Available for worldwide collaboration." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-card border border-border flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
              <p className="text-sm opacity-50">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

   

    </div>
  );
}