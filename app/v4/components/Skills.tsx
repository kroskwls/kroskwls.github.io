"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    icon: "{ }",
    color: "#d97706",
    bgColor: "#fffbeb",
    skills: ["TypeScript", "JavaScript", "Java", "SQL", "HTML / CSS"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚙",
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    skills: ["React", "Next.js", "Spring Framework", "NestJS", "TailwindCSS", "Prisma / TypeORM"],
  },
  {
    category: "Databases",
    icon: "◈",
    color: "#0891b2",
    bgColor: "#ecfeff",
    skills: ["PostgreSQL / PostGIS", "MariaDB", "Oracle"],
  },
  {
    category: "Infrastructure & Tools",
    icon: "⬡",
    color: "#16a34a",
    bgColor: "#f0fdf4",
    skills: ["AWS", "Vercel", "Git", "Jenkins", "CesiumJS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: "3rem" }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#d97706",
              fontWeight: 600,
            }}
          >
            03 — Skills
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#1c1917",
              marginTop: "0.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            Technical Stack
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1rem",
          }}
        >
          {SKILL_GROUPS.map((group, gi) => {
            // Bento: first two cards span 7+5, last two span 5+7
            const colSpans = ["1 / 8", "8 / 13", "1 / 6", "6 / 13"];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: gi * 0.08 }}
                style={{
                  gridColumn: colSpans[gi],
                  backgroundColor: group.bgColor,
                  borderRadius: "20px",
                  padding: "1.75rem",
                  border: "1px solid",
                  borderColor: `${group.color}22`,
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      backgroundColor: `${group.color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      color: group.color,
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontWeight: 700,
                    }}
                  >
                    {group.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: group.color,
                      fontWeight: 700,
                    }}
                  >
                    {group.category}
                  </span>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                      style={{
                        fontSize: "0.82rem",
                        color: "#44403c",
                        backgroundColor: "#ffffff",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "999px",
                        fontWeight: 500,
                        border: "1px solid",
                        borderColor: `${group.color}30`,
                        transition: "all 0.15s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.backgroundColor = `${group.color}15`;
                        el.style.borderColor = group.color;
                        el.style.color = group.color;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.backgroundColor = "#ffffff";
                        el.style.borderColor = `${group.color}30`;
                        el.style.color = "#44403c";
                      }}
                    >
                      {skill}
                    </motion.span>
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
