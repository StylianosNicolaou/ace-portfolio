"use client";

import { useState } from "react";
import CommandParser from "@/components/CommandParser";
import { motion } from "framer-motion";

export default function CodingStation() {
  return (
    <section className="relative py-20 px-4 flex justify-center items-center">
      <motion.div
        className="relative z-10 w-full max-w-4xl p-8 rounded-3xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-saturate-150"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-heading text-center">
          Coding Station
        </h2>

        <div className="flex flex-col gap-6">
          {/* Code Snippet */}
          <div className="w-full">
            <pre className="bg-body/10 border border-accent/20 p-6 rounded-xl text-body overflow-auto font-mono text-sm leading-relaxed">
{`// Parse "cd" commands
    if (cmd.startsWith("cd ")) {
      const section = cmd.replace("cd ", "").trim();
      
      // Map section names for page navigation
      const pageMap = {
        "contact": "/contact",
        "packages": "/packages"
      };
      
      // Map section names for same-page navigation
      const sectionMap = {
        "home": "home",
        "hero": "home",
        "coding": "coding",
        "station": "coding",
        "about": "about",
        "projects": "projects",
        "project": "projects"
      };
      
      // Check if it's a page navigation first
      if (pageMap[section]) {
        router.push(pageMap[section]);
      }
      // Then check for same-page sections
      else if (sectionMap[section]) {
        const targetSection = sectionMap[section];
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }
    }`}
            </pre>
          </div>

          {/* Terminal Below Code */}
          <div className="w-full">
            <CommandParser />
          </div>
        </div>
      </motion.div>
    </section>
  );
}