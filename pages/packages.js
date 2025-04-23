"use client";
import Head from "next/head";

import { motion } from "framer-motion";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Packages from "../components/Packages";
import Navbar from "../components/Navbar";

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function PackagesPage() {
  return (
    <>
      <Head>
        <title>Packages | ACE</title>
        <meta name="description" content="Packages and prices of ACE team." />
      </Head>
      <div
        className="bg-white/15 backdrop-blur-md"
        style={{ backgroundImage: `url('/bg2.jpg')` }}
      >
        {/* Full content on top of glossy background */}
        <div className="relative z-10 bg-white/15 backdrop-blur-md">
          <motion.main
            id="packages"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Navbar />
            <Packages />
          </motion.main>
        </div>
      </div>
    </>
  );
}
