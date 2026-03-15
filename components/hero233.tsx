"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import React from "react";

import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface Hero233Props {
  className?: string;
  badge?: {
    text: string;
    href?: string;
  };
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

const Hero233 = ({
  className,
  badge = {
    text: "Security-First Approach",
  },
  titlePrefix = "Where creativity & technology ",
  titleHighlight = "intersect",
  titleSuffix = ".",
  subtitle = "Engineering Reliable Digital Infrastructure",
  primaryButton = {
    text: "Get Started",
    href: "/contact",
  },
  secondaryButton = {
    text: "Our Services",
    href: "#services",
  },
}: Hero233Props) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={cn(
        "relative h-screen w-full overflow-hidden bg-background pt-16 pb-32 md:py-32",
        className,
      )}
    >
      <div className="relative z-20 mx-auto max-w-[1100px] px-6 flex flex-col items-center justify-center gap-4 py-4 md:py-10 text-center md:mt-22">
        <div className="absolute -z-1 size-full max-w-3xl bg-background blur-xl" />
        <Button
          variant="secondary"
          className="text-md group mt-10 mb-2 flex w-fit items-center justify-center gap-1.5 rounded-full bg-muted/60 px-5 py-1 tracking-tight md:my-5"
          asChild={!!badge.href}
        >
          {badge.href ? (
            <a href={badge.href}>
              <ShieldCheck className="size-4 text-primary" fill="currentColor" />
              <span>{badge.text}</span>
            </a>
          ) : (
            <>
              <ShieldCheck className="size-4 text-primary" fill="currentColor" />
              <span>{badge.text}</span>
            </>
          )}
        </Button>
        <div className="relative flex max-w-4xl items-center justify-center text-center text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl">
          <h1 className="relative z-10">
            <span className="mr-3 text-muted-foreground/50">
              {titlePrefix}
            </span>
            <LineShadowText shadowColor="var(--primary)">{titleHighlight}</LineShadowText>
            <span className="text-muted-foreground/50">{titleSuffix}</span>
          </h1>
        </div>

        <p className="mt-5 max-w-xl bg-background text-muted-foreground/80 text-xl px-5">
          {subtitle}
        </p>
        <div className="my-5 flex gap-4">
          <Button
            variant="default"
            className="group flex h-10 w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight"
            asChild
          >
            <a href={primaryButton.href}>
              <span>{primaryButton.text}</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="group flex h-10 w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight"
            asChild
          >
            <a href={secondaryButton.href}>
              <span>{secondaryButton.text}</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute top-0 flex size-full justify-center">
        {Array.from({ length: isMobile ? 7 : 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100%" }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: "easeOut",
            }}
            className="w-24 border-l bg-gradient-to-b to-transparent transition-all ease-in-out hover:scale-110 hover:from-black/2"
          />
        ))}
      </div>
    </section>
  );
};

export { Hero233 };
