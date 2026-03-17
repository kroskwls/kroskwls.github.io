"use client";

import { motion } from "framer-motion";

const easeOut = "easeOut" as const;

type EducationItem = {
  period: string;
  institution: string;
  degree: string;
  location: string;
  type: "degree" | "course";
};

const EDUCATION_ITEMS: EducationItem[] = [
  {
    period: "2007–2016",
    institution: "U1 University",
    degree: "B.S. Computer Science",
    location: "Asan, KR",
    type: "degree",
  },
  {
    period: "Jun–Aug 2016",
    institution: "KISE",
    degree: "Java Development Training",
    location: "Seoul, KR",
    type: "course",
  },
  {
    period: "Jul–Oct 2015",
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
          04 — Education
        </p>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(201,168,76,0.2)",
          }}
        />
      </motion.div>

      {/* Education list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {EDUCATION_ITEMS.map((item, index) => (
          <motion.div
            key={`${item.institution}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: easeOut, delay: index * 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "0 3rem",
              paddingBottom: "2.75rem",
              borderBottom:
                index < EDUCATION_ITEMS.length - 1
                  ? "1px solid rgba(136,146,176,0.1)"
                  : "none",
              marginBottom: index < EDUCATION_ITEMS.length - 1 ? "2.75rem" : "0",
              alignItems: "start",
            }}
          >
            {/* Left: period */}
            <div style={{ paddingTop: "0.15rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.78rem",
                  color: "rgba(201,168,76,0.6)",
                  margin: 0,
                  letterSpacing: "0.06em",
                }}
              >
                {item.period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.68rem",
                  color: "rgba(136,146,176,0.45)",
                  marginTop: "0.35rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {item.location}
              </p>
            </div>

            {/* Right: content */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#e8eaf0",
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
                      color: "rgba(201,168,76,0.6)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "2px",
                    }}
                  >
                    Training
                  </span>
                )}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.8rem",
                  color: "#8892b0",
                  marginTop: "0.3rem",
                }}
              >
                {item.institution}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
