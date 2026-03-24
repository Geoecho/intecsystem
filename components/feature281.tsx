"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface Feature281Props {
  className?: string;
}

const Feature281 = ({ className }: Feature281Props) => {
  const isMobile = useIsMobile();

  return (
    <section className={cn("relative h-full w-full overflow-hidden py-20 md:py-32", className)}>
      <div className="relative z-20 container mx-auto max-w-6xl px-6 flex w-full flex-col">
        <div className="relative flex flex-col gap-4 text-center items-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl" aria-label="Client Testimonials">
            Client Testimonials
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Trusted by organizations across the region for over two decades.
          </p>
        </div>
        <div className="mt-16 flex w-full items-center justify-center">
          <CardStack items={CARDS} />
        </div>
      </div>
    </section>
  );
};

export { Feature281 };

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      className={cn(
        "bg-primary/15 px-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary rounded-sm",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Dejan Jovanovski",
    designation: "CTO, Financial Sector",
    userImage: "/images/testimonial-dejan.png",
    companyIcon: null,
    content: (
      <p>
        InTec System has been our preferred IT partner for years. Their{" "}
        <Highlight>expertise in system integration</Highlight> and 24/7 support has been 
        crucial for our digital transformation journey.
      </p>
    ),
  },
  {
    id: 1,
    name: "Elena Petkovska",
    designation: "Project Manager",
    userImage: "/images/testimonial-elena.png",
    companyIcon: null,
    content: (
      <p>
        The software solutions provided by InTec are both{" "}
        <Highlight>secure and scalable</Highlight>. They truly understand our business needs and turn 
        complex challenges into seamless workflows.
      </p>
    ),
  },
  {
    id: 2,
    name: "Marko Velkovski",
    designation: "Operations Director",
    userImage: "/images/testimonial-marko.png",
    companyIcon: null,
    content: (
      <p>
        Reliability is key in our industry. One call to InTec and a{" "}
        <Highlight>certified technician is always ready</Highlight> to assist. Their 
        proactive maintenance keeps our operations running 100%.
      </p>
    ),
  },
  {
    id: 3,
    name: "Ivana Stojkovska",
    designation: "HR & Admin Lead",
    userImage: "/images/testimonial-ivana.png",
    companyIcon: null,
    content: (
      <p>
        Their consultancy services helped us improve our strategy and{" "}
        <Highlight>boosted our efficiency</Highlight>. They are not just a supplier; they are 
        trusted advisors in the IT space.
      </p>
    ),
  },
];

type Card = {
  id: number;
  name: string;
  designation: string;
  userImage: string;
  companyIcon: React.ComponentType<{ className?: string }> | null;
  content: React.ReactNode;
};

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/card-stack.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const startFlipping = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  }, []);

  useEffect(() => {
    startFlipping();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startFlipping]);

  return (
    <div className="relative h-[280px] w-full md:h-64">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-full w-full flex-col justify-between rounded-md border border-neutral-200 bg-white p-6 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05] md:p-8"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.3,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div className="flex items-center gap-2">
              <Avatar key={index} className="size-12">
                <AvatarImage src={card.userImage} alt={card.name} />
              </Avatar>
              <div>
                <p className="font-medium">{card.name}</p>
                <p className="text-muted-foreground/80">{card.designation}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
