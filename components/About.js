"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const founders = [
  {
    name: "Stylianos Nicolaou",
    role: "Co-Founder / Developer",
    bio: "Stylianos specializes in full-stack development, performance, and delivering clean, elegant frontend systems.",
    image: "/team/stylianos.jpg",
  },
  {
    name: "Viktorya Voskanyan",
    role: "Co-Founder / Developer",
    bio: "Viktorya brings interfaces to life with her sense of aesthetics, animations, and UX focus that balances function and style.",
    image: "/team/viktorya.jpg",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="min-h-screen">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-heading text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        About Us
      </motion.h2>

      {/* Brand Story */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-body max-w-3xl mx-auto text-center text-lg leading-relaxed mb-16"
      >
        ACE is a web studio founded by two passionate Computer Science students
        focused on building modern, animated websites that help businesses stand
        out. We believe in fast performance, beautiful UI, and strong
        communication with our clients.
      </motion.p>

      {/* Founders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {founders.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition"
          >
            <h3 className="text-heading text-xl font-semibold">
              {person.name}
            </h3>
            <p className="text-primary text-sm font-medium mb-2">
              {person.role}
            </p>
            <p className="text-body text-sm">{person.bio}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
