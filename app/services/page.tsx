import { Navbar14 } from "@/components/navbar14";
import { Services4 } from "@/components/services4";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-1 flex flex-col">
        <Services4 />
      </main>
    </div>
  );
}
