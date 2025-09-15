import Head from "next/head";

import "../styles/globals.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingSVGBlobs from "@/components/FloatingSVGBlobs";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>ACE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We build stunning, animated websites for modern businesses."
        />

        {/* Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon1.png" />
        <link rel="apple-touch-icon" href="/favicon1.png" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="ACE" />
        <meta
          property="og:description"
          content="We build stunning, animated websites for modern businesses."
        />
        <meta
          property="og:url"
          content="https://ace-portfolio-theta.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ace-portfolio-theta.vercel.app/favicon1.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ACE Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ACE" />
        <meta
          name="twitter:description"
          content="We build stunning, animated websites for modern businesses."
        />
        <meta
          name="twitter:image"
          content="https://ace-portfolio-theta.vercel.app/favicon1.png"
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileImage" content="/favicon1.png" />
      </Head>
      <div className="relative min-h-screen overflow-x-hidden font-mono scroll-smooth text-white">
        {/* Background Image Layer */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundImage: "url('/backgrounds/bg1.jpg')" }}
          />
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: "url('/backgrounds/bg2.jpg')" }}
          />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
        </div>

        <CustomCursor />
        <FloatingSVGBlobs />
        <Analytics />
        {/* Page Transitions */}
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}
