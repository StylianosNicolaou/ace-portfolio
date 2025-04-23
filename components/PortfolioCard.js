"use client";

import { motion } from "framer-motion";

export default function PortfolioCard({ title, description, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group block rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transform transition duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 md:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-heading text-xl font-semibold tracking-tight group-hover:text-primary transition">
          {title}
        </h3>
        <p className="text-body text-sm mt-2 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
