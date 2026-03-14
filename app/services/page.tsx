"use client";

import { Navbar11 } from "@/components/navbar11";
import { Services8 } from "@/components/services8";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar11 />
      <main className="flex-grow pt-20">
        <Services8 />
      </main>
    </div>
  );
}
