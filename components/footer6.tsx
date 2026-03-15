import { cn } from "@/lib/utils";

const sitemap = [
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Services", href: "#services" },
      { title: "Contact", href: "/contact" },
      { title: "Packages", href: "/packages" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "SecurePlus Fraud Shield", href: "/contact" },
      { title: "Cyber Security", href: "/contact" },
      { title: "Hyper-Converged Infrastructure", href: "/contact" },
      { title: "IT Consultancy", href: "/contact" },
    ],
  },
];

interface Footer6Props {
  className?: string;
}

const Footer6 = ({ className }: Footer6Props) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-[1100px] px-6">
        <footer>
          <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
            <div className="max-w-80">
              <div className="mb-6 flex items-center gap-3">
                <img
                  src="/images/logo.svg"
                  alt="InTec System logo"
                  className="h-6 w-auto dark:invert"
                />
              </div>
              <p className="text-base font-medium text-muted-foreground">
                Engineering reliable digital infrastructure, security, and IT solutions for businesses across Africa and beyond.
              </p>
            </div>
            <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
              <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                {sitemap.map((section) => (
                  <div key={section.title} className="h-fit w-min">
                    <h4 className="mb-6 text-base font-semibold whitespace-nowrap">
                      {section.title}
                    </h4>
                    <ul className="space-y-3 text-base font-medium text-muted-foreground">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="text-base whitespace-nowrap hover:text-foreground transition-colors"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-baseline justify-between gap-8 border-t border-border pt-8 md:flex-row md:gap-16">
            <div className="text-xs text-muted-foreground sm:text-sm">
              &copy; InTec System {new Date().getFullYear()}. All rights reserved.
            </div>
            <div className="flex flex-col items-start gap-4 text-xs text-muted-foreground sm:text-sm md:flex-row lg:items-center">
              <a href="#" className="hover:text-foreground transition-colors">
                Terms &amp; Conditions
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer6 };
