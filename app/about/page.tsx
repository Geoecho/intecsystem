"use client";

import { Navbar14 } from "@/components/navbar14";
import { About8 } from "@/components/about8";
import { FadeIn } from "@/components/fade-in";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-1 flex flex-col">
        <FadeIn>
          <About8 />
        </FadeIn>
      </main>
    </div>
  );
}
