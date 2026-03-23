"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillGroups = [
  {
    label: "Languages",
    color: "from-cyan-500 to-blue-500",
    badge: "🔤",
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    color: "from-purple-500 to-pink-500",
    badge: "⚙️",
    skills: ["React", "Next.js", "NestJS", "Spring Framework", "TailwindCSS", "Prisma", "TypeORM", "Zustand", "TanStack Query"],
  },
  {
    label: "Databases",
    color: "from-green-500 to-emerald-500",
    badge: "🗄️",
    skills: ["PostgreSQL", "PostGIS", "MariaDB", "Oracle"],
  },
  {
    label: "Tools & Platforms",
    color: "from-orange-500 to-yellow-500",
    badge: "🛠️",
    skills: ["AWS", "Redis", "Vercel", "Git", "SVN", "Jenkins", "DA#"],
  },
];

const TOTAL_SKILLS = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

function dispatchToast(msg: string) {
  window.dispatchEvent(new CustomEvent("portfolio:toast", { detail: { message: msg } }));
}

function SkillTag({
  skill,
  delay,
  collected,
  onCollect,
}: {
  skill: string;
  delay: number;
  collected: boolean;
  onCollect: (skill: string) => void;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onCollect(skill)}
      className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-all select-none ${
        collected
          ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-sm shadow-cyan-500/20"
          : "border-gray-700 bg-gray-800 text-gray-300 hover:border-cyan-500 hover:text-cyan-300"
      }`}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [collected, setCollected] = useState<Set<string>>(new Set());
  const [completedCategories, setCompletedCategories] = useState<Set<string>>(new Set());

  const handleCollect = (skill: string) => {
    if (collected.has(skill)) return;
    const next = new Set(collected).add(skill);
    setCollected(next);

    // Check category completion
    const group = skillGroups.find((g) => g.skills.includes(skill));
    if (group && !completedCategories.has(group.label)) {
      const allCollected = group.skills.every((s) => next.has(s));
      if (allCollected) {
        setCompletedCategories((prev) => new Set(prev).add(group.label));
        dispatchToast(`${group.badge} "${group.label}" mastered!`);
      }
    }

    if (next.size === TOTAL_SKILLS) {
      setTimeout(() => {
        dispatchToast(`🎉 Full stack Pokédex complete! All ${TOTAL_SKILLS} skills collected.`);
        window.dispatchEvent(new CustomEvent("portfolio:confetti"));
      }, 300);
    }
  };

  return (
    <section id="skills" ref={ref} className="bg-gray-900 px-6 py-24">
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
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold text-white md:text-4xl">
            Technical Skills
            <AnimatePresence>
              {collected.size === TOTAL_SKILLS && (
                <motion.span
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  🏆
                </motion.span>
              )}
            </AnimatePresence>
          </h2>
          <p className="mt-3 font-mono text-xs text-gray-600">
            // click skills to collect them [{collected.size}/{TOTAL_SKILLS}]
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => {
            const isComplete = completedCategories.has(group.label);
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-0.5 w-8 bg-gradient-to-r ${group.color} rounded`} />
                  <span className={`text-sm font-semibold uppercase tracking-widest transition-colors ${isComplete ? "text-cyan-400" : "text-gray-400"}`}>
                    {group.label}
                  </span>
                  <motion.span
                    animate={{ opacity: isComplete ? 1 : 0, scale: isComplete ? 1 : 0, rotate: isComplete ? 0 : -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="text-base"
                    title={`${group.label} mastered!`}
                  >
                    {group.badge}
                  </motion.span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <SkillTag
                      key={skill}
                      skill={skill}
                      delay={gi * 0.1 + si * 0.05}
                      collected={collected.has(skill)}
                      onCollect={handleCollect}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
