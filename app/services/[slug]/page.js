"use client";

import { use } from "react"; // Import the 'use' hook
import { notFound } from "next/navigation";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Rocket,
  Cpu,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/src/common/Button";
import Link from "next/link";

const services = {
  "web-development": {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    features: [
      "Responsive UI/UX",
      "SEO Optimized",
      "API Integration",
      "Performance Optimization",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
  },
  "mobile-applications": {
    title: "Mobile-Applications",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    features: [
      "Responsive UI/UX",
      "SEO Optimized",
      "API Integration",
      "Performance Optimization",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
  },
  "cloud-solutions": {
    title: "Cloud-Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    features: [
      "Responsive UI/UX",
      "SEO Optimized",
      "API Integration",
      "Performance Optimization",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
  },
  "ai-machine-learning": {
    title: "Ai-Machine-Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    features: [
      "Responsive UI/UX",
      "SEO Optimized",
      "API Integration",
      "Performance Optimization",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    features: [
      "Responsive UI/UX",
      "SEO Optimized",
      "API Integration",
      "Performance Optimization",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
  },
  "it-consulting": { 
    title: "It Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    features: [
      "Responsive UI/UX",
      "SEO Optimized",
      "API Integration",
      "Performance Optimization",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
  },
};

// Removed 'async' keyword here
export default function ServicePage({ params }) {
  // Use React.use() to unwrap the params promise in a Client Component
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = services[slug];

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden ">

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-8 sm:pt-20 sm:pb-10 lg:pt-28 lg:pb-12 px-4 sm:px-6">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-muted text-xs sm:text-sm font-medium">
              <Rocket size={14} className="text-primary" />
              Enterprise Digital Solutions
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {service.title}
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                That Drives Growth
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-0 max-w-xl mx-auto lg:mx-0">
              {service.description}
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">

              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold mb-4">
                  Core Highlights
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-foreground/70">
                  <li>✔ Scalable Architecture</li>
                  <li>✔ Modern Tech Stack</li>
                  <li>✔ Secure Infrastructure</li>
                  <li>✔ High Performance</li>
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden xl:block absolute -bottom-6 -right-6 bg-background border border-border rounded-2xl p-5"
              >
                <h4 className="text-xl font-black text-primary">150+</h4>
                <p className="text-xs text-foreground/60">
                  Projects Delivered
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-15 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              {service.content}
            </p>

            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-10 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-black text-primary">150+</h3>
                <p className="text-sm text-foreground/60">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-primary">98%</h3>
                <p className="text-sm text-foreground/60">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-primary">10+</h3>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-primary">24/7</h3>
                <p className="text-sm text-foreground/60">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 px-6  ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[Shield, Rocket, Cpu, BarChart].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                <Icon size={36} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">
                  {["Secure", "Fast Delivery", "Modern Stack", "Scalable"][i]}
                </h3>
                <p className="text-sm text-foreground/60">
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {service.tech.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-card border border-border rounded-full shadow-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >

          <div className="relative rounded-3xl border border-border bg-card overflow-hidden shadow-2xl">

            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

            <div className="relative grid md:grid-cols-2 items-center">

              <div className="p-12 md:p-16">
                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                  Ready to Scale Your
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Digital Presence?
                  </span>
                </h2>

                <p className="text-foreground/70 text-lg mb-10">
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>

             <div className="flex flex-wrap gap-6">

          <Link href={"/contact"}>
          <Button variant="primary" className="rounded-full px-10 py-4 text-lg">
            Start Your Project
          </Button>
          </Link>

       

</div>
              </div>

              <div className="relative h-full bg-muted/40 flex items-center justify-center p-12">

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-background border border-border rounded-2xl p-8 shadow-xl w-full max-w-sm"
                >
                  <h3 className="text-xl font-bold mb-4">
                    Why Work With Us?
                  </h3>

                  <ul className="space-y-3 text-foreground/70">
                    <li>✔ Enterprise Grade Security</li>
                    <li>✔ Modern Tech Stack</li>
                    <li>✔ 24/7 Support</li>
                    <li>✔ Scalable Architecture</li>
                  </ul>
                </motion.div>

              </div>

            </div>
          </div>

        </motion.div>

      </section>
    </div>
  );
}