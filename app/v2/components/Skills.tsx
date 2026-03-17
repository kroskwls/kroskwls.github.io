"use client";

import { motion, type Variants } from "framer-motion";

const easeOut = "easeOut" as const;

type SkillBar = {
  name: string;
  weight: number; // 0–100, visual weight only (no percentage label shown)
};

type SkillCategory = {
  category: string;
  skills: SkillBar[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", weight: 92 },
      { name: "JavaScript", weight: 90 },
      { name: "Java", weight: 78 },
      { name: "SQL", weight: 85 },
      { name: "HTML / CSS", weight: 88 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", weight: 92 },
      { name: "Next.js", weight: 90 },
      { name: "Spring Framework", weight: 75 },
      { name: "NestJS", weight: 70 },
      { name: "TailwindCSS", weight: 88 },
      { name: "Prisma / TypeORM", weight: 80 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL / PostGIS", weight: 87 },
      { name: "MariaDB", weight: 72 },
      { name: "Oracle", weight: 65 },
    ],
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      { name: "AWS", weight: 72 },
      { name: "Vercel", weight: 80 },
      { name: "Git", weight: 88 },
      { name: "Jenkins", weight: 68 },
      { name: "CesiumJS", weight: 74 },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const barVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "7rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: easeOut }}
        style={{ marginBottom: "4rem" }}
      >
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "0.75rem",
          }}
        >
          03 — Skills
        </p>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(201,168,76,0.2)",
          }}
        />
      </motion.div>

      {/* Categories grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem 4rem",
        }}
      >
        {SKILL_CATEGORIES.map((cat) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {/* Category label */}
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(136,146,176,0.6)",
                marginBottom: "1.5rem",
              }}
            >
              {cat.category}
            </p>

            {/* Skill bars */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {cat.skills.map((skill) => (
                <motion.div key={skill.name} variants={barVariants}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#ccd6f6",
                        fontWeight: 400,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>

                  {/* Track */}
                  <div
                    style={{
                      width: "100%",
                      height: "3px",
                      backgroundColor: "rgba(136,146,176,0.12)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.weight}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
                      style={{
                        height: "100%",
                        borderRadius: "2px",
                        background:
                          "linear-gradient(90deg, rgba(201,168,76,0.6) 0%, rgba(201,168,76,0.9) 100%)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
