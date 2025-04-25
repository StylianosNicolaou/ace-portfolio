"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Packages from "../components/Packages";

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PackagesPage() {
  return (
    <>
      <Head>
        <title>Packages | ACE</title>
        <meta
          name="description"
          content="Packages and pricing by ACE studio."
        />
      </Head>

      {/* Background wrapper */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/backgrounds/bg2.jpg')` }}
      >
        {/* Frosted Glass Layer */}
        <div className="relative z-10 bg-white/5 backdrop-blur-md min-h-screen">
          <Navbar />

          <motion.main
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="pt-24"
          >
            <Packages />
          </motion.main>

          <Footer />
        </div>
      </div>
    </>
  );
}
