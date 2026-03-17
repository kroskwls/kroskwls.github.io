"use client";

import { motion } from "framer-motion";

type EducationItem = {
  period: string;
  institution: string;
  degree: string;
  location: string;
  type: "degree" | "course";
};

const EDUCATION_ITEMS: EducationItem[] = [
  {
    period: "2007 – 2016",
    institution: "U1 University",
    degree: "B.S. Computer Science",
    location: "Asan, KR",
    type: "degree",
  },
  {
    period: "Jun – Aug 2016",
    institution: "KISE",
    degree: "Java Development Training",
    location: "Seoul, KR",
    type: "course",
  },
  {
    period: "Jul – Oct 2015",
    institution: "KOSTA",
    degree: "Java Web Development Training",
    location: "Seoul, KR",
    type: "course",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
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
          04 — Education
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
          Academic Background
        </h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {EDUCATION_ITEMS.map((item, index) => (
          <motion.div
            key={`${item.institution}-${index}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              border: "1px solid #f1f5f9",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: item.type === "degree" ? "#eef2ff" : "#f0fdf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "1.2rem",
              }}
            >
              {item.type === "degree" ? "🎓" : "📖"}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#0f172a",
                    margin: 0,
                  }}
                >
                  {item.degree}
                </p>
                {item.type === "course" && (
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#16a34a",
                      backgroundColor: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      padding: "0.1rem 0.45rem",
                      borderRadius: "4px",
                    }}
                  >
                    Training
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#64748b",
                  margin: "0.15rem 0 0",
                }}
              >
                {item.institution} · {item.location}
              </p>
            </div>

            {/* Period */}
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.75rem",
                color: "#94a3b8",
                flexShrink: 0,
                textAlign: "right",
              }}
            >
              {item.period}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
