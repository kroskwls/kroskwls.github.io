"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Database Architect",
  "React Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-950 px-6 text-center">
      {/* 배경 파티클 */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-400 opacity-30"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -20, 20],
              x: [null, -15, 15],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 그리드 배경 */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm uppercase tracking-widest text-cyan-400"
        >
          &lt; Hello, World! /&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Dongjin Cho
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 flex h-10 items-center justify-center gap-2 text-2xl font-semibold text-cyan-300 md:text-3xl"
        >
          <span>{displayed}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-10 text-base leading-relaxed text-gray-400 md:text-lg"
        >
          Building robust web systems with modern technologies.<br />
          Specialized in full-stack development, geospatial data, and AI integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:kroskwls@gmail.com"
            className="rounded-full border border-cyan-400 px-6 py-3 text-sm font-medium text-cyan-400 transition-all hover:bg-cyan-400 hover:text-gray-950"
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com/in/dongjin-cho"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-gray-950 transition-all hover:bg-cyan-300"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* 스크롤 화살표 */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-xs tracking-widest">SCROLL</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
