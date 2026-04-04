"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/lib/services-data";
import { FadeIn } from "@/components/fade-in";

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
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
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
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

interface Services4Props {
  className?: string;
}

const Services4 = ({ className }: Services4Props) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(SERVICES_DATA.map((s) => s.category)));
    return ["All", ...cats];
  }, []);

  const filteredServices = useMemo(() => {
    if (activeFilter === "All") return SERVICES_DATA;
    return SERVICES_DATA.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Header */}
          <FadeIn>
            <div className="max-w-4xl text-left">
              <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl lg:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed text-left">
                We provide professional IT solutions tailored to your business needs, 
                ensuring excellence and reliability in every project.
              </p>
            </div>
          </FadeIn>

          {/* Filter Chips */}
          <FadeIn>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "rounded-md border px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeFilter === cat
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          </FadeIn>

          {/* Cards grid */}
          <FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <TiltCard
                key={service.slug}
                className="relative overflow-hidden rounded-md border border-border bg-background/80 p-8 backdrop-blur-sm"
              >
                <div className="flex h-full flex-col items-start justify-between gap-4 text-left">
                  <div className="w-full">
                    <div className="text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="group mt-2 flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      <span>Read more</span>
                      <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                    </Link>
                  </Button>
                </div>
              </TiltCard>
            ))}
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { Services4 };
