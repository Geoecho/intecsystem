import { Navbar33 } from "@/components/navbar33";
import { Contact29 } from "@/components/contact29";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar33 />
      <main className="flex-1 flex flex-col pt-32 lg:pt-48 pb-20 justify-center">
        <Contact29 />
      </main>
    </div>
  );
}
