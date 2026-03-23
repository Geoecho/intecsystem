"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Stats15Props {
  className?: string;
}

const Stats15 = ({ className }: Stats15Props) => {
  const sectionRef = useRef(null);
  const IllustrationRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const Stats = {
    2021: {
      YearsInBusiness: 18,
      Professionals: 25,
      Projects: 120,
      SupportAvailability: 24,
      PathHeight: 0,
    },
    2022: {
      YearsInBusiness: 19,
      Professionals: 30,
      Projects: 150,
      SupportAvailability: 24,
      PathHeight: 55,
    },
    2023: {
      YearsInBusiness: 20,
      Professionals: 35,
      Projects: 175,
      SupportAvailability: 24,
      PathHeight: 105,
    },
    2024: {
      YearsInBusiness: 21,
      Professionals: 40,
      Projects: 200,
      SupportAvailability: 24,
      PathHeight: 160,
    },
  };

  const [selectedYear, setSelectedYear] = useState(2021);
  const [displayValue, setDisplayValue] = useState({
    YearsInBusiness: 0,
    Professionals: 0,
    Projects: 0,
    SupportAvailability: 0,
  });

  // Use a manual IntersectionObserver for reliable desktop detection
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Trigger the count-up animation after the numbers area is visible
  useEffect(() => {
    if (hasAnimated) {
      const timeout = setTimeout(() => {
        setDisplayValue(Stats[selectedYear as keyof typeof Stats]);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [hasAnimated, selectedYear]);


  const years = Object.keys(Stats).map(Number);

  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="container mx-auto max-w-6xl px-6 flex flex-col items-center gap-8 lg:gap-16">
        <div className="z-10 flex flex-col items-center text-center">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl" aria-label="Numbers that speak for themselves">
            Numbers that speak for themselves
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground/80">
            Over two decades of delivering reliable digital infrastructure and security solutions across Africa and beyond.
          </p>
          <div className="my-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 mx-auto">
            <Button
              variant="default"
              className="text-md group flex h-12 w-full items-center justify-center gap-2 rounded-md px-8 text-base tracking-tight"
              asChild
            >
              <a href="/contact">
                <span>Get Started</span>
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </a>
            </Button>
          </div>
          <div
            className="mt-12 flex w-full max-w-full flex-col items-center justify-between md:mt-16 xl:bg-transparent"
          >
            <div ref={sectionRef} className="mt-auto mb-10 grid w-full grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
              <div className="w-full text-center">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={displayValue.YearsInBusiness}
                    suffix="+"
                  />
                </h3>
                <p className="mt-2 text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Years in Business{" "}
                </p>
              </div>
              <div className="w-full text-center">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={displayValue.Professionals}
                    suffix="+"
                  />
                </h3>
                <p className="mt-2 text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Professionals{" "}
                </p>
              </div>
              <div className="w-full text-center">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={displayValue.Projects}
                    suffix="+"
                  />
                </h3>
                <p className="mt-2 text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Successful Projects{" "}
                </p>
              </div>
              <div ref={IllustrationRef} className="w-full text-center">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={displayValue.SupportAvailability}
                    suffix="/7"
                  />
                </h3>
                <p className="mt-2 text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Customer Support{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid w-full max-w-6xl grid-cols-2 md:grid-cols-4 gap-3 mx-auto mt-8 px-6">
          {years.map((year) => (
            <div key={year} className="group">
              <button
                onClick={() => setSelectedYear(year)}
                className={`relative w-full rounded-md px-4 py-3 text-sm font-medium transition-all ease-out ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 hover:bg-muted"
                }`}
              >
                {year} - {year + 1}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats15 };

const LinkIllustration = ({ className = "", PathHeight = 0 }) => {
  return (
    <svg
      width="280"
      height="124"
      viewBox="0 0 412 178"
      overflow="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        key={PathHeight}
        d={`M408.308 ${PathHeight}H294L114.965 274H1`}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <motion.path
        d={`M408.308 ${PathHeight}H294L114.965 274H1`}
        stroke="black"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <circle cx="408.309" cy={PathHeight} r="5" fill="currentColor" />
      <circle cx="2" cy="274" r="5" fill="currentColor" />
    </svg>
  );
};
