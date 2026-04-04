"use client";

import { type SVGProps, useId } from "react";
import {
  Users
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface About8Props {
  className?: string;
}

const About8 = ({ className }: About8Props) => {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      {/* About Company Hero */}
      <div className="container mx-auto max-w-6xl mb-12 md:mb-16">
        <div className="flex flex-col items-start justify-start text-left">
          <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl lg:text-5xl">
            About Company
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Established in 2002, InTec System provides latest IT equipment and solutions
            in Macedonia and region, from world leading IT companies. The aim of InTec
            System is to distribute, implement and integrate only the top A-Brands of
            the IT industry, followed by assured quality service support that brings
            the relations with our customers to a level of partnership.
          </p>
        </div>
      </div>

      {/* Why Us? Stats Section */}
      <div className="container mx-auto max-w-6xl border-y py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-left">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              21+
            </h3>
            <p className="mt-2 font-medium text-muted-foreground uppercase text-xs">Years of business</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              40+
            </h3>
            <p className="mt-2 font-medium text-muted-foreground uppercase text-xs">Professionals in our team</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              200+
            </h3>
            <p className="mt-2 font-medium text-muted-foreground uppercase text-xs">Successful projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              24/7
            </h3>
            <p className="mt-2 font-medium text-muted-foreground uppercase text-xs">Full customer support</p>
          </div>
        </div>
        <div className="mt-12 max-w-4xl space-y-6 text-left">
          <p className="text-base text-muted-foreground leading-relaxed">
            We know that well selected and implemented solutions will optimize your
            business and improve your productivity, whatever industry you operate in.
            By distributing, implementing and integrating the latest IT equipment and
            solutions from world leading IT vendors that we have relations with, we
            enable our partners a broad selection of programs and services.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We have concentrated long time experience, substantial knowledge, practical
            skills and enormous potential to be able, together with our partners, to
            satisfy all the requirements and needs of the IT market by providing our
            partners and customers with next generation of enterprise solutions.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto max-w-6xl py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our Mission</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              At InTec System we collaborate with our clients, bringing together business
              insight, significant experience and technology to provide a distinct
              advantage in today’s rapidly changing business environment. Through our
              integrated approach to problem solving, solution design and execution
              we help turn our customer’s strategies into action.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed italic border-l-4 pl-6 border-primary/20">
              With over 20 years’ experience our mission is to help our customers to
              anticipate change and profit from new opportunities. The result of that
              experience and knowledge is a reputation for being trusted advisors.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/mission-team.png"
              alt="InTec System team collaborating on IT solutions"
              className="object-cover h-[400px] w-full rounded-md shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="/images/vision-datacenter.png"
                alt="Modern data center representing InTec System's vision for digital transformation"
                className="object-cover h-[450px] w-full rounded-md shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-right lg:text-left">Our Vision</h2>
              <p className="text-base text-muted-foreground leading-relaxed text-right lg:text-left">
                Change never stops. We are at the dawn of the digital age and innovation
                is moving faster than before. Whether you work in manufacturing,
                finance, retail, politics or the service industry – the environment
                is constantly evolving.
              </p>
              <p className="text-base font-medium tracking-tight md:text-lg text-right lg:text-left">
                Our vision is to be recognized as one of the preferred solution providers
                of innovative, creative, cutting-edge and high-impact solutions within
                the business, corporate and government sectors in region.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export { About8 };
