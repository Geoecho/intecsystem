"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface DataItem {
  key: number;
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

interface Hero245Props {
  className?: string;
}

const DATA: DataItem[] = [
  { key: 1, src: "https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg", alt: "IBM", href: "https://www.ibm.com", width: 140, height: 56 },
  { key: 2, src: "https://www.vectorlogo.zone/logos/dell/dell-ar21.svg", alt: "Dell", href: "https://www.dell.com", width: 140, height: 56 },
  { key: 3, src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft", href: "https://www.microsoft.com", width: 140, height: 56 },
  { key: 4, src: "https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg", alt: "Cisco", href: "https://www.cisco.com", width: 140, height: 56 },
  { key: 5, src: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg", alt: "Oracle", href: "https://www.oracle.com", width: 140, height: 56 },
  { key: 6, src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS", href: "https://aws.amazon.com", width: 140, height: 56 },
  { key: 8, src: "https://www.vectorlogo.zone/logos/hp/hp-ar21.svg", alt: "HP", href: "https://www.hp.com", width: 140, height: 56 },
];

const Hero245 = ({ className }: Hero245Props) => {
  return (
    <section
      className={cn("relative grid w-full overflow-hidden py-20 md:py-32", className)}
    >
      <div className="relative z-10 container h-full grid-cols-1 items-start md:items-center justify-start md:justify-center gap-6 pt-0 md:pt-0">
        <div className="flex flex-col items-start md:items-center justify-start md:justify-center text-left md:text-center">
          <h1 className="max-w-4xl text-left md:text-center text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Industrial Excellence through
            <PointerHighlight containerClassName="inline-block ml-2">
              <span className="text-primary">Systems.</span>
            </PointerHighlight>
          </h1>
          <p className="mt-6 md:mt-10 max-w-lg text-left md:text-center text-muted-foreground">
            Over two decades of delivering reliable digital infrastructure, 
            cutting-edge security, and seamless system integration solutions worldwide.
          </p>

          <div className="mt-8 md:mt-10 flex w-full flex-wrap items-start md:items-center justify-start md:justify-center gap-4">
            <Button 
              className="group flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight"
              asChild
            >
              <a href="/solutions">
                Explore Solutions
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </a>
            </Button>
            <Button 
              variant="outline"
              className="h-10 rounded-md px-6 text-sm"
              asChild
            >
              <a href="/about">
                Our Story
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Marquee Section Integrated into Hero */}
      <div className="mx-auto max-w-[1100px] px-6 overflow-hidden mt-12 md:mt-20">
        <div className="relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-20 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-20 after:bg-linear-to-l after:from-background after:to-transparent">
          <div className="flex w-max animate-marquee gap-16 py-2">
            {/* First marquee group */}
            <div className="flex shrink-0 items-center gap-16">
              {DATA.map((logo, idx) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={`marquee-1-${logo.key}-${idx}`}
                  className="flex items-center justify-center h-12 w-36 px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain transition-all duration-300 opacity-90 hover:opacity-100 dark:invert"
                  />
                </a>
              ))}
            </div>
            {/* Second marquee group - clone for seamless loop */}
            <div className="flex shrink-0 items-center gap-16">
              {DATA.map((logo, idx) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={`marquee-2-${logo.key}-${idx}`}
                  className="flex items-center justify-center h-12 w-36 px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain transition-all duration-300 opacity-90 hover:opacity-100 dark:invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero245 };
