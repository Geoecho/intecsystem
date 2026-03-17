"use client";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Book,
  Briefcase,
  Cloud,
  Code,
  Database,
  FileCode,
  FileText,
  Gift,
  Globe,
  Heart,
  HelpCircle,
  Layout,
  LifeBuoy,
  MenuIcon,
  Monitor,
  Paintbrush,
  RefreshCw,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Fragment, useEffect, useState } from "react";

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
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuLink {
  label: string;
  description?: string;
  url: string;
  icon: LucideIcon;
}

interface MenuGroup {
  title: string;
  links: MenuLink[];
}

interface MenuItem {
  title: string;
  url?: string;
  groups?: MenuGroup[];
}

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

interface MobileNavigationMenuProps {
  open: boolean;
}

const LOGO = {
  url: "/",
  src: "/images/logo.svg",
  alt: "InTec System",
};

const NAVIGATION: MenuItem[] = [
  {
    title: "Solutions",
    url: "/solutions",
  },
  {
    title: "Services",
    groups: [
      {
        title: "Cloud & Support",
        links: [
          {
            label: "Hybrid IT and Cloud Services",
            icon: Cloud,
            description: "Seamlessly blend private and public cloud",
            url: "/services/hybrid-it",
          },
          {
            label: "IT Support Services",
            icon: LifeBuoy,
            description: "Extend equipment uptime with certified technicians",
            url: "/services/it-support",
          },
          {
            label: "IT Security Services",
            icon: ShieldCheck,
            description: "Advanced protection for disruptive technologies",
            url: "/services/it-security",
          },
        ],
      },
      {
        title: "Implementation & Consultancy",
        links: [
          {
            label: "IT Implementation Services",
            icon: Wrench,
            description: "Connect hardware and software into one cohesive body",
            url: "/services/it-implementation",
          },
          {
            label: "IT Consultancy",
            icon: Briefcase,
            description: "Improve strategy and boost shareholder value",
            url: "/services/it-consultancy",
          },
          {
            label: "Document Management Services",
            icon: FileText,
            description: "Transition from paperwork to paperless easily",
            url: "/services/document-management",
          },
        ],
      },
      {
        title: "Automation & Dev",
        links: [
          {
            label: "Workflow Automation Services",
            icon: RefreshCw,
            description: "Optimize operations and data availability",
            url: "/services/workflow-automation",
          },
          {
            label: "Suscriptor Portfolio Development",
            icon: FileCode,
            description: "Hands-on expertise for custom requirements",
            url: "/services/suscriptor",
          },
          {
            label: "Business Analysis Services",
            icon: Search,
            description: "Bring business and IT closer together",
            url: "/services/business-analysis",
          },
        ],
      },
      {
        title: "Software & recovery",
        links: [
          {
            label: "Custom Software Development",
            icon: Code,
            description: "Bespoke solutions with less stress and cost",
            url: "/services/custom-software",
          },
          {
            label: "Digitalization Services",
            icon: Smartphone,
            description: "Back up hard copy information securely",
            url: "/services/digitalization",
          },
          {
            label: "Backup and Disaster Recovery",
            icon: Database,
            description: "Arrangements to ensure business continuity",
            url: "/services/disaster-recovery",
          },
        ],
      },
    ],
  },
  {
    title: "Partners",
    url: "/partners",
  },
  {
    title: "Company",
    groups: [
      {
        title: "About",
        links: [
          {
            label: "About Us",
            icon: Users,
            description: "Learn more about our mission and team",
            url: "/about",
          },
          {
            label: "News",
            icon: Book,
            description: "Latest updates and announcements",
            url: "/news",
          },
          {
            label: "Events",
            icon: Globe,
            description: "Upcoming industry events and webinars",
            url: "/events",
          },
          {
            label: "Contacts",
            icon: Smartphone,
            description: "Get in touch with us",
            url: "/contact",
          },
        ],
      },
    ],
  },
];

const DESKTOP_BUTTONS = [
  {
    label: "Contact Us",
    isPrimary: true,
    url: "/contact",
  },
];

const MOBILE_BUTTONS: { label: string; isPrimary: boolean; url: string }[] = [];

const MOBILE_BREAKPOINT = 1024;

interface Navbar11Props {
  className?: string;
}

const Navbar11 = ({ className }: Navbar11Props) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <Fragment>
      <section
        className={cn(
          "pointer-events-auto fixed top-0 z-999 flex h-16 w-full items-center justify-center bg-background",
          className,
        )}
      >
        <div className="w-full px-4 md:px-12">
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-1 items-center">
              <a
                href={LOGO.url}
                className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter"
              >
                <img
                  src={LOGO.src}
                  alt={LOGO.alt}
                  className="inline-block h-8 w-8"
                />
                <span className="hidden md:inline-block">{LOGO.title}</span>
              </a>
            </div>

            <NavigationMenu className="hidden flex-1 justify-center xl:flex">
              <NavigationMenuList>
                {NAVIGATION.map((item, index) => (
                  <DesktopMenuItem
                    key={`desktop-link-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden flex-1 items-center justify-end gap-3 xl:flex">
              {DESKTOP_BUTTONS.map((btn, index) => (
                <Button
                  variant={!btn.isPrimary ? "secondary" : "default"}
                  className="group flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight"
                  asChild
                  key={`navbar-btn-${index}`}
                >
                  <a href="/contact">
                    Contact Us
                    <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="xl:hidden">
              <Button
                className="size-11"
                variant="ghost"
                onClick={handleMobileMenu}
              >
                {open ? (
                  <X className="size-5.5 stroke-foreground" />
                ) : (
                  <MenuIcon className="size-5.5 stroke-foreground" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <MobileNavigationMenu open={open} />
    </Fragment>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  const [activeGroup, setActiveGroup] = useState(0);

  if (item.groups) {
    const isHierarchical = item.title === "Services";

    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="h-fit bg-transparent px-2.5 font-normal text-muted-foreground">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-xl !border !p-0">
          {isHierarchical ? (
            <div className="flex bg-background" style={{ width: 600 }}>
              {/* Left Sidebar: Categories */}
              <div className="w-1/3 border-r bg-muted/20 p-2">
                <ul className="flex flex-col gap-1">
                  {item.groups.map((group, gIdx) => (
                    <li key={`cat-${gIdx}`}>
                      <button
                        onMouseEnter={() => setActiveGroup(gIdx)}
                        className={cn(
                          "w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                          activeGroup === gIdx
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {group.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Offers */}
              <div className="flex-1 p-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {item.groups[activeGroup]?.title} Offers
                </div>
                <ul className="grid grid-cols-1 gap-2">
                  {item.groups[activeGroup]?.links.map((link, lIdx) => (
                    <li key={`offer-${lIdx}`}>
                      <NavigationMenuLink asChild>
                        <a
                          href={link.url}
                          className="group/link flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                        >
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background duration-200 group-hover/link:border-primary/30">
                            <link.icon className="size-4.5 transition-colors group-hover/link:text-primary" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="text-sm font-semibold text-foreground">
                              {link.label}
                            </div>
                            <div className="text-xs text-muted-foreground line-clamp-1">
                              {link.description}
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <ul className="flex p-2" style={{ width: item.groups.length * 248 }}>
              {item.groups.map((group, index1) => (
                <li className="flex-1" key={`desktop-group-${index1}`}>
                  <ul>
                    <li className="px-3 py-2 text-sm leading-normal text-muted-foreground">
                      {group.title}
                    </li>
                    {group.links.map((link, index2) => (
                      <li key={`desktop-links-${index1}-${index2}`}>
                        <NavigationMenuLink
                          asChild
                          className="group/link flex-row gap-2 px-3 py-2 transition-colors duration-200"
                        >
                          <a href={link.url}>
                            <div className="flex size-8 shrink-0 rounded-lg border duration-400 fade-in group-hover/link:bg-background">
                              <link.icon className="m-auto size-4 group-hover/link:stroke-black" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                              <div className="text-sm font-medium">
                                {link.label}
                              </div>
                              <div className="text-xs text-muted-foreground group-hover/link:text-foreground">
                                {link.description}
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
      <NavigationMenuLink
        href={item.url}
        className={`${navigationMenuTriggerStyle()} h-fit bg-transparent px-2.5 font-normal text-muted-foreground`}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MobileNavigationMenu = ({ open }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="inset-0 z-998 h-dvh w-full bg-background pt-[3.9375rem] [&>button]:hidden"
      >
        <div className="h-full overflow-y-auto pt-10 pb-20">
          <div className="container">
            <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {MOBILE_BUTTONS.map((btn, index) => (
                  <Button
                    variant={!btn.isPrimary ? "outline" : "default"}
                    className={
                      btn.isPrimary
                        ? "text-primary-foreground"
                        : "text-foreground"
                    }
                    asChild
                    key={`navbar-btn-${index}`}
                  >
                    <a href={btn.url}>{btn.label}</a>
                  </Button>
                ))}
              </div>
              <Accordion type="multiple" className="w-full">
                {NAVIGATION.map((item, index) =>
                  renderMobileMenuItem(item, index),
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  if (item.groups) {
    return (
      <AccordionItem
        key={item.title}
        value={`nav-${index}`}
        className="border-b-0"
      >
        <AccordionTrigger className="h-[3.75rem] items-center p-0 !px-4 text-base leading-[3.75] font-normal text-muted-foreground hover:bg-muted hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="max-h-[60dvh] overflow-x-auto">
          {item.groups.flatMap((group, groupIndex) =>
            group.links.map((link, linkIndex) => (
              <a
                key={`mobile-link-${groupIndex}-${linkIndex}`}
                href={link.url}
                className="flex h-12 items-center gap-2 rounded-lg px-4 text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
              >
                <link.icon className="size-4 stroke-muted-foreground" />
                {link.label}
              </a>
            )),
          )}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="flex h-[3.75rem] items-center rounded-md p-0 px-4 text-left text-base leading-[3.75] font-normal text-muted-foreground ring-ring/10 outline-ring/50 transition-all hover:bg-muted focus-visible:ring-4 focus-visible:outline-1 nth-last-1:border-0"
    >
      {item.title}
    </a>
  );
};

export { Navbar11 };
