import { Navbar33 } from "@/components/navbar33";
import { About8 } from "@/components/about8";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar33 />
      <main className="flex-1 flex flex-col pt-32 lg:pt-48 pb-20 justify-center">
        <About8 />
      </main>
    </div>
  );
}
