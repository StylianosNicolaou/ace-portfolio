// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const move = (e) => setPos({ x: e.clientX, y: e.clientY });
//     const hide = () => setVisible(false);
//     const show = () => setVisible(true);

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mouseleave", hide);
//     window.addEventListener("mouseenter", show);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mouseleave", hide);
//       window.removeEventListener("mouseenter", show);
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed z-[9999] pointer-events-none mix-blend-multiply bg-gradient-to-br from-[#c8a2ff] to-[#ff99cc] rounded-full shadow-md"
//       style={{
//         width: 33,
//         height: 33,
//         top: pos.y,
//         left: pos.x,
//         translateX: "-50%",
//         translateY: "-50%",
//         opacity: visible ? 1 : 0,
//         backgroundColor: "rgba(255, 255, 255, 0.05)", // subtle glass look
//       }}
//       transition={{ type: "spring", stiffness: 100, damping: 20 }}
//     />
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  // Track mouse position
  useEffect(() => {
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
  }, []);

  return (
    <>
      {/* Outer ring */}
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
          backgroundColor: "rgba(255, 255, 255, 0.05)", // subtle glass look
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </>
  );
}
