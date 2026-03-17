"use client";
import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LOGO = "/images/logo.svg";

const NAVIGATION = [
  {
    title: "About",
    links: [
      {
        name: "About Company",
        href: "/about",
      },
      {
        name: "Our Story",
        href: "/about",
      },
      {
        name: "News",
        href: "/news",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Cloud Services",
        href: "/services/hybrid-it",
      },
      {
        name: "IT Consultancy",
        href: "/services/it-consultancy",
      },
      {
        name: "Security",
        href: "/services/it-security",
      },
      {
        name: "Software Dev",
        href: "/services/custom-software",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "IT Support",
        href: "/services/it-support",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "FAQ",
        href: "/contact",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Bul. Jane Sandanski 113, 1000 Skopje",
        href: "https://goo.gl/maps/qF4X9XqQy8X8X8X88",
      },
      {
        name: "+389 2 2401 500",
        href: "tel:+38922401500",
      },
      {
        name: "info@intecsystem.mk",
        href: "mailto:info@intecsystem.mk",
      },
    ],
  },
];


interface Footer18Props {
  className?: string;
}

const Footer18 = ({ className }: Footer18Props) => {
  return (
    <section className={cn("py-20 border-t bg-muted/20", className)}>
      <footer className="container max-w-6xl">
        <nav className="flex flex-col gap-[2.25rem] lg:flex-row">
          <div className="flex w-full flex-col gap-9 lg:w-1/4">
            <a href="/">
              <img
                src={LOGO}
                alt="InTec System"
                title="InTec System"
                className="h-10"
              />
            </a>
            <div className="flex w-full flex-col gap-6">
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
            {NAVIGATION.map((section) => (
              <ul
                key={`${section.title}`}
                className="flex flex-col items-start gap-[.4rem]"
              >
                <li>
                  <p className="text-[0.9375rem] leading-normal font-semibold text-foreground">
                    {section.title}
                  </p>
                </li>
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.name}`}>
                    <a
                      href={link.href}
                      className="text-[0.9375rem] leading-normal text-muted-foreground hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm leading-normal text-muted-foreground">
            © {new Date().getFullYear()} InTec System. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/legal" className="text-xs text-muted-foreground hover:underline">Privacy Policy</a>
            <a href="/legal" className="text-xs text-muted-foreground hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer18 };
