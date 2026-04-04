import { Navbar14 } from "@/components/navbar14";
import { Service6 } from "@/components/service6";
import { CERTIFICATIONS_DATA } from "@/lib/services-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface CertificationPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CertificationPageProps): Promise<Metadata> {
  const cert = CERTIFICATIONS_DATA.find((c) => c.slug === params.slug);
  return { title: cert?.title ?? "Certification" };
}

export default async function CertificationDetailPage({ params }: CertificationPageProps) {
  const { slug } = await params;
  const certificationRaw = CERTIFICATIONS_DATA.find((c) => c.slug === slug);

  if (!certificationRaw) {
    notFound();
  }

  // Strip the non-serializable React component icon before passing to Client Component
  const { icon: _icon, ...certification } = certificationRaw;

  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-1 flex flex-col">
        <Service6
          service={certification as any}
          backHref="/"
          backLabel="Back to Home"
        />
      </main>
    </div>
  );
}
