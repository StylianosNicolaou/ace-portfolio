"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-20 min-h-screen flex items-center justify-center text-center px-6 py-32"
    >
      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-30 max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl px-10 py-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl text-heading font-extrabold leading-tight tracking-tight"
        >
          We build websites
          <br className="hidden md:block" /> that grow your business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-body"
        >
          ACE is a digital studio by Stylianos & Viktorya. We create sleek,
          animated, performance-first websites for modern businesses.
        </motion.p>

        <Magnetic>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-block px-6 py-3 text-lg font-medium bg-white/90 text-black rounded-full shadow-md hover:bg-white transition backdrop-blur-md"
          >
            See Our Work
          </motion.a>
        </Magnetic>
      </motion.div>
    </section>
  );
}
