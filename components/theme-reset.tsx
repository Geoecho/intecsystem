"use client";

import { useEffect } from "react";

export function ThemeReset() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    root.style.backgroundColor = "white"; // Aggressive!
    document.body.style.backgroundColor = "white";
    localStorage.setItem("theme", "light");
  }, []);

  return null;
}
