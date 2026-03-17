"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem",
        background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
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
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.04em",
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
            color: "rgba(255,255,255,0.85)",
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
              backgroundColor: "#ffffff",
              color: "#d97706",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "999px",
              fontSize: "0.9rem",
              fontWeight: 700,
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
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
              color: "#ffffff",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "999px",
              fontSize: "0.9rem",
              fontWeight: 600,
              border: "1.5px solid rgba(255,255,255,0.5)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(255,255,255,0.15)";
              el.style.borderColor = "rgba(255,255,255,0.8)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.5)";
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
            {[
              { label: "← v1", href: "/" },
              { label: "← v2", href: "/v2" },
              { label: "← v3", href: "/v3" },
            ].map((v) => (
              <a
                key={v.href}
                href={v.href}
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)")
                }
              >
                {v.label}
              </a>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.4)",
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
