import { Navbar33 } from "@/components/navbar33";
import { Hero233 } from "@/components/hero233";
import { Integration2 } from "@/components/integration2";
import { Services10 } from "@/components/services10";
import { Feature281 } from "@/components/feature281";
import { Stats15 } from "@/components/stats15";
import { Feature250 } from "@/components/feature250";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar33 />
      <Hero233 />
      <section>
        <Integration2 />
      </section>
      <section>
        <Services10 />
      </section>
      <section>
        <Stats15 />
      </section>
      <section>
        <Feature281 />
      </section>
      <section>
        <Feature250 />
      </section>
    </div>
  )
}