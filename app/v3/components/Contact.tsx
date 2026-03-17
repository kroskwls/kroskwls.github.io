"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem 8rem",
        backgroundColor: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6366f1",
            fontWeight: 600,
          }}
        >
          05 — Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: "-0.03em",
            marginTop: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          Let&apos;s work together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#64748b",
            marginBottom: "2.5rem",
          }}
        >
          Open to full-time roles and contract engagements.
          <br />
          Whether it&apos;s a complex system or a greenfield project — let&apos;s talk.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
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
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "background-color 0.2s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#4f46e5";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#6366f1";
              el.style.transform = "translateY(0)";
            }}
          >
            ✉ kroskwls@gmail.com
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
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              fontSize: "0.9rem",
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

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="/"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                color: "#94a3b8",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6366f1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
            >
              ← v1
            </a>
            <a
              href="/v2"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                color: "#94a3b8",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6366f1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
            >
              ← v2
            </a>
          </div>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.7rem",
              color: "#cbd5e1",
              marginTop: "0.25rem",
            }}
          >
            © {new Date().getFullYear()} Dongjin Cho. Built with Next.js & TailwindCSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
