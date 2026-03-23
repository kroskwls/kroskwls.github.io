"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    slug: "sham",
    name: "SHAM",
    full: "Smart Household Account Manager",
    description:
      "Calendar-based shared expense tracker with real-time insights. Built for daily use as a couple, with multi-user collaboration and optimistic UI updates.",
    techs: ["Next.js 15", "Supabase", "Prisma", "Zustand", "Zod"],
    color: "from-cyan-500/10 to-blue-500/10",
    border: "hover:border-cyan-500/50",
    accent: "text-cyan-400",
  },
  {
    slug: "meow",
    name: "MEOW",
    full: "Memorizing English with an Optimized Workout",
    description:
      "Full-stack English learning platform with SM-2 spaced repetition and Clean Architecture. Features 4 learning modes, Levenshtein scoring, and a finite state machine at the domain level.",
    techs: ["Next.js 15", "Clean Architecture", "SM-2", "PostgreSQL", "Vitest"],
    color: "from-blue-500/10 to-purple-500/10",
    border: "hover:border-purple-500/50",
    accent: "text-purple-400",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-400">
            // side projects
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group block h-full cursor-pointer"
                onClick={() => sessionStorage.setItem("scrollY", String(window.scrollY))}
              >
                <div
                  className={`flex h-full flex-col rounded-xl border border-gray-700 bg-gray-800 bg-gradient-to-br p-6 transition-all duration-300 ${p.color} ${p.border}`}
                >
                  <div className="mb-3">
                    <h3 className={`text-2xl font-bold ${p.accent}`}>{p.name}</h3>
                    <span className="text-xs text-gray-500">{p.full}</span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{p.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {p.techs.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className={`mt-4 font-mono text-xs transition-colors ${p.accent} opacity-60 group-hover:opacity-100`}>
                      View details →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
