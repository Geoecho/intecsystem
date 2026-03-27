"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Briefcase,
  Check,
  Cloud,
  Code2,
  FileText,
  GitBranch,
  HardDrive,
  Headphones,
  HelpCircle,
  LoaderIcon,
  Package,
  ScanText,
  Shield,
  Settings,
} from "lucide-react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateY = ((x - cx) / cx) * 8;
    const rotateX = -((y - cy) / cy) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
};

const contactFormSchema = z.object({
  serviceType: z.string().min(1, "Please select a service"),
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const services = [
  {
    id: "hybrid-it",
    icon: Cloud,
    title: "Hybrid IT and Cloud Services",
    description: "Blending private, public and managed cloud with on-premises IT for better business agility",
  },
  {
    id: "it-support",
    icon: Headphones,
    title: "IT Support Services",
    description: "Maintenance and support options to help extend equipment uptime",
  },
  {
    id: "it-security",
    icon: Shield,
    title: "IT Security Services",
    description: "Protection strategies for mobile, social, cloud and big data environments",
  },
  {
    id: "it-implementation",
    icon: Settings,
    title: "IT Implementation Services",
    description: "Connecting IT systems, hardware and software into one cohesive body",
  },
  {
    id: "it-consultancy",
    icon: Briefcase,
    title: "IT Consultancy",
    description: "Strategy and operations advisory to increase shareholder value",
  },
  {
    id: "document-management",
    icon: FileText,
    title: "Document Management Services",
    description: "One-stop shop for transitioning from paperwork to paperless",
  },
  {
    id: "workflow-automation",
    icon: GitBranch,
    title: "Workflow Automation Services",
    description: "Streamlining business operations and data flow across teams",
  },
  {
    id: "suscriptor",
    icon: Package,
    title: "Suscriptor Portfolio Development",
    description: "Custom development and configuration built on nearly 10 years of expertise",
  },
  {
    id: "business-analysis",
    icon: BarChart2,
    title: "Business Analysis Services",
    description: "Bridging business and IT through expert business analysts",
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    description: "Custom software development and consulting to deliver your next project",
  },
  {
    id: "digitalization",
    icon: ScanText,
    title: "Digitalization Services",
    description: "Converting hard-copy information into secure, searchable digital records",
  },
  {
    id: "backup-recovery",
    icon: HardDrive,
    title: "Backup and Disaster Recovery",
    description: "Planning and procedures to keep your organisation resilient against disasters",
  },
  {
    id: "other",
    icon: HelpCircle,
    title: "Other",
    description: "Something else — let us know how we can help",
  },
];

interface Contact29Props {
  title?: string;
  subtitle?: string;
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const animationProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.5, ease: "easeOut" }
} as const;

const Contact29 = ({
  title = "Let's Work Together",
  subtitle = "Select the service that best fits your needs and we'll get back to you within one business day.",
  className,
  onSubmit,
}: Contact29Props) => {
  const [step, setStep] = useState<"select" | "form" | "success">("select");
  const [selectedService, setSelectedService] = useState<string>("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      serviceType: "",
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    const service = services.find((s) => s.id === serviceId);
    form.setValue("serviceType", service?.title ?? serviceId);
  };

  const handleContinue = () => {
    if (selectedService) {
      setStep("form");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setStep("success");
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const resetForm = () => {
    setStep("select");
    setSelectedService("");
    form.reset();
  };

  if (step === "success") {
    return (
      <section className={cn("relative py-20 md:py-32", className)}>
        <motion.div {...animationProps} className="container mx-auto max-w-6xl px-6 flex flex-col justify-center">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-green-500/10">
              <Check className="size-10 text-green-600" />
            </div>
            <h2 className="mb-4 text-4xl font-medium">Message Sent!</h2>
            <p className="text-xl text-muted-foreground">
              Thanks for reaching out. We&apos;ll review your request and get back to
              you within one business day.
            </p>
            <Button
              className="group mt-10 mx-auto flex h-12 items-center justify-center gap-2 rounded-md px-8 text-base tracking-tight"
              variant="outline"
              onClick={resetForm}
            >
              <span>Send Another Message</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={cn("relative py-20 md:py-32", className)}>
      <motion.div {...animationProps} className="container mx-auto max-w-6xl px-6 flex flex-col justify-center">
        {step === "select" && (
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-3xl font-semibold tracking-tighter md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {subtitle}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedService === service.id;
                return (
                  <TiltCard key={service.id} className={cn("h-full", service.id === "other" && "sm:col-span-2 lg:col-span-3")}>
                    <button
                      type="button"
                      onClick={() => handleServiceSelect(service.id)}
                      className={cn(
                        "relative flex h-full w-full flex-col items-center rounded-md p-8 text-center transition-all backdrop-blur-sm",
                        isSelected
                          ? "bg-background ring-2 ring-primary"
                          : "bg-background/80 border border-border hover:bg-background",
                      )}
                    >
                      {isSelected && (
                        <div className="absolute top-4 right-4 flex size-6 items-center justify-center rounded-full bg-primary">
                          <Check className="size-4 text-primary-foreground" />
                        </div>
                      )}
                      <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-muted">
                        <Icon
                          className={cn(
                            "size-7",
                            isSelected ? "text-primary" : "text-muted-foreground",
                          )}
                        />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </button>
                  </TiltCard>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <Button
                size="lg"
                className="group flex h-12 w-full max-w-sm items-center justify-center gap-2 rounded-md px-10 text-base tracking-tight"
                onClick={handleContinue}
                disabled={!selectedService}
              >
                <span>Continue</span>
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Button>
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="mx-auto w-full max-w-6xl grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="flex flex-col justify-start">
              <button
                type="button"
                onClick={() => setStep("select")}
                className="group mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Change selection
              </button>

              <h1 className="mb-6 text-3xl font-semibold tracking-tighter md:text-4xl lg:text-5xl">
                Tell Us More
              </h1>
              <p className="mb-12 text-lg text-muted-foreground">
                Share the details of your project and we&apos;ll get back to you
                within 24 hours.
              </p>

              <div className="flex items-center gap-4 rounded-md border border-border bg-background/80 p-6 backdrop-blur-sm">
                {(() => {
                  const service = services.find(
                    (s) => s.id === selectedService,
                  );
                  if (!service) return null;
                  const Icon = service.icon;
                  return (
                    <>
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted/50">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{service.title}</p>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>

            <div className="flex items-center">
              <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="w-full rounded-md border border-border bg-background/80 p-8 backdrop-blur-sm md:p-10"
              >
                <h2 className="mb-8 text-2xl font-semibold">Your Details</h2>

                <FieldGroup>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Controller
                      control={form.control}
                      name="name"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Name <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Your name"
                            className="rounded-md px-4 h-12"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Email <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            type="email"
                            aria-invalid={fieldState.invalid}
                            placeholder="you@example.com"
                            className="rounded-md px-4 h-12"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>

                  <Controller
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Company</FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          placeholder="Your company"
                          className="rounded-md px-4 h-12"
                        />
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="message"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Message <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Tell us about your project..."
                          rows={5}
                          className="rounded-md px-4 py-4"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {form.formState.errors.root && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.root.message}
                    </p>
                  )}

                  <Button
                    size="lg"
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-md px-10 text-base tracking-tight"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                      </>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export { Contact29 };
