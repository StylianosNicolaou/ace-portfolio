"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  // 1) Decide if we should show the custom cursor (desktop only) and
  //    hard-disable on any touch interaction.
  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined")
      return;

    const decide = () => {
      const canHover = window.matchMedia("(hover: hover)").matches;
      const finePointer = window.matchMedia("(pointer: fine)").matches;
      const hasTouch = (navigator.maxTouchPoints || 0) > 0;
      setIsDesktop(canHover && finePointer && !hasTouch);
    };

    // Initial check + react to changes (orientation, bt mouse, etc.)
    decide();
    const mqHover = window.matchMedia("(hover: hover)");
    const mqFine = window.matchMedia("(pointer: fine)");
    const onChange = () => decide();
    mqHover.addEventListener?.("change", onChange);
    mqFine.addEventListener?.("change", onChange);

    // Hard kill if any touch happens (iOS synthesizes mouse events)
    const hardDisable = () => setIsDesktop(false);
    window.addEventListener("touchstart", hardDisable, { passive: true });
    window.addEventListener("touchmove", hardDisable, { passive: true });

    return () => {
      mqHover.removeEventListener?.("change", onChange);
      mqFine.removeEventListener?.("change", onChange);
      window.removeEventListener("touchstart", hardDisable);
      window.removeEventListener("touchmove", hardDisable);
    };
  }, []);

  // 2) Mouse listeners (always declare the hook; guard the body)
  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, [isDesktop]);

  // Render nothing unless desktop is confirmed
  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none mix-blend-multiply bg-gradient-to-br from-[#c8a2ff] to-[#ff99cc] rounded-full shadow-md"
      style={{
        width: 33,
        height: 33,
        top: pos.y,
        left: pos.x,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />
  );
}
