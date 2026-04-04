import { notFound } from "next/navigation";
import { Navbar14 } from "@/components/navbar14";
import { Service6 } from "@/components/service6";
import { SERVICES_DATA } from "@/lib/services-data";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const { icon: _icon, ...serializableService } = service;

  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-grow">
        <Service6 service={serializableService} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}
