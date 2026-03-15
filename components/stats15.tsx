"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Stats15Props {
  className?: string;
}

const Stats15 = ({ className }: Stats15Props) => {
  const ref = useRef(null);
  const IllustrationRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(2021);

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

  const years = Object.keys(Stats).map(Number);

  return (
    <section className={cn("py-32", className)}>
      <div className="mx-auto max-w-[1100px] px-6 flex flex-col md:flex-row">
        <div className="z-10 md:flex-1">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Numbers that speak for themselves
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground/80">
            Over two decades of delivering reliable digital infrastructure and security solutions across Africa and beyond.
          </p>
          <div className="my-10 flex gap-4">
            <Button
              variant="outline"
              className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
              asChild
            >
              <a href="/about">
                <span>Our Story</span>
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </a>
            </Button>
            <Button
              variant="default"
              className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
              asChild
            >
              <a href="/contact">
                <span>Get Started</span>
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </a>
            </Button>
          </div>
          <div
            ref={ref}
            className="mt-12 flex max-w-3xl flex-col items-end bg-background md:mt-32 xl:bg-transparent"
          >
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="w-full text-left">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={Stats[selectedYear as keyof typeof Stats].YearsInBusiness}
                    suffix="+"
                  />
                </h3>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Years of Business{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={Stats[selectedYear as keyof typeof Stats].Professionals}
                    suffix="+"
                  />
                </h3>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Professionals{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={Stats[selectedYear as keyof typeof Stats].Projects}
                    suffix="+"
                  />
                </h3>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Successful Projects{" "}
                </p>
              </div>
              <div ref={IllustrationRef} className="w-full text-left">
                <h3 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={Stats[selectedYear as keyof typeof Stats].SupportAvailability}
                    suffix="/7"
                  />
                </h3>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}Customer Support{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-fit flex-row flex-wrap gap-2 md:mt-42 md:flex-col">
          {years.map((year) => (
            <div key={year} className="group">
              <button
                onClick={() => setSelectedYear(year)}
                className={`relative rounded-full px-4 py-1 text-sm transition-all ease-out ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground md:-translate-x-8"
                    : "bg-muted/70 group-hover:-translate-x-4 group-hover:bg-muted"
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
