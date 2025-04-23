"use client";

import { useEffect, useRef } from "react";
import MorphingBlob from "./MorphingBlob";

export default function FloatingSVGBlobs() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothed = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const animate = () => {
      smoothed.current.x += (mouseRef.current.x - smoothed.current.x) * 0.05;
      smoothed.current.y += (mouseRef.current.y - smoothed.current.y) * 0.05;

      const children = containerRef.current?.children;
      if (children) {
        Array.from(children).forEach((child, i) => {
          const offsetX = smoothed.current.x * (20 + i * 8);
          const offsetY = smoothed.current.y * (20 - i * 5);
          child.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute top-[5%] left-[10%] animate-wander-1 animate-fade-random-1 animate-rotate-slow">
        <MorphingBlob color1="#8860D0" color2="#C1C8E4" size={600} />
      </div>

      <div className="absolute top-[60%] right-[5%] animate-wander-2 animate-fade-random-2 animate-rotate-slow">
        <MorphingBlob color1="#84CEEB" color2="#5AB9EA" size={500} />
      </div>

      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-wander-3 animate-fade-random-3 animate-rotate-slow">
        <MorphingBlob color1="#5AB9EA" color2="#C1C8E4" size={650} />
      </div>
    </div>
  );
}
