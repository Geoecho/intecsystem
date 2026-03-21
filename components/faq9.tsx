import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Intec System provide?",
    answer:
      "We provide a comprehensive suite of IT solutions, including Hybrid Cloud infrastructure, 24/7 Managed IT Support, Cybersecurity Shielding, System Integration, and Custom Software Development tailored for industrial and corporate needs.",
  },
  {
    question: "How long has Intec System been operating?",
    answer:
      "With over 20 years of experience, we have established ourselves as a leading IT partner in the region, trusted by major organizations for our reliability and deep technical expertise.",
  },
  {
    question: "Do you offer specialized support for industrial technology?",
    answer:
      "Yes. Our team consists of certified technicians who specialize in connecting various hardware and software systems into cohesive, high-performing industrial bodies, ensuring 100% operational uptime.",
  },
  {
    question: "Can you assist with digital transformation strategies?",
    answer:
      "Absolutely. We partner with clients to improve their strategy and operations, helping them transition from legacy paperwork to automated, paperless workflows and modern digital ecosystems.",
  },
  {
    question: "What sets InTec System apart from other IT providers?",
    answer:
      "Our unique value lies in our 'One Call' resolution promise. We combine strategic consultancy with hands-on technical implementation, ensuring that every solution is both theoretically sound and practically robust.",
  },
];

interface Faq9Props {
  className?: string;
}

const Faq9 = ({ className }: Faq9Props) => {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-12 flex flex-col items-start text-left gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl" aria-label="Questions?">
            Questions?
          </h2>
          <p className="max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
            Find answers to common questions about our industrial technology services and solutions.
          </p>
        </div>
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 rounded-md border border-border bg-background/80 px-8 py-4 backdrop-blur-sm last:mb-0"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq9 };
