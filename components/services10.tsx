"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateY = ((x - cx) / cx) * 8;
    const rotateX = -((y - cy) / cy) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
};

interface Services10Props {
  className?: string;
}

const Services10 = ({ className }: Services10Props) => {
  const isMobile = useIsMobile();
  const services = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "SecurePlus Fraud Shield",
      description:
        "Your strongest defense against modern financial fraud.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Cyber Security Solutions",
      description:
        "Establishing secure frameworks for increased network sensitivity and visibility.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Hyper-Converged Infrastructure Solutions",
      description:
        "Software-centric architecture that integrates compute, storage, networking and virtualization of resources",
    },
  ];

  return (
    <section className={cn("relative overflow-hidden py-20 md:py-32", className)}>
      <div className="relative z-20 mx-auto max-w-[1100px] px-6">
        <div className="relative space-y-16">
          <div className="relative space-y-4 text-left">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              World-class digital solutions tailored to your specific business needs and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <TiltCard
                key={index}
                className="relative overflow-hidden rounded-md border border-border bg-background/80 p-8 backdrop-blur-sm"
              >
                <div className="flex h-full flex-col items-start justify-between gap-4 text-left">
                  <div className="w-full">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="group mt-2 flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight"
                    asChild
                  >
                    <a href="/contact">
                      <span>Read more</span>
                      <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                    </a>
                  </Button>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services10 };
