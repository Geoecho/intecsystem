"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPos > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const targets = [window, document.documentElement, document.body];
    targets.forEach(target => {
      try {
        target.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (e) {
        // Fallback for older browsers
        if ('scrollTop' in target) {
          (target as any).scrollTop = 0;
        }
      }
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-md bg-background shadow-lg transition-all duration-300 hover:bg-accent",
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-16 opacity-0 pointer-events-none"
      )}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" />
    </Button>
  );
}
