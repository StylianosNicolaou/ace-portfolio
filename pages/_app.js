import "../styles/globals.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingSVGBlobs from "@/components/FloatingSVGBlobs";
import CustomCursor from "@/components/CustomCursor";

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
    <div className="relative min-h-screen overflow-x-hidden font-mono scroll-smooth text-white">
      {/* Background Image Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/bg1.jpg')" }}
        />
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: "url('/bg2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <CustomCursor />
      <FloatingSVGBlobs />

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
