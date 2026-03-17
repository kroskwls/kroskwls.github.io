"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-5%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ width: "100%", maxWidth: "680px" }}>
        {/* Label */}
        <motion.p
          {...fadeUp(0.1)}
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6366f1",
            marginBottom: "1.25rem",
          }}
        >
          Full Stack Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#0f172a",
            margin: 0,
          }}
        >
          Dongjin
          <br />
          <span style={{ color: "#6366f1" }}>Cho</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.35)}
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.75,
            color: "#64748b",
            marginTop: "1.5rem",
            maxWidth: "520px",
          }}
        >
          Building reliable, scalable web systems — from geospatial visualization
          to AI-integrated enterprise platforms.
        </motion.p>

        {/* CTA chips */}
        <motion.div
          {...fadeUp(0.5)}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.5rem" }}
        >
          <a
            href="mailto:kroskwls@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#6366f1",
              color: "#ffffff",
              textDecoration: "none",
              padding: "0.65rem 1.5rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "background-color 0.2s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#4f46e5";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#6366f1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            kroskwls@gmail.com
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
              color: "#6366f1",
              textDecoration: "none",
              padding: "0.65rem 1.5rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
              border: "1.5px solid #c7d2fe",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#eef2ff";
              el.style.borderColor = "#6366f1";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "#c7d2fe";
              el.style.transform = "translateY(0)";
            }}
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
