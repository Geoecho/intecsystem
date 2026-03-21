"use client";

import { Navbar14 } from "@/components/navbar14";
import { Blog5 } from "@/components/blog5";

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-grow">
        <Blog5 />
      </main>
    </div>
  );
}
