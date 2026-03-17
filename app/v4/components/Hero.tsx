"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const STATS = [
  { value: "8+", label: "Years" },
  { value: "4", label: "Companies" },
  { value: "10+", label: "Projects" },
];

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-8%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <div>
          <motion.div
            {...fadeUp(0.1)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.5rem",
              backgroundColor: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "999px",
              padding: "0.35rem 1rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#f59e0b",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#92400e",
                fontWeight: 600,
              }}
            >
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontSize: "clamp(3.2rem, 8vw, 6rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#1c1917",
              margin: "0 0 1.75rem",
            }}
          >
            Dongjin
            <br />
            <span style={{ position: "relative", display: "inline-block" }}>
              Cho
              <span
                style={{
                  position: "absolute",
                  bottom: "6px",
                  left: 0,
                  right: 0,
                  height: "10px",
                  backgroundColor: "#fde68a",
                  zIndex: -1,
                  borderRadius: "3px",
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#78716c",
              maxWidth: "500px",
              marginBottom: "2.25rem",
            }}
          >
            Building reliable, scalable web systems — from geospatial
            visualization to AI-integrated enterprise platforms.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            <a
              href="mailto:kroskwls@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#f59e0b",
                color: "#ffffff",
                textDecoration: "none",
                padding: "0.75rem 1.75rem",
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontWeight: 700,
                transition: "background-color 0.2s ease, transform 0.15s ease",
                boxShadow: "0 4px 14px rgba(245,158,11,0.35)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#d97706";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 6px 20px rgba(245,158,11,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#f59e0b";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 14px rgba(245,158,11,0.35)";
              }}
            >
              ✉ Get in touch
            </a>
            <a
              href="https://linkedin.com/in/dongjin-cho"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "transparent",
                color: "#78716c",
                textDecoration: "none",
                padding: "0.75rem 1.75rem",
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                border: "1.5px solid #d6d3d1",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#fcd34d";
                el.style.color = "#d97706";
                el.style.backgroundColor = "#fffbeb";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#d6d3d1";
                el.style.color = "#78716c";
                el.style.backgroundColor = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Right: Stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: i === 0 ? "#fffbeb" : "#ffffff",
                border: "1px solid",
                borderColor: i === 0 ? "#fde68a" : "#f5f5f4",
                borderRadius: "16px",
                padding: "1.5rem",
                textAlign: "center",
                boxShadow:
                  i === 0
                    ? "0 4px 16px rgba(245,158,11,0.15)"
                    : "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: i === 0 ? "#d97706" : "#1c1917",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#a8a29e",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
