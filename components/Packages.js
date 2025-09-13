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
    price: "€300",
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
      "€20/month",
    ],
  },
  {
    name: "Medium Scale",
    price: "€350 – €550",
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
      "€50/month",
    ],
  },
  {
    name: "Full Scale",
    price: "€600 – €3500+",
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
      "10% of package/month",
    ],
  },
];

const addons = [
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
];

// Helper function to check if all values are the same
const isSameAcrossPackages = (values) => {
  const unique = new Set(values);
  return unique.size === 1 || (unique.size === 2 && unique.has("✔"));
};

export default function PackagesComponent() {
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);

  return (
    <motion.section
      id="packages"
      className="min-h-screen w-full py-16 text-glow"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionWrapper>
        {/* Heading */}
        <h2 className="text-heading text-3xl md:text-5xl font-extrabold text-center mb-12">
          Website Development Packages
        </h2>

        {/* Package Table */}
        <div className="relative overflow-x-auto mx-auto max-w-7xl rounded-2xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl">
          <table className="w-full text-sm md:text-base text-body">
            <thead className="sticky top-0 bg-white/10 backdrop-blur-md z-10">
              <tr>
                <th className="p-5 text-left text-glow">Features</th>
                {packages.map((pkg, i) => (
                  <th key={i} className="p-5 text-center text-glow">
                    <div className="font-bold">{pkg.name}</div>
                    <div className="mt-2 inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-body text-sm">
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
                  return null;
                }
                return (
                  <tr
                    key={idx}
                    className="hover:bg-white/10 transition-colors duration-300"
                  >
                    <td className="p-5 font-bold text-glow">{feature}</td>
                    {rowValues.map((value, i) => (
                      <td key={i} className="p-5 text-center">
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

        {/* Add-ons Section */}
        <h3 className="text-heading text-2xl md:text-4xl font-extrabold mt-20 mb-8 text-center">
          Add-on Services
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {addons.map((addon, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">{addon.icon}</div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2">{addon.title}</h4>
                <p className="text-body">{addon.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </motion.section>
  );
}
