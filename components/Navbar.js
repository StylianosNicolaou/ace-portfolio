"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HOME_DROPDOWN_ITEMS = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [hoveringDropdown, setHoveringDropdown] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl">
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: showNavbar ? 0 : -100,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`px-6 py-4 rounded-3xl border transition-all
          ${
            scrolled
              ? "bg-white/5 backdrop-blur-xl border-white/10 shadow-md"
              : "bg-white/5 backdrop-blur-xl border-white/10 shadow-md"
          }
        `}
      >
        {/* Invisible scroll tracking ScrollLinks */}
        <div className="hidden">
          {HOME_DROPDOWN_ITEMS.map(({ label, to }) => (
            <ScrollLink
              key={label}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onSetActive={() => setActiveItem(label)}
            />
          ))}
        </div>

        {/* Layout: Logo left, nav centered absolutely */}
        <div className="relative w-full flex items-center justify-between">
          {/* Left: ACE logo */}
          <Magnetic>
            <motion.div whileHover={{ rotate: [0, 5, -5, 3, 0], scale: 1.05 }}>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-heading text-2xl font-bold tracking-tight cursor-pointer"
              >
                <span className="font-mono">ACE</span>
              </ScrollLink>
            </motion.div>
          </Magnetic>

          {/* Centered Nav */}
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 items-center text-sm font-medium tracking-wide">
            {pathname === "/" ? (
              // ✅ Home page: show dropdown
              <div
                className="relative"
                onMouseEnter={() => setHoveringDropdown(true)}
                onMouseLeave={() => setHoveringDropdown(false)}
              >
                <Magnetic>
                  <button className="flex items-center gap-1 cursor-pointer text-body hover:text-purple transition-colors">
                    <span className="px-1 font-semibold text-glow capitalize">
                      {activeItem}
                    </span>
                    <FaChevronDown
                      className={`transition-transform ${
                        hoveringDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </Magnetic>

                <AnimatePresence>
                  {hoveringDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 bg-white/10 backdrop-blur-md text-body border border-white/20 rounded-xl overflow-hidden shadow-2xl z-50"
                    >
                      {HOME_DROPDOWN_ITEMS.map(({ label, to }) => (
                        <li key={label}>
                          <ScrollLink
                            to={to}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className={`block px-4 py-2 whitespace-nowrap cursor-pointer transition hover:bg-white/10 ${
                              activeItem === label
                                ? "text-glow font-semibold"
                                : "text-body"
                            }`}
                          >
                            {label}
                          </ScrollLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // ❌ Not home: show "Home" link to /
              <Magnetic>
                <Link
                  href="/"
                  className="hover:text-purple transition-colors text-body"
                >
                  Home
                </Link>
              </Magnetic>
            )}

            {/* Static links */}
            <Magnetic>
              <Link
                href="/packages"
                className={`transition-colors text-body ${
                  pathname === "/packages"
                    ? "text-glow font-semibold"
                    : "hover:text-purple"
                }`}
              >
                Packages
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className={`transition-colors text-body ${
                  pathname === "/contact"
                    ? "text-glow font-semibold"
                    : "hover:text-purple"
                }`}
              >
                Contact
              </Link>
            </Magnetic>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
