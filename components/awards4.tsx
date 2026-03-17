import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Headset,
  Lock,
  FolderArchive,
  HardHat,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Awards4Props {
  className?: string;
}

const certifications = [
  {
    standard: "ISO 9001:2015",
    name: "Quality Management",
    description: "Ensuring consistent product and service quality through systematic process management.",
    icon: CheckCircle2,
  },
  {
    standard: "ISO 14001:2015",
    name: "Environmental Management",
    description: "Minimizing environmental impact through measurable sustainable business practices.",
    icon: Leaf,
  },
  {
    standard: "ISO 20000:2011",
    name: "IT Service Management",
    description: "Delivering managed IT services that meet rigorous international industry standards.",
    icon: Headset,
  },
  {
    standard: "ISO 27001:2013",
    name: "Information Security",
    description: "Protecting client data and organizational assets through robust security controls.",
    icon: Lock,
  },
  {
    standard: "ISO 30301:2019",
    name: "Records Management",
    description: "Managing organizational records with precision, integrity, and full traceability.",
    icon: FolderArchive,
  },
  {
    standard: "ISO 45001:2018",
    name: "Occupational Health & Safety",
    description: "Safeguarding the well-being of our people with industry-leading safety standards.",
    icon: HardHat,
  },
];

const Awards4 = ({ className }: Awards4Props) => {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-32", className)}>
      <div className="relative z-20 mx-auto max-w-[1100px] px-6">
        <div className="relative space-y-16">
        <div className="relative flex flex-col gap-4 text-right items-end">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Certified through{" "}
            <span className="font-semibold text-foreground">TÜV NORD</span>{" "}
            across six international ISO standards.
          </p>
        </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-md border border-border bg-background/80 p-8 backdrop-blur-sm"
                >
                  <div className="flex h-full flex-col items-start justify-between gap-4 text-left">
                    <div className="w-full">
                      <div className="text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="mt-4 text-xs font-semibold text-muted-foreground">
                        {cert.standard}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">
                        {cert.name}
                      </h3>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="group mt-2 flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight"
                      asChild
                    >
                      <a href="/services">
                        <span>Read more</span>
                        <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Awards4 };
