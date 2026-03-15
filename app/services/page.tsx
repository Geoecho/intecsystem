import { Navbar33 } from "@/components/navbar33";
import { Services8 } from "@/components/services8";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar33 />
      <main className="flex-1 flex flex-col pt-32 lg:pt-48 pb-20 justify-center">
        <Services8 />
      </main>
    </div>
  );
}
