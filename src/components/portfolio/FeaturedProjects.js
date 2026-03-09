"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Healthcare Platform",
    category: "Web",
    image: "/portfolio1.jpg",
    slug: "healthcare-platform",
  },
  {
    title: "E-Commerce System",
    category: "Ecommerce",
    image: "/portfolio2.jpg",
    slug: "ecommerce-system",
  },
  {
    title: "Fintech Dashboard",
    category: "Dashboard",
    image: "/portfolio3.jpg",
    slug: "fintech-dashboard",
  },
  {
    title: "Education LMS",
    category: "SaaS",
    image: "/portfolio4.jpg",
    slug: "education-lms",
  },
];

const categories = ["All", "Web", "Ecommerce", "Dashboard", "SaaS"];

export default function UltraPortfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="relative py-16 bg-background overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [-40, 40] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [40, -40] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          </p>
        </motion.div>

        {/* FILTER TABS */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                active === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-muted hover:bg-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group perspective"
            >
              <motion.div
                whileHover={{ rotateX: 8, rotateY: -8 }}
                className="relative rounded-3xl overflow-hidden bg-card border border-white/10 shadow-2xl transform-style preserve-3d"
              >
                {/* Gradient Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-purple-500/40 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700" />

                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">
                  <motion.img
                    src={project.image}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-10">

                  <p className="text-primary uppercase tracking-widest text-sm mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary"
                  >
                    View Case Study <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}