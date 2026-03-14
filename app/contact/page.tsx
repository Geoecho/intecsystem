import { Navbar11 } from "@/components/navbar11";
import { Contact25 } from "@/components/contact25";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar11 />
      <main className="pt-16">
        <Contact25 />
      </main>
    </div>
  );
}
