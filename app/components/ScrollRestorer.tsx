"use client";

import { useEffect } from "react";

export default function ScrollRestorer() {
  useEffect(() => {
    const saved = sessionStorage.getItem("scrollY");
    if (saved) {
      sessionStorage.removeItem("scrollY");
      window.scrollTo({ top: parseInt(saved, 10) });
    }
  }, []);

  return null;
}
