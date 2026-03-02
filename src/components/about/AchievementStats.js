'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Smile,
  Calendar,
  Users,
  Trophy,
  Globe,
  Building,
  Briefcase,
  Laptop,
  Bot,
  Star
} from 'lucide-react';

export default function AchievementStats() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    team: 0,
    awards: 0,
    countries: 0
  });

  const achievements = [
    { icon: Rocket, label: "Projects Completed", color: "from-blue-500 to-cyan-500", target: 250 },
    { icon: Smile, label: "Happy Clients", color: "from-green-500 to-emerald-500", target: 150 },
    { icon: Calendar, label: "Years Experience", color: "from-yellow-500 to-orange-500", target: 10 },
    { icon: Users, label: "Team Members", color: "from-purple-500 to-pink-500", target: 50 },
    { icon: Trophy, label: "Industry Awards", color: "from-red-500 to-pink-500", target: 25 },
    { icon: Globe, label: "Countries Served", color: "from-indigo-500 to-purple-500", target: 15 }
  ];

  const milestones = [
    { year: "2014", title: "Company Founded", description: "Started with 3 founders", icon: Building },
    { year: "2016", title: "Enterprise Client", description: "First major contract", icon: Briefcase },
    { year: "2018", title: "Team Expansion", description: "Grew to 15+ members", icon: Users },
    { year: "2020", title: "Digital Transformation", description: "Focused on digital solutions", icon: Laptop },
    { year: "2022", title: "AI Innovation", description: "Launched AI division", icon: Bot },
    { year: "2024", title: "Global Recognition", description: "Expanded worldwide", icon: Globe }
  ];

  useEffect(() => {
    const duration = 3000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.round(250 * progress),
        clients: Math.round(150 * progress),
        years: Math.round(10 * progress),
        team: Math.round(50 * progress),
        awards: Math.round(25 * progress),
        countries: Math.round(15 * progress)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const counterValues = [
    counters.projects,
    counters.clients,
    counters.years,
    counters.team,
    counters.awards,
    counters.countries
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-secondary overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Numbers That Speak <span className="text-primary">Volumes</span>
          </h2>
          <p className="text-foreground/70">
            Our journey of growth, innovation & success
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08 }}
              >
                {/* ICON */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl`}
                >
                  <Icon size={34} className="text-white" />
                </motion.div>

                {/* NUMBER */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  {counterValues[i]}+
                </motion.div>

                <p className="text-sm text-foreground/70">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-primary/20"></div>

          <div className="space-y-8">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  className={`flex items-center ${i % 2 ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: i % 2 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  {/* CARD */}
                  <div className="w-5/12 p-6 bg-card rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="p-3 bg-primary/10 rounded-lg"
                      >
                        <Icon size={22} className="text-primary" />
                      </motion.div>
                      <h4 className="font-bold">{m.title}</h4>
                    </div>
                    <p className="text-sm text-foreground/70">{m.description}</p>
                  </div>

                  {/* YEAR */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                    {m.year}
                  </div>

                  <div className="w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              className="bg-card p-6 rounded-2xl text-center shadow-lg"
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-sm text-foreground/70">
                “Outstanding service and amazing support.”
              </p>
              <p className="font-semibold mt-3">Client Review</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}