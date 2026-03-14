import { Navbar11 } from "@/components/navbar11";
import { About8 } from "@/components/about8";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar11 />
      <main className="pt-16">
        <About8 />
      </main>
    </div>
  );
}
