"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    color: "from-cyan-500 to-blue-500",
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    color: "from-purple-500 to-pink-500",
    skills: ["React", "Next.js", "NestJS", "Spring Framework", "TailwindCSS", "Prisma", "TypeORM"],
  },
  {
    label: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: ["PostgreSQL", "PostGIS", "MariaDB", "Oracle"],
  },
  {
    label: "Tools & Platforms",
    color: "from-orange-500 to-yellow-500",
    skills: ["AWS", "Vercel", "Git", "SVN", "Jenkins", "DA#"],
  },
];

function SkillTag({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="cursor-default rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-sm text-gray-300 transition-colors hover:border-cyan-500 hover:text-cyan-300"
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-400">
            // tech stack
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Technical Skills</h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`h-0.5 w-8 bg-gradient-to-r ${group.color} rounded`} />
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <SkillTag key={skill} skill={skill} delay={gi * 0.1 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
