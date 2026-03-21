"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Navbar14 } from "@/components/navbar14";
import { SOLUTIONS_DATA } from "@/lib/services-data";

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

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-1 flex flex-col">
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-[1100px] px-6">
            <div className="space-y-16">
              {/* Header — matches About page hero styling */}
              <div className="mx-auto max-w-4xl text-left md:text-center">
                <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl lg:text-5xl">
                  Our Solutions
                </h1>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed text-left md:text-center">
                  Enterprise-grade technology solutions designed to protect, secure 
                  and modernize your business infrastructure.
                </p>
              </div>

              {/* Cards grid — matches Services10 home page card design */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {SOLUTIONS_DATA.map((solution, index) => (
                  <TiltCard
                    key={index}
                    className="relative overflow-hidden rounded-md border border-border bg-background/80 p-8 backdrop-blur-sm"
                  >
                    <div className="flex h-full flex-col items-start justify-between gap-4 text-left">
                      <div className="w-full">
                        <div className="text-primary">
                          <solution.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">
                          {solution.title}
                        </h3>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                          {solution.shortDescription}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="group mt-2 flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight"
                        asChild
                      >
                        <Link href={`/solutions/${solution.slug}`}>
                          <span>Read more</span>
                          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                        </Link>
                      </Button>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
