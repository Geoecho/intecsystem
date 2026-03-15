import React from "react";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";

interface Feature254Props {
  className?: string;
}

const Feature254 = ({ className }: Feature254Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="relative">
        <div className="flex w-full items-center justify-center">
            <div className="relative flex h-[620px] w-full flex-col items-center justify-center overflow-hidden">
              <OrbitingCircles iconSize={120} radius={140} speed={1.5}>
                <StatCard value="21+" label="years of business" />
              </OrbitingCircles>
              
              <OrbitingCircles iconSize={120} radius={220} reverse speed={1.2}>
                <StatCard value="40+" label="professionals" />
              </OrbitingCircles>
              
              <OrbitingCircles iconSize={120} radius={300} speed={1}>
                <StatCard value="200+" label="projects" />
                <StatCard value="24/7" label="support" />
              </OrbitingCircles>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center size-28 rounded-full bg-background/90 shadow-[0_0_20px_4px_hsl(var(--primary)/0.15)] p-4 text-center">
    <span className="text-xl font-semibold tracking-tight text-primary">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-muted-foreground leading-tight mt-1">{label}</span>
  </div>
);

export { Feature254 };
