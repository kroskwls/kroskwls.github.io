"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Database Architect",
  "React Enthusiast",
  "Problem Solver",
];

const HELLO_WORLDS = [
  { text: "< Hello, World! />", upper: true },
  { text: 'console.log("Hello, World!")', upper: false },
  { text: 'const hello: string = "Hello, World!";', upper: false },
  { text: 'System.out.println("Hello, World!");', upper: false },
  { text: "SELECT 'Hello, World!';", upper: false },
  { text: "<h1>Hello, World!</h1>", upper: false },
  { text: 'content: "Hello, World!";', upper: false },
];

type Particle = { x: string; y: string; duration: number; delay: number; shape: "dot" | "streak" | "cross"; length: number };
type Sparkle = { id: number; x: number; y: number };
type LetterOffset = { x: number; y: number; rotate: number };

const NAME = "Dongjin Cho";
const NAME_CHARS = NAME.split("");
const letterColor = (idx: number) => `hsl(${185 + idx * 9}, 95%, 62%)`;
let nsCounter = 0;
const CHAR_NS_IDX = NAME_CHARS.map((c) => (c === " " ? -1 : nsCounter++));
const TOTAL_LETTERS = nsCounter; // 10

// Dong(0-3), jin(4-6), Cho(7-9)
const WORDS = [
  { start: 0, end: 4 },
  { start: 4, end: 7 },
  { start: 7, end: 10 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [helloIndex, setHelloIndex] = useState(0);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [namePhase, setNamePhase] = useState<"idle" | "filling" | "shaking" | "exploding">("idle");
  const [coloredCount, setColoredCount] = useState(0);
  const [letterOffsets, setLetterOffsets] = useState<LetterOffset[]>(() =>
    NAME_CHARS.map(() => ({ x: 0, y: 0, rotate: 0 }))
  );
  const fillingRef = useRef(false);

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, () => {
        const r = Math.random();
        const shape = r < 0.5 ? "dot" : r < 0.85 ? "streak" : "cross";
        return {
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 3,
          shape,
          length: shape === "streak" ? 10 + Math.random() * 20 : 4,
        };
      })
    );
  }, []);

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

  const handleSectionClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a, button, [data-interactive]")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setSparkles((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setSparkles((prev) => prev.filter((s) => s.id !== id)), 700);
  };

  const triggerExplode = () => {
    setNamePhase("shaking");
    setTimeout(() => {
      setLetterOffsets(
        NAME_CHARS.map((c) =>
          c === " "
            ? { x: 0, y: 0, rotate: 0 }
            : {
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 500,
                rotate: (Math.random() - 0.5) * 360,
              }
        )
      );
      setNamePhase("exploding");
      setTimeout(() => {
        setLetterOffsets(NAME_CHARS.map(() => ({ x: 0, y: 0, rotate: 0 })));
        setColoredCount(0);
        setNamePhase("idle");
      }, 1200);
    }, 550);
  };

  const handleNameClick = () => {
    if (namePhase === "shaking" || namePhase === "exploding" || fillingRef.current) return;
    const word = WORDS.find((w) => w.start === coloredCount);
    if (!word) return;

    if (namePhase === "idle") setNamePhase("filling");
    fillingRef.current = true;

    const count = word.end - word.start;
    for (let i = 0; i < count; i++) {
      const target = word.start + i + 1;
      setTimeout(() => {
        setColoredCount(target);
        if (i === count - 1) {
          fillingRef.current = false;
          if (target >= TOTAL_LETTERS) triggerExplode();
        }
      }, i * 130);
    }
  };

  const handleHelloClick = () => {
    setHelloIndex((i) => (i + 1) % HELLO_WORLDS.length);
  };

  const hello = HELLO_WORLDS[helloIndex];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-950 px-6 text-center"
      onClick={handleSectionClick}
    >
      {/* 배경 파티클 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          p.shape === "streak" ? (
            <motion.div
              key={i}
              className="absolute origin-right"
              style={{
                left: p.x,
                top: p.y,
                width: p.length,
                height: 1.5,
                rotate: "135deg",
                background: "linear-gradient(to left, rgba(34,211,238,0.7), transparent)",
              }}
              animate={{ opacity: [0.15, 0.6, 0.15], scaleX: [0.6, 1, 0.6] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            />
          ) : p.shape === "cross" ? (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: p.x, top: p.y }}
              animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            >
              <div className="relative h-2 w-2">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-300/60" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300/60" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-400"
              style={{ left: p.x, top: p.y, width: 2, height: 2 }}
              animate={{ opacity: [0.15, 0.55, 0.15], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            />
          )
        ))}
        {/* 클릭 별 반짝임 */}
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="pointer-events-none absolute"
            style={{ left: s.x, top: s.y, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: 45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* 큰 십자 */}
            <div className="relative" style={{ width: 20, height: 20 }}>
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rounded-full bg-white shadow-[0_0_4px_1px_rgba(255,255,255,0.8)]" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rounded-full bg-white shadow-[0_0_4px_1px_rgba(255,255,255,0.8)]" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rounded-full bg-cyan-200/70 shadow-[0_0_3px_1px_rgba(34,211,238,0.6)]" style={{ rotate: "45deg" }} />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rounded-full bg-cyan-200/70 shadow-[0_0_3px_1px_rgba(34,211,238,0.6)]" style={{ rotate: "45deg" }} />
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.9)]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 그리드 배경 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <div
          data-interactive
          className="mb-4 flex h-6 cursor-pointer items-center justify-center"
          onClick={handleHelloClick}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={helloIndex}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className={`font-mono text-sm text-cyan-400 ${
                hello.upper ? "uppercase tracking-widest" : "tracking-tight"
              }`}
            >
              {hello.text}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={namePhase === "shaking"
            ? { opacity: 1, y: 0, x: [-4, 4, -4, 4, -2, 2, -1, 1, 0] }
            : { opacity: 1, y: 0, x: 0 }
          }
          transition={namePhase === "shaking"
            ? { duration: 0.5, ease: "easeInOut" }
            : { duration: 0.6, delay: 0.2 }
          }
          className="mb-4 cursor-pointer select-none text-5xl font-bold tracking-tight md:text-7xl"
          onMouseEnter={handleNameClick}
          data-interactive
        >
          {NAME_CHARS.map((char, i) => {
            const nsIdx = CHAR_NS_IDX[i];
            const isColored = nsIdx >= 0 && nsIdx < coloredCount;
            const color = isColored ? letterColor(nsIdx) : "#ffffff";
            const off = letterOffsets[i];
            return (
              <motion.span
                key={i}
                style={{ display: "inline-block" }}
                animate={namePhase === "exploding"
                  ? { x: off.x, y: off.y, opacity: 0, rotate: off.rotate, color: isColored ? letterColor(nsIdx) : "#ffffff", textShadow: "none" }
                  : {
                      x: 0, y: 0, opacity: 1, rotate: 0,
                      color: isColored ? letterColor(nsIdx) : "#ffffff",
                      textShadow: isColored
                        ? `0 0 12px ${letterColor(nsIdx)}cc, 0 0 30px ${letterColor(nsIdx)}66`
                        : "0 0 0px transparent",
                    }
                }
                transition={{
                  color: { duration: 0.35, ease: "easeOut" },
                  textShadow: { duration: 0.35, ease: "easeOut" },
                  x: { duration: 0.6, ease: "easeOut" },
                  y: { duration: 0.6, ease: "easeOut" },
                  opacity: { duration: 0.6, ease: "easeOut" },
                  rotate: { duration: 0.6, ease: "easeOut" },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.div>

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
          data-interactive
        >
          <a
            href="#contact"
            className="cursor-pointer rounded-full border border-cyan-400 px-6 py-3 text-sm font-medium text-cyan-400 transition-all hover:bg-cyan-400 hover:text-gray-950"
          >
            Contact Me
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
