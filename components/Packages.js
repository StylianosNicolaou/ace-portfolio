"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const features = [
  "Pages Included",
  "Backend Functionality",
  "Design",
  "Mobile Responsive",
  "Basic SEO Setup",
  "Social Media Integration",
  "E-Commerce Ready",
  "Animations & Effects",
  "Maintenance (Year 1)",
  "Ongoing Maintenance",
];

const packages = [
  {
    name: "Base Website",
    price: "€200",
    values: [
      "Up to 3 pages",
      "No backend",
      "Simple layout",
      "✔",
      "✔",
      "✔",
      "-",
      "-",
      "✔",
      "€50/year",
    ],
  },
  {
    name: "Medium Scale",
    price: "€250 – €350",
    values: [
      "Up to 5 pages",
      "Contact form / Light CMS",
      "Custom or themed",
      "✔",
      "✔",
      "✔",
      "-",
      "Optional",
      "✔",
      "€70/year",
    ],
  },
  {
    name: "Full Scale",
    price: "€500 – €1500+",
    values: [
      "Unlimited",
      "Advanced backend / Admin panel",
      "Fully custom design",
      "✔",
      "✔",
      "✔",
      "✔",
      "✔",
      "✔",
      "20% of package",
    ],
  },
];

// Helper function to check if all values are the same or all ✔
const isSameAcrossPackages = (values) => {
  const unique = new Set(values);
  return unique.size === 1 || (unique.size === 2 && unique.has("✔"));
};

export default function PackagesPage() {
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);

  return (
    <motion.div
      id="packages"
      className="min-h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat py-20 text-glow"
      style={{ backgroundImage: "url('/public/bg2.jpg')" }}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionWrapper>
        <h2 className="text-heading text-3xl md:text-4xl font-extrabold text-center mb-6 text-heading">
          Website Development Packages
        </h2>

        <div className="relative overflow-auto mx-auto max-w-6xl rounded-2xl backdrop-blur-2xl bg-white/10 border border-white/30 shadow-[0_25px_50px_rgba(0,0,0,0.2)]">
          {/* Reflective Glint */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute w-1/2 h-full bg-gradient-to-br from-white/50 to-transparent opacity-20 animate-glint" />
          </div>

          <table className="w-full text-left text-sm border-separate border-spacing-y-3 text-body">
            <thead className="sticky top-0 bg-white/10 backdrop-blur-sm z-10">
              <tr>
                <th className="p-4 text-glow">Features</th>
                {packages.map((pkg, i) => (
                  <th key={i} className="p-4 text-center text-glow">
                    <div className="font-semibold text-base">{pkg.name}</div>
                    <div className="mt-2 inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-body text-base">
                      {pkg.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => {
                const rowValues = packages.map((p) => p.values[idx]);

                if (showDifferencesOnly && isSameAcrossPackages(rowValues)) {
                  return null; // Hide row
                }

                return (
                  <tr
                    key={idx}
                    className="hover:bg-white/20 transition-colors duration-300"
                  >
                    <td className="p-4 font-bold text-glow">{feature}</td>
                    {rowValues.map((value, i) => (
                      <td key={i} className="p-4 text-center">
                        {value === "✔" ? (
                          <FaCheck className="text-green-400 mx-auto text-glow" />
                        ) : value === "-" ? (
                          <span className="text-white/30">—</span>
                        ) : (
                          <span className="text-body">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Add-ons */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-glow">
          Add-on Services
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-glow text-sm">
          {[
            {
              title: "SEO Optimization",
              detail: "€300 / €200 (for full sites)",
              icon: "📈",
            },
            {
              title: "Extra Page",
              detail: "€30 - €100 depending on complexity",
              icon: "➕",
            },
            {
              title: "Multilingual Support",
              detail: "€100/language (3 pages)",
              icon: "🌐",
            },
            {
              title: "Extra Multilingual Page",
              detail: "€20 - €50",
              icon: "🗣️",
            },
            {
              title: "Custom Animations & Effects",
              detail: "€50 (complex GSAP or Lottie animations)",
              icon: "✨",
            },
          ].map((addon, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:scale-[1.02] transition duration-300 shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <span>{addon.icon}</span>
                <span>{addon.title}</span>
              </div>
              <p className="text-body mt-1">{addon.detail}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
