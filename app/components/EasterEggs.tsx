"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEggs() {
  const [toasts, setToasts] = useState<{ id: number; msg: string }[]>([]);
  const idRef = useRef(0);

  const showToast = useCallback((msg: string) => {
    const id = ++idRef.current;
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => showToast((e as CustomEvent).detail.message);
    window.addEventListener("portfolio:toast", handler);
    return () => window.removeEventListener("portfolio:toast", handler);
  }, [showToast]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9998,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        pointerEvents: "none",
      }}
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="rounded-full border border-cyan-500/30 bg-gray-900 px-5 py-3 font-mono text-sm text-cyan-400 shadow-lg shadow-black/40 whitespace-nowrap"
          >
            {t.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
