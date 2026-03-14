import { Navbar11 } from "@/components/navbar11";
import { Feature283 } from "@/components/feature283";
import { Integration2 } from "@/components/integration2";
import { Feature270 } from "@/components/feature270";
import { Feature281 } from "@/components/feature281";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar11 />
      <section>
        <Feature283 />
      </section>
      <section>
        <Integration2 />
      </section>
      <section>
        <Feature270 />
      </section>
      <section>
        <Feature281 />
      </section>
    </div>
  )
}