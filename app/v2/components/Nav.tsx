"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const easeOut = "easeOut" as const;

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // 스크롤 감지 (nav 배경용)
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // 페이지 끝 도달 시 마지막 섹션 강제 활성화
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver로 각 섹션 가시성 감지
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px", // 뷰포트 중간 지점에서 활성화
          threshold: 0,
        }
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
      transition={{ duration: 0.6, ease: easeOut }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo / Name */}
        <a
          href="#about"
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.12em",
            color: "#c9a84c",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          DC
        </a>

        {/* Links */}
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <a
              href="/"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#4a5568",
                border: "1px solid #4a5568",
                padding: "3px 10px",
                borderRadius: "999px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#4a5568";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#4a5568";
              }}
            >
              ← v1
            </a>
          </li>
          <li>
            <a
              href="/v3"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#4a5568",
                border: "1px solid #4a5568",
                padding: "3px 10px",
                borderRadius: "999px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#4a5568";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#4a5568";
              }}
            >
              v3 →
            </a>
          </li>
          <li>
            <a
              href="/v4"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#4a5568",
                border: "1px solid #4a5568",
                padding: "3px 10px",
                borderRadius: "999px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#4a5568";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#4a5568";
              }}
            >
              v4 →
            </a>
          </li>
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: isActive ? "#c9a84c" : "#8892b0",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = isActive
                      ? "#c9a84c"
                      : "#8892b0")
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
