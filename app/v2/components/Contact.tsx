"use client";

import { motion } from "framer-motion";

const easeOut = "easeOut" as const;

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Phone",
    value: "(604) 861-2799",
    href: "tel:+16048612799",
  },
  {
    label: "Email",
    value: "kroskwls@gmail.com",
    href: "mailto:kroskwls@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dongjin-cho",
    href: "https://linkedin.com/in/dongjin-cho",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem 10rem",
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
          05 — Contact
        </p>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(201,168,76,0.2)",
          }}
        />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: "#e8eaf0",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Let&apos;s build something together.
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#8892b0",
              marginTop: "1.25rem",
              maxWidth: "380px",
            }}
          >
            Open to full-time roles and contract engagements. Whether it&apos;s a
            complex system or a greenfield project — let&apos;s talk.
          </p>
        </motion.div>

        {/* Right: contact details */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.12 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {CONTACT_LINKS.map((link) => (
            <div
              key={link.label}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "1rem",
                alignItems: "center",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(136,146,176,0.1)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(136,146,176,0.5)",
                }}
              >
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.85rem",
                  color: "#ccd6f6",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#ccd6f6")
                }
              >
                {link.value}
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          color: "rgba(136,146,176,0.35)",
          marginTop: "5rem",
          textAlign: "center",
        }}
      >
        Designed and built by Dongjin Cho — {new Date().getFullYear()}
      </motion.p>
    </section>
  );
}
