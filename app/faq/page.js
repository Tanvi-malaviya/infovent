"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus } from "lucide-react";

const faqData = [
  {
    category: "General",
    question: "What services do you provide?",
    answer:
      "We specialize in enterprise-grade web development, secure infrastructure architecture, and scalable cloud solutions.",
  },
  {
    category: "General",
    question: "How quickly do you respond?",
    answer:
      "Our team guarantees a response within 24 hours for all business inquiries.",
  },
  {
    category: "Security",
    question: "Do you provide NDA protection?",
    answer:
      "Yes, we sign strict NDA agreements to ensure full confidentiality.",
  },
  {
    category: "Security",
    question: "How secure are your systems?",
    answer:
      "We implement zero-trust architecture, encrypted communication layers, and enterprise compliance standards.",
  },
  {
    category: "Pricing",
    question: "Is consultation free?",
    answer:
      "Yes, the initial strategy consultation is completely free.",
  },
];

export default function FAQPage() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "General", "Security", "Pricing"];

  const filtered = faqData.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* ================= HERO ================= */}
    <section className="relative pt-28 sm:pt-32 md:pt-40 px-6 text-center overflow-hidden">

  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black relative z-10 leading-tight"
  >
    Frequently Asked <span className="text-primary">Questions</span>
  </motion.h1>

  <p className="mt-6 sm:mt-8 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto relative z-10">
    Everything you need to know about working with us and building
    secure digital systems.
  </p>

  {/* Search */}
  <div className="mt-10 sm:mt-14 max-w-xl mx-auto relative z-10">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
    <input
      type="text"
      placeholder="Search your question..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl 
                 bg-card border border-border 
                 focus:ring-2 focus:ring-primary outline-none text-sm sm:text-base"
    />
  </div>
</section>

      {/* ================= CATEGORY TABS ================= */}
    <section className="py-10 sm:py-16 px-6 max-w-5xl mx-auto">
  <div className="flex gap-4 overflow-x-auto no-scrollbar justify-start sm:justify-center">
    {categories.map((cat, i) => (
      <motion.button
        key={i}
        whileHover={{ scale: 1.05 }}
        onClick={() => setCategory(cat)}
        className={`whitespace-nowrap px-5 py-2.5 sm:px-6 sm:py-3 
        rounded-full text-xs sm:text-sm font-bold transition-all ${
          category === cat
            ? "bg-primary text-white"
            : "bg-secondary text-foreground/70"
        }`}
      >
        {cat}
      </motion.button>
    ))}
  </div>
</section>

      {/* ================= FAQ LIST ================= */}
      <section className="pb-16 px-6 max-w-4xl mx-auto space-y-8">
        <AnimatePresence>
          {filtered.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-xl backdrop-blur-lg"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="font-bold text-lg">
                  {item.question}
                </h3>

                {active === index ? (
                  <Minus className="text-primary" />
                ) : (
                  <Plus className="text-primary" />
                )}
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-6 text-foreground/70"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* ================= FINAL CTA ================= */}
  <section className="relative py-16 sm:py-20 overflow-hidden bg-background px-6">

  {/* Glow Orbs - smaller for mobile */}
  <div className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] 
                  bg-primary/20 blur-[120px] sm:blur-[180px] 
                  rounded-full -top-32 -left-32" />

  <div className="absolute w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] 
                  bg-accent/20 blur-[100px] sm:blur-[160px] 
                  rounded-full bottom-[-100px] right-[-100px]" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-6xl mx-auto"
  >
    <div className="relative grid md:grid-cols-2 gap-10 sm:gap-16 items-center 
                    bg-card/80 backdrop-blur-xl 
                    border border-border 
                    rounded-2xl sm:rounded-3xl 
                    p-8 sm:p-16 shadow-2xl overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 sm:mb-8">
          Still Have <span className="text-primary">Questions?</span>
        </h2>

        <p className="text-foreground/70 text-sm sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto md:mx-0">
          Our experts are ready to guide you through architecture,
          security planning, and enterprise-grade solutions tailored
          to your infrastructure.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-5 
                     rounded-xl bg-primary text-white font-bold"
        >
          Talk to Our Experts
        </motion.button>
      </div>

      {/* RIGHT VISUAL BLOCK */}
      <div className="relative hidden md:flex justify-center items-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute w-48 h-48 lg:w-60 lg:h-60 
                     border border-primary/40 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute w-32 h-32 lg:w-40 lg:h-40 
                     border border-accent/40 rounded-full"
        />

        <div className="relative z-10 p-8 lg:p-12 rounded-2xl 
                        bg-secondary/50 backdrop-blur-md 
                        border border-border text-center">
          <h3 className="text-xl lg:text-2xl font-black mb-4">
            Enterprise Support
          </h3>
          <p className="text-foreground/70 text-sm">
            24h Response Guarantee<br/>
            Confidential NDA<br/>
            Global Availability
          </p>
        </div>
      </div>

    </div>
  </motion.div>
</section>

    </div>
  );
}