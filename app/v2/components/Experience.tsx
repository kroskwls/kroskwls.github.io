"use client";

import { motion, type Variants } from "framer-motion";

const easeOut = "easeOut" as const;

type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
  skills: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024–2025",
    company: "CHA Health Systems",
    role: "Full Stack Developer",
    location: "Seongnam, KR",
    bullets: [
      "Implemented OAuth 2.0 and RBAC-based authentication system across enterprise health platform.",
      "Integrated ChatGPT API for clinical documentation assistance, reducing manual entry time.",
      "Designed vector similarity evaluation pipeline for semantic search over patient records.",
    ],
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL", "AWS", "TailwindCSS", "Zustand"],
  },
  {
    period: "2024",
    company: "Alian",
    role: "Database Architect",
    location: "Seongnam, KR",
    bullets: [
      "Designed and standardized DB schema across multiple robotics data domains.",
      "Optimized critical SQL queries, achieving significant reduction in average query response time.",
      "Established data modeling conventions and documentation standards for the engineering team.",
    ],
    skills: ["PostgreSQL", "SQL", "Query Optimization", "Data Modeling"],
  },
  {
    period: "2024",
    company: "Alian",
    role: "Full Stack Developer",
    location: "Seongnam, KR",
    bullets: [
      "Built data interface layer supporting 10 distinct robot hardware types with unified API.",
      "Developed real-time monitoring dashboard for robot fleet status and telemetry.",
      "Designed RESTful API endpoints consumed by embedded systems and web clients.",
    ],
    skills: ["Spring Framework", "PostgreSQL", "Next.js", "React", "TypeScript", "TailwindCSS", "Zustand"],
  },
  {
    period: "2019–2024",
    company: "Naviworks",
    role: "Full Stack Developer",
    location: "Anyang, KR",
    bullets: [
      "Delivered solutions in defense and maritime domains under strict specification compliance.",
      "Processed and visualized PostGIS ENC (Electronic Navigational Chart) geospatial data.",
      "Built interactive 2D/3D map visualization using CesiumJS for real-time vessel tracking.",
      "Designed and maintained RESTful API layer with automated CI/CD via Jenkins.",
    ],
    skills: ["React", "Spring Framework", "PostGIS", "CesiumJS", "Jenkins"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Experience() {
  return (
    <section
      id="experience"
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
          02 — Experience
        </p>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(201,168,76,0.2)",
          }}
        />
      </motion.div>

      {/* Experience list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{ display: "flex", flexDirection: "column", gap: "0" }}
      >
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}-${index}`}
            variants={itemVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "0 3rem",
              paddingBottom: "3.5rem",
              borderBottom: index < EXPERIENCES.length - 1
                ? "1px solid rgba(136,146,176,0.1)"
                : "none",
              marginBottom: index < EXPERIENCES.length - 1 ? "3.5rem" : "0",
            }}
          >
            {/* Left column: period */}
            <div style={{ paddingTop: "0.25rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "rgba(201,168,76,0.35)",
                  lineHeight: 1,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {exp.period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.7rem",
                  color: "rgba(136,146,176,0.5)",
                  marginTop: "0.5rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {exp.location}
              </p>
            </div>

            {/* Right column: content */}
            <div>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#e8eaf0",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {exp.role}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.8rem",
                  color: "#c9a84c",
                  marginTop: "0.3rem",
                  letterSpacing: "0.05em",
                }}
              >
                {exp.company}
              </p>

              <ul
                style={{
                  marginTop: "1.25rem",
                  paddingLeft: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {exp.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "#8892b0",
                      listStyleType: "none",
                      paddingLeft: "0",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        marginRight: "0.6rem",
                        color: "rgba(201,168,76,0.5)",
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "0.7rem",
                      }}
                    >
                      —
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Skill tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.06em",
                      color: "rgba(136,146,176,0.7)",
                      border: "1px solid rgba(136,146,176,0.2)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "2px",
                      backgroundColor: "rgba(30,42,58,0.6)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
