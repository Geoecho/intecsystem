import { Navbar14 } from "@/components/navbar14";
import { Contact29 } from "@/components/contact29";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-1 flex flex-col">
        <Contact29 />
      </main>
    </div>
  );
}
