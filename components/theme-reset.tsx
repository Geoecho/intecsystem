"use client";

import { useEffect } from "react";

export function ThemeReset() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    localStorage.removeItem("theme");
  }, []);

  return null;
}
