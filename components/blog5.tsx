"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const posts = [
  {
    id: "post-1",
    title: "InTec Premier Technology Day 2025",
    summary:
      "In a time when data is the backbone of every decision, this event sparked meaningful conversations around the future of enterprise data transformation. Visionaries, leaders, and data experts came together to share insights, tackle challenges, and exchange bold ideas for driving business impact through data.",
    label: "Conference",
    author: "InTec System",
    published: "Jun 26, 2025",
    href: "#",
    image: "/images/Enterprise-Data-transformation-website-banner-768x768.png",
  },
  {
    id: "post-2",
    title: "Trusteer User Group Customer Conference 2025",
    summary:
      "What makes a community truly valuable is the shared drive to grow, learn, and shape the future together — and that’s exactly what the Truuster User Group delivered. Users from across industries came together to exchange experiences, offer feedback, and dive deep into how Truuster is powering trust-driven digital ecosystems.",
    label: "Conference",
    author: "InTec System",
    published: "May 05, 2025",
    href: "#",
    image: "/images/trusteer-user-group-website-event-banner-1024x576.png",
  },
  {
    id: "post-3",
    title: "Future of Finance and Business Automation and Fraud",
    summary:
      "As finance evolves, this event sparked vital conversations around automation, innovation, and fraud prevention. Experts and leaders came together to explore how smart technologies are transforming operations and building trust in a digital-first world.",
    label: "Event",
    author: "InTec System",
    published: "May 28, 2025",
    href: "#",
    image: "/images/future-of-finance-website-event-banner-768x432.png",
  },
  {
    id: "post-4",
    title: "Digital Identity for NIS2 and DORA",
    summary:
      "Our recent event explored the critical role of digital identity in meeting NIS2 and DORA requirements. Experts shared insights on secure access, regulatory compliance, and risk management in a rapidly evolving digital landscape.",
    label: "Event",
    author: "InTec System",
    published: "Nov 20, 2024",
    href: "#",
    image: "/images/nis2-dora-event.png",
  },
  {
    id: "post-5",
    title: "InTec DATA&AI Event",
    summary:
      "Industry leaders gathered to explore the latest trends and innovations in Data & AI. The event highlighted how artificial intelligence and data analytics are transforming business processes, driving smarter decisions, and unlocking new opportunities.",
    label: "Event",
    author: "InTec System",
    published: "Nov 20, 2024",
    href: "#",
    image: "/images/intec-data-ai-event.png",
  },
  {
    id: "post-6",
    title: "AI Premier Day 2024",
    summary:
      "This event brought us a lot of curious AI enthusiasts sharing insightful and innovative ideas. Together we had rich discussions, made networking moments meaningful, and made the whole experience truly inspiring.",
    label: "Event",
    author: "InTec System",
    published: "Dec 17, 2024",
    href: "#",
    image: "/images/600a9977e71eaa1ac31b38c4-1024x576.jpg",
  },
  {
    id: "post-7",
    title: "Fujitsu Workshop: Data Center Portfolio",
    summary:
      "We had an incredible experience at the Fujitsu Workshop, where we connected with industry professionals and explored the latest advancements in data center products and solutions. The event provided valuable insights into innovations like the PrivateGPT AI.",
    label: "Workshop",
    author: "InTec System",
    published: "Oct 22, 2024",
    href: "#",
    image: "/images/fujitsu-768x293.jpg",
  },
  {
    id: "post-8",
    title: "IACP Boston 2024",
    summary:
      "The International Association of Chiefs of Police (IACP) is the world’s largest professional network for police leaders. At IACP 2024 in Boston, we were thrilled to connect and showcase how our Blueprint e-Evidence software is transforming law enforcement.",
    label: "Conference",
    author: "InTec System",
    published: "Oct 17, 2024",
    href: "#",
    image: "/images/5dae9d320978aec3c22b96b1-1024x389.jpeg",
  },
  {
    id: "post-9",
    title: "Premier Technology Event 2024",
    summary:
      "This gathering put a spotlight on the transformative power of Advanced Analytics and Artificial Intelligence in driving business growth and enhancing fraud prevention mechanisms. Keynotes included presentations on Foundational Models & Generative AI.",
    label: "Conference",
    author: "InTec System",
    published: "Apr 11, 2024",
    href: "#",
    image: "/images/5c8f6c1f36c408558712979f-1024x487.jpg",
  },
  {
    id: "post-10",
    title: "Premier Technology Event 2021",
    summary:
      "InTec System Premier Technology Event 2021 was held in Mavrovo, Macedonia. Jointly organized by InTec System, IBM, Thales, Red Hat and Forcepoint, exploring Data & AI, Kubernetes, Data Protection, and Data Governance.",
    label: "Conference",
    author: "InTec System",
    published: "Nov 17, 2021",
    href: "#",
    image: "/images/Event-banner-2021-1024x400.jpg",
  },
  {
    id: "post-11",
    title: "FORCEPOINT Data Loss Prevention Live Webinar",
    summary:
      "Data security is a never-ending challenge. Organizations must protect IP and adhere to regulations while adapting to cloud apps, hybrid cloud and BYOD. Explore Data Loss Prevention (DLP) strategies in a zero-perimeter world.",
    label: "Webinar",
    author: "InTec System",
    published: "2021",
    href: "#",
    image: "/images/Forcepoint-DLP-Agenda-1024x575.jpg",
  },
  {
    id: "post-12",
    title: "PRIMEFLEX for VMware vSAN Live Webinar",
    summary:
      "Introduction to Fujitsu PRIMEFLEX for VMware vSAN. We explored its architecture, functionalities, and positioning inside the Fujitsu storage portfolio during this comprehensive online session.",
    label: "Webinar",
    author: "InTec System",
    published: "Jan 27, 2021",
    href: "#",
    image: "/images/Prezentacija-Fujitsu-Azure-5-1024x576.png",
  },
  {
    id: "post-13",
    title: "Premier Technology Event 2020",
    summary:
      "PREMIER TECHNOLOGY EVENT 2020 Live Virtual Event. We hosted virtual sessions bringing together industry experts to discuss the state of enterprise technology.",
    label: "Virtual Event",
    author: "InTec System",
    published: "Dec 22, 2020",
    href: "#",
    image: "/images/Premier-TE2020-01-2-1024x576.png",
  },
  {
    id: "post-14",
    title: "Digital Event Fujitsu + Nutanix",
    summary:
      "Difficult times require creative actions! Our first Digital Event focused on Modernizing IT with Hyper Converged Infrastructure, jointly organized by InTec System, Fujitsu, and Nutanix professionals.",
    label: "Digital Event",
    author: "InTec System",
    published: "Jul 08, 2020",
    href: "#",
    image: "/images/Digital-Event-Background-Zoom-01-1024x576.png",
  },
  {
    id: "post-15",
    title: "Premier Technology Event 2019",
    summary:
      "Jointly organized by InTec System, IBM, Thales, Cisco, VMware, and Ingram Micro in Skopje. Topics included reliable paths to the cloud, HCI infrastructure, digital identity trust, and data governance.",
    label: "Conference",
    author: "InTec System",
    published: "Nov 12, 2019",
    href: "#",
    image: "/images/5d53d1115d868_1565774097.jpg",
  },
  {
    id: "post-16",
    title: "IBM Think Summit Belgrade",
    summary:
      "Get inspired! We explored the power of artificial intelligence, the boundaries between humans and robots, and the latest innovations in cloud, cybersecurity, and advanced technologies in South East Europe.",
    label: "Summit",
    author: "InTec System",
    published: "Sep 10, 2019",
    href: "#",
    image: "/images/baner1-768x646.jpg",
  },
  {
    id: "post-17",
    title: "Cloud & Cyber Security 2018",
    summary:
      "Explored Cognitive Cloud and Cyber Security paradigms, focusing on advanced fraud detection, digital identity, quantum-safe cryptography, and PSD2 security risks.",
    label: "Event",
    author: "InTec System",
    published: "Oct 30, 2018",
    href: "#",
    image: "/images/Cloud-1-1024x659.jpg",
  }
];

interface Blog5Props {
  className?: string;
}

const Blog5 = ({ className }: Blog5Props) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a brief loading delay for better UX feedback
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoading(false);
    }, 600);
  };

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <section className={cn("py-20 md:py-32", className)}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col items-start justify-start text-left">
            <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl lg:text-5xl">
              News & Events
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Discover the latest updates, industry insights, and past events from InTec System. 
              Stay informed on how we are driving digital transformation globally.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {visiblePosts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col rounded-md border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="relative aspect-video w-full overflow-hidden bg-muted/30">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-12 opacity-10">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="rounded-sm bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">{post.label}</Badge>
                </div>
              </div>

              <div className="flex flex-col p-8 flex-grow">
                <h3 className="mb-3 text-xl font-semibold leading-tight">
                  {post.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {post.summary}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground font-medium">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        {visibleCount < posts.length && (
          <div className="mt-12 flex justify-center">
            <Button 
              variant="outline" 
              className="px-8 h-12 rounded-md font-medium min-w-[140px]"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                "Load more"
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { Blog5 };
