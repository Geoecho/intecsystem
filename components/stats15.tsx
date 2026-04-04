"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface Stats15Props {
  className?: string;
}

const Stats15 = ({ className }: Stats15Props) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const Stats = {
    2021: {
      YearsInBusiness: 18,
      Professionals: 25,
      Projects: 120,
      SupportAvailability: 24,
    },
    2022: {
      YearsInBusiness: 19,
      Professionals: 30,
      Projects: 150,
      SupportAvailability: 24,
    },
    2023: {
      YearsInBusiness: 20,
      Professionals: 35,
      Projects: 175,
      SupportAvailability: 24,
    },
    2024: {
      YearsInBusiness: 21,
      Professionals: 40,
      Projects: 200,
      SupportAvailability: 24,
    },
  };

  const [selectedYear, setSelectedYear] = useState(2021);
  const [displayValue, setDisplayValue] = useState({
    YearsInBusiness: 0,
    Professionals: 0,
    Projects: 0,
    SupportAvailability: 0,
  });

  // Use plain scroll listener with scrollY > 50 guard so the animation only
  // fires after the user has actually scrolled — not on large desktop viewports
  // where the section may already be partially visible on initial page load.
  useEffect(() => {
    if (hasAnimated) return;
    const el = sectionRef.current;
    if (!el) return;

    const check = () => {
      const scrolled = Math.max(
        window.scrollY || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0
      );
      if (scrolled < 50) return; // must have scrolled past the hero first
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        setHasAnimated(true);
      }
    };

    // Also listen on body — when both html+body have overflow-x:hidden,
    // body becomes the scroll container on desktop and events only fire there.
    window.addEventListener("scroll", check, { passive: true });
    document.addEventListener("scroll", check, { passive: true });
    document.body.addEventListener("scroll", check, { passive: true });
    return () => {
      window.removeEventListener("scroll", check);
      document.removeEventListener("scroll", check);
      document.body.removeEventListener("scroll", check);
    };
  }, [hasAnimated]);

  // Delay count-up by 400ms after scroll trigger so numbers animate while visible
  useEffect(() => {
    if (hasAnimated) {
      const t = setTimeout(() => {
        setDisplayValue(Stats[selectedYear as keyof typeof Stats]);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [hasAnimated, selectedYear]);

  const years = Object.keys(Stats).map(Number);

  return (
    <motion.section
      ref={sectionRef}
      className={cn("py-20 md:py-32", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading + subtitle — centered */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl" aria-label="Numbers that speak for themselves">
            Numbers that speak for themselves
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
            Real results, measured year over year — from growing teams and completed projects to uninterrupted client support.
          </p>
        </div>

        {/* Year selector — full width */}
        <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-3">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`w-full rounded-md px-4 py-3 text-sm font-medium transition-all ease-out ${
                selectedYear === year
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/70 hover:bg-muted"
              }`}
            >
              {year} – {year + 1}
            </button>
          ))}
        </div>

        {/* Stats numbers — same full-width grid */}
        <div className="mt-4 grid w-full grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-4xl font-medium lg:text-5xl">
              <NumberFlow value={displayValue.YearsInBusiness} suffix="+" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground/70">Years in Business</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-medium lg:text-5xl">
              <NumberFlow value={displayValue.Professionals} suffix="+" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground/70">Professionals</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-medium lg:text-5xl">
              <NumberFlow value={displayValue.Projects} suffix="+" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground/70">Successful Projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-medium lg:text-5xl">
              <NumberFlow value={displayValue.SupportAvailability} suffix="/7" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground/70">Customer Support</p>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export { Stats15 };
