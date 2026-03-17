"use client";

import {
  ArrowLeft,
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
  Menu,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
  X,
  Smartphone as PhoneIcon,
} from "lucide-react";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    title: "Cloud & Support",
    links: [
      {
        id: "s1",
        title: "Hybrid IT and Cloud Services",
        description: "Seamlessly blend private and public cloud",
        href: "/services/hybrid-it",
        icon: Cloud,
      },
      {
        id: "s2",
        title: "IT Support Services",
        description: "Extend equipment uptime with certified technicians",
        href: "/services/it-support",
        icon: LifeBuoy,
      },
      {
        id: "s3",
        title: "IT Security Services",
        description: "Advanced protection for disruptive technologies",
        href: "/services/it-security",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Implementation & Consultancy",
    links: [
      {
        id: "s4",
        title: "IT Implementation Services",
        description: "Connect hardware and software into one cohesive body",
        href: "/services/it-implementation",
        icon: Wrench,
      },
      {
        id: "s5",
        title: "IT Consultancy",
        description: "Improve strategy and boost shareholder value",
        href: "/services/it-consultancy",
        icon: Briefcase,
      },
      {
        id: "s6",
        title: "Document Management Services",
        description: "Transition from paperwork to paperless easily",
        href: "/services/document-management",
        icon: FileText,
      },
    ],
  },
  {
    title: "Automation & Dev",
    links: [
      {
        id: "s7",
        title: "Workflow Automation Services",
        description: "Optimize operations and data availability",
        href: "/services/workflow-automation",
        icon: RefreshCw,
      },
      {
        id: "s8",
        title: "Suscriptor Portfolio Development",
        description: "Hands-on expertise for custom requirements",
        href: "/services/suscriptor",
        icon: FileCode,
      },
      {
        id: "s9",
        title: "Business Analysis Services",
        description: "Bring business and IT closer together",
        href: "/services/business-analysis",
        icon: Search,
      },
    ],
  },
  {
    title: "Software & recovery",
    links: [
      {
        id: "s10",
        title: "Custom Software Development",
        description: "Bespoke solutions with less stress and cost",
        href: "/services/custom-software",
        icon: Code,
      },
      {
        id: "s11",
        title: "Digitalization Services",
        description: "Back up hard copy information securely",
        href: "/services/digitalization",
        icon: Smartphone,
      },
      {
        id: "s12",
        title: "Backup and Disaster Recovery",
        description: "Arrangements to ensure business continuity",
        href: "/services/disaster-recovery",
        icon: Database,
      },
    ],
  },
];

const companyMenu = [
  {
    id: "c1",
    label: "About Us",
    icon: Users,
    description: "Learn more about our mission and team",
    url: "/about",
  },
  {
    id: "c2",
    label: "News",
    icon: Book,
    description: "Latest updates and announcements",
    url: "/news",
  },
  {
    id: "c3",
    label: "Events",
    icon: Globe,
    description: "Upcoming industry events and webinars",
    url: "/events",
  },
  {
    id: "c4",
    label: "Contacts",
    icon: PhoneIcon,
    description: "Get in touch with us",
    url: "/contact",
  },
];




// Intec System specific menus are defined below as CompanyMenu and ServicesMenu


const ServicesMenu = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {serviceCategories.map((category) => (
      <div key={category.title} className="rounded-md border border-border p-5">
        <div className="border-b border-border pb-4 mb-4">
          <strong className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70">
            {category.title}
          </strong>
        </div>
        <div className="grid gap-y-4">
          {category.links.map((link) => (
            <NavigationMenuLink
              key={link.id}
              href={link.href}
              className="group flex flex-row items-center space-x-4 text-left text-foreground/85 hover:text-foreground"
            >
              <link.icon className="size-4 shrink-0 transition-colors group-hover:text-primary" />
              <div className="flex-1 text-sm font-medium">
                {link.title}
              </div>
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const CompanyMenu = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {companyMenu.map((item) => (
      <NavigationMenuLink
        key={item.id}
        href={item.url}
        className="group flex flex-row items-center space-x-4 rounded-md border border-border p-5 transition-colors hover:bg-accent"
      >
        <item.icon className="size-6 shrink-0 transition-colors group-hover:text-primary" />
        <div className="flex-1">
          <div className="text-sm font-semibold">{item.label}</div>
          <div className="mt-1 text-xs text-muted-foreground line-clamp-1">{item.description}</div>
        </div>
      </NavigationMenuLink>
    ))}
  </div>
);

// End of menu components


type NavigationMenuItemType = {
  key: string;
  label: string;
  href?: string;
  component?: React.ComponentType;
};

const navigationMenuItems: readonly NavigationMenuItemType[] = [
  {
    key: "solutions",
    label: "Solutions",
    href: "/solutions",
  },
  {
    key: "services",
    label: "Services",
    component: ServicesMenu,
  },
  {
    key: "partners",
    label: "Partners",
    href: "/partners",
  },
  {
    key: "company",
    label: "Company",
    component: CompanyMenu,
  },
] as const;

interface Navbar4Props {
  className?: string;
}

const Navbar4 = ({ className }: Navbar4Props) => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);

  return (
    <section className={cn("inset-x-0 top-0 z-20 bg-background", className)}>
      <div className="container">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-auto">
          <div className="flex w-full justify-between gap-2 py-4">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src="/images/logo.svg"
                className="max-h-8"
                alt="InTec System"
              />

            </a>
            <div className="flex items-center gap-2 xl:gap-8">
              <NavigationMenuList className="hidden gap-0 lg:flex">
                {navigationMenuItems.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    {item.component ? (
                      <Fragment>
                        <NavigationMenuTrigger className="text-xs xl:text-sm bg-transparent font-normal text-muted-foreground">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                          <item.component />
                        </NavigationMenuContent>
                      </Fragment>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs xl:text-sm font-normal text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button
                className="group hidden md:flex h-10 w-fit items-center justify-center gap-2 rounded-md px-6 tracking-tight"
                asChild
              >
                <a href="/contact">
                  Contact Us
                  <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="fixed inset-0 top-[72px] container flex h-[calc(100vh-72px)] w-full flex-col overflow-auto border-t border-border bg-background lg:hidden">
              {submenu && (
                <div className="mt-3">
                  <Button
                    variant="link"
                    onClick={() => setSubmenu(null)}
                    className="relative -left-4"
                  >
                    <ArrowLeft className="size-4 text-xs" />
                    Go back
                  </Button>
                </div>
              )}
              {submenu === null && (
                <div>
                  {navigationMenuItems.map((item) => (
                    item.component ? (
                      <button
                        key={item.key}
                        type="button"
                        className="flex w-full items-center border-b border-border py-6 text-left"
                        onClick={() => setSubmenu(item.key)}
                      >
                        <span className="flex-1 text-sm font-medium">
                          {item.label}
                        </span>
                        <span className="shrink-0">
                          <ArrowRight className="size-4" />
                        </span>
                      </button>
                    ) : (
                      <a
                        key={item.key}
                        href={item.href}
                        className="flex w-full items-center border-b border-border py-6 text-left"
                      >
                        <span className="flex-1 text-sm font-medium">
                          {item.label}
                        </span>
                        <span className="shrink-0">
                          <ArrowRight className="size-4 -rotate-45" />
                        </span>
                      </a>
                    )
                  ))}
                </div>
              )}
              {navigationMenuItems.map(
                (item) =>
                  item.component && submenu === item.key && (
                    <div key={item.key}>
                      <h2 className="pt-4 pb-6 text-lg font-medium">
                        {item.label}
                      </h2>
                      <item.component />
                    </div>
                  ),
              )}

            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar4 };
