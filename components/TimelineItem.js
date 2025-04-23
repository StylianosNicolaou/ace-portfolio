"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function TimelineItem({
  title,
  year,
  description,
  side,
  isActive,
  isInactive,
  onHover,
  onLeave,
  image,
  link,
  tech = [],
}) {
  const isLeft = side === "left";
  const align = isLeft ? "justify-start" : "justify-end";
  const textAlign = isLeft ? "text-left ml-8" : "text-right mr-8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative w-full flex ${align} mb-20`}
    >
      <motion.div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        animate={{
          opacity: isInactive ? 0 : 1,
          scale: isInactive ? 0.95 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`relative z-10 group max-w-sm transition-all ${textAlign}`}
      >
        {/* Title */}
        <div className="text-lg font-semibold text-body cursor-pointer">
          {title}
        </div>

        {/* Expanded Card */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className={`w-[420px] mt-3 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 text-sm text-body shadow-xl ${
                isLeft ? "origin-left" : "origin-right"
              }`}
            >
              {/* Image Preview */}
              {image && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4 rounded-xl overflow-hidden border border-white/10"
                >
                  <video
                    src={image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
                  />
                </a>
              )}

              {/* Title */}
              <h4 className="text-xl font-bold text-glow mb-2">{title}</h4>

              {/* Description */}
              <p className="text-body text-base leading-relaxed mb-4 max-w-prose">
                {description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10">
                {/* Tech Stack Header: align opposite to the card side */}
                <h5
                  className={`text-sm font-semibold text-glow tracking-wide mb-3 uppercase ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                >
                  Tech Stack
                </h5>

                {/* Tech Icon Grid: always flows L → R */}
                <div className="flex flex-wrap gap-x-5 gap-y-4 justify-start">
                  {tech.map((t) => (
                    <div
                      key={t.name}
                      className="relative group flex flex-col items-center justify-center space-y-1"
                    >
                      <img
                        src={t.icon}
                        alt={t.name}
                        className="h-7 w-7 opacity-80 group-hover:opacity-100 transition"
                      />
                      <span className="text-xs text-white bg-black/70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
