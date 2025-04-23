"use client";

import { motion } from "framer-motion";

const blobVariants = {
  animate: {
    d: [
      "M61.1,-58.4C72.3,-45.8,69.4,-22.9,65.8,-2.3C62.2,18.2,57.9,36.5,47.8,48.4C37.6,60.2,21.7,65.5,3.8,63.4C-14.1,61.3,-28.2,51.7,-42.5,41.1C-56.8,30.5,-71.3,18.9,-73.7,5C-76,-8.9,-66.3,-24.9,-54.8,-39.8C-43.3,-54.8,-30,-68.6,-13.7,-73.7C2.6,-78.7,21,-75,37.7,-66.6C54.5,-58.1,69.8,-45.8,61.1,-58.4Z",
      "M54.7,-60.9C67.3,-50.5,70.8,-25.3,69.5,-2.4C68.2,20.4,62,40.8,48.9,54.3C35.8,67.7,15.8,74.2,-2.9,76C-21.7,77.8,-43.3,74.9,-56.4,61.8C-69.5,48.6,-74.2,25.2,-67.6,7.3C-61.1,-10.5,-43.4,-22.9,-30.4,-35.2C-17.5,-47.5,-9.3,-59.6,5.7,-65.8C20.7,-72.1,41.4,-72.2,54.7,-60.9Z",
      "M63.3,-63.2C74.1,-47.1,67.7,-19.3,63.1,4.3C58.5,27.9,55.7,47.1,42.6,59.7C29.4,72.2,5.9,78.2,-10.2,72.1C-26.2,66,-34.7,47.9,-49.5,31.3C-64.4,14.6,-85.7,-0.6,-84.5,-15.6C-83.4,-30.5,-59.8,-45.2,-40.2,-57.6C-20.7,-70,-5.3,-80,16.2,-83C37.6,-86,75.2,-82.2,63.3,-63.2Z",
    ],
  },
};

export default function MorphingBlob({
  color1 = "#84CEEB",
  color2 = "#8860D0",
  size = 600,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient
          id={`blobGradient-${color1.slice(-3)}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <motion.stop
            offset="0%"
            animate={{ stopColor: color1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.stop
            offset="100%"
            animate={{ stopColor: color2 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </linearGradient>

        <filter
          id={`blobShadow-${color1.slice(-3)}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="10"
            floodColor={color2}
            floodOpacity="0.2"
          />
        </filter>
      </defs>

      <motion.path
        variants={blobVariants}
        animate="animate"
        fill={`url(#blobGradient-${color1.slice(-3)})`}
        filter={`url(#blobShadow-${color1.slice(-3)})`}
        transform="translate(100 100)"
        className="opacity-30 blur-md"
      />
    </svg>
  );
}
