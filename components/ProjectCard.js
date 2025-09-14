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
        className="relative w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          height: "100%",
          minHeight: isMobile ? "300px" : "400px", // smaller minHeight on mobile
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
          <div className={`${isMobile ? "p-2" : "p-4"}`}>
            <h3
              className={`text-heading font-semibold ${
                isMobile ? "text-lg" : "text-xl sm:text-2xl"
              }`}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Back */}
        {/* Back */}
        <div
          className={`absolute inset-0 w-full h-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl flex flex-col justify-between ${
            isMobile ? "p-3" : "p-6"
          }`}
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div>
            <h4
              className={`font-bold text-glow ${
                isMobile ? "text-lg mb-2" : "text-2xl mb-4"
              }`}
            >
              {title}
            </h4>
            <p
              className={`text-body leading-relaxed ${
                isMobile ? "text-sm mb-3" : "text-base sm:text-lg mb-6"
              }`}
            >
              {description}
            </p>
          </div>

          <div className="mt-auto">
            <h5
              className={`font-semibold text-glow uppercase ${
                isMobile ? "text-xs mb-2" : "text-sm mb-3"
              }`}
            >
              Tech Stack
            </h5>
            <div className={`flex flex-wrap ${isMobile ? "gap-2" : "gap-3"}`}>
              {tech.map((t) => (
                <div
                  key={t.name}
                  className={`flex flex-col items-center text-body ${
                    isMobile ? "text-xs" : "text-sm"
                  }`}
                >
                  <img
                    src={t.icon}
                    alt={t.name}
                    className={`mb-1 ${isMobile ? "w-5 h-5" : "w-7 h-7"}`}
                  />
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
              className={`inline-block text-primary hover:underline font-semibold ${
                isMobile ? "mt-3 text-sm" : "mt-6 text-base"
              }`}
            >
              View Project →
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
