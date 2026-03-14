"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  ChevronDown,
  Cookie,
  Facebook,
  Github,
  Languages,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
interface LanguageOption {
  label: string;
  description: string;
  link: string;
}

interface CookiesOption {
  title: string;
  description: string;
  id: string;
}

interface PrivacyDialog {
  trigger: string;
  title: string;
  text: string;
}

interface LanguagesSelectProps {
  languages: Array<LanguageOption>;
}

const LOGO = "/images/logo.svg";

const LANGUAGES: Array<LanguageOption> = [
  {
    label: "English",
    description: "English (US)",
    link: "#",
  },
];

const COOKIES_OPTIONS: Array<CookiesOption> = [
  {
    id: "1",
    title: "Essential for functionality",
    description: "Necessary for site functionality. Always enabled.",
  },
  {
    id: "2",
    title: "Functional",
    description: "Stores preferences and enables enhanced features.",
  },
  {
    id: "3",
    title: "Analytics",
    description: "Tracks usage to enhance your experience.",
  },
];

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


const PRIVACY_DIALOG: PrivacyDialog = {
  trigger: "Do Not Sell or Share My Info",
  title:
    "You've chosen to opt out of sharing your information with our online advertising partners.",
  text: `
    Our app enables partners to use cookies and pixels to
    collect data, helping deliver more relevant ads and
    track ad performance. These practices may be classified
    as "selling" or "sharing/processing" for targeted
    advertising under applicable laws. Even if you opt out,
    you may still see ads about our app, but they won't be
    as personalized.
  `,
};

const FormSchema = z.object({
  cookies: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "",
  }),
});

interface CookiesPanelProps {
  cookiesOptions: Array<CookiesOption>;
}
const CookiesPanel = ({ cookiesOptions }: CookiesPanelProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cookies: ["1"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data.cookies);
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Cookie className="size-4" />
          Cookie settings
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="container overflow-auto pb-4"
        >
          <DrawerHeader>
            <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <DrawerTitle className="text-sm leading-normal font-normal">
                We use cookies to enhance your experience. Check our{" "}
                <Button
                  variant="link"
                  className="px-0 text-sm leading-normal font-normal underline"
                >
                  Cookie Notice
                </Button>{" "}
                for more details.
              </DrawerTitle>
              <DrawerClose asChild className="w-full md:w-fit">
                <Button type="submit">Done</Button>
              </DrawerClose>
            </div>
          </DrawerHeader>
          <Controller
            control={form.control}
            name="cookies"
            render={({ field }) => (
              <Field className="grid gap-5 pt-4 lg:grid-cols-4">
                {cookiesOptions.map((opt) => (
                  <Field
                    key={opt.id}
                    className="flex w-full items-start justify-between rounded-xl border bg-background p-3"
                  >
                    <FieldLabel className="flex w-full flex-col gap-1">
                      <p className="text-sm leading-normal font-medium text-foreground">
                        {opt.title}
                      </p>
                      <p className="text-sm leading-normal text-muted-foreground">
                        {opt.description}
                      </p>
                    </FieldLabel>
                    <Switch
                      checked={field.value?.includes(opt.id)}
                      disabled={opt.id == "1"}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, opt.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== opt.id),
                            );
                      }}
                    />
                  </Field>
                ))}
              </Field>
            )}
          />
        </form>
      </DrawerContent>
    </Drawer>
  );
};

const LanguagesSelect = ({ languages }: LanguagesSelectProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Languages />
          English
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {languages.map((lang, i) => (
          <DropdownMenuItem asChild key={`footer-lang-${i}`}>
            <a
              href={lang.link}
              className="flex cursor-pointer flex-col items-start rounded-md px-4 py-2"
            >
              <div className="text-base leading-normal text-foreground">
                {lang.label}
              </div>
              <div className="text-sm leading-normal text-muted-foreground">
                {lang.description}
              </div>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const PrivacyDialog = ({ trigger, title, text }: PrivacyDialog) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[26.5625rem]">
        <DialogHeader>
          <DialogTitle className="leading-normal">{title}</DialogTitle>
          <DialogDescription className="leading-normal">
            {text}
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant="outline">Okay</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

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
              <div className="mt-4 flex flex-col items-start gap-2">
                <CookiesPanel cookiesOptions={COOKIES_OPTIONS} />
                <LanguagesSelect languages={LANGUAGES} />
              </div>
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
