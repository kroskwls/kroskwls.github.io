"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
  skills: string[];
  topColor: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Sep 2024 – May 2025",
    company: "CHA Health Systems",
    role: "Full Stack Developer",
    location: "Seongnam, KR",
    topColor: "#f59e0b",
    bullets: [
      "Implemented OAuth 2.0 and RBAC-based authentication system across enterprise health platform.",
      "Integrated ChatGPT API for clinical documentation assistance, reducing manual entry time.",
      "Designed vector similarity evaluation pipeline for semantic search over patient records.",
    ],
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL", "AWS", "TailwindCSS", "Zustand"],
  },
  {
    period: "Apr – Dec 2024",
    company: "Alian",
    role: "Database Architect",
    location: "Seongnam, KR",
    topColor: "#a78bfa",
    bullets: [
      "Designed and standardized DB schema across multiple robotics data domains.",
      "Optimized critical SQL queries, achieving significant reduction in average query response time.",
      "Established data modeling conventions and documentation standards for the engineering team.",
    ],
    skills: ["PostgreSQL", "SQL", "Query Optimization", "Data Modeling"],
  },
  {
    period: "Apr – Dec 2024",
    company: "Alian",
    role: "Full Stack Developer",
    location: "Seongnam, KR",
    topColor: "#34d399",
    bullets: [
      "Built data interface layer supporting 10 distinct robot hardware types with unified API.",
      "Developed real-time monitoring dashboard for robot fleet status and telemetry.",
      "Designed RESTful API endpoints consumed by embedded systems and web clients.",
    ],
    skills: ["Spring Framework", "PostgreSQL", "Next.js", "React", "TypeScript", "TailwindCSS", "Zustand"],
  },
  {
    period: "2019 – 2024",
    company: "Naviworks",
    role: "Full Stack Developer",
    location: "Anyang, KR",
    topColor: "#60a5fa",
    bullets: [
      "Delivered solutions in defense and maritime domains under strict specification compliance.",
      "Processed and visualized PostGIS ENC (Electronic Navigational Chart) geospatial data.",
      "Built interactive 2D/3D map visualization using CesiumJS for real-time vessel tracking.",
      "Designed and maintained RESTful API layer with automated CI/CD via Jenkins.",
    ],
    skills: ["React", "Spring Framework", "PostGIS", "CesiumJS", "Jenkins"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#fafaf9",
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
            02 — Experience
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
            Work History
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Colored top bar */}
              <div
                style={{
                  height: "4px",
                  background: `linear-gradient(90deg, ${exp.topColor}, ${exp.topColor}88)`,
                }}
              />

              <div style={{ padding: "1.5rem 1.75rem" }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1c1917",
                        margin: 0,
                      }}
                    >
                      {exp.role}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "0.78rem",
                        color: exp.topColor,
                        marginTop: "0.2rem",
                        fontWeight: 600,
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "0.72rem",
                        color: "#a8a29e",
                        margin: 0,
                      }}
                    >
                      {exp.period}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "0.65rem",
                        color: "#c7bfba",
                        marginTop: "0.15rem",
                      }}
                    >
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    paddingLeft: "1rem",
                    margin: "0 0 1rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{ fontSize: "0.855rem", lineHeight: 1.65, color: "#57534e" }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "0.65rem",
                        color: "#78716c",
                        backgroundColor: "#f5f5f4",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "999px",
                        fontWeight: 500,
                        border: "1px solid #e7e5e4",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
