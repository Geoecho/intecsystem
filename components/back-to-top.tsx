"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Check all possible scroll containers
      const scrolled = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      setIsVisible(scrolled > 300);
    };

    // Listen on window, document, AND body — when both html+body have
    // overflow-x:hidden, body becomes the scroll container and events
    // only fire on body (not window/document) on desktop browsers.
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    document.body.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      document.body.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTop = 0;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-[90]"
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 64 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-md bg-background shadow-lg hover:bg-accent"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="size-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
