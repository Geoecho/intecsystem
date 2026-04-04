"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cloud, LifeBuoy, ShieldCheck, Wrench, Briefcase, FileText, RefreshCw,
  FileSearch, Search, Code, BookOpen, HardDrive, Database, Headset,
  Leaf, Lock, FolderArchive, HardHat,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

const ICON_MAP: Record<string, LucideIcon> = {
  Cloud, LifeBuoy, ShieldCheck, Wrench, Briefcase, FileText, RefreshCw,
  FileSearch, Search, Code, BookOpen, HardDrive, Database, Headset,
  CheckCircle2, Leaf, Lock, FolderArchive, HardHat,
};

interface Service6Props {
  service: {
    title: string;
    description: string;
    iconName?: string;
    expertise: { id: number; title: string; description: string }[];
    detailedContent: string;
    items: string[];
  };
  backHref?: string;
  backLabel?: string;
  className?: string;
}

const Service6 = ({ service, backHref = "/services", backLabel = "Back to Services", className }: Service6Props) => {
  const Icon = (service.iconName && ICON_MAP[service.iconName]) || CheckCircle2;

  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <FadeIn>
          <div className="mb-12">
            <Button variant="ghost" asChild className="group -ml-4">
              <Link href={backHref} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {backLabel}
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Icon and Intro */}
        <FadeIn>
          <div className="mb-16 space-y-8 text-left">
            <div className="flex justify-start">
              <div className="text-primary">
                <Icon className="h-10 w-10" />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Key Capabilities */}
        <FadeIn>
          <div className="mb-20">
            <h2 className="mb-10 text-left text-2xl font-semibold tracking-tight md:text-3xl">
              Key Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-transparent hover:border-primary/20 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Main Content */}
        <FadeIn>
          <div className="mb-20">
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed mb-12"
              dangerouslySetInnerHTML={{ __html: service.detailedContent }}
            />
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <div className="rounded-2xl bg-primary p-8 md:p-12 text-left text-primary-foreground shadow-xl">
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight">Need a customized solution?</h2>
            <p className="mb-10 text-lg opacity-90">
              Our experts are ready to help you implement the perfect strategy for your business.
            </p>
            <Button variant="secondary" asChild className="group flex h-12 w-full md:w-auto items-center justify-center gap-2 rounded-md px-8 text-base tracking-tight">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { Service6 };
