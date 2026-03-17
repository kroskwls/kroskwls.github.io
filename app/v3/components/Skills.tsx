"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  category: string;
  icon: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["TypeScript", "JavaScript", "Java", "SQL", "HTML / CSS"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚙",
    skills: ["React", "Next.js", "Spring Framework", "NestJS", "TailwindCSS", "Prisma / TypeORM"],
  },
  {
    category: "Databases",
    icon: "◈",
    skills: ["PostgreSQL / PostGIS", "MariaDB", "Oracle"],
  },
  {
    category: "Infrastructure & Tools",
    icon: "⬡",
    skills: ["AWS", "Vercel", "Git", "Jenkins", "CesiumJS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6366f1",
              fontWeight: 600,
            }}
          >
            03 — Skills
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#0f172a",
              marginTop: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Technical Stack
          </h2>
        </motion.div>

        {/* Skill grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: gi * 0.08 }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              {/* Category label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.85rem",
                    color: "#6366f1",
                    width: "20px",
                    textAlign: "center",
                  }}
                >
                  {group.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#94a3b8",
                    fontWeight: 600,
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                    style={{
                      fontSize: "0.8rem",
                      color: "#334155",
                      backgroundColor: "#f1f5f9",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "6px",
                      fontWeight: 500,
                      border: "1px solid #e2e8f0",
                      transition: "all 0.15s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.backgroundColor = "#eef2ff";
                      el.style.borderColor = "#a5b4fc";
                      el.style.color = "#4f46e5";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.backgroundColor = "#f1f5f9";
                      el.style.borderColor = "#e2e8f0";
                      el.style.color = "#334155";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
