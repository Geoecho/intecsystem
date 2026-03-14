"use client";

import {
  Briefcase,
  Cloud,
  Code,
  Database,
  FileCode,
  FileText,
  LifeBuoy,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Services8Props {
  className?: string;
}

const CATEGORIES = ["All", "Consultancy", "Document Management", "IT Services"] as const;
type Category = (typeof CATEGORIES)[number];

const Services8 = ({ className }: Services8Props) => {
  const [activeCategory, setActiveCategory] = useState<Category>("Consultancy");

  const services = [
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Hybrid IT and Cloud Services",
      shortDescription: "Seamlessly blend private and public cloud",
      description:
        "Hybrid IT seamlessly blends private, public and managed cloud with existing on-premises IT, to improve business agility, accessibility and deliver better business outcomes. All of our cloud solutions are designed to be scalable and secure.",
      category: "IT Services",
    },
    {
      icon: <LifeBuoy className="h-5 w-5" />,
      title: "IT Support Services",
      shortDescription: "Certified maintenance and equipment uptime",
      description:
        "InTec System offers a wide variety of maintenance service options to help you extend your equipment uptime. One call will bring a certified service technician to your site to resolve hardware and software issues efficiently.",
      category: "IT Services",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "IT Security Services",
      shortDescription: "Protection for disruptive technologies",
      description:
        "The proliferation of disruptive technologies like mobile, social, cloud and big data has been increasingly impacting protection strategies. These technologies will continue to add to the complexity of securing your business assets.",
      category: "IT Services",
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "IT Implementation Services",
      shortDescription: "Connect systems into a cohesive body",
      description:
        "Intec System IT Integration Services aims to connect various IT systems, hardware and software into one cohesive and well-functioning body. The goal of IT integration is to ensure that all components work together seamlessly.",
      category: "IT Services",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "IT Consultancy",
      shortDescription: "Improve strategy and boost shareholder value",
      description:
        "InTec System partners with clients to help them improve their strategy and operations, with goal of increasing shareholder value and corporate earnings. Each project is tailored to the specific needs of the business.",
      category: "Consultancy",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Document Management Services",
      shortDescription: "Transition from paperwork to paperless",
      description:
        "Intec System offer a one stop shop for organizations to make the transition from paperwork to paperless easily. Our document management services include system design, implementation, and ongoing support.",
      category: "Document Management",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Workflow Automation Services",
      shortDescription: "Optimize operations and data availability",
      description:
        "Managing your business operations depends on many different workflows. Data needs to be available to the right people, approvals and reviews need to be done efficiently to maintain high productivity.",
      category: "IT Services",
    },
    {
      icon: <FileCode className="h-5 w-5" />,
      title: "Suscriptor Portfolio Development",
      shortDescription: "Custom expertise and development",
      description:
        "We've poured nearly 10 years of daily work into Suscriptor's development. With so much hands-on experience and expertise, we can develop and customize your requirements according to your specific business model.",
      category: "IT Services",
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Business Analysis Services",
      shortDescription: "Aligning business and IT closer together",
      description:
        "Our business analysis services are designed to bring business and IT even closer together. Our business analysts (BAs) are experts at identifying and understanding your business needs and translating them into technical solutions.",
      category: "Consultancy",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Custom Software Development Services",
      shortDescription: "Bespoke software with less stress and cost",
      description:
        "We offer custom software development and consulting services to help you pull off your next project with less stress and less cost. Our team has the expertise to build robust applications from the ground up.",
      category: "IT Services",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Digitalization Services",
      shortDescription: "Secure back up of hard copy information",
      description:
        "While almost every organization backs up its electronic data, few entities “back up” the information that is retained in hard copy. Customers who require document digitalization can rely on our secure processes.",
      category: "Document Management",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Backup and Disaster Recovery",
      shortDescription: "Advance arrangements for business continuity",
      description:
        "Backup and Disaster Recovery planning is the process of developing advance arrangements and procedures that enable an organization to respond to a disaster by resuming critical business functions quickly.",
      category: "IT Services",
    },
  ];

  const filteredServices = services.filter(
    (service) => activeCategory === "All" || service.category === activeCategory,
  );

  return (
    <section className={cn("py-32", className)}>
      <div className="container w-full">
        <div className="mx-auto w-full max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="text-lg tracking-tight text-muted-foreground md:text-xl">
              Discover how we can transform your business with our specialized IT solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {filteredServices.map((service, index) => (
              <AccordionItem
                key={service.title}
                value={`item-${index}`}
                className="overflow-hidden rounded-xl border border-border shadow-sm transition-all duration-200 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-6 py-6 hover:bg-muted/30 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold leading-none">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-muted/5 p-6 pt-0">
                  <div className="rounded-lg border-t border-border pt-6">
                    <p className="text-base leading-relaxed text-muted-foreground/90">
                      {service.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Services8 };
