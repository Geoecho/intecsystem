"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's automatic scroll restoration on refresh
    if (typeof window !== "undefined" && "history" in window && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top on initial mount/refresh
    window.scrollTo(0, 0);
  }, []);

  // Also handle route changes if needed, though Next.js usually handles this.
  // We'll keep it simple for "always start from top on refresh/everywhere"
  useEffect(() => {
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, [pathname]);

  return null;
}
