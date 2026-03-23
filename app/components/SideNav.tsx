"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    setIsWide(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsWide(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(SECTIONS[SECTIONS.length - 1].id);
        return;
      }
      const offset = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= offset) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-4">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        const isHovered = hovered === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex cursor-pointer items-center justify-end"
            style={{ width: isHovered || isWide ? 120 : 16, height: 16 }}
            aria-label={label}
          >
            <AnimatePresence>
              {(isHovered || (isWide && isActive)) && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute right-5 font-mono text-xs tracking-widest ${isActive ? "text-cyan-400" : "text-gray-400"}`}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.div
              animate={{
                scale: isActive ? 1 : 0.6,
                backgroundColor: isActive ? "rgb(34 211 238)" : "rgb(75 85 99)",
              }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 h-2 w-2 rounded-full"
              style={{
                boxShadow: isActive ? "0 0 8px 2px rgba(34,211,238,0.5)" : "none",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
