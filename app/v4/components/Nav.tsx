"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const VERSION_LINKS = [
  { label: "← v1", href: "/" },
  { label: "← v2", href: "/v2" },
  { label: "← v3", href: "/v3" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (isBottom) setActiveSection("contact");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <a
          href="#about"
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "1rem",
            fontWeight: 800,
            color: "#d97706",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          DC
          <span style={{ color: "#fbbf24" }}>.</span>
        </a>

        <ul
          style={{
            display: "flex",
            gap: "1.75rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {/* Version pills */}
          {VERSION_LINKS.map((v) => (
            <li key={v.href}>
              <a
                href={v.href}
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  color: "#a8a29e",
                  border: "1px solid #e7e5e4",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#d97706";
                  el.style.borderColor = "#fcd34d";
                  el.style.backgroundColor = "#fffbeb";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#a8a29e";
                  el.style.borderColor = "#e7e5e4";
                  el.style.backgroundColor = "transparent";
                }}
              >
                {v.label}
              </a>
            </li>
          ))}

          {/* Section links */}
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                    color: isActive ? "#d97706" : "#78716c",
                    fontWeight: isActive ? 600 : 400,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#d97706")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = isActive
                      ? "#d97706"
                      : "#78716c")
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
