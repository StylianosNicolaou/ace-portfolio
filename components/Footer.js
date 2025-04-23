"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Magnetic from "@/components/Magnetic";
import { FaLinkedinIn } from "react-icons/fa6";

function LinkedInHover(props) {
  const { name, href } = props;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex items-center gap-1 transition hover:text-glow"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {name}
      {showInfo && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 rounded-xl shadow-lg z-10"
          style={{ backgroundColor: "#2e1a47" }}
        >
          <FaLinkedinIn className="w-4 h-4 text-white" />
        </div>
      )}
    </a>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full mt-32 px-6 py-10 bg-white/5 backdrop-blur-md text-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-body text-center md:text-left">
          © {new Date().getFullYear()} ACE Nicyan. Built by{" "}
          <LinkedInHover
            name="Stylianos"
            href="https://www.linkedin.com/in/stylianos-nicolaou-4b00a3304/"
            title="Computer Science Student & CO-Founder of ACE"
          />{" "}
          &{" "}
          <LinkedInHover
            name="Viktorya"
            href="https://www.linkedin.com/in/victoria-voskanyan-38a67b1a2/"
            title="Computer Science Student & CO-Founder of ACE"
          />
        </p>
      </div>
    </motion.footer>
  );
}
