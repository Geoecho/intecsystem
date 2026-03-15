"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DataItem {
  key: number;
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

const DATA: DataItem[] = [
  { key: 1, src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", alt: "IBM", href: "https://www.ibm.com", width: 140, height: 56 },
  { key: 2, src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Dell_Technologies_logo.svg", alt: "Dell Technologies", href: "https://www.dell.com", width: 140, height: 56 },
  { key: 3, src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft", href: "https://www.microsoft.com", width: 140, height: 56 },
  { key: 4, src: "https://cdn.simpleicons.org/cisco", alt: "Cisco", href: "https://www.cisco.com", width: 140, height: 56 },
  { key: 5, src: "https://upload.wikimedia.org/wikipedia/fr/4/4e/Logo_Thales.svg", alt: "Thales", href: "https://www.thalesgroup.com", width: 140, height: 56 },
  { key: 6, src: "https://cdn.simpleicons.org/vmware", alt: "VMware", href: "https://www.vmware.com", width: 140, height: 56 },
  { key: 7, src: "https://upload.wikimedia.org/wikipedia/commons/3/33/SentinelOne_logo.svg", alt: "SentinelOne", href: "https://www.sentinelone.com", width: 140, height: 56 },
];

interface Integration2Props {
  className?: string;
}

const Integration2 = ({ className }: Integration2Props) => {
  return (
    <section className={cn("py-32 w-full overflow-hidden", className)}>
      <div className="mx-auto max-w-[1100px] px-6 overflow-hidden">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center px-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Trusted by Leading Technology Partners
          </h2>
          <p className="text-xl text-muted-foreground lg:-mt-1 break-words">
            Working alongside industry leaders to deliver reliable infrastructure, security, and IT solutions.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative my-20 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-20 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-20 after:bg-linear-to-l after:from-background after:to-transparent">
          <div className="flex w-max animate-marquee gap-16 py-4">
            {/* First marquee group */}
            <div className="flex shrink-0 items-center gap-16">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={`marquee-1-${logo.key}`}
                  className="flex items-center justify-center h-16 w-40 px-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 w-auto object-contain transition-all duration-300 opacity-90 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
            {/* Second marquee group - clone for seamless loop */}
            <div className="flex shrink-0 items-center gap-16">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={`marquee-2-${logo.key}`}
                  className="flex items-center justify-center h-16 w-40 px-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 w-auto object-contain transition-all duration-300 opacity-90 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="group flex h-10 w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight"
          >
            <span>View all partners</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Integration2 };
