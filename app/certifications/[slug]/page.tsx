import { Navbar14 } from "@/components/navbar14";
import { Service6 } from "@/components/service6";
import { CERTIFICATIONS_DATA } from "@/lib/services-data";
import { notFound } from "next/navigation";

interface CertificationPageProps {
  params: {
    slug: string;
  };
}

export default async function CertificationDetailPage({ params }: CertificationPageProps) {
  const { slug } = await params;
  const certification = CERTIFICATIONS_DATA.find((c) => c.slug === slug);

  if (!certification) {
    notFound();
  }

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
