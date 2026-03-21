"use client";

import {
  ArrowRight,
  Book,
  Briefcase,
  Cloud,
  Code,
  Database,
  FileCode,
  FileText,
  Globe,
  LifeBuoy,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
  Smartphone as PhoneIcon,
  ChevronRight,
  HardDrive,
  FileSearch,
  BookOpen,
  Search as SearchIcon,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
  icon: LucideIcon;
}

interface FeaturedContent {
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

interface MegaMenu {
  label: string;
  sections: MenuSection[];
  featured?: FeaturedContent;
}

interface Navbar14Props {
  logo?: {
    src: string;
    alt: string;
    href?: string;
    title?: string;
  };
  menus?: MegaMenu[];
  links?: { label: string; href: string }[];
  auth?: {
    login: { label: string; href: string };
    signup: { label: string; href: string };
  };
  className?: string;
}

const Navbar14 = ({
  logo = {
    src: "/images/logo.svg",
    alt: "InTec System",
    href: "/",
    title: "",
  },
  menus = [
    {
      label: "Services",
      sections: [
        {
          label: "Cloud & Support",
          items: [
            {
              title: "Hybrid IT and Cloud Services",
              description: "Seamlessly blend private and public cloud",
              href: "/services/hybrid-it",
              icon: Cloud,
            },
            {
              title: "IT Support Services",
              description: "Extend equipment uptime with technicians",
              href: "/services/it-support",
              icon: LifeBuoy,
            },
            {
              title: "IT Security Services",
              description: "Advanced protection for disruptive tech",
              href: "/services/it-security",
              icon: ShieldCheck,
            },
          ],
        },
        {
          label: "Implementation & Consultancy",
          items: [
            {
              title: "IT Implementation Services",
              description: "Connect hardware and software",
              href: "/services/it-implementation",
              icon: Wrench,
            },
            {
              title: "IT Consultancy",
              description: "Improve strategy and boost value",
              href: "/services/it-consultancy",
              icon: Briefcase,
            },
            {
              title: "Document Management Services",
              description: "Transition to paperless easily",
              href: "/services/document-management",
              icon: FileText,
            },
          ],
        },
        {
          label: "Automation & Dev",
          items: [
            {
              title: "Workflow Automation Services",
              description: "Optimize operations and data",
              href: "/services/workflow-automation",
              icon: RefreshCw,
            },
            {
              title: "Custom Software Development",
              description: "Bespoke solutions and continuity",
              href: "/services/custom-software",
              icon: Code,
            },
            {
              title: "Suscriptor Portfolio Development",
              description: "Document workflow automation",
              href: "/services/suscriptor",
              icon: FileSearch,
            },
          ],
        },
        {
          label: "Analysis & Recovery",
          items: [
            {
              title: "Business Analysis Services",
              description: "Align business goals to IT",
              href: "/services/business-analysis",
              icon: Search,
            },
            {
              title: "Digitalization Services",
              description: "Document conversion at scale",
              href: "/services/digitalization",
              icon: BookOpen,
            },
            {
              title: "Backup and Disaster Recovery",
              description: "Business continuity planning",
              href: "/services/backup-recovery",
              icon: HardDrive,
            },
          ],
        },
        {
          label: "Discovery",
          items: [
            {
              title: "View All Services",
              description: "Explore our full range of enterprise offerings",
              href: "/services",
              icon: Globe,
            },
          ],
        },
      ],
    },
    {
      label: "Solutions",
      sections: [
        {
          label: "Core Solutions",
          items: [
            {
              title: "SecurePlus Fraud Shield",
              description: "Your strongest defense against modern financial fraud",
              href: "/solutions/secureplus",
              icon: ShieldCheck,
            },
            {
              title: "Cyber Security Solutions",
              description: "Establishing secure frameworks for increased network sensitivity and visibility",
              href: "/solutions/cyber-security",
              icon: ShieldCheck,
            },
            {
              title: "Hyper-Converged Infrastructure Solutions",
              description: "Software-centric architecture that integrates compute, storage, networking and virtualization",
              href: "/solutions/hci",
              icon: Database,
            },
          ],
        },
      ],
    },
    {
      label: "Company",
      sections: [
        {
          label: "Information",
          items: [
            {
              title: "About Us",
              description: "Learn more about our mission",
              icon: Users,
              href: "/about",
            },
            {
              title: "News & Events",
              description: "Latest updates and announcements",
              icon: FileText,
              href: "/news",
            },
          ],
        },
      ],
    },
  ],
  links = [
    { label: "Partners", href: "/partners" },
  ],
  auth = {
    login: { label: "", href: "" },
    signup: { label: "Contact Us", href: "/contact" },
  },
  className,
}: Navbar14Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasDescription = (items: MenuItem[]) =>
    items.some((item) => item.description);

  return (
    <section
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background lg:border-b",
        isOpen && "h-dvh flex flex-col border-b-0",
        className,
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-9 lg:flex-1">
            <a href={logo.href} className="flex items-center gap-2">
              <img src={logo.src} alt={logo.alt} className="h-8 dark:invert" />
              {logo.title && (
                <span className="text-lg font-semibold">{logo.title}</span>
              )}
            </a>
          </div>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menus.map((menu) => (
                  <NavigationMenuItem key={menu.label}>
                    <NavigationMenuTrigger>
                      {menu.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 border border-border rounded-lg bg-popover shadow-lg">
                      <div className={cn("flex", menu.sections.length > 2 ? "w-full lg:w-[800px]" : "w-full lg:w-[400px]")}>
                        <div className={cn("p-6 grid w-full gap-x-12 gap-y-8", menu.sections.length > 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
                          {menu.sections
                            .filter((s) => hasDescription(s.items))
                            .map((section, i) => (
                              <div key={section.label} className="flex flex-col gap-3">
                                <p className="text-[10px] font-bold text-primary/80 uppercase tracking-widest">
                                  {section.label}
                                </p>
                                <div className="flex flex-col gap-4">
                                  {section.items.map((item) => (
                                    <NavigationMenuLink
                                      key={item.title}
                                      asChild
                                    >
                                      <a
                                        href={item.href}
                                        className="group flex cursor-pointer flex-row gap-3 transition-colors hover:text-primary"
                                      >
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted/50 transition-colors group-hover:bg-primary/10">
                                          <item.icon className="size-5 text-primary" />
                                        </span>
                                        <div className="flex flex-col min-w-0">
                                          <span className="flex items-center gap-0.5 text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                                            {item.title}
                                            <ChevronRight className="size-4 text-primary opacity-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                          </span>
                                          {item.description && (
                                            <p className="text-xs text-muted-foreground line-clamp-1 break-words">
                                              {item.description}
                                            </p>
                                          )}
                                        </div>
                                      </a>
                                    </NavigationMenuLink>
                                  ))}
                                </div>
                              </div>
                            ))}
                        </div>
                        {menu.sections.some((s) => !hasDescription(s.items)) && (
                          <>
                            <Separator
                              orientation="vertical"
                              className="data-[orientation=vertical]:h-auto"
                            />
                            <div className="p-4">
                              {menu.sections
                                .filter((s) => !hasDescription(s.items))
                                .map((section, i) => (
                                  <div key={section.label}>
                                    <p className={cn("mb-3 text-[10px] text-muted-foreground uppercase", i > 0 && "mt-5")}>
                                      {section.label}
                                    </p>
                                    <div>
                                      {section.items.map((item) => (
                                        <NavigationMenuLink
                                          key={item.title}
                                          asChild
                                        >
                                          <a
                                            href={item.href}
                                            className="flex flex-row items-center gap-3"
                                          >
                                            <item.icon className="size-4!" />
                                            <span className="text-sm font-medium whitespace-nowrap">
                                              {item.title}
                                            </span>
                                          </a>
                                        </NavigationMenuLink>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </>
                        )}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                {links.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <a href={link.href}>{link.label}</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              {auth.login.label && (
                <Button variant="outline" asChild>
                  <a href={auth.login.href}>{auth.login.label}</a>
                </Button>
              )}
              <Button className="group flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight" asChild>
                <a href={auth.signup.href}>
                  <span>Contact Us</span>
                  <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                </a>
              </Button>
            </div>

            <button
              className="flex size-10 items-center justify-center rounded-md border lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex w-3.5 flex-col gap-1">
                <span
                  className={cn(
                    "h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300",
                    isOpen && "translate-y-[5.5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300",
                    isOpen && "scale-x-0 opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300",
                    isOpen && "-translate-y-[5.5px] -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="flex min-h-0 flex-1 animate-in flex-col overflow-y-auto border-t bg-background duration-200 fade-in slide-in-from-top-2 lg:hidden">
          <Accordion type="single" collapsible className="w-full">
            {menus.map((menu) => (
              <AccordionItem
                key={menu.label}
                value={menu.label}
                className="border-b"
              >
                <AccordionTrigger className="container mx-auto items-center pr-10 text-base font-medium hover:no-underline">
                  {menu.label}
                </AccordionTrigger>
                <AccordionContent className="container mx-auto [&_a]:no-underline">
                  <div className="space-y-5">
                    {menu.sections.map((section, i) => (
                      <div key={section.label}>
                        {i > 0 && <Separator className="mb-5" />}
                        <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                          {section.label}
                        </p>
                        <div className="space-y-5">
                          {section.items.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className={cn(
                                "flex cursor-pointer flex-row gap-3 rounded-md transition-colors",
                                !item.description && "items-center",
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.description ? (
                                <>
                                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                                    <item.icon className="size-4" />
                                  </span>
                                  <div className="flex min-w-0 flex-col">
                                    <span className="text-sm leading-tight font-medium">
                                      {item.title}
                                    </span>
                                    <p className="text-xs leading-tight text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <item.icon className="size-4" />
                                  <span className="text-sm font-medium">
                                    {item.title}
                                  </span>
                                </>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    {menu.featured && (
                      <>
                        <Separator />
                        <div>
                          <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                            Latest Updates
                          </p>
                          <a
                            href={menu.featured.href}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="rounded-lg bg-primary p-3">
                              <img
                                src={menu.featured.image.src}
                                alt={menu.featured.image.alt}
                                className="aspect-video w-full rounded-md object-cover"
                              />
                            </div>
                          </a>
                          <div className="mt-2 flex flex-col gap-1 px-1">
                            <span className="text-xs font-medium">
                              {menu.featured.title}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {menu.featured.description}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block border-b border-border py-4 text-base font-medium transition-colors"
            >
              <span className="container mx-auto block">{link.label}</span>
            </a>
          ))}

          <div className="container mx-auto mt-auto flex flex-col gap-2 py-8">
            {auth.login.label && (
              <Button variant="outline" className="w-full" asChild>
                <a href={auth.login.href}>{auth.login.label}</a>
              </Button>
            )}
            {/* Mobile CTA removed per request */}
          </div>
        </div>
      )}
    </section>
  );
};

export { Navbar14 };
