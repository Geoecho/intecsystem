"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  Building2,
  Check,
  HelpCircle,
  Laptop,
  LoaderIcon,
  Rocket,
  Users,
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
    id: "security",
    icon: Users,
    title: "SecurePlus Fraud Shield",
    description: "Defense against modern financial fraud",
  },
  {
    id: "cyber",
    icon: Laptop,
    title: "Cyber Security",
    description: "Secure frameworks for network visibility",
  },
  {
    id: "infrastructure",
    icon: Building2,
    title: "HCI Solutions",
    description: "Hyper-converged infrastructure solutions",
  },
  {
    id: "consultancy",
    icon: Rocket,
    title: "IT Consultancy",
    description: "Strategy and advisory services",
  },
  {
    id: "other",
    icon: HelpCircle,
    title: "Other",
    description: "Something else entirely",
  },
];

interface Contact29Props {
  title?: string;
  subtitle?: string;
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

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
    form.setValue("serviceType", serviceId);
  };

  const handleContinue = () => {
    if (selectedService) {
      setStep("form");
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
      <section className={cn("relative", className)}>
        <div className="container flex flex-col justify-center">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-green-500/10">
              <Check className="size-10 text-green-600" />
            </div>
            <h2 className="mb-4 text-4xl font-medium">Message Sent!</h2>
            <p className="text-xl text-muted-foreground">
              Thanks for reaching out. We'll review your request and get back to
              you within one business day.
            </p>
            <Button
              className="mt-10 rounded-full px-8"
              size="lg"
              variant="outline"
              onClick={resetForm}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("relative", className)}>
      <div className="container flex flex-col justify-center">
        {step === "select" && (
          <div className="mx-auto w-full max-w-[1100px]">
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
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
                  <TiltCard key={service.id} className="h-full">
                    <button
                      type="button"
                      onClick={() => handleServiceSelect(service.id)}
                      className={cn(
                        "relative flex h-full w-full flex-col items-center rounded-3xl p-8 text-center transition-all backdrop-blur-sm",
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
                      <div
                        className={cn(
                          "mb-4 flex size-14 items-center justify-center rounded-xl",
                          isSelected ? "bg-primary/10" : "bg-muted",
                        )}
                      >
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
                className="rounded-full px-10"
                onClick={handleContinue}
                disabled={!selectedService}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="mx-auto w-full max-w-[1100px] grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center">
              <button
                type="button"
                onClick={() => setStep("select")}
                className="group mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Change selection
              </button>

              <h1 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Tell Us More
              </h1>
              <p className="mb-12 text-lg text-muted-foreground">
                Share the details of your project and we'll get back to you
                within 24 hours.
              </p>

              <div className="flex items-center gap-4 rounded-3xl border border-border bg-background/80 p-6 backdrop-blur-sm">
                {(() => {
                  const service = services.find(
                    (s) => s.id === selectedService,
                  );
                  if (!service) return null;
                  const Icon = service.icon;
                  return (
                    <>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
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
                className="w-full rounded-3xl border border-border bg-background/80 p-8 backdrop-blur-sm md:p-10"
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
                            className="rounded-full px-6"
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
                            className="rounded-full px-6"
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
                          className="rounded-full px-6"
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
                          className="rounded-[2rem] px-6 py-4"
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
                    className="w-full rounded-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { Contact29 };
