"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function fireConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    zIndex: 9999,
  });
}

export default function Confetti() {
  useEffect(() => {
    const handler = () => fireConfetti();
    window.addEventListener("portfolio:confetti", handler);
    return () => window.removeEventListener("portfolio:confetti", handler);
  }, []);

  return null;
}
