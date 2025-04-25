"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tech = [],
}) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleFlip = () => {
    if (isMobile) setFlipped((prev) => !prev);
  };

  return (
    <div
      className="w-full max-w-[640px] mx-auto perspective cursor-pointer"
      onClick={toggleFlip}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
    >
      <motion.div
        className="relative w-full transition-transform duration-700"
        animate={{ rotateY: flipped ? 180 : 0 }}
        style={{
          transformStyle: "preserve-3d",
          height: "100%",
          minHeight: "400px", // define minHeight so card is tall
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {image && (
            <div className="aspect-video w-full">
              <video
                src={image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-heading text-xl sm:text-2xl font-semibold">
              {title}
            </h3>
          </div>
        </div>

        {/* Back */}
        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col justify-between"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div>
            <h4 className="text-2xl font-bold text-glow mb-4">{title}</h4>{" "}
            {/* bigger title */}
            <p className="text-body text-base sm:text-lg leading-relaxed mb-6">
              {description}
            </p>{" "}
            {/* bigger description */}
          </div>

          <div className="mt-auto">
            <h5 className="text-sm font-semibold text-glow uppercase mb-3">
              Tech Stack
            </h5>
            <div className="flex flex-wrap gap-3">
              {tech.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col items-center text-sm text-body"
                >
                  <img src={t.icon} alt={t.name} className="w-7 h-7 mb-1" />
                  {t.name}
                </div>
              ))}
            </div>
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-base text-primary hover:underline font-semibold"
            >
              View Project →
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
