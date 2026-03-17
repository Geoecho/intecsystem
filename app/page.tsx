"use client";

import { motion } from "framer-motion";
import { Navbar14 } from "@/components/navbar14";
import { Hero245 } from "@/components/hero245";
import { Services10 } from "@/components/services10";
import { Feature281 } from "@/components/feature281";
import { Stats15 } from "@/components/stats15";
import { Feature250 } from "@/components/feature250";
import { Faq9 } from "@/components/faq9";
import { Awards4 } from "@/components/awards4";
import { BackToTop } from "@/components/back-to-top";

const animationProps: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Hero245 />
      </motion.div>

      <motion.div {...animationProps}>
        <section>
          <Stats15 />
        </section>
      </motion.div>

      <motion.div {...animationProps}>
        <section>
          <Services10 />
        </section>
      </motion.div>

      <motion.div {...animationProps}>
        <section>
          <Feature281 />
        </section>
      </motion.div>

      <motion.div {...animationProps}>
        <section>
          <Awards4 />
        </section>
      </motion.div>

      <motion.div {...animationProps}>
        <section>
          <Faq9 />
        </section>
      </motion.div>

      <motion.div {...animationProps}>
        <section>
          <Feature250 />
        </section>
      </motion.div>



      <BackToTop />
    </div>
  )
}