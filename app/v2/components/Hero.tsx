"use client";

import { motion, type Transition } from "framer-motion";

const ease = "easeOut" as const;

const fadeUp = (delay: number): {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
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
      }}
    >
      <div style={{ width: "100%" }}>
        {/* Section label */}
        <motion.p
          {...fadeUp(0.1)}
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "1.5rem",
          }}
        >
          01 — About
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.25)}
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#e8eaf0",
            margin: 0,
          }}
        >
          Dongjin Cho
        </motion.h1>

        {/* Title */}
        <motion.h2
          {...fadeUp(0.4)}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            fontWeight: 400,
            color: "#8892b0",
            marginTop: "1rem",
            marginBottom: 0,
            letterSpacing: "0.01em",
          }}
        >
          Full Stack Developer
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          style={{
            width: "60px",
            height: "2px",
            backgroundColor: "#c9a84c",
            marginTop: "1.75rem",
            marginBottom: "1.75rem",
            transformOrigin: "left",
          }}
        />

        {/* One-line intro */}
        <motion.p
          {...fadeUp(0.6)}
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#8892b0",
            maxWidth: "560px",
            margin: 0,
          }}
        >
          Building reliable, scalable web systems at the intersection of clean architecture
          and real-world engineering — from geospatial visualization to AI-integrated platforms.
        </motion.p>

        {/* Contact chips */}
        <motion.div
          {...fadeUp(0.75)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "2.5rem",
          }}
        >
          {[
            { label: "(604) 861-2799", href: "tel:+16048612799" },
            { label: "kroskwls@gmail.com", href: "mailto:kroskwls@gmail.com" },
            { label: "linkedin.com/in/dongjin-cho", href: "https://linkedin.com/in/dongjin-cho" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                color: "#8892b0",
                textDecoration: "none",
                border: "1px solid rgba(136,146,176,0.25)",
                padding: "0.4rem 0.9rem",
                borderRadius: "2px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#c9a84c";
                el.style.borderColor = "rgba(201,168,76,0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#8892b0";
                el.style.borderColor = "rgba(136,146,176,0.25)";
              }}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
