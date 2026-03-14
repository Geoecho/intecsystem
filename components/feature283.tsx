"use client";

import { motion } from "framer-motion";
import { Forward } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Feature283Props {
  className?: string;
}

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      className={cn(
        "bg-emerald-100 px-2 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 rounded-sm",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};

const Feature283 = ({ className }: Feature283Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
      className:
        "w-40 absolute -left-10 top-1/2 h-52 -translate-x-full -translate-y-1/2 overflow-hidden rounded-2xl",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
      className:
        "size-28 absolute -top-3 left-10 -translate-x-full -translate-y-full overflow-hidden rounded-2xl",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
      className:
        "size-32 absolute -bottom-3 left-10 -translate-x-full translate-y-full overflow-hidden rounded-2xl",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
      className:
        "w-45 absolute -right-10 top-1/2 h-52 -translate-y-1/2 translate-x-full overflow-hidden rounded-2xl",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
      className:
        "size-28 absolute -top-3 right-10 -translate-y-full translate-x-full overflow-hidden rounded-2xl",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
      className:
        "size-32 absolute -bottom-3 right-10 translate-x-full translate-y-full overflow-hidden rounded-2xl",
    },
  ];

  return (
    <section className={cn("relative flex min-h-screen w-screen items-center justify-center overflow-hidden py-32", className)}>
      <div className="container flex w-full max-w-6xl flex-col items-center justify-center px-4">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Button
            variant="secondary"
            className="group mb-6 flex w-fit items-center justify-center gap-3 rounded-full bg-muted/70 px-5 py-1"
          >
            <span className="size-2.5 rounded-full bg-foreground" />
            Security-First Approach
          </Button>
          <h1 className="relative py-2 text-center font-calSans text-5xl font-medium tracking-tight text-foreground md:text-7xl xl:text-8xl">
            Where creativity & technology <br className="hidden md:block" /> <Highlight>intersect.</Highlight>
          </h1>
          <p className="mx-auto mt-8 max-w-xl px-5 text-center text-xl text-muted-foreground break-words">
            Engineering Reliable Digital Infrastructure
          </p>
          <div className="mt-10 flex gap-4">
            <Button asChild className="group h-10 rounded-full px-6 py-1 tracking-tight">
              <a href="/contact">
                Get Started
              </a>
            </Button>
            <Button variant="outline" className="h-10 rounded-full px-6 py-1 tracking-tight">
              Our Services
            </Button>
          </div>
          <div>
            {images.map((image, index) => (
              <motion.div
                drag
                key={index}
                initial={{ y: "50%", opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.5,
                }}
                animate={{
                  filter:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "blur(10px)"
                      : "blur(0px)",
                  scale: hoveredIndex === index ? 1.05 : 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                    delay: 0,
                  },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={image.className}
              >
                <img
                  src={image.src}
                  alt=""
                  className="pointer-events-none size-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature283 };
