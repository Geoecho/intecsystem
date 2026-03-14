"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

const features = [
  {
    number: "01",
    title: "Consultancy",
    description:
      "Strategic IT consulting to help you navigate through complex digital transformations and infrastructure optimizations.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    imageOrder: "order-1",
    contentOrder: "order-2",
  },
  {
    number: "02",
    title: "Document Management",
    description:
      "Efficiently capture, store, and manage your documents with our state-of-the-art DMS solutions, ensuring security and compliance.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    imageOrder: "order-2",
    contentOrder: "order-1",
  },
  {
    number: "03",
    title: "IT Services",
    description:
      "Comprehensive IT support, managed services, and infrastructure maintenance to keep your business running smoothly 24/7.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    imageOrder: "order-1",
    contentOrder: "order-2",
  },
];

const Feature270 = () => {
  return (
    <section className="w-screen overflow-hidden py-32">
      <div className="relative container px-6 md:px-12 overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-4 text-center px-4 mb-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Our Core Expertise
          </h2>
          <p className="text-xl text-muted-foreground lg:-mt-1 break-words">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="relative grid h-[120rem] items-center justify-between gap-3 md:h-[85rem] md:grid-cols-2 lg:h-[48rem] lg:grid-cols-3">
          {features.map((feature, index) => (
            <PinContainer
              key={index}
              title="Explore Details"
              href="/services"
              className="w-full rounded-3xl !bg-muted/70 p-4"
            >
              <div className="flex flex-col">
                <div className={feature.imageOrder}>
                  <img
                    src={feature.image}
                    height="1000"
                    width="1000"
                    className="h-70 w-full rounded-3xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </div>
                <div className={`mt-4 w-full p-3 ${feature.contentOrder}`}>
                  <p className="leading-none tracking-tighter opacity-50">
                    {feature.number}
                  </p>
                  <h2 className="my-3 text-3xl leading-none font-semibold tracking-tighter">
                    {feature.title}
                  </h2>
                  <p className="leading-5 opacity-50">{feature.description}</p>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature270 };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/3d-pin.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)",
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "group/pin relative z-50 cursor-pointer",
        containerClassName,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] w-full -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute top-1/2 left-1/2 flex w-full items-start justify-start overflow-hidden rounded-2xl transition duration-700"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} />
    </a>
  );
};

export const PinPerspective = ({
  title,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none z-[60] flex h-80 w-[95vw] md:w-96 items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
      <div className="inset-0 -mt-7 h-full w-full flex-none">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="group/btn relative z-10 flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-4 py-1 tracking-tight text-primary-foreground shadow-lg transition-all duration-200">
            <span className="relative z-20 inline-block text-xs font-bold">
              {title}
            </span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover/pin:ml-3 group-hover/pin:rotate-0" />

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/pin:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute top-1/2 left-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-emerald-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute top-1/2 left-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-emerald-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute top-1/2 left-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-emerald-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-emerald-500 blur-[2px] group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-emerald-500 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-emerald-600 blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-emerald-300" />
        </>
      </div>
    </motion.div>
  );
};
