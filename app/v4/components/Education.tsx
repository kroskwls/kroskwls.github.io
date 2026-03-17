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
            04 — Education
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
            Academic Background
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "8px",
              top: "8px",
              bottom: "8px",
              width: "2px",
              backgroundColor: "#fde68a",
              borderRadius: "1px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {EDUCATION_ITEMS.map((item, index) => (
              <motion.div
                key={`${item.institution}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                style={{ position: "relative" }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-1.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: item.type === "degree" ? "#f59e0b" : "#ffffff",
                    border: "2px solid",
                    borderColor: item.type === "degree" ? "#f59e0b" : "#fde68a",
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    padding: "1.25rem 1.5rem",
                    border: "1px solid #f5f5f4",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    transition: "box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 1px 3px rgba(0,0,0,0.05)";
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#1c1917",
                          margin: 0,
                        }}
                      >
                        {item.degree}
                      </p>
                      {item.type === "course" && (
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontSize: "0.6rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#d97706",
                            backgroundColor: "#fffbeb",
                            border: "1px solid #fde68a",
                            padding: "0.1rem 0.45rem",
                            borderRadius: "999px",
                            fontWeight: 600,
                          }}
                        >
                          Training
                        </span>
                      )}
                      {item.type === "degree" && (
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontSize: "0.6rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#f59e0b",
                            backgroundColor: "#fffbeb",
                            border: "1px solid #fde68a",
                            padding: "0.1rem 0.45rem",
                            borderRadius: "999px",
                            fontWeight: 600,
                          }}
                        >
                          Degree
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#a8a29e",
                        margin: "0.2rem 0 0",
                      }}
                    >
                      {item.institution} · {item.location}
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "0.72rem",
                      color: "#c7bfba",
                      flexShrink: 0,
                      textAlign: "right",
                    }}
                  >
                    {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
