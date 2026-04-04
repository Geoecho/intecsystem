import { notFound } from "next/navigation";
import { Navbar14 } from "@/components/navbar14";
import { Service6 } from "@/components/service6";
import { SOLUTIONS_DATA } from "@/lib/services-data";
import type { Metadata } from "next";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);
  return { title: solution?.title ?? "Solution" };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const { icon: _icon, ...serializableService } = solution;

  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-grow">
        <Service6
          service={serializableService}
          backHref="/solutions"
          backLabel="Back to Solutions"
        />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return SOLUTIONS_DATA.map((solution) => ({
    slug: solution.slug,
  }));
}
