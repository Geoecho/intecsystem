import { 
  ArrowLeft,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Service6Props {
  service: {
    title: string;
    description: string;
    icon: any;
    expertise: { id: number; title: string; description: string }[];
    detailedContent: string;
    items: string[];
  };
  backHref?: string;
  backLabel?: string;
  className?: string;
}

const Service6 = ({ service, backHref = "/services", backLabel = "Back to Services", className }: Service6Props) => {
  const Icon = service.icon;

  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="container max-w-4xl">
        {/* Back Button */}
        <div className="mb-12">
          <Button variant="ghost" asChild className="group -ml-4">
            <Link href={backHref} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {backLabel}
            </Link>
          </Button>
        </div>

        {/* Icon and Intro */}
        <div className="mb-16 space-y-8 text-left md:text-center">
          <div className="flex justify-start md:justify-center">
            <div className="text-primary">
              <Icon className="h-10 w-10" />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground md:mx-auto max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="mb-10 text-left md:text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.expertise.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl border border-border bg-card p-8 text-left md:text-center transition-all hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="text-lg font-semibold tracking-tight">{stat.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto mb-20 max-w-3xl">
          <div 
            className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: service.detailedContent }}
          />

          <h2 className="mb-8 text-2xl font-semibold tracking-tight">Key Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.items.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-transparent hover:border-primary/20 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-primary p-8 md:p-12 text-left md:text-center text-primary-foreground shadow-xl">
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight">Need a customized solution?</h2>
          <p className="mb-10 text-lg opacity-90 md:mx-auto max-w-xl">
            Our experts are ready to help you implement the perfect strategy for your business.
          </p>
          <Button size="lg" variant="secondary" asChild className="w-full md:w-auto px-8 font-semibold">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Service6 };
