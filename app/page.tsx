"use client";

import { Navbar14 } from "@/components/navbar14";
import { Hero245 } from "@/components/hero245";
import { Services10 } from "@/components/services10";
import { Feature281 } from "@/components/feature281";
import { Stats15 } from "@/components/stats15";
import { Feature250 } from "@/components/feature250";
import { Faq9 } from "@/components/faq9";
import { Awards4 } from "@/components/awards4";
import { BackToTop } from "@/components/back-to-top";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />

      <FadeIn>
        <Hero245 />
      </FadeIn>

      <FadeIn>
        <section>
          <Stats15 />
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <Services10 />
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <Feature281 />
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <Awards4 />
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <Faq9 />
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <Feature250 />
        </section>
      </FadeIn>

      <BackToTop />
    </div>
  )
}