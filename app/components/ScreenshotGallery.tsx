"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Screenshot {
  src: string;
  fullSrc?: string;
  alt: string;
  label: string;
  heading: string;
  description: string;
  width?: number;
  height?: number;
}

interface Props {
  screenshots: Screenshot[];
  accent?: string;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function ScreenshotGallery({ screenshots, accent = "text-cyan-400" }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const dirRef = useRef(1);

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    dirRef.current = -1;
    setSelected((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length));
  }, [screenshots.length]);

  const next = useCallback(() => {
    dirRef.current = 1;
    setSelected((i) => (i === null ? null : (i + 1) % screenshots.length));
  }, [screenshots.length]);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {screenshots.map((s, i) => (
          <button
            key={s.heading}
            onClick={() => setSelected(i)}
            className="group cursor-pointer overflow-hidden rounded-xl border border-gray-700 bg-gray-900 text-left transition-colors hover:border-gray-500 focus:outline-none"
          >
            <div className="flex items-center gap-1.5 border-b border-gray-700 px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-red-500/70" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <div className="h-2 w-2 rounded-full bg-green-500/70" />
              <span className="ml-1.5 font-mono text-xs text-gray-500">{s.label}</span>
              <span className={`ml-auto font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100 ${accent}`}>
                click to expand ↗
              </span>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width ?? 1440}
                height={s.height ?? 900}
                className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                quality={85}
                priority={i < 2}
              />
            </div>
            <p className="px-3 py-2 text-xs leading-relaxed text-gray-500">{s.description}</p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Image container */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-gray-700 bg-gray-900 px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-red-500/70" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <div className="h-2 w-2 rounded-full bg-green-500/70" />
              <span className="ml-1.5 font-mono text-xs text-gray-500">
                {screenshots[selected].label}
              </span>
              <span className="ml-auto font-mono text-xs text-gray-600">
                {selected + 1} / {screenshots.length}
              </span>
            </div>
            <div className="relative overflow-hidden bg-gray-900" style={{ maxHeight: "calc(90vh - 80px)" }}>
              <AnimatePresence initial={false} custom={dirRef.current} mode="popLayout">
                <motion.div
                  key={selected}
                  custom={dirRef.current}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-auto"
                  style={{ maxHeight: "calc(90vh - 80px)" }}
                >
                  <Image
                    src={screenshots[selected].fullSrc ?? screenshots[selected].src}
                    alt={screenshots[selected].alt}
                    width={screenshots[selected].width ?? 1440}
                    height={screenshots[selected].height ?? 900}
                    className="w-full"
                    quality={95}
                    priority
                  />
                  <p className="bg-gray-900 px-3 py-2 text-xs leading-relaxed text-gray-400">
                    {screenshots[selected].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Next */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Next"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
